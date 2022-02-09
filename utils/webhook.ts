import axios from "axios"

type Post = {
    name: string,
    message: string,
}

export const pushWebhook = async (data: Post) => {
    return await axios.post(process.env.DISCORD_WEBHOOK_URL as string, {
        content: `**name**: ${data.name}\n**message**: ${data.message}
        `
    })
}