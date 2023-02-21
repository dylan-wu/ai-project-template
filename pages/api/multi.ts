import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const input1 = req.query.input1
  const input2 = req.query.input2

  const response = await fetch("", {
    method: "POST",
    body: `{"args": ["${input1}"], "kwargs": {}, "apiKey": ""}`,
    // body: `{"args": ["Transform the following passage in the style of", "When a spacecraft enters the atmosphere of a planet, it’s hit with aerodynamic forces, which help slow it down. On Mars, where the atmosphere is less than 1% the density of Earth’s atmosphere, extra help is needed to create the drag necessary to slow and safely land a spacecraft.","Pirates"], "kwargs": {}, "apiKey": "e9953b1e-68ac-4716-b403-a2c10b8a9d10"}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  res.status(200).json(await response.json())
}