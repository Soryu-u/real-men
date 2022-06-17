import React from 'react'
import styles from './Sidebar.module.css'
import {Link} from 'react-router-dom'


export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <Link className={styles.navLink} to={'/'}>home</Link>
        <Link className={styles.navLink} to={'about'}>zxc</Link>
      </div>
    </div>
  )
}
