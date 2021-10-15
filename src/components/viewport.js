import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './global.css'
import * as styles from './viewport.module.css'

const Viewport = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.viewport}>
      <div className={styles.sky} />
      <div className={styles.speckStars} />
      <div className={styles.stars} />
      <div className={styles.stars1} />
      <div className={styles.stars2} />
      <div className={styles.shootingStars} />
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Viewport