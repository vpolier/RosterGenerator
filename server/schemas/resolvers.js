const { AuthenticationError } = require('apollo-server-express');
const { User, Role } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('role').populate ('shift');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('timeblocks');
    },
    roles: async () => {
      return Role.find()
    }
  //  timeblock: async (parent, { username }) => {
  //     const params = username ? { username } : {};
  //     return Timeblock.find(params).sort({ createdAt: -1 });
  //   },
  //   timeblock: async (parent, { timeblockId }) => {
  //     return Timeblock.findOne({ _id: timeblockId });
  //   },
  },

  Mutation: {
    addUser: async (parent, { fullname, title, email, password}) => {
      const user = await User.create({ fullname, title, email, password});
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addRole:async (parent, {roletype}) => {
      const role = await Role.create({roletype});
      return  role;
    },

    // addTimeblock: async (parent, { timeblockText, timeblockAuthor }) => {
    //   const timeblock = await Timeblock.create({ timeblockText, timeblockAuthor });

    //   await User.findOneAndUpdate(
    //     { username: timeblockAuthor },
    //     { $addToSet: { timeblocks: timeblock._id } }
    //   );

    //   return timeblock;
    // },
    // addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeTimeblock: async (parent, { timeblockId }) => {
    //   return Timeblock.findOneAndDelete({ _id: timeblockId });
    // },
    // removeComment: async (parent, { timeblockId, commentId }) => {
    //   return Timeblock.findOneAndUpdate(
    //     { _id: timeblockId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
