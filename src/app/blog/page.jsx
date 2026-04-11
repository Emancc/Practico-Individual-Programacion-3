//PAGE BLOG-----
export default function Blog() {
    return(
        <section className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center">
            <div className="max-w-xl text-center space-y-4">
                <h1 className="text-4xl font-bold">BLOG</h1>
                <p className="text-gray-400">En esta seccion apareceran los articulos de nuestro blog</p>
            </div>
            <div className="flex gap-4 justify-center mt-8">
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
                    Nuestro primer articulo
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
                    Next.js
                </span>
                <a href="/about"  className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
                    about
                </a>
            </div>
        </section>

        

    )
};
