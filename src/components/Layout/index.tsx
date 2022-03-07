import React from 'react'
import styles from './index.scss'
import Nav from './Nav'
import Editor from '../Editor'
import Aside from '../Aside'

const Index = () => {
  return (
    <div className={styles.layout}>
      <Nav />
      <div className={styles.container} >
        <Aside />
        <Editor />
      </div>
    </div>
  )
}

export default Index