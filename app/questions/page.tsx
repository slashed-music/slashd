

/* =====================================
   FILE: app/questions/page.tsx (Client)
   ===================================== */
"use client";
import React, { useState } from "react";

export default function QuestionsPage() {
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);
    setErr(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level, topic, question, email, name }),
      });
      if (!res.ok) throw new Error(await res.text());
      setOk("Thanks! Your question was received. Check your email for a confirmation.");
      setTopic("");
      setQuestion("");
    } catch (e:any) {
      setErr(e?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const LevelCard = ({ value, title, desc }: { value: typeof level; title: string; desc: string }) => (
    <button
      type="button"
      onClick={() => setLevel(value)}
      className={`relative w-full text-left p-4 rounded-2xl border transition transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none ${
        level === value ? "border-white/60 bg-white/10" : "border-white/20 bg-white/5"
      }`}
      aria-pressed={level === value}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-80 mt-1">{desc}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${level === value ? "bg-emerald-400" : "bg-white/30"}`} />
      </div>
    </button>
  );

  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Ask a question</h1>
          <p className="text-white/75">Pick your skill level, then drop your question. Links to audio/snippets welcome.</p>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <LevelCard value="beginner" title="Beginner" desc="DAW basics, core theory." />
            <LevelCard value="intermediate" title="Intermediate" desc="Mixing, sound design, arrangement." />
            <LevelCard value="advanced" title="Advanced" desc="Release-ready, mastering, branding." />
          </div>

          <div className="mt-8 p-5 rounded-2xl border border-white/15 bg-white/5">
            <h3 className="font-semibold">Premium livestream</h3>
            <p className="text-sm text-white/75 mt-1">Join monthly track feedback via <a className="underline" href="https://patreon.com/" target="_blank">Patreon</a>.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold">Your question</h2>
          <div>
            <label className="block text-sm mb-1">Topic (optional)</label>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g., sidechain, lo‑fi drums, vocal chain, chord movement" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
          </div>
          <div>
            <label className="block text-sm mb-1">Question</label>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} required rows={7} placeholder="Ask anything… include links to a snippet if you have one." className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name (optional)</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name or alias" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email (for reply)</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@email.com" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
            </div>
          </div>
          <input type="hidden" name="level" value={level} />
          <button type="submit" disabled={submitting} className="w-full rounded-xl bg-white text-black font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90">
            {submitting ? "Sending…" : "Submit question"}
          </button>
          {ok && <p className="text-emerald-400 text-sm">{ok}</p>}
          {err && <p className="text-rose-400 text-sm">{err}</p>}
          <p className="text-xs text-white/60">By submitting, you agree to our community guidelines.</p>
        </form>
      </section>
    </main>
  );
}
