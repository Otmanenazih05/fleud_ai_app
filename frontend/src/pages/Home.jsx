

export default function Home() {
    return (
        <div
            className="w-full h-1/2 px-12 gap-5 flex justify-between 
            items-center absolute top-3/5 left-1/2 -translate-1/2 z-100"
        >
            <div className="info w-1/2 overflow-hidden text-wrap flex flex-col gap-5 animate-slide-in-left">
                <h1 className="text-6xl font-bold">
                    Take a deep dive into the content and make sure you understand it well.
                </h1>
                <p className="leading-5">
                    Fleud AI-Powered Summaries is an awesome tool that uses AI to help busy professionals catch up with the latest news and stay up-to-date. It takes the hassle out of reading long articles, watching YouTube videos, or going through transcripts by summarizing them quickly and easily.
                </p>
                <button
                    className="bg-black text-white font-semibold px-5 py-4 rounded-2xl 
                    cursor-pointer w-45 hover:bg-white hover:text-black hover:transition-all 
                    hover:duration-500 hover:ease-in-out"
                >Get started</button>
            </div>
            <div className="image w-1/2">
                <p 
                    className="bg-white border border-black rounded-2xl p-3 w-5/6 text-wrap translate-x-40
                    animate-slide-in-right"
                >
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. A rerum, cum esse unde nesciunt quam eius soluta possimus deserunt consequuntur.
                   Laborum distinctio magni maiores exercitationem nisi cumque quae? Corporis debitis, 
                   esse veritatis voluptatem unde officiis assumenda aut molestiae fuga repellendus impedit quaerat perspiciatis quibusdam aliquid totam dolorum non! Cum, aperiam.
                </p>
            </div>
        </div>
    )
}