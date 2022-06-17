import React from 'react'
import styles from './Home.module.css'
import poster from '../../images/poster.jpg'

import $ from 'jquery'

export const Home = () => {

  $(document).scroll(function() {
    if ($(this).scrollTop() > 190) {
      $('.' + styles.poster).css({'webkit-filter':'blur(5px)', 'filter':'blur(5px)'});
      } else {
        $('.' + styles.poster).css({'webkit-filter':'', 'filter':''});
      }
});

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
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
            <div> zxc </div>
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


