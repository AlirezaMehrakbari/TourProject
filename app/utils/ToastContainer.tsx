'use client'
import React from 'react'
import {ToastContainer} from 'react-toastify'
const ToastContainerApp = () => {
  return (
      <ToastContainer pauseOnFocusLoss={false} autoClose={3500} rtl bodyClassName={() => 'flex items-center font-kalameh700'}/>
  )
}

export default ToastContainerApp
