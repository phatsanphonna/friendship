import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
})

export default mongoose.models.Post || mongoose.model('Post', Post)