//ABOUT PAGE
import React from "react";

export default function About() {
    return (
        <section className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center">
            <div className="max-w-xl text-center space-y-4">
                <h1 className="text-4xl font-bold">ABOUT</h1>
                <p className="text-gray-400">Esta es una pagina de prueba</p>
            </div>
            <div className="flex gap-4 justify-center mt-8">
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
                    Nuestro primer articulo
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
                    Next.js
                </span>
                <a href="/blog" className="px-3 py-1 bg-gray-700 rounded-lg text-sm">
                    blog
                </a>
            </div>
        </section>
    );
}