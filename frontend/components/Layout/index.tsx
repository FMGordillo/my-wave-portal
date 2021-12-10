import Head from "next/head";
import { InferProps, string } from "prop-types";
import type { FunctionComponent } from "react";
import { Main } from "./style";

const LayoutPropTypes = {
  title: string.isRequired,
};

const Layout: FunctionComponent<InferProps<typeof LayoutPropTypes>> = ({
  children,
  title,
}) => {
  const metaTitle = title ? `${title} | MessageApp` : "MessageApp";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
