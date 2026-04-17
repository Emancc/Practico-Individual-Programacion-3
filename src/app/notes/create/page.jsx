//CREATE PAGE
import Link from "next/link";
import React from "react";

export default function Create() {
  return (
    <section className="flex p-20 items-center justify-center w-full h-screen bg-[url(/fondo.jpg)]">
      <form
        action=""
        className="max-w-1/2 flex flex-col flex-1 rounded-lg bg-zinc-800/70 backdrop-blur-sm font-sans p-5"
      >
        <Link
          href={"/notes"}
          className="flex h-12 w-40 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          &larr; Notas
        </Link>
        <p className="text-white text-lg font-semibold my-8">
          Crea tu nota aqui para poder compartirla con la comunidad.
        </p>

        <input
          type="text"
          placeholder="Titulo"
          className="p-2 rounded-md my-4 bg-zinc-700/80"
        />
        <textarea
          name=""
          id=""
          placeholder="Comentario"
          className="p-2 rounded-md my-4 bg-zinc-700/80"
          rows={10}
        />
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Guardar
        </button>
      </form>
    </section>
  );
}
