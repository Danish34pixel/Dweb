import React from 'react'
import LiquidEther from './Componenet/LiquidEther'
import Data from './Componenet/Data'


const App = () => {
  return (
  <div className='w-full h-full bg-black'>
<div style={{ width: '100%', height: '100%', position: 'relative', margin: 0, padding: 0 }}>
  <LiquidEther
    colors={[ '#ffa927', '#FF9FFC', '#FF6B2B' ]}
    mouseForce={60}
    cursorSize={250}
    isViscous
    viscous={20}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo
    autoSpeed={0.8}
    autoIntensity={5.0}
    takeoverDuration={0.25}
    autoResumeDelay={1000}
    autoRampDuration={0.4}
  />
</div>
<Data/>
</div>
  )
}

export default App