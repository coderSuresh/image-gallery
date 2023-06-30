import FetchImages from "@/components/FetchImages"

type Params = {
    params: {
        slug: string
    }
}

const Search = ({ params }: Params) => {

    const photoElem = FetchImages(params.slug)

    return (
        <main>
            <div className="gallery w-full max-w-5xl mx-auto mt-10">{photoElem}</div>
        </main>
    )
}

export default Search