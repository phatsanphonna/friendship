import axios from 'axios';

type Post = {
    name: string,
    message: string,
}

export const postContent = async (post: Post) => {
    try {
        alert('ส่งเฟรนด์ชิปแล้วเรียบร้อย!')
        const { data, status } = await axios.post('/api/content', post, { headers: { 'Content-Type': 'Application/JSON' } })
        return { data, status }
    } catch (err) {
        console.log(err)
    }
}