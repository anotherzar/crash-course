import { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setActive(window.scrollY > 150);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
  className={`
    z-50 transition-all duration-300
    ${active 
      ? 'fixed top-4 left-4 right-4 bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md md:left-0 md:right-0 md:top-0 md:rounded-none md:shadow-none' 
      : 'fixed -top-10 opacity-0 md:top-0 md:opacity-100 md:left-0 md:right-0'
    }
    w-[calc(100%-2rem)] md:w-full md:sticky md:bg-[#030712] md:border-b md:border-white/50
    mx-auto
  `}
>
      <nav className="max-w-screen-xl mx-auto ">
        <ul className="menu flex items-center justify-center gap-8 md:gap-10 py-3 text-sm font-mono text-whit">
          <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition">Portfolio</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
