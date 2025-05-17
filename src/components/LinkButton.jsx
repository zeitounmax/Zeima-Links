export default function LinkButton({ label, url }) {
    return (
        <a 
            href={url} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md px-6 py-3 bg-violet-600 text-white text-center rounded-xl hover:bg-violet-500 transition-all transform hover:scale-105 font-bold shadow-lg shadow-violet-500/50 border-2 border-violet-400 relative group overflow-hidden"
        >
            <div className="absolute inset-0 bg-violet-400/30 blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse"></div>
            <span className="relative z-10">{label}</span>
        </a>
    )
}