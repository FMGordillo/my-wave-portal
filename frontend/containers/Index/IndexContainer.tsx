import { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { Title } from "./styles";

const IndexContainer: FunctionComponent = () => (
  <Layout title="Home">
    <section>
      <Title>Hello</Title>
      <Input placeholder="Type your message" />
    </section>
    <section>
      <Title>Messages</Title>
      <p>TODO: messages goes here</p>
    </section>
  </Layout>
)

export default IndexContainer