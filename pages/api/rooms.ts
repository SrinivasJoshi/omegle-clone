import dbConnect from '../../lib/dbConnect';
import Room from '../../models/Room';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const rooms = await Room.find({});
				res.status(200).json(rooms);
			} catch (error) {
				res.status(400).json(error);
			}
			break;
		default:
			res.status(400).json('No method for this endpoint');
			break;
	}
}
