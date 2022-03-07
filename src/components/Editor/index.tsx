import React, { useState, useEffect, useRef, useCallback } from 'react'
import { fabric } from 'fabric'
import styles from './index.scss'

const Index = () => {

  const eidtorRef = useRef<HTMLCanvasElement>(null)
  const [drawingSize] = useState({ width: 1200, height: 800 }) 
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
  const [drawing, setDrawing] = useState<fabric.Group | null>(null)

  useEffect(() => {
    initEditor()
    if (canvas) {
      initDrawer(canvas)
    }
  }, [eidtorRef.current])

  /**
   * 初始化 fabric 编辑器
   */
  const initEditor = () => {
    const editor = new fabric.Canvas('eidtor', {
      selection: false,
      centeredScaling: true
    })
    editor.preserveObjectStacking = true
    editor.hoverCursor = 'default'
    const editorWrapper = document.getElementById('editorWrapper')
    if (editorWrapper) {
      const Rect = editorWrapper.getBoundingClientRect()
      editor.setHeight(Rect.height)
      editor.setWidth(Rect.width)
      editor.renderAll()
      setCanvas(editor)
    }
  }

  const initDrawer = (canvas: fabric.Canvas) => {
    const canvasHalfSize = canvas.getCenter()
    const position = {
      left: (canvasHalfSize.left - drawingSize.width / 2) / 2,
      top: (canvasHalfSize.top - drawingSize.height / 2) / 2
    }
    const backGround = new fabric.Rect({
      ...drawingSize,
      originX: 'left',
      originY: 'top',
      fill: '#fff',
    })
    const drawing = new fabric.Group([backGround], {
      ...position,
      originX: 'left',
      originY: 'top',
    }).setControlsVisibility({ 
      bl: false,
      br: false,
      tl: false,
      tr: false,
      ml: false, 
      mr: false, 
      mt: false, 
      mb: false,
      mtr: false, 
    })
    // @ts-ignore
    drawing.on('drop', (e) => handleDragCard(e))
    setDrawing(drawing)
    canvas.add(drawing)
    canvas.renderAll()
  }

  const addBubble = (data: Card) => {

  }

  const handleDragCard = (e: fabric.IEvent<DragEvent>) => {
    console.log(e.e.x);
    console.log(e.e.dataTransfer?.getData('text/plain'));
  }

  return (
    <div id="editorWrapper" className={styles.editor}>
      <canvas ref={eidtorRef} id="eidtor"></canvas>
    </div>
  )
}

export default Index