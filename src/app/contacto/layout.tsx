import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='pt-24 px-4 pb-4' >
      {children}
    </section>
  )
}

export default layout