const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AttackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

AttackSchema.plugin(mongoosePaginate);

mongoose.model('Attack', AttackSchema);