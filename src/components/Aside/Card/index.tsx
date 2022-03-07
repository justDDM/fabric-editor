import React, { cloneElement, ReactElement, useRef } from 'react'
import styles from '../index.scss'

interface IProps {
  data: Card
}

const Index: React.FC<IProps> = ({
  data
}) => {

  const { imgSrc } = data

  const imgRef = useRef<HTMLImageElement>(null)

  const handleDragCard = (e: React.DragEvent) => {
    console.log(e);
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
    imgRef.current && e.dataTransfer.setDragImage(imgRef.current, 20, 20)
  }

  return (
    <div className={styles.card} draggable onDragStart={handleDragCard} >
      <img src={data.imgSrc} alt="" draggable={false} />
      <img ref={imgRef} src={data.imgSrc} alt="" className={styles.dragImg} />
    </div>
  )
}

export default Index