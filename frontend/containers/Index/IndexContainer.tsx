import { FormEvent, FormEventHandler, FunctionComponent, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { Title } from "./styles";

const IndexContainer: FunctionComponent = () => {
  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // @ts-ignore
    setMessages([...messages, e.target?.message?.value])
    setMessageInput("")
  }

  return (
    <Layout title="Home">
      <section>
        <Title>Hello</Title>
        <form onSubmit={handleSubmit}>
          <Input
            name="message"
            value={messageInput}
            placeholder="Type your message"
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </form>
      </section>
      <section>
        <Title>Messages</Title>
        {messages.map((message, i) => (<p key={i}>{message}</p>))}
      </section>
    </Layout>
  )
}

export default IndexContainer