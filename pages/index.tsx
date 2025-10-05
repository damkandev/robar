import Head from "next/head";
import Image from "next/image";

import img_meme_hormiga from "~/public/meme_hormiga.png";
import img_mestreensinador from "~/public/mestreensinador.webp";

export default function PagesRoot() {
  const href = "https://rodar.cl?ref=rodar";

  return (
    <main className="text-sky-400 bg-white flex-1">
      <Head>
        <title>Escribiste robar.cl — el sitio correcto es rodar.cl</title>
        <meta
          name="description"
          content="Este sitio es para parodiar a fraccional, el sitio correcto es: https://rodar.cl"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto w-full max-w-3xl py-32 px-4">
        <header>
          <h1 className="text-6xl font-semibold">Lo escribiste mal</h1>
          <div className="mt-8 text-2xl">
            <p>Es con D al medio.</p>
            <p>Errar es humano.</p>
            <p>
              <em>Ebbab</em> si escribimos <em>Errar</em> solo con Bs.
            </p>
          </div>
          <div className="mt-8 text-2xl">
            <p>
              <span className="hover:text-gray-500 transition-colors">
                <a className="underline" href={href} rel="follow referrer noopener">
                  Enmendar mis errores e ir a Rodar.cl
                </a>
                {" 👈"}
              </span>
            </p>
          </div>

          <div className="mt-20">
            <a className="underline" href={href}>
              <Image className="" src={img_meme_hormiga} alt="Meme de la hormiga con un palo" />
            </a>
            <p className="text-gray-500 text-sm mt-1">Somos ese</p>
          </div>

          <div className="mt-20 space-y-4">
            <a
              className="block w-full text-sky-400 text-center underline"
              href={href}
              rel="follow referrer noopener"
            >
              Ir a Rodar.cl
            </a>
            <a
              className="block w-full text-gray-500 text-center"
              href={"https://github.com/urvana/fraccionar"}
              rel="follow referrer noopener"
            >
              Ver código en GitHub
            </a>
          </div>
        </header>
      </section>
    </main>
  );
}
