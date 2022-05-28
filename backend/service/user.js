const User = require("../model/User");

const getUserByUserName = async (option) => {
  try {
    const allUsers = await User.find(option);
    return allUsers;
  } catch (error) {
    console.log(`Could not fetch users ${error}`)
  }
}

const getUserByData = async (option) => {
  try {
    const existingUser = await User.find(option);
    return existingUser;
  } catch (error) {
    console.log(`Could not fetch users ${error}`)
  }
}

const getUserByCredential = async (option) => {
  try {
    const singleUser = await User.find(option);
    return singleUser;
  } catch (error) {
    console.log(`Could not fetch user ${error}`)
  }
}

const getProfileData = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(`Could not fetch user ${error}`)
  }
}

const updateUser = async (id, userdata) => {
  try {
    const user = await User.findByIdAndUpdate(id,userdata);
    return user;
  } catch (error) {
    console.log(`Could not save user ${error}`)
  }
}


const saveGoogleUser = async (userdata) => {
  try {
    const user = new User(userdata);
    const newUser = await user.save();  
    return newUser;
  } catch (error) {
    console.log(`Could not save user ${error}`)
  }
}

module.exports = { 
  getUserByUserName, 
  getUserByData, 
  getUserByCredential, 
  getProfileData,
  updateUser,
  saveGoogleUser
}