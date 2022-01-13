import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});

export default model('task', taskSchema)