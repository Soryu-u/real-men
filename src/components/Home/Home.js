import React from 'react'
import styles from './Home.module.css'
import poster from '../../images/poster.jpg'

export const Home = () => {
  return (
    <div className={styles.home}>
        <img className={styles.poster} src={poster} alt='poster' />
        <div className={styles.content}>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
        </div>
    </div>
  )
}
