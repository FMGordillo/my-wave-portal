import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { Button, HelloSection, Title } from "./styles";
import { checkWalletConnection, connectWallet } from "../../lib/wallet";

const IndexContainer: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const handleConnectWallet = async () => {
    setLoading(true);
    const wallet = await connectWallet();
    if (wallet) setWalletAddress(wallet);
    setLoading(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    setMessages([...messages, e.target?.message?.value]);
    setMessageInput("");
  };

  return (
    <Layout title="Home">
      <HelloSection>
        <Title>Hello</Title>
        <Button disabled={loading} onClick={() => handleConnectWallet()}>
          {walletAddress === "" ? "Connect Metamask Account" : "Disonnect?"}
        </Button>
        <form onSubmit={handleSubmit}>
          <Input
            name="message"
            value={messageInput}
            placeholder="Type your message"
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </form>
      </HelloSection>
      <section>
        <Title>Messages</Title>
        {messages.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
      </section>
    </Layout>
  );
};

export default IndexContainer;
