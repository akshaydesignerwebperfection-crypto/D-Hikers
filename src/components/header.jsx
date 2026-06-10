import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/tours', label: 'Tours' },
  { path: '/news', label: 'News' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <div className="bg-[#1e1e2e]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="tel:78075 28705" className="text-sm text-gray-300 font-normal flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.21 3.5 2 2 0 0 1 3.18 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
                78075 28705
              </Link>
              <Link to="mailto:dhauladharhikers72@gmail.com" className="hidden text-sm text-gray-300 font-normal md:flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2"/><polyline points="22,6 12,13 2,6"/></svg>
                dhauladharhikers72@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link className="hidden sm:block text-sm text-gray-300 hover:text-white" to="#" title="Twitter">𝕏</Link>
              <Link className="hidden sm:block text-sm text-gray-300 hover:text-white" to="#" title="Facebook">f</Link>
              <Link className="hidden sm:block text-sm text-gray-300 hover:text-white" to="#" title="Instagram">◎</Link>
              <Link className="hidden sm:block text-sm text-gray-300 hover:text-white" to="#" title="Pinterest">𝒫</Link>
              <Link to="/contact" className="text-xs text-white py-3 px-5 bg-[#e8604c] uppercase tracking-wide">Become a Local Guide</Link>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm w-full sticky top-0 z-40">
        <div className="container hidden md:flex items-center justify-between py-6">
          <NavLink to="/" className="flex items-center gap-3 text-xl font-semibold text-slate-900">
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="22" rx="16" ry="10" fill="#e8442a" opacity="0.15"/><path d="M20 4 C10 14 6 22 20 28 C34 22 30 14 20 4Z" fill="#e8442a"/><path d="M20 4 C24 14 34 18 20 28" fill="#c93820" opacity="0.5"/><circle cx="20" cy="18" r="5" fill="white"/></svg>
            D Hikers
          </NavLink>
          <ul className="flex flex-wrap items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? 'text-[#e8604c] underline underline-offset-4' : 'text-black text-base hover:text-slate-900'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button title="Search" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search" className='w-10 h-10 bg-[#f1f1f1] rounded-full cursor-pointer flex items-center justify-center'>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <Link to="/login" className='account-login'>
              <button title="Account" className='w-10 h-10 bg-[#f1f1f1] rounded-full cursor-pointer flex items-center justify-center'>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="container md:hidden flex items-center justify-between py-4 relative">
          <button
            className="toggle-btn cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"/>
            </svg>
          </button>

          <NavLink to="/" className="flex items-center gap-1 text-xl font-semibold text-slate-900">
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="22" rx="16" ry="10" fill="#e8442a" opacity="0.15"/><path d="M20 4 C10 14 6 22 20 28 C34 22 30 14 20 4Z" fill="#e8442a"/><path d="M20 4 C24 14 34 18 20 28" fill="#c93820" opacity="0.5"/><circle cx="20" cy="18" r="5" fill="white"/></svg>
            D Hikers
          </NavLink>

          <div className="flex items-center gap-4">
            <button title="Search" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search" className='w-7 h-7 bg-[#f1f1f1] rounded-full cursor-pointer flex items-center justify-center'>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <Link to="/login" className='account-login'>
              <button title="Account" className='w-7 h-7 bg-[#f1f1f1] rounded-full cursor-pointer flex items-center justify-center'>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
            </Link>
          </div>

          <div className={`fixed inset-0 z-50 flex transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <button
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            />
            <div className={`relative w-[90%] max-w-sm bg-white p-8 shadow-xl overflow-y-auto transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <button
                className='absolute top-6 right-6 cursor-pointer'
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <ul className="flex flex-col items-start gap-8 mt-6">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => isActive ? 'text-[#e8604c] underline underline-offset-4' : 'text-black text-base hover:text-slate-900'}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {searchOpen && (
            <div className="absolute top-full right-0 w-full bg-white shadow-xl p-4 animate-fade-in border-t border-[#e5e7eb]">
              <form onSubmit={handleSearch} className="flex gap-2 max-w-[600px] mx-auto">
                <input
                  type="text"
                  placeholder="Search destinations, tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border border-[#EBE6DE] rounded-md px-4 py-2 text-base text-[#313041] focus:outline-none focus:border-[#e8604c]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-[#e8604c] text-white px-4 py-2 rounded-md hover:bg-[#d1503a]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </button>
              </form>
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
