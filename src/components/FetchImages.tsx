import axios from 'axios'
import Image from 'next/image'

type Photo = {
    id: number,
    src: {
        large2x: string,
        portrait: string,
    },
    alt: string,
    width: number,
    height: number,
}

const renderPhoto = (photo: Photo) => {
    return (
        <div className="card overflow-hidden rounded" key={photo.id}>
            <Image
                key={photo.id}
                className='hover:scale-110 object-contain cursor-pointer transition-transform duration-300 w-full h-full rounded'
                src={photo.src.portrait}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                placeholder='blur'
                blurDataURL='/images/placeholder.jpg'
                priority={true}
            />
        </div>
    )
}

type FilterProps = {
    query?: string,
    per_page?: number,
}

const FetchImages = async (filterProps: FilterProps) => {

    let query = filterProps?.query || ''
    let per_page = filterProps?.per_page || 20

    let url = ''
    if (!query) {
        url = `https://api.pexels.com/v1/curated?per_page=${per_page}`
    } else {
        url = `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`
    }

    const res = await axios.get(url, {
        headers: {
            Authorization: process.env.PEXELS_API!,
        },
    })

    if (!res) {
        return
    }

    const data: { photos: Photo[] } = await res.data

    if (data) {
        const elem = data.photos.map((photo: Photo) => renderPhoto(photo))
        return elem
    }
}

export default FetchImages