"use server"
import FetchImages from '@/components/FetchImages'

const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    const filter = e.currentTarget.innerText.toLowerCase()
    FetchImages(filter)
}

export default handleFilter