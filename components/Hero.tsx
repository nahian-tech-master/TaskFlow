export default function Hero() {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-medium text-blue-400">
          PRODUCTIVITY MADE SIMPLE
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Manage your work.
          <br />
          <span className="text-blue-400">Get things done.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Organize your tasks, track your progress, and stay focused
          with a simple and powerful task management platform.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-blue-500 px-6 py-3 font-medium hover:bg-blue-600">
            Get Started
          </button>

          <button className="rounded-lg border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}