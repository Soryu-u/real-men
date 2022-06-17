import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logoText} to='/'>vall-hall-a</Link>
    </div>
  )
}
