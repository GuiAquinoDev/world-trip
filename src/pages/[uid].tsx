import { Fragment } from 'react'
import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../slices'
import { GetStaticProps } from 'next'
import { ContinentDocument } from '.slicemachine/prismicio'

interface PageProps {
  page: ContinentDocument
}

export default function Page({ page }: PageProps) {
  const pageTitle = prismicH.asText(page.data.continentTitle)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const client = createClient({ previewData })

  const page = await client.getByUID('continent', params!.uid as string)

  return {
    props: {
      page,
      revalidate: 60 * 5, // 5 minutes
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('continent')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
