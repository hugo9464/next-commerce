import React from 'react'
import Grid from '@material-ui/core/Grid'
import ImageButton from '../ImageButton/ImageButton'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    url: '/decor.jpeg',
    title: 'SHOP',
    destination: 'shop',
  },
  {
    url: '/lampes.jpeg',
    title: 'ASSEMBLAGE',
    destination: 'assemblage',
  },
  {
    url: '/maro3.jpeg',
    title: 'ART',
    destination: 'art',
  },
]

export default function HomeNavGrid() {
  return (
    <Grid container spacing={5}>
      {links.map((link: any) => (
        <Grid item xs={12} sm={6} alignContent="center">
          <ImageButton link={link} />
        </Grid>
      ))}
    </Grid>
  )
}
