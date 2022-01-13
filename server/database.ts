import { connect } from 'mongoose';

export const startConnection = async () => {
    try {
        await connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.k3x4r.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`);
    } catch(e) {
        console.log(e);
    }
};