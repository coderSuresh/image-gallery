import FetchImages from "@/components/FetchImages"

const Nature = () => {

    const photoElem = FetchImages("nature")

    return (
        <main>
            <div className="gallery w-full max-w-5xl mx-auto mt-10">{photoElem}</div>
        </main>
    )
}

export default Nature