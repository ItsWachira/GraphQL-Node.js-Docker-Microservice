const User = require('../models/user');

const resolvers = {
  Query: {
    async getUser(parent, { id }) {
      try {
        const user = await User.findByPk(id);
        return user;
      } catch (error) {
        throw new Error('Error fetching user');
      }
    },
    async getAllUsers() {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        console.log(error)
        throw new Error('Error fetching all users');
        
      }
    },
  },
  Mutation: {
    async createUser(parent, { firstName, lastName }) {
      try {
        const user = await User.create({ firstName, lastName });
        return user;
      } catch (error) {
        throw new Error('Error creating user');
      }
    },
    async updateUser(parent, { id, firstName, lastName }) {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('User not found');
        }
        user.firstName = firstName;
        user.lastName = lastName;
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Error updating user');
      }
    },
    async deleteUser(parent, { id }) {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('User not found');
        }
        await user.destroy();
        return user;
      } catch (error) {
        throw new Error('Error deleting user');
      }
    },
  },
};

module.exports = resolvers;
