/* =================================
FILE: app/streaming/page.tsx
================================= */
export default function StreamingPage() {
return (
<main className="max-w-6xl mx-auto px-6 py-14">
<h1 className="text-4xl font-extrabold">Streaming Links</h1>
<p className="text-white/70 mt-2">Follow SlashD on your favorite platforms.</p>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
<a href="https://open.spotify.com/artist/61SdHlOPpOUxSIO7cfk9KS?si=EFSBAz9KRJmbgL48x1VRWw" target="_blank" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<h3 className="font-semibold">Spotify</h3>
<p className="text-sm text-white/70 mt-1">Listen to releases and playlists.</p>
</a>
<a href="https://soundcloud.com/slashd-944370629" target="_blank" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<h3 className="font-semibold">SoundCloud</h3>
<p className="text-sm text-white/70 mt-1">Demos, drafts, and WIPs.</p>
</a>
<a href="https://www.youtube.com/@slashedmusic" target="_blank" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<h3 className="font-semibold">YouTube</h3>
<p className="text-sm text-white/70 mt-1">Livestreams and shorts.</p>
</a>
</div>
</main>
);
}