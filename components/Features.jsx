import { title } from "process";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
  const features =[
    {
      icon: "📝",
      title: "Task Management",
      description: "Create, organize, and manage your tasks with ease."
    },
    {
      icon: "📊",
      title: "Project Tracking",
      description: "Keep track of your projects and monitor your progress."
    },
    {
      icon: "🎯",
      title: "Stay Focused",
      description: "Focus on what matters and get your work done faster."
    }
  ]

  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-400">
            FEATURES
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything you need to stay organized
          </h2>

          <p className="mt-4 text-slate-400">
            TaskFlow gives you the tools you need to manage your
            tasks, projects, and productivity in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {
            features.map ((feature)=> (
              <FeaturesCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))
          }

        </div>
      </div>
    </section>
  );
}