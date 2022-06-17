import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <div className={styles.main}>
        <Outlet />
    </div>
  )
}
