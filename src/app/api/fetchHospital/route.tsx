import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const hospitals = await prisma.hospital.findMany();
    res.status(200).json(hospitals);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}