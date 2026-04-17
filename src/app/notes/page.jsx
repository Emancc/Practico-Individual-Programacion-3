//NOTES PAGE
import Link from "next/link";
import React from "react";

export default function Notes() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[url(/fondo.jpg)] font-sans">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 sm:items-start backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            NOTAS
          </h1>
          <Link
            href={"/notes/create"}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full p-3 bg-black/70 text-lg"
          >
            Create Nota ✍🏼
          </Link>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <section className="bg-carbon w-2/3 h-64 p-6 my-8 rounded-lg flex flex-col justify-between text-white">
            <div>
              <h1 className="font-semibold text-2xl mb-2  bg-red-500 p-4 rounded-2xl">
                Componentes
              </h1>
              <p className="ml-2">
                - Notas sobre como funcionan mis componentes
              </p>
            </div>
            <Link href={"/notes/1"} className="text-blue-500 hover:underline">
              Ver Nota
            </Link>
          </section>
          <section className="bg-carbon w-2/3 h-64 p-6 my-4 rounded-lg flex flex-col justify-between">
            <div>
              <h1 className="font-semibold text-2xl mb-2 bg-red-500 p-4 rounded-2xl">
                Routes
              </h1>
              <p className="ml-2">
                - Notas sobre como funcionan mis componentes
              </p>
            </div>
            <Link href={"/notes/2"} className="text-blue-500 hover:underline">
              Ver Nota
            </Link>
          </section>

          <section className="bg-carbon w-2/3 h-64 p-6 my-8 rounded-lg flex flex-col justify-between text-white">
            <div>
              <h1 className="font-semibold text-2xl mb-2  bg-red-500 p-4 rounded-2xl">
                Layouts
              </h1>
              <p className="ml-2">
                - Notas sobre como funcionan mis componentes
              </p>
            </div>
            <Link href={"/notes/3"} className="text-blue-500 hover:underline">
              Ver Nota
            </Link>
          </section>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  );
}
