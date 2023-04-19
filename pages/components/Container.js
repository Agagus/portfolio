import React from 'react'

const Container = ({children}) => {
  return (
    <div class="p-4 sm:ml-64 grid grid-cols-1 h-screen justify-center">{children}</div>
  )
}

export default Container