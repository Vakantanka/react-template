const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const todoSchema = Schema({
  title: {
    type: String,
    required: true // should be not enough
  },
  content: {
    type: String,
    required: true // should be not enough
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false
  },
  timestamps: {}
});

const dashboardSchema = Schema({
  title: {
    type: String,
    required: true  // should be not enough
  },
  todos: [todoSchema], // default empty list?
  timestamps: {}
});

const userSchema = Schema({
  name: {
    type: String
  },
  username: {
    type: String,
    required: true,  // should be not enough
    unique: true // !!!
  },
  email: {
    type: String,
    required: true,  // should be not enough, maybe validation
    unique: true // !!!
  },
  password: {
    type: String,
    required: true  // should be not enough, maybe validation
  },
  dashboards: [dashboardSchema],
  timestamps: {}
})

// userSchema.pre('save', function(next) {
//   let user = this;
//   if (!user.isModified("password")) return next();
//   bcrypt.genSalt(saltRounds, function (err, salt) {
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function(candidatePassword) {
//   const match = bcrypt.compare(candidatePassword, this.password);
//   return match;
// }

module.exports = mongoose.model("User", userSchema)
