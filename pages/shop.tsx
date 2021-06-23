import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import getAllCollections from '@framework/product/get-all-collections'
import { Layout } from '@components/common'
import { Container } from '@components/ui'
import React from 'react'
import NavGrid from '@components/ui/NavGrid/NavGrid'
import { Grid } from '@material-ui/core'
import ImageButton from '@components/ui/ImageButton/ImageButton'

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
  const { pages } = await getAllPages({ config, preview })

  const { categories } = await getAllCollections({ config, preview })
  return {
    props: {
      pages,
      categories,
    },
  }
}

export default function Shop({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(categories)
  return (
    <Container>
      <Grid container spacing={5}>
        {categories.map((category: any) => (
          <Grid item xs={12} sm={6} alignContent="center">
            <ImageButton
              title={category.name}
              destination={category.path}
              image={category.image.src}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Shop.Layout = Layout
