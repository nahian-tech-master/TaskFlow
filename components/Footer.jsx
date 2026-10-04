export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

        <div className="text-lg font-bold">
          Task
          <span className="text-blue-400">flow</span>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 TaskFlow. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>

          <a href="#" className="transition hover:text-white">
            Terms
          </a>

          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}