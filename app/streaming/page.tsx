/* =================================
   FILE: app/streaming/page.tsx
================================= */
import Image from "next/image";

export default function StreamingPage() {
  return (
    <main className="bg-slashd-cream text-slashd-textDark dark:bg-slashd-black dark:text-slashd-textLight transition-colors duration-500 min-h-screen flex flex-col items-center justify-center px-6 py-14">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-extrabold text-center mb-4">
          <span className="text-slashd-accent">Streaming</span> Links
        </h1>
        <p className="text-center text-slashd-textDark/70 dark:text-slashd-textLight/70">
          Follow <span className="text-slashd-accent font-semibold">SlashD</span> on your favorite platforms.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/61SdHlOPpOUxSIO7cfk9KS?si=EFSBAz9KRJmbgL48x1VRWw"
            target="_blank"
            className="group rounded-2xl border border-slashd-accent/30 bg-slashd-accent/5 dark:bg-slashd-accent/10 p-6 hover:bg-slashd-accent/15 transition flex items-center gap-4 transition-all duration-300 hover:bg-slashd-accent/15 hover:shadow-[0_0_30px_-5px_var(--color-slashd-accent)]"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/icons/spotify.svg"
                alt="Spotify logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slashd-accent">Spotify</h3>
              <p className="text-sm text-slashd-textDark/70 dark:text-slashd-textLight/70">
                Listen to releases and playlists.
              </p>
            </div>
          </a>

          {/* SoundCloud */}
          <a
            href="https://soundcloud.com/slashd-944370629"
            target="_blank"
            className="group rounded-2xl border border-slashd-accent/30 bg-slashd-accent/5 dark:bg-slashd-accent/10 p-6 hover:bg-slashd-accent/15 transition flex items-center gap-4 transition-all duration-300 hover:bg-slashd-accent/15 hover:shadow-[0_0_30px_-5px_var(--color-slashd-accent)]"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/icons/soundcloud.svg"
                alt="SoundCloud logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slashd-accent">SoundCloud</h3>
              <p className="text-sm text-slashd-textDark/70 dark:text-slashd-textLight/70">
                Demos, drafts, and WIPs.
              </p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@slashedmusic"
            target="_blank"
            className="group rounded-2xl border border-slashd-accent/30 bg-slashd-accent/5 dark:bg-slashd-accent/10 p-6 hover:bg-slashd-accent/15 transition flex items-center gap-4 transition-all duration-300 hover:bg-slashd-accent/15 hover:shadow-[0_0_30px_-5px_var(--color-slashd-accent)]"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slashd-accent">YouTube</h3>
              <p className="text-sm text-slashd-textDark/70 dark:text-slashd-textLight/70">
                Livestreams and shorts.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
