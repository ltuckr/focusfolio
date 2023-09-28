const { User, Project, Purchase, Favorite, Comment } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    projects: async () => {
      return Project.find({});
    },
    purchases: async () => {
      return Purchase.find({});
    },
    favorites: async () => {
      return Favorite.find({});
    },
    comments: async () => {
      return Comment.find({});
    },
    clientGalleryImages: async (_, args) =>{
      try {
        //  retrieve client gallery images for a specific client user
        const { clientUserId } = args; //arguments passed in from the client

        // Find the client gallery for the specified client user
        const clientGallery = await ClientGallery.findOne({ clientUserId }).populate('images');

        if (!clientGallery) {
          throw new Error('Client gallery not found');
        }

        return clientGallery.images;
      } catch (error) {
        throw new Error(`Error fetching client gallery images: ${error.message}`);
      }
    }
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
    createFavorite: async (parent, args) => {
      const favorite = await Favorite.create(args);
      return favorite;
    },
    createComment: async (parent, args) => {
      const comment = await Comment.create(args);
      return comment;
    },
  },
};

module.exports = resolvers;
