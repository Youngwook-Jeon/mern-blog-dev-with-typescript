import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your category"],
    trim: true,
    unique: true,
    maxLength: [50, "Category name has a length less or equal to 50 characters"]
  }
}, {
  timestamps: true
})

export default mongoose.model('category', categorySchema);