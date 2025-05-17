import LinkButton from "./components/LinkButton";
import { links } from "./data/links";
import "./App.css";

function App() {
  const playSound = () => {
    const audio = new Audio('/gigi-boat-goes-binted-calmer.mp3');
    audio.volume = 0.3;
    audio.play();
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden" style={{ backgroundImage: 'url("/GTVoTkRb0AA8yR6.jpg")' }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-violet-500/20 blur-2xl animate-pulse rounded-2xl"></div>
          <div className="relative z-10">
            <img 
              src="https://cdn.bsky.app/img/avatar/plain/did:plc:i52u5z3xyzrktpxfnz5f2n7s/bafkreicprdi7psqnhymsjiy5cnuhonkz26knxagea4n45isni2scr2b5xy@jpeg" 
              alt="Profile" 
              className="rounded-full mb-4 w-24 h-24 mx-auto border-4 border-violet-400 shadow-lg shadow-violet-500/50 coin-rotate cursor-pointer"
              onMouseEnter={playSound}
            />
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              <span className="text-violet-400">Zeima</span>
            </h1>
            <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
              {links.map((link, idx) => (
                <LinkButton key={idx} label={link.label} url={link.url} />
              ))}
            </div>
        </div>
        <footer className="mt-8 text-center text-white/80">
          <p className="text-sm">
            <a href="https://zeima08.com" className="text-violet-400 hover:text-violet-300 transition-colors">zeima08.com</a>
            <span className="mx-2">|</span>
            <span className="text-white-400">© 2025 Zeima</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;