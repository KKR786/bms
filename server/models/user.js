const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Sequence = require('./sequence')

const Schema = mongoose.Schema


const userSchema = new Schema({
  _id: {
    type: Number
  },  
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  userName: {
    type: String,
    required: [true, 'Name is required!']
  },
  photo: {
    type: String,
  },
  address: {
    place: {
        type: String,
    },
    coordinates: {
        type: [Number],
        index: '2dsphere',
    },
  },
  userType: {
    type: String,
    enum: ["admin", "vendor", "user"],
    description: "Must be either Admin, Vendor or User",
    required: true
  },
  phoneNumber: {
    type: String,
    match: [/^\d{10}$/, 'Please enter a valid phone number'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  }
}, { timestamps: true });


// Signin
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }
  return user
}

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const sequenceDoc = await Sequence.findByIdAndUpdate(
        'userId',
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      ).exec();

      this._id = sequenceDoc.sequence_value;
    } catch (err) {
      return next(err);
    }
  }

  next();
});

// Signup
userSchema.statics.signup = async function(data) {

  // validation
  if (!data.email || !data.userName || !data.userType || !data.password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(data.email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(data.password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email: data.email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(data.password, salt)

  const user = await this.create({ ...data, password: hash })

  return user
}

module.exports = mongoose.model('User', userSchema)