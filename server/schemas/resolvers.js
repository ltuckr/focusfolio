const { User, Image, } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
// const stripe = require("stripe")("INSERT KEY HERE");

const resolvers = {
  Query: {
  
  },

  Mutation: {

    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      try {
        // Use case-insensitive search for the email address
        const user = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
    
        if (!user) {
          throw new AuthenticationError("No user found with this email address");
        }
    
        const correctPw = await user.comparePassword(password);
    
        if (!correctPw) {
          throw new AuthenticationError("Incorrect login");
        }
    
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw error;
      }
    },

    addFavorite: async (_, { imageId }, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new AuthenticationError('You must be logged in to favorite images.');
      }

      try {
        // Find the image by its ID (replace with your logic to identify images)
        const image = await Image.findById(imageId);

        if (!image) {
          throw new Error('Image not found');
        }

        // Check if the image is already favorited by the user
        const isFavorited = user.favorites.some((favId) => favId.equals(imageId));

        if (isFavorited) {
          throw new Error('Image is already favorited');
        }

        // Add the image to the user's favorites
        user.favorites.push(imageId);
        await user.save();

        return image;
      } catch (error) {
        throw new Error(`Failed to add favorite: ${error.message}`);
      }
    },

    removeFavorite: async (_, { imageId }, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new AuthenticationError('You must be logged in to unfavorite images.');
      }

      try {
        // Find the image by its ID (replace with your logic to identify images)
        const image = await Image.findById(imageId);

        if (!image) {
          throw new Error('Image not found');
        }

        // Check if the image is favorited by the user
        const isFavorited = user.favorites.some((favId) => favId.equals(imageId));

        if (!isFavorited) {
          throw new Error("Image is not favorited, can't unfavorite");
        }

        // Remove the image from the user's favorites
        user.favorites = user.favorites.filter((favId) => !favId.equals(imageId));
        await user.save();

        return image;
      } catch (error) {
        throw new Error(`Failed to remove favorite: ${error.message}`);
      }
    },

    // Uncomment and customize the Stripe-related mutations as needed
    
    // createProduct: async (parent, { _id }) => {
    //   return await Project.findById(_id).populate('clientGallery');
    // },
    // createUser: async (parent, args) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'ClientGallery.Project',
    //       populate: 'clientGallery',
    //     });

    //     user.ClientGallery.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }
    //   throw new AuthenticationError('Not logged in.');
    // },
    // createOrder: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'ClientGallery.Project',
    //       populate: 'clientGallery',
    //     });
    //     return user.ClientGallery.id(_id);
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   await new Purchase({ products: args.products });
    //   const line_items = [];

    //   for (const product of args.products) {
    //     line_items.push({
    //       price_data: {
    //         currency: 'usd',
    //         product_data: {
    //           name: product.name,
    //           description: product.description,
    //         },
    //       },
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     mode: 'payment',
    //   });

    //   return { session: session.id };
    // },
  },
};

module.exports = resolvers;
