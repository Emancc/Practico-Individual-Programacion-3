import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[url(/fondo.jpg)] ">
      <main className="h-screen w-full flex flex-col items-center justify-around">
        <div className="flex flex-col w-4/6 h-3/5 backdrop-blur-md  shadow-mist-800 shadow-2xl p-10 hover:backdrop-saturate-200 hover:size-2/3 transition-all duration-300 rounded-lg justify-between group">
          <div className="bg-white/15">
            <h1 className="bg-clip-text bg-linear-to-r via-black to-zinc-400 text-transparent p-12 text-center font-bold text-6xl drop-shadow-red-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              LAS MEJORES NOTAS
            </h1>
          </div>
          <p className="hidden group-hover:inline text-6xl font-bold text-transparent bg-clip-text bg-linear-65 from-cyan-300 to-blue-600">
            La Naturaleza es
            <span className="p-3 bg-clip-text bg-linear-65 from-green-500 to-lime-300">
              SABIA
            </span>
          </p>
          <div className="flex flex-col gap-12">
            <p className="text-justify max-w-1/3">
              Unite a nuestra comunidad de creadores de notas las mas claras y
              conscisas notas las podes encontrar dentro de nuestra pagina.
              animate a postear tu propia nota!!!
            </p>
            <Image
              src="next.svg"
              width={200}
              height={200}
              alt="Picture of the author"
              className="drop-shadow-[0_1.2px_3px_rgba(255,255,255,1)]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
