import { useState } from 'react'
import { Link } from 'react-router-dom'
import FooterBanner from '../assets/images/bg-map-2.png'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with: ${email}`)
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className=" bg-[#313041] bg-no-repeat bg-right w-full h-full " style={{ backgroundImage: `url(${FooterBanner})`}} >
       <div className="container">
        <div className="grid grid-cols-4 items-stretch gap-10 py-20">
          <div className="">
            <Link className='flex items-center gap-1 text-2xl font-bold text-white mb-4' to="/">
              <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="22" rx="16" ry="10" fill="#e8442a" opacity="0.15"></ellipse><path d="M20 4 C10 14 6 22 20 28 C34 22 30 14 20 4Z" fill="#e8442a"></path><path d="M20 4 C24 14 34 18 20 28" fill="#c93820" opacity="0.5"></path><circle cx="20" cy="18" r="5" fill="white"></circle></svg>
               D Hikers
            </Link>
            <p className='text-base text-[#a9a8b6]'>Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.</p>
            <hr className='border border-[#FFFFFF33] my-4' />
            <div className="flex flex-col gap-3">
              <a className="flex items-center gap-2 text-base text-[#a9a8b6]" href="tel:78075 28705" ><svg className="w-[16px] h-[16px] fill-[#e85d3e]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"></path></svg>78075 28705</a>
              <a className="flex items-center gap-2 text-base text-[#a9a8b6] "href="mailto:dhauladharhikers72@gmail.com" ><svg className="w-[16px] h-[16px] fill-[#e85d3e]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>dhauladharhikers72@gmail.com</a>
              <div className="flex items-center gap-2 text-base text-[#a9a8b6]"><svg className="w-[16px] h-[16px] fill-[#e85d3e]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>66 Broklyn Street New York, USA</div>
            </div>
          </div>
          <div className="px-8">
            <p className='text-2xl text-white font-bold pb-4'>Company</p>
            <ul className="flex flex-col gap-2">
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/about">About Us</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/destinations">Destination</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/news">News</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/tours">Tour Packages</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="">
            <p className='text-2xl text-white font-bold pb-4'>Explore</p>
            <ul className="flex flex-col gap-2">
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/login">My Account</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/contact">Privacy Policy</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/contact">Affiliate Program</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/">Our Partners</Link></li>
              <li><Link className="text-base text-[#a9a8b6] hover:text-[#e85d3e]" to="/news">Events</Link></li>
            </ul>
          </div>
          <div >
            <p className="text-2xl text-white font-bold pb-4">Newsletter</p>
           <form onSubmit={handleSubscribe}>
             <input 
                className="bg-[#0003] py-5 px-8 rounded-lg text-base text-[#a9a8b6] text-center block w-full focus:outline-none" 
                placeholder="Email address" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
             <button type="submit" className="mt-4 bg-[#e8604c] text-base font-bold cursor-pointer py-5 px-8 rounded-lg block w-full text-white tracking-widest uppercase">Subscribe</button>
           </form>
           <div className=" mt-2 text-base text-[#a0a8c0] flex items-center gap-2">
            <svg className="w-[16px] h-[16px] fill-none stroke-[#a0a8c0]" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>I agree to all terms and policies
          </div>
          </div>
        </div>
       </div>
      <div className="relative after:absolute after:content-[''] after:top-0 after:right-0 after:w-[50%] after:h-full after:bg-white ">
      <div className="bottom-footer-wrapper -right-[30px]  flex gap-3 items-center justify-between container rounded-l-lg bg-white relative z-20" >
        <div className='flex items-center gap-5'>
        <button onClick={scrollToTop} className="w-[122px] h-[98px] bg-[#e85d3e] rounded-l-lg cursor-pointer flex items-center justify-center">
          <svg className='w-[20px] h-[20px] fill-[#fff]' viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>
          <div className="flex gap-3 items-center" >
            <a className=" group w-[46px] h-[46px] rounded-full border border-[#ccc] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c]  duration-500 " href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className='w-[20px] h-[20px] fill-[#555] group-hover:fill-[#fff]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
               <a className=" group w-[46px] h-[46px] rounded-full border border-[#ccc] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c]  duration-500" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg className='w-[20px] h-[20px] fill-[#555] group-hover:fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
                  <a className=" group w-[46px] h-[46px] rounded-full border border-[#ccc] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c]  duration-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                 <svg className='w-[20px] h-[20px] fill-[#555] group-hover:fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.16 0-2.13-1.43-3.62-3.48-3.62-2.37 0-3.76 1.78-3.76 3.62 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.83-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.83 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.65 5.59-.91 0-1.76-.47-2.05-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.85.26 1.75.4 2.69.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg></a>
                <a className=" group w-[46px] h-[46px] rounded-full border border-[#ccc] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c]  duration-500" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
               <svg className='w-[20px] h-[20px] fill-[#555] group-hover:fill-[#fff]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="group-hover:fill-white" x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#555 "></rect><path className="group-hover:fill-[#e8604c]" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#f5f5f5"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#f5f5f5" strokeWidth="2"></line></svg>
              </a>
             </div>
            </div>
             <p className="copyright">© Copyright 2026 by Dhuladhar Hikers</p>
           </div>
        </div>
    </footer>
  )
}