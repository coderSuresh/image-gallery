import React from 'react'
import FetchImages from '@/components/FetchImages'

const photoElem = FetchImages()

const Home = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">Image Gallery</h1>
      <div className="gallery flex gap-5 flex-wrap">{photoElem}</div>
    </main>
  )
}

export default Home