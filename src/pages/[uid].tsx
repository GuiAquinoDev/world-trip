import { Fragment } from 'react'
import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../slices'
import { GetStaticProps } from 'next'
import { PageDocument } from '.slicemachine/prismicio'

interface PageProps {
  page: PageDocument
}

export default function Page({ page }: PageProps) {
  const pageTitle = prismicH.asText(page.data.continentTitle)

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Fragment>
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
