export default function CTA() {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-16 text-center sm:px-12">

          <p className="text-sm font-medium text-blue-400">
            GET STARTED
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ready to get things done?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Start organizing your work and take control of your
            productivity with TaskFlow.
          </p>

          <button className="mt-8 rounded-lg bg-blue-500 px-6 py-3 font-medium transition hover:bg-blue-600">
            Get Started
          </button>

        </div>
      </div>
    </section>
  );
}