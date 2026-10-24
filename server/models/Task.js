import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 120 },
  category: { type: String, enum: ['Personal','Career','Learning','Creative'], default: 'Personal' },
  due: { type: String, enum: ['Today','Tomorrow','This week','Later'], default: 'Today' },
  priority: { type: String, enum: ['Low','Medium','High'], default: 'Medium' },
  completed: { type: Boolean, default: false }
}, { timestamps: true });
export default mongoose.model('Task', taskSchema);
