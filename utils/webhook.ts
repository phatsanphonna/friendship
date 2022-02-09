import axios from "axios"

type Post = {
    name: string,
    message: string,
}

export const pushWebhook = async (data: Post) => {
    return await axios.post('https://discord.com/api/webhooks/941018696846037022/2jBuU6Ry8PoEdRIkVHjxrS7K1ur2z5DlH_k5SnNwjy-PtHFD9zaDZgtf4WBj460c7viT', {
        content: `**name**: ${data.name}\n**message**: ${data.message}
        `
    })
}