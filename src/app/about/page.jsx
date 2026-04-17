//ABOUT PAGE
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-[url(/fondo.jpg)] text-gray-300 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center text-center space-y-4 backdrop-blur-sm w-full h-screen">
        <div className="max-w-1/2 flex flex-col gap-4 justify-center items-center bg-white/20 p-30 rounded-xl">
          <h1 className="text-4xl font-bold bg-black/40 p-4 rounded-xl">
            ABOUT
          </h1>
          <h2 className="text-2xl font-semibold">Mostrando tus notas</h2>
          <p className="text-gray-200 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            dolorem sunt officia hic? Ullam porro, vel sit earum rerum similique
            eius nemo rem optio eum dolores quas nulla excepturi nam suscipit
            exercitationem quia natus deserunt error voluptas accusantium alias
            nostrum et eveniet! Cupiditate, doloremque odio adipisci delectus
            odit alias dolores hic facilis ut aspernatur nesciunt, perferendis
            unde debitis! Quod illum amet ut doloribus tenetur beatae fugit quas
            laudantium similique quaerat, a ab! Ad ex, quis id praesentium totam
            quas asperiores rerum vitae, consequuntur, qui saepe. Dicta odio
            voluptatum aliquam! Impedit consectetur nisi architecto quo
            accusantium quis voluptatum aliquid voluptatibus ipsa!
          </p>
        </div>
      </div>
    </section>
  );
}
