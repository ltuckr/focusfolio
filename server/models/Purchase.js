
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  transactionAmount: { type: Number, required: true },
  transactionDate: { type: Date, default: Date.now },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
