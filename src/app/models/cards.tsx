import mongoose from 'mongoose';

const Cards = new mongoose.Schema({
  word: { type: String, required: true },
  taboo: { type: Array, required: true, unique: true },
  category: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cards' }]
});

export default mongoose.models.Author || mongoose.model('cards', Cards);
