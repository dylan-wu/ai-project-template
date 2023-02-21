import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [input1, setInput1] = useState("")
  const [data, setData] = useState({outputs: [""]})
  async function onSubmit() {
    const response = await fetch(`api/multi?input1=${input1}`, {
      method: "GET",
    })
    setData(await response.json())
    console.log(data)
    return data
  }
  return (
    <>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Lorem Ipsum
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sat amet.
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <input className="border-2 border-grey-300 px-4 py-2 rounded-md" value={input1} onChange={e => setInput1(e.target.value)} placeholder="Input 1"/>
        <button className="border-2 border-rose-200 px-4 py-2 rounded-md text-black font-semibold bg-rose-300" onClick={onSubmit}>Generate</button>
      </div>
      <div className="border-2 border-rose-200 px-4 py-2 rounded-md h-full">
        <p className={`${data.outputs ? "text-black" : "text-rose-400 italic"}`}>
          {data.outputs[0] ? data.outputs[0] : "Output will appear here..."}
        </p>
      </div>
    </div>
  </>
  )
}
