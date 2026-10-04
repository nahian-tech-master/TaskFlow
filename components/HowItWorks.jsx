export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your tasks",
      description:
        "Add your tasks and organize everything you need to get done.",
    },
    {
      number: "02",
      title: "Organize your work",
      description:
        "Group tasks into projects and keep your workflow organized.",
    },
    {
      number: "03",
      title: "Get things done",
      description:
        "Track your progress, stay focused, and complete your work.",
    },
  ];

  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Simple workflow. Better productivity.
          </h2>

          <p className="mt-4 text-slate-400">
            Get started with TaskFlow in three simple steps.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-400">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}