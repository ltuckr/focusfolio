const { User, Project, Image, Comment, ClientGallery } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
// const stripe = require("stripe")("INSERT KEY HERE");

const resolvers = {
  Query: {
    // Your existing queries
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      try {
        // Use a case-insensitive search for the email address
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

    createProject: async (parent, args) => {
      const project = await Project.create(args);
      return project;
    },

    createPurchase: async (parent, args) => {
      const purchase = await Purchase.create(args);
      return purchase;
    },

    createFavorite: async (parent, { imageId }, context) => {
      if (context.user) {
        const user = context.user;

        const image = await Image.findById(imageId);

        if (!image) {
          throw new Error('Image not found');
        }

        const existingFavorite = await Favorite.findOne({
          user: user._id,
          image: image._id,
        });

        if (existingFavorite) {
          throw new Error('Image is already favorited');
        }

        const favorite = new Favorite({
          user: user._id,
          image: image._id,
        });

        await favorite.save();

        return favorite;
      } else {
        throw new AuthenticationError('Authentication required to favorite an image');
      }
    },

    createComment: async (parent, args) => {
      const comment = await Comment.create(args);
      return comment;
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
