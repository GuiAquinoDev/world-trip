import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'

import { createClient } from '../../prismicio'
import { components } from '../slices'
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ page }: PageProps) {
  return (
    <>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home', {})

  return {
    props: { page },
  }
}
