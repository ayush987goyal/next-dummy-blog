import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;

  const { email, name, message } = req.body;

  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid input.' });
    return;
  }

  const newMessage = { email, name, message };
  console.log(newMessage);
  res.status(201).json({
    message: 'Registered successfully!',
    newMessage,
  });
};

export default handler;
