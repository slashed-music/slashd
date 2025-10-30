/* ==========================
FILE: app/page.tsx (Home)
========================== */
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-slashd-cream text-slashd-textDark dark:bg-slashd-black dark:text-slashd-textLight transition-colors duration-500 min-h-screen">
      {/* Hero with Artwork */}
      <section className="relative overflow-hidden">
        {/* Accent background glows */}
        <div
          className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #C47AC0 0%, #F8F5D1 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, #C47AC0 0%, #F4EFC8 35%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Block */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slashd-accent">
              SlashD
            </h1>
            <p className="mt-4 max-w-xl text-slashd-textDark/80 dark:text-slashd-textLight/80">
              Music producer & artist. Ask questions, get feedback, and join
              monthly livestreams.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/questions"
                className="rounded-xl px-5 py-3 bg-slashd-accent text-slashd-textLight font-semibold hover:opacity-90 transition"
              >
                Ask a Question
              </a>
              <a
                href="https://patreon.com/"
                target="_blank"
                className="rounded-xl px-5 py-3 border border-slashd-accent text-slashd-accent bg-transparent hover:bg-slashd-accent hover:text-slashd-textLight transition"
              >
                Support on Patreon →
              </a>
            </div>
          </div>

          {/* Artwork Placeholder */}
          <div className="aspect-square rounded-3xl border border-slashd-accent/30 bg-slashd-cream/40 dark:bg-slashd-black/40 overflow-hidden flex items-center justify-center">
            <Image
              src="/cover.PNG"          // 👈 file name from /public
              alt="SlashD Cover"
              width={600}               // actual pixel width
              height={600}              // actual pixel height
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        <a
          href="/questions"
          className="p-5 rounded-2xl border border-slashd-accent/20 bg-slashd-cream/60 dark:bg-slashd-black/60 hover:bg-slashd-accent/10 transition"
        >
          <h3 className="font-semibold text-slashd-accent">Questions</h3>
          <p className="text-sm mt-1 text-slashd-textDark/70 dark:text-slashd-textLight/70">
            Beginner / Intermediate / Advanced bins + form.
          </p>
        </a>

        <a
          href="/merch"
          className="p-5 rounded-2xl border border-slashd-accent/20 bg-slashd-cream/60 dark:bg-slashd-black/60 hover:bg-slashd-accent/10 transition"
        >
          <h3 className="font-semibold text-slashd-accent">Merch</h3>
          <p className="text-sm mt-1 text-slashd-textDark/70 dark:text-slashd-textLight/70">
            Soon: connect Shopify or another store.
          </p>
        </a>

        <a
          href="/streaming"
          className="p-5 rounded-2xl border border-slashd-accent/20 bg-slashd-cream/60 dark:bg-slashd-black/60 hover:bg-slashd-accent/10 transition"
        >
          <h3 className="font-semibold text-slashd-accent">Streaming Links</h3>
          <p className="text-sm mt-1 text-slashd-textDark/70 dark:text-slashd-textLight/70">
            Spotify • SoundCloud
          </p>
        </a>
      </section>
    </main>
  );
}
