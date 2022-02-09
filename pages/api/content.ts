import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../utils/dbConnect'
import Post from '../../utils/models/Post'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'POST':
            await connect()
            await Post.create({ name: req.body.name, message: req.body.message })
            res.status(200).send({ success: true, message: 'ส่งเฟรนด์ชิปแล้วเรียบร้อย!' })
        default:
            res.status(404).send({ success: false, message: 'Not Authorized' })
    }
}
