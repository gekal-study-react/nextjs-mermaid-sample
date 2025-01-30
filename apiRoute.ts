import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 200ステータスと "chart" を返す
  res.status(200).json({ message: 'chart' });
}