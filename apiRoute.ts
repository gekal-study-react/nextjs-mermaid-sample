import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 200ステータスと "hello" を返す
  res.status(200).json({ message: 'hello' });
}