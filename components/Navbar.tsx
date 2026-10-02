export default function Navbar(){
    return (
        <nav className="border-b border-slate-800">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <div className="text-xl font-bold">Task
                    <span className="text-blue-400">flow</span>
                </div>
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm text-slate-300 hover:text-white">Features</a>
                    <a href="#" className="text-sm text-slate-300 hover:text-white">About</a>
                    <a href="#" className="text-sm text-slate-300 hover:text-white">Login</a>
                    <button className="rounded-lg bg-blue-500 px-2  text-sm font-medium hover:bg-blue-600">Get Started</button>
                </div>
            </div>
        </nav>
    )
}