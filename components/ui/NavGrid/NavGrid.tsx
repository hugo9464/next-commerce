import React from 'react'
import Grid from '@material-ui/core/Grid'
import ImageButton from '../ImageButton/ImageButton'
import Image from 'next/image'
import Link from 'next/link'

export default function NavGrid(props: { links: any[] }) {
  return (
    <Grid container spacing={5}>
      {props.links.map((link: any) => (
        <Grid item xs={12} sm={6} alignContent="center">
          <ImageButton
            title={link.title}
            destination={link.destination}
            image={link.url}
          />
        </Grid>
      ))}
    </Grid>
  )
}
