import { NextApiRequest, NextApiResponse } from 'next';
import { getAllContent } from '../../lib/getAllContent';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const type = req.query.type as 'posts' | 'projects';
      const contentData = await getAllContent(type);
      res.status(200).json(contentData);
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
