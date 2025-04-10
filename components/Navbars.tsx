import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbars.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={styles.title}>
        <Link href="/">Home</Link>
        <Link href='/articles'>Articles</Link>
      </nav>
    </>
  )
}
