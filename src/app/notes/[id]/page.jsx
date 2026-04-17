//NOTES/ID PAGES
import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  //funcion buscar notas (localhost:8000/notes/{id}) => me trae uhnh objeto nota {id:1, title:'jose'}

  const nota = {
    id: 1,
    title: "Nota 1",
  };
  return (
    <div className=" h-full flex flex-col flex-1 items-center justify-cente bg-[url(/fondo.jpg)]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black/60 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-6">
            Código Malintencionado {id}
          </h1>
        </div>

        <p className="text-justify">
          los softwares malintencionados nos traen veredaderos problema a la
          hora de manejar nuestras paginas web. Estas personas nos estan matando
        </p>
        <section className="bg-zinc-800 w-full h-64 p-6 my-8 rounded-lg flex flex-col justify-between text-white">
          <p className="mb-2">Ejemplo de codigo malicioso</p>
          <pre className="bg-violet-950 text-amber-300 rounded-sm">
            <code>
              {`
    [
        {id:1, title:"titulo}
        def malicia():
        return naranjito.exe
        <>delete.os.sys32</>
        ]
        `}
            </code>
          </pre>
        </section>
      </main>
    </div>
  );
}
