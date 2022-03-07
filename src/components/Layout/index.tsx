import React from 'react'
import styles from './index.scss'
import Editor from '../Editor'
import Aside from '../Aside'
import Nav from '../Nav'

const Index = () => {
  return (
    <div className={styles.layout}>
      <Nav/>
      <div className={styles.container} >
        <Aside />
        <Editor />
      </div>
    </div>
  )
}

export default Index