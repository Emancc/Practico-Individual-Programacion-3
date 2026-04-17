//PAGE BLOG-----
export default function Blog() {
  return (
    <section className="min-h-screen bg-[url(/fondo.jpg)] text-gray-300 flex flex-col items-center justify-center">
      <div className="w-full h-screen backdrop-blur-sm flex flex-col items-center justify-center">
        <div className="bg-white/20 flex flex-col py-8 px-50 items-center rounded-xl">
          <div className="flex flex-col justify-center items-center max-w-lg text-center space-y-4">
            <div className="max-w-40">
              <h1 className="text-4xl font-bold bg-black/40 p-4 rounded-xl">
                BLOG
              </h1>
            </div>
            <h2 className="text-2xl font-semibold">
              Conectate con nosotros para poder ingresar a nuestro blog
            </h2>
            <p className="text-gray-200">
              Podes subir tus Blogs preferidos dentro de nuestra pagina. <br />
              Animate tus ideas y vivencias siempre estan para poder ser
              compartidas.
            </p>
          </div>
          <form
            action=""
            className="w-full h-full p-6 bg-black/40 flex flex-col rounded-4xl gap-3 mt-10"
          >
            <input
              type="text"
              placeholder="Titulo"
              className="bg-black/20 p-3 rounded-2xl"
            />
            <textarea
              name=""
              id=""
              placeholder="introduce tu reseña para nuestro blog aqui"
              rows={9}
              className="bg-black/20 p-3 rounded-2xl"
            ></textarea>
            <button className="p-2 bg-cyan-700 rounded-2xl text-white text-lg font-bold transition-all duration-300 hover:bg-cyan-600 hover:text-black">
              Subir
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
