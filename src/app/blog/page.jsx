//PAGE BLOG-----
export default function Blog() {
  return (
    <section className="min-h-screen bg-capuchino text-gray-300 flex flex-col items-center justify-center">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold">BLOG</h1>
        <h2 className="text-2xl font-semibold">
          Conectate con nosotros para poder ingresar a nuestro blog
        </h2>
        <p className="text-gray-400">
          En esta seccion apareceran los articulos de nuestro blog
        </p>
      </div>
      <div className="w-3/4 h1/2 font-bold mt-3">
        <form
          action=""
          className="w-full h-full p-6 bg-red-900 flex flex-col rounded-4xl gap-3"
        >
          <input
            type="text"
            placeholder="Titulo"
            className="bg-amber-800 p-2 rounded-2xl"
          />
          <textarea
            name=""
            id=""
            placeholder="introduce tu reseña para nuestro blog aqui"
            rows={9}
            className="bg-amber-800 p-2 rounded-2xl"
          ></textarea>
          <button className="p-2 bg-cielo rounded-2xl text-black text-lg">
            Subir
          </button>
        </form>
      </div>
    </section>
  );
}
