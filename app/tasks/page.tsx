"use client";

import { useState } from "react";

// Task interface define kore dilam type safety-er jonno
interface Task {
    id: number;
    title: string;
    project: string;
    status: string;
    priority: "High" | "Medium" | "Low";
    dueDate: string;
}

export default function Tasks() {
    const [showForm, setShowForm] = useState(false);

    // Form inputs state
    const [title, setTitle] = useState("");
    const [project, setProject] = useState("");
    const [priority, setPriority] = useState<"High" | "Medium" | "Low">("High");
    const [dueDate, setDueDate] = useState("");
    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("Newest");
    const [statusFilter, setStatusFilter] = useState("All");

    // Tasks state initialized with mock data
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Design landing page",
            project: "TaskFlow Website",
            status: "Completed",
            priority: "High",
            dueDate: "Oct 5, 2026",
        },
        {
            id: 2,
            title: "Build dashboard",
            project: "TaskFlow Website",
            status: "In Progress",
            priority: "High",
            dueDate: "Oct 8, 2026",
        },
        {
            id: 3,
            title: "Setup authentication",
            project: "Backend",
            status: "Pending",
            priority: "Medium",
            dueDate: "Oct 12, 2026",
        },
        {
            id: 4,
            title: "Create database schema",
            project: "Backend",
            status: "Pending",
            priority: "Low",
            dueDate: "Oct 15, 2026",
        },
    ]);

    const handleOpenAddForm = () => {
        setEditTaskId(null);
        setTitle("");
        setProject("");
        setPriority("High");
        setDueDate("");
        setShowForm(true);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!title.trim() || !project.trim() || !dueDate) {
            alert("Please fill in all fields.");
            return;
        }

        const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        if (editTaskId !== null) {
            setTasks(tasks.map((task) => 
                task.id === editTaskId 
                    ? { ...task, title, project, priority, dueDate: formattedDate } 
                    : task
            ));
        } else {
            const newTask: Task = {
                id: Date.now(),
                title,
                project,
                status: "Pending",
                priority,
                dueDate: formattedDate,
            };
            setTasks([newTask, ...tasks]);
        }
        
        setTitle("");
        setProject("");
        setPriority("High");
        setDueDate("");
        setEditTaskId(null);
        setShowForm(false);
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleEditTask = (task: Task) => {
        setEditTaskId(task.id);
        setTitle(task.title);
        setProject(task.project);
        setPriority(task.priority);
        setDueDate(new Date(task.dueDate).toISOString().split("T")[0]);
        setShowForm(true);
    };

    // 'newsstatus' parameter e string type add kora hoyeche
    const handleStatusChange = (id: number, newsstatus: string) => {
        setTasks(tasks.map((task) => 
            task.id === id ? { ...task, status: newsstatus } : task
        ));
    };

    const filterTasks = tasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "All" || task.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const sortedTasks = [...filterTasks].sort((a, b) => {
        if (sortBy === "Newest") {
            return b.id - a.id;
        }
        if (sortBy === "Oldest") {
            return a.id - b.id;
        }
        if (sortBy === "Priority") {
            // Explicit type casting fix for TS7053
            const priorityOrder: Record<string, number> = {
                High: 1,
                Medium: 2,
                Low: 3,
            };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        return 0;
    });

    return (
        <main className="min-h-screen bg-slate-900 p-6 text-white md:p-10">

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Tasks
                    </h1>
                    <p className="mt-1 text-gray-400">
                        Manage and track all your tasks.
                    </p>
                </div>

                <button 
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold transition hover:bg-blue-700" 
                    onClick={handleOpenAddForm}
                >
                    + Add Task
                </button>
            </div>

            {/* Controls Bar (Search, Sort, Filter) */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <input 
                    type="text" 
                    placeholder="Search tasks..."
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />

                <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Priority">Priority</option>
                </select>

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Task List Container */}
            <div className="rounded-xl border border-slate-700 bg-slate-800">
                {showForm && (
                    <form onSubmit={handleFormSubmit} className="mb-8 rounded-xl border border-slate-700 bg-slate-800 p-6">
                        <h2 className="mb-6 text-xl font-bold">
                            {editTaskId !== null ? "Edit Task" : "Add New Task"}
                        </h2>

                        <div className="grid gap-5 md:grid-cols-2">

                            {/* Task Title */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-400">
                                    Task Title
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter task title"
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                                />
                            </div>

                            {/* Project */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-400">
                                    Project
                                </label>
                                <input
                                    type="text"
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                    placeholder="Enter project name"
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                                />
                            </div>

                            {/* Priority */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-400">
                                    Priority
                                </label>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value as "High" | "Medium" | "Low")}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                                >
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>

                            {/* Due Date */}
                            <div>
                                <label className="mb-2 block text-sm text-gray-400">
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                                />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm(false);
                                    setEditTaskId(null);
                                }}
                                className="rounded-lg border border-slate-600 px-5 py-2.5 font-medium text-gray-300 transition hover:bg-slate-700"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold transition hover:bg-blue-700"
                            >
                                {editTaskId !== null ? "Update Task" : "Create Task"}
                            </button>
                        </div>
                    </form>
                )}

                {/* Table Header */}
                <div className="hidden grid-cols-6 border-b border-slate-700 px-10 py-4 text-sm font-medium text-gray-400 md:grid">
                    <div className="col-span-2">Task</div>
                    <div>Status</div>
                    <div>Priority</div>
                    <div>Due Date</div>
                    <div className="text-right pr-6">Action</div>
                </div>

                {/* Tasks */}
                <div>
                    {sortedTasks.map((task) => (
                        <div
                            key={task.id}
                            className="grid gap-4 border-b border-slate-700 px-10 py-5 last:border-b-0 md:grid-cols-6 md:items-center"
                        >
                            {/* Task Info */}
                            <div className="md:col-span-2">
                                <h2 className="font-semibold">
                                    {task.title}
                                </h2>
                                <p className="mt-1 text-sm text-gray-400">
                                    {task.project}
                                </p>
                            </div>

                            {/* Status */}
                            <div>
                                <select 
                                    value={task.status}
                                    onChange={(e) => handleStatusChange(task.id, e.target.value)}
                                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 border-0 ${
                                        task.status === "Completed"
                                            ? "bg-green-500/10 text-green-400"
                                            : task.status === "In Progress"
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "bg-yellow-500/10 text-yellow-400"
                                    }`}
                                >
                                    <option value="Pending" className="bg-slate-800 text-yellow-300 py-1 px-3">Pending</option>
                                    <option value="In Progress" className="bg-slate-800 text-blue-300 py-1">In Progress</option>
                                    <option value="Completed" className="bg-slate-800 text-green-300 py-1">Completed</option>
                                </select>
                            </div>

                            {/* Priority */}
                            <div>
                                <span
                                    className={`text-sm font-medium ${
                                        task.priority === "High"
                                            ? "text-red-400"
                                            : task.priority === "Medium"
                                            ? "text-yellow-400"
                                            : "text-green-400"
                                    }`}
                                >
                                    {task.priority}
                                </span>
                            </div>

                            {/* Due Date */}
                            <div className="text-sm text-gray-400">
                                {task.dueDate}
                            </div>

                            {/* Actions */}
                            <div className="flex md:justify-end gap-2">
                                <button 
                                    onClick={() => handleEditTask(task)}
                                    className="rounded bg-yellow-500 px-3 py-1 text-sm font-semibold transition hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDeleteTask(task.id)} 
                                    className="rounded bg-red-500 px-3 py-1 text-sm font-semibold transition hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}