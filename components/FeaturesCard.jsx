export default function FeaturesCard({icon,title, description }) {
    return(
        <div className="rounded-xl border border-slate-800 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 text-2xl">{icon}</div>
            <h3 className="text-xl font-smibold"> { title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400"> { description}</p>
        </div>

    )
}