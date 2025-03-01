const mongoose = require('mongoose');

const billboardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    address: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    zipCode: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    }
  },
  dimensions: {
    width: {
      type: Number,
      required: true,
      min: 0
    },
    height: {
      type: Number,
      required: true,
      min: 0
    }
  },
  dailyRate: {
    type: Number,
    required: true,
    min: 0
  },
  minimumBookingDays: {
    type: Number,
    required: true,
    min: 1
  },
  facing: {
    type: String,
    enum: ['north', 'south', 'east', 'west'],
    default: 'north',
    required: true
  },
  visibility: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  surroundingArea: {
    type: String,
    trim: true
  },
  restrictions: {
    type: String,
    trim: true
  },
  image: {
    type: String,  // URL to the image
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
billboardSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

billboardSchema.pre('save', async function (next) {
    if (this.isNew) {
      try {
        const sequenceDoc = await Sequence.findByIdAndUpdate(
          'billboardId',
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

const Billboard = mongoose.model('Billboard', billboardSchema);

module.exports = Billboard;