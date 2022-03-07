import React from 'react'
import styles from './index.scss'
import Card from './Card'

const Index = () => {

  const data = [
    {
      id: 1,
      title: '商品1',
      imgSrc: require('../../assets/Airplane.png'),
      descript: '商品1描述'
    },
    {
      id: 2,
      title: '商品2',
      imgSrc: require('../../assets/Bar.png'),
      descript: '商品2描述'
    },
    {
      id: 1,
      title: '商品3',
      imgSrc: require('../../assets/Bell.png'),
      descript: '商品3描述'
    },
    {
      id: 1,
      title: '商品4',
      imgSrc: require('../../assets/Brush.png'),
      descript: '商品4描述'
    }
  ]

  return (
    <div className={styles.AsideWrap}>
      {data.map(card => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  )
}

export default Index