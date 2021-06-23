import { Layout } from '@components/common'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import React from 'react'
import NavGrid from '@components/ui/NavGrid/NavGrid'
import { Container } from '@components/ui'

const links = [
  {
    url: '/decor.jpeg',
    title: 'SHOP',
    destination: '/shop',
  },
  {
    url: '/lampes.jpeg',
    title: 'ASSEMBLAGE',
    destination: '/assemblage',
  },
  {
    url: '/maro3.jpeg',
    title: 'ART',
    destination: '/art',
  },
]

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Container>
        <NavGrid links={links} />
      </Container>
    </>
  )
}

Home.Layout = Layout
