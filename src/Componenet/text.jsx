import React, { useState, useEffect } from 'react'

const text = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between p-8'>
      {/* Top Section */}
      <div className='flex justify-between items-start'>
        <h1 className='text-lg font-bold text-blue-400 ml-2'>Zürich, Switzerland</h1>
        <p className='text-xl text-white'>{time}</p>
      </div>

      {/* Bottom Section */}
      <div className='flex justify-between items-end'>
        <img className='h-10' src="https://1085.studio/assets/images/1085-studio-logo-white.png" alt="1085 Studio" />
        <h2 className='text-xl font-bold text-green-400 text-right'>FULL-SERVICE<br/>CREATIVE STUDIO</h2>
      </div>
    </div>
  )
}

export default text