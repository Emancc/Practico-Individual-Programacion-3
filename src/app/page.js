import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-emerald-100">
      <main className="h-screen w-full flex flex-col items-center justify-around">
        <div className="flex flex-col w-4/6 h-1/2 bg-red-400  shadow-mist-800 shadow-2xl p-10 hover:bg-red-500 hover:size-3/5 transition-all duration-300 rounded-lg justify-between">
          <h1 className="bg-white rotate-6 text-black p-12 -translate-y-9 text-center border-zinc-800 border-2 rounded-b-lg font-bold text-3xl">
            LAS MEJORES NOTAS
          </h1>
          <div className="flex flex-col gap-12">
            <p className="text-justify max-w-1/3">
              Unite a nuestra comunidad de creadores de notas las mas claras y
              conscisas notas las podes encontrar dentro de nuestra pagina.
              animate a postear tu propia nota!!!
            </p>
            <Image
              src="next.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
