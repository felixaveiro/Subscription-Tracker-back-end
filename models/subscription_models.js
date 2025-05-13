import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
 price: {
    type: Number,
    required: [true, "Subscription price is required"],
    min: [0, "Price must be a greater than 0"],
  
  },
currency: {
    type: String,
    required: true,
    enum: ["USD", "EUR", "GBP"],
    default: "USD",
  },
  frquency: {
    type: String,
    required: true,
    enum: ["daily","weekly","monthly", "yearly"],
    default: "monthly",
  },
  category: {
    type: String,
    required: true,
    enum: ["basic", "premium", "enterprise", "business", "pro", "team"],
    default: "basic",
  },
  paymentMethod: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "expired", "cancelled"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: true,
    validate: {
        validator: (value) => value <= new Date(),
        message: 'Start date must be in the past'
    },
  },
  endDate: {
    type: Date,
    required: true,
  },
  renewalDate: {
    type: Date,
    required: true,
    validate: {
        validator: function (value) {
            return value > this.startDate;
        },
        message: 'Renew date must be after the start date',
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
},

 
}, { timestamps: true });
// Pre-save hook to calculate endDate based on frequency
subscriptionSchema.pre('save', function (next) {
    if (!this.endDate || this.isModified('frequency') || this.isModified('startDate')) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
    }})
        
const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;