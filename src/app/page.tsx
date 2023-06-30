import React from 'react'
import FetchImages from '@/components/FetchImages'

const photoElem = FetchImages()

const Home = () => {
  return (
    <main>
      <div className="gallery w-full max-w-5xl mx-auto mt-10">{photoElem}</div>
    </main>
  )
}

export default Home