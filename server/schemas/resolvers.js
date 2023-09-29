const {
  User,
  Project,
  Purchase,
  Image,
  Comment,
  ClientGallery,
} = require("../models");


const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate("favorites");
    },
    projects: async () => {
      return Project.find({});
    },
    purchases: async () => {
      return Purchase.find({});
    },
    comments: async () => {
      return Comment.find({});
    },
    clientGalleryImages: async (_, args) => {
      try {
        // Retrieve client gallery images for a specific client user
        const { clientUserId } = args; // Arguments passed in from the client

        // Find the client gallery for the specified client user
        const clientGallery = await ClientGallery.findOne({
          clientUserId,
        }).populate("images");

        if (!clientGallery) {
          throw new Error("Client gallery not found");
        }

        return clientGallery.images;
      } catch (error) {
        throw new Error(
          `Error fetching client gallery images: ${error.message}`
        );
      }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    createProject: async (parent, args) => {
      const project = await Project.create(args);
      return project;
    },
    createPurchase: async (parent, args) => {
      const purchase = await Purchase.create(args);
      return purchase;
    },
    createFavorite: async (parent, { userId, imageUrl }) => {
      console.log(userId, imageUrl);
      const user = await User.findById(userId);
      console.log(user);

      if (!user) throw new Error("User does not exist");

      const image = await Image.create({ imageUrl });
      return User.findByIdAndUpdate(userId, {
      $push: { favorites: image }, 
      }, { new: true})


      //console.log(image);
      //user.favorites.push(image);
      //console.log("yohoho and a bottle of rum");
      //user.save();
      
    },

    createComment: async (parent, args) => {
      const comment = await Comment.create(args);
      return comment;
    },
  },
};

module.exports = resolvers;
