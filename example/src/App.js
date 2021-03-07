import React, { useState } from 'react'
import ReactCanvasPaint from 'react-canvas-paint'
import 'react-canvas-paint/dist/index.css'

const App = () => {
  const [draw, setDraw] = useState(undefined)

  return (
    <div className='container'>
      <div className='left'>
        <ReactCanvasPaint onDraw={setDraw} width={400} height={400} />
      </div>
      <div className='right'>
        <ReactCanvasPaint viewOnly width={400} height={400} data={draw} />
      </div>
    </div>
  )
}

export default App
