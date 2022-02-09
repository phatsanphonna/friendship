import axios from 'axios';

type Post = {
    name: string,
    message: string,
}

export const postContent = async (post: Post) => {
    return await axios.post('/api/content', post)
}