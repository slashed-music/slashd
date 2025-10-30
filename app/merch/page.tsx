/* ================================
FILE: app/merch/page.tsx
================================ */
export default function MerchPage() {
  return (
    <main className="bg-slashd-cream text-slashd-textDark dark:bg-slashd-black dark:text-slashd-textLight transition-colors duration-500 min-h-screen flex flex-col items-center justify-center px-6 py-14">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="text-slashd-accent">Merch</span>
        </h1>
        <p className="text-slashd-textDark/70 dark:text-slashd-textLight/70 text-lg">
          Store coming soon.
        </p>

        {/* optional accent frame for future merch preview */}
        <div className="mt-10 w-64 h-64 rounded-3xl border-4 border-slashd-accent flex items-center justify-center shadow-[0_0_30px_-10px_#B666CC]">
          <span className="text-slashd-accent font-semibold">Preview</span>
        </div>
      </div>
    </main>
  );
}
