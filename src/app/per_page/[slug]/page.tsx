import FetchImages from "@/components/FetchImages"

type Params = {
    params: {
        slug: number
    }
}

const PerPage = ({ params }: Params) => {

    const photoElem = FetchImages({ per_page: params.slug })

    return (
        <main>
            <div className="gallery w-full max-w-5xl mx-auto mt-10">{photoElem}</div>
        </main>
    )
}

export default PerPage