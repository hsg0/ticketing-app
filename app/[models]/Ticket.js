import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;

const ticketSchema = new Schema({
    title: String,
    description: String,
    status: String,
    priority: Number,
    category: String,
    progress: Number,
    active: Boolean,
},
{
    timestamps: true,
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;