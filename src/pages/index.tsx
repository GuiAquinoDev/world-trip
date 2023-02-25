import { SliceZone } from '@prismicio/react'
import { GetStaticProps } from 'next'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

export default function Home({ page, navigation, settings }) {
  return <SliceZone slices={page.data.slices} components={components} />
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home', {})

  return {
    props: { page },
  }
}
