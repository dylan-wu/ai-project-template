import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const input1 = req.body.input1
  const input2 = req.query.input2

  const response = await fetch("https://prometheus-api.llm.llc/api/workflow/T6pDJY4ss7q7Sei86JZ9", {
    method: "POST",
    body: `{"args": ["${input1}"], "kwargs": {}, "apiKey": "e9953b1e-68ac-4716-b403-a2c10b8a9d10"}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  res.status(200).json(await response.json())
}