
export default function Dashboard() {
    const recentTasks = [
        {
            id:1,
            title: "Design landing page",
            project: 'TaskFlow Website',
            status: 'Completed',
            color: "text-green-500"

        },
        {
            id:2,
            title: "Build dashboard",
            project: 'TaskFlow Website',
            status: 'In Progress',
            color: "text-red-500"
        },
        {
            id:3,
            title: "Setup authentication",
            project: 'Backend',
            status: 'Pending',
            color: "text-yellow-500"
        }
    ]

    return (
        <main className="flex min-h-screen bg-slate-900 text-white flex-col md:flex-row">
            
            {/* সাইডবার */}
            <aside className="w-full border-r border-slate-800 bg-slate-800 p-4 md:w-64 md:p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-10">Task <span className="text-[#ffcf5d]">flow</span></h2>
                <nav className="space-y-2">
                    <div className="rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer">Dashboard</div>
                    <div className="rounded-lg hover:bg-slate-700 px-4 py-2 font-semibold cursor-pointer transition">Projects</div>
                    <div className="rounded-lg hover:bg-slate-700 px-4 py-2 font-semibold cursor-pointer transition">Tasks</div>
                    <div className="rounded-lg hover:bg-slate-700 px-4 py-2 font-semibold cursor-pointer transition">Calendar</div>
                    <div className="rounded-lg hover:bg-slate-700 px-4 py-2 font-semibold cursor-pointer transition">Settings</div>
                    <div className="rounded-lg hover:bg-slate-700 px-4 py-2 font-semibold cursor-pointer transition">Profile</div>
                    <div className="rounded-lg hover:bg-slate-700 px-4 py-2 font-semibold text-red-400 cursor-pointer transition">Logout</div>
                </nav>
            </aside>

            {/* মেইন কন্টেন্ট এরিয়া */}
            <section className="flex-1 p-6 md:p-10 flex flex-col">
                
                {/* ওয়েলকাম হেডার */}
                {/* Dashboard Header */}
                <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Greeting */}
                <div>
                    <h1 className="text-3xl font-bold">
                    Good morning Nahian 👋
                    </h1>

                    <p className="mt-1 text-lg text-gray-400">
                    Here&apos;s what&apos;s happening with your tasks today.
                    </p>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500 lg:w-64"
                    />

                    {/* Notification */}
                    <button className="relative rounded-lg border border-slate-700 bg-slate-800 p-2 hover:bg-slate-700">
                    🔔

                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    {/* Profile */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
                    N
                    </div>

                </div>

                </div>

                {/* স্ট্যাটিস্টিকস কার্ডগুলো */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    
                    {/* কার্ড ১ */}
                    <div className="rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-sm">
                        <p className="text-sm text-gray-400">Total tasks</p>
                        <h2 className="text-3xl font-bold mt-2 text-blue-400">24</h2>
                    </div>

                    {/* কার্ড ২ */}
                    <div className="rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-sm">
                        <p className="text-sm text-gray-400">Completed Tasks</p>
                        <h2 className="text-3xl font-bold mt-2 text-green-400">12</h2>
                    </div>

                    {/* কার্ড ৩ */}
                    <div className="rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-sm">
                        <p className="text-sm text-gray-400">Pending Tasks</p>
                        <h2 className="text-3xl font-bold mt-2 text-yellow-400">12</h2>
                    </div>

                </div>

                {/* Recent Tasks (ডার্ক থিমের সাথে মিলিয়ে আপডেট করা হয়েছে) */}
                <div className="mt-8 rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">
                            Recent Tasks
                        </h2>
                        <button className="text-sm font-medium text-blue-400 hover:underline">
                            View All
                        </button>
                    </div>

                        <div className="mt-6 space-y-4">
                        {recentTasks.map((task) => (
                            <div
                            key={task.id}
                            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-4"
                            >
                            <div>
                                <h3 className="font-medium text-white">
                                {task.title}
                                </h3>

                                <p className={`mt-1 text-sm text-gray-400 ${task.color}`}>
                                {task.project}
                                </p>
                            </div>

                            <span className={`
                                rounded-full
                                px-3
                                py-1
                                text-sm
                                text-gray-300
                            
                            ${
                                task.status === "Completed" 
                                ? "bg-green-500"
                                : task.status === "Pending" 
                                ? "bg-yellow-500"
                                : "bg-red-500"
                                }
                            `}>
                                {task.status}
                            </span>
                            </div>
                        ))}
                        </div>
                </div>
                {/* Project Overview */}
                <div className="mt-8 rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">
                    Project Overview
                    </h2>

                    <button className="text-sm font-medium text-blue-400 hover:underline">
                    View All
                    </button>
                </div>

                <div className="mt-6">
                    <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">
                        TaskFlow Website
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                        16 of 24 tasks completed
                        </p>
                    </div>

                    <span className="text-sm font-medium text-blue-400">
                        67%
                    </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-2 w-full rounded-full bg-slate-700">
                    <div className="h-2 w-[67%] rounded-full bg-blue-600"></div>
                    </div>
                </div>
                </div>

            </section>
            
        </main>
    );
}