import Head from 'next/head'
import { InferProps, string } from 'prop-types'
import type { FunctionComponent } from 'react'

const LayoutPropTypes = {
  title: string.isRequired,
}

const Layout: FunctionComponent<InferProps<typeof LayoutPropTypes>> = ({ children, title, }) => {
  const metaTitle = title ? `${title} | MessageApp` : 'MessageApp'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
