/* ==========================
FILE: app/page.tsx (Home)
========================== */
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-slashd-cream text-slashd-textDark dark:bg-slashd-black dark:text-slashd-textLight transition-colors duration-500 min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-20 gap-12">
        {/* Text Block */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-slashd-accent">Slash</span>D
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slashd-textDark/80 dark:text-slashd-textLight/80 mx-auto md:mx-0 transition-colors duration-500">
            Music producer & artist. <br />
            Ask questions, get feedback, and join monthly livestreams.
          </p>

          
          {/* Buttons + Social icons stacked */}
          <div className="mt-8 flex flex-col items-center md:items-start gap-4">
            {/* Buttons row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/questions"
                className="rounded-xl px-6 py-3 bg-slashd-accent text-slashd-textLight font-semibold hover:opacity-90 transition"
              >
                Ask a Question
              </a>
              <a
                href="https://patreon.com/"
                target="_blank"
                className="rounded-xl px-6 py-3 border border-slashd-accent text-slashd-accent bg-transparent hover:bg-slashd-accent hover:text-slashd-textLight transition"
              >
                Support on Patreon →
              </a>
            </div>

            {/* Social row (below buttons) */}
            <div className="flex gap-5 justify-center md:justify-start mt-5">
              <a
                href="https://x.com/yourhandle"
                target="_blank"
                aria-label="X"
                className="hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_-5px_var(--color-slashd-accent)]"
              >
                <Image src="/icons/x.svg" alt="X logo" width={28} height={28} />
              </a>

              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                aria-label="Instagram"
                className="hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_-5px_var(--color-slashd-accent)]"
              >
                <Image src= "/icons/instagram.svg" alt="Instagram logo" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>
        {/* Artwork (cross-fade on dark mode) */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-3xl border-4 border-slashd-accent overflow-hidden shadow-[0_0_40px_-10px_#B666CC] transition-all duration-300 hover:bg-slashd-accent/15 hover:shadow-[0_0_30px_-5px_var(--color-slashd-accent)]">

            {/* Light image */}
            <Image
              src="/cover-light.PNG"
              alt="SlashD Cover (light)"
              fill
              priority
              className="object-cover transition-opacity duration-500 opacity-100 dark:opacity-0 "
              sizes="(min-width: 768px) 26rem, 20rem"
            />

            {/* Dark image (stacked on top) */}
            <Image
              src="/cover-dark.PNG"
              alt="SlashD Cover (dark)"
              fill
              className="object-cover absolute inset-0 transition-opacity duration-500 opacity-0 dark:opacity-100"
              sizes="(min-width: 768px) 26rem, 20rem"
            />
          </div>
        </div>

      </section>

      {/* Quick Links Section */}
      <section className="bg-slashd-cream dark:bg-slashd-black py-16 border-t border-slashd-accent/20 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <a
            href="/questions"
            className="p-5 rounded-2xl border border-slashd-accent/30
              bg-slashd-cream dark:bg-slashd-black
              hover:bg-slashd-accent/10
              transition-colors duration-500
              hover:shadow-[0_0_25px_-5px_var(--color-slashd-accent)]
              hover:-translate-y-0.5
              transition-shadow"
          >
            <h3 className="font-semibold text-slashd-accent">Questions</h3>
            <p className="text-sm mt-2 text-slashd-textDark/70 dark:text-slashd-textLight/70 transition-colors duration-500 ">
              Beginner / Intermediate / Advanced bins + form.
            </p>
          </a>

          <a
            href="/merch"
            className="p-5 rounded-2xl border border-slashd-accent/30
              bg-slashd-cream dark:bg-slashd-black
              hover:bg-slashd-accent/10
              transition-colors duration-500
              hover:shadow-[0_0_25px_-5px_var(--color-slashd-accent)]
              hover:-translate-y-0.5
              transition-shadow"
          >
            <h3 className="font-semibold text-slashd-accent">Merch</h3>
            <p className="text-sm mt-2 text-slashd-textDark/70 dark:text-slashd-textLight/70 transition-colors duration-500">
              Soon: connect Shopify or another store.
            </p>
          </a>

          <a
            href="/streaming"
            className="p-5 rounded-2xl border border-slashd-accent/30
              bg-slashd-cream dark:bg-slashd-black
              hover:bg-slashd-accent/10
              transition-colors duration-500
              hover:shadow-[0_0_25px_-5px_var(--color-slashd-accent)]
              hover:-translate-y-0.5
              transition-shadow"
          >
            <h3 className="font-semibold text-slashd-accent">Streaming Links</h3>
            <p className="text-sm mt-2 text-slashd-textDark/70 dark:text-slashd-textLight/70 transition-colors duration-500">
              Spotify • SoundCloud
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
