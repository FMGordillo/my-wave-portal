import { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { Title } from "./styles";

const IndexContainer: FunctionComponent = () => (
  <Layout title="Home">
    <Title>Hello</Title>
    <Input />
  </Layout>
)

export default IndexContainer