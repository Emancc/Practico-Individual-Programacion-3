//NOTES PAGE
import Link from "next/link";
import React from "react";

export default function Notes() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-gray-900 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Notas
          </h1>
          <Link
            href={"/notes/create"}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          >
            Create Notes
          </Link>
        </div>
        <section className="bg-zinc-800 w-full h-64 p-6 my-8 rounded-lg flex flex-col justify-between text-white">
          <div>
            <h1 className="font-semibold text-2xl mb-2">Componentes</h1>
            <p className="ml-2">- Notas sobre como funcionan mis componentes</p>
          </div>
          <Link href={"/notes/1"} className="text-blue-500 hover:underline">
            Ver Nota
          </Link>
        </section>
        <section className="bg-zinc-800 w-full h-64 p-6 my-8 rounded-lg flex flex-col justify-between text-white">
          <div>
            <h1 className="font-semibold text-2xl mb-2">Routes</h1>
            <p className="ml-2">- Notas sobre como funcionan mis componentes</p>
          </div>
          <Link href={"/notes/2"} className="text-blue-500 hover:underline">
            Ver Nota
          </Link>
        </section>

        <section className="bg-zinc-800 w-full h-64 p-6 my-8 rounded-lg flex flex-col justify-between text-white">
          <div>
            <h1 className="font-semibold text-2xl mb-2">Layouts</h1>
            <p className="ml-2">- Notas sobre como funcionan mis componentes</p>
          </div>
          <Link href={"/notes/3"} className="text-blue-500 hover:underline">
            Ver Nota
          </Link>
        </section>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  );
}
