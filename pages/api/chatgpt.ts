import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const system = req.body.system
  const assistant = req.body.assistant
  const user = req.body.user

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "system", content: `${system}`},
      {role: "assistant", content: `${assistant}`},
      {role: "user", content: `${user}`},
    ]
  });
  console.log(response.data.choices[0].message.content)
  res.status(200).json({result: response.data.choices[0].message})
}