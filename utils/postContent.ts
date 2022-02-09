import axios from 'axios';

type Post = {
    name: string,
    message: string,
}

export const postContent = async (post: Post) => {
    try {
        const { data, status } = await axios.post('/api/content', post, { headers: { 'Content-Type': 'Application/JSON' } })
        alert(data.message)
        return { data, status }
    } catch (err) {
        console.log(err)
    }
}