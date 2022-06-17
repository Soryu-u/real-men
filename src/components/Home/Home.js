import React from 'react'
import styles from './Home.module.css'
import poster from '../../images/poster.jpg'
import posts from '../../data.json'

import $ from 'jquery'
import { Post } from '../modules/Post'

export const Home = () => {

  $(document).on('scroll', function() {
    if ($(this).scrollTop() > 190) {
      $('.' + styles.poster).css({'webkit-filter':'blur(3px)', 'filter':'blur(3px)'});
      } else {
        $('.' + styles.poster).css({'webkit-filter':'', 'filter':''});
      }
  });

  // const posts = ['zxc', 'zxc', 'cxz', 'asd', 'qwerty'];

  return (
    <div>
      <div className={styles.home}>
        <img className={styles.poster} src={poster} alt='poster' />
      </div>
        <div className={styles.content}>
            {posts.map( post => (
              <Post key={ post.id } data={ post } />
            ))}
        </div>
    </div>
  )
}


