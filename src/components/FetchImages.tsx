import axios from 'axios'
import Image from 'next/image'

type Photo = {
    id: number,
    src: {
        large2x: string,
        medium: string,
    },
    alt: string,
    width: number,
    height: number,
}

const renderPhoto = (photo: Photo) => {
    return (
        <div className="card min-w-48 min-h-60 w-48 h-60 overflow-hidden rounded" key={photo.id}>
            <Image
                key={photo.id}
                className='hover:scale-110 cursor-pointer transition-transform duration-300 w-full h-full rounded'
                src={photo.src.medium}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                placeholder='blur'
                blurDataURL={photo.src.large2x}
                priority={true}
            />
        </div>
    )
}

const FetchImages = async () => {
    const res = await axios.get("https://api.pexels.com/v1/search?query=forest&per_page=5", {
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