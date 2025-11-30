import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="space-y-4 text-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="text-lg">Yuklanmoqda...</p>
      </div>
    </div>
  )
}

export default Loading
