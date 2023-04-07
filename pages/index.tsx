import { useState } from 'react'

export default function Home() {
  const [system, setSystem] = useState("")
  const [assistant, setAssistant] = useState("")
  const [user, setUser] = useState("")
  const [pressed, setPressed] = useState(false)
  const [data, setData] = useState({result: {role: "", content: ""}})
  // async function onSubmit() {
  //   setPressed(true)
  //   const response = await fetch(`api/multi`, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: `{"input1":"${input1.replaceAll('"', '').replaceAll('\\','')}"}`

  //   })
  //   setData(await response.json())
  //   console.log(data)
  //   setPressed(false)

  //   return data
  // }
  async function onSubmit() {
    setPressed(true)
    const response = await fetch(`api/chatgpt`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: `{"system":"${system}", "assistant":"${assistant}", "user":"${user}"}`

    })
    setData(await response.json())
    console.log(data)
    setPressed(false)

    return data
  }
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI App Protoyper
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Prototype your AI app in minutes!
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <input className="border-2 border-grey-300 px-4 py-2 rounded-md" value={system} onChange={e => setSystem(e.target.value)} placeholder="Describe who the AI is, a storyteller, an accountant, etc."/>
          <input className="border-2 border-grey-300 px-4 py-2 rounded-md" value={assistant} onChange={e => setAssistant(e.target.value)} placeholder="Any useful information that the AI should know about the answer"/>
          <input className="border-2 border-grey-300 px-4 py-2 rounded-md" value={user} onChange={e => setUser(e.target.value)} placeholder="Your question"/>
          <button className="border-2 border-rose-200 px-4 py-2 rounded-md text-black font-semibold bg-rose-300" onClick={onSubmit}>{`${pressed ? "Generating response..." : "Generate"}`}</button>
        </div>
        <div className="border-2 border-rose-200 px-4 py-2 rounded-md h-full mb-12">
          <p className={`prose ${data.result.content ? "text-black" : "text-rose-400 italic"}`}>
            {data.result.content ? data.result.content : "Output will appear here..."}
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center">
            FAQ
          </h2>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">How do I use this?</h3>
            <p>Type in your question in the input box above, and click generate!</p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">Why are you making this?</h3>
            <p>I am trying to improve my skills in building apps and projects, and I love AI, so I decided to dedicate myself to creating AI apps everyday!</p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">Do you make apps for other people?</h3>
            <p>We do!<br/><br/>If you have an app idea you want to contact us about, you can email me at dylanwu@live.com or fill out this google form: <a className="underline text-blue-500" href="https://forms.gle/4EHdEAxoWycSnmK28">https://forms.gle/4EHdEAxoWycSnmK28</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">How can I contact you?</h3>
            <p>You can contact me via my email: dylanwu@live.com</p>
          </div>
        </div>
        <div className="absolute bottom-0">
          <p className="text-gray-500 text-sm">Made with ❤️ by Dylan Wu</p>
          <p className="text-gray-500 text-sm">We are not responsible for any of the generated outputs</p>
        </div>
      </div>
    </>
  )
}
