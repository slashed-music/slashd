/* ==========================
FILE: app/page.tsx (Home)
========================== */
export default function HomePage() {
return (
<main>
{/* Hero with Artwork */}
<section className="relative overflow-hidden">
<div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-40"
style={{ background: "radial-gradient(circle at 30% 30%, #7c3aed 0%, #22d3ee 35%, transparent 60%)" }} />
<div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30"
style={{ background: "radial-gradient(circle at 70% 70%, #fb7185 0%, #f59e0b 35%, transparent 60%)" }} />
<div className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">SlashD</h1>
<p className="text-white/80 mt-4 max-w-xl">
Music producer & artist. Ask questions, get feedback, and join monthly livestreams.
</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="/questions" className="rounded-xl px-5 py-3 bg-white text-black font-semibold hover:opacity-90">Ask a Question</a>
<a href="https://patreon.com/" target="_blank" className="rounded-xl px-5 py-3 border border-white/20 bg-white/10 hover:bg-white/15">Support on Patreon →</a>
</div>
</div>
<div className="aspect-square rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
{/* Replace placeholder with your artwork image in /public and an <img /> */}
<div className="text-white/60">Your Artwork Placeholder (drop /public/cover.jpg and replace)</div>
</div>
</div>
</section>


{/* Quick Links */}
<section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
<a href="/questions" className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<h3 className="font-semibold">Questions</h3>
<p className="text-sm text-white/70 mt-1">Beginner / Intermediate / Advanced bins + form.</p>
</a>
<a href="/merch" className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<h3 className="font-semibold">Merch</h3>
<p className="text-sm text-white/70 mt-1">Soon: connect Shopify or another store.</p>
</a>
<a href="/streaming" className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
<h3 className="font-semibold">Streaming Links</h3>
<p className="text-sm text-white/70 mt-1">Spotify • SoundCloud</p>
</a>
</section>
</main>
);
}