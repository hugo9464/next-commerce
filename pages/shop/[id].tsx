import type { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '@components/common'

import getAllCollections from '@framework/product/get-all-collections'

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const id = params!.id
  const { categories } = await getAllCollections()
  const category = categories.find(
    (category: { name: string }) => category.name.toLowerCase() === id
  )
  return {
    props: {
      id,
      category,
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const { categories } = await getAllCollections()

  return {
    paths: categories.map(
      (category: { path: string }) => `/shop${category.path}`
    ),
    fallback: 'blocking',
  }
}

export default function Collection(props: {
  id: string
  category: { name: string }
}) {
  const router = useRouter()

  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <div>{props.category.name}</div>
  )
}

Collection.Layout = Layout
