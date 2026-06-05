import BreadcrumbBanner from '../assets/images/breadcrumb.jpg';
import MemberBanner from '../assets/images/bg-line-2.png';
import BookingBanner from '../assets/images/platform-banner.jpg';
import AppImg from '../assets/images/image-app.png';
import { Link } from 'react-router-dom';

const blocks = [
  {
    id:'1',
    badge: '3 Tours',
    heading: 'Morocco',
    button: 'Explore →',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    link: '/morocco-tour-detail',
  },
  {
    id:'2',
    badge: '6 Tours',
    heading: 'United Kingdom',
    button: 'Explore →',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     link: '/morocco-tour-detail',
  },
  {
    id:'3',
    badge: '3 Tours',
    heading: 'Singapore',
    button: 'Explore →',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      link: '/morocco-tour-detail',
  },
  {
    id:'4',
    badge: '3 Tours',
    heading: 'Hungary',
    button: 'Explore →',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    link: '/morocco-tour-detail',
  },
  {
    id:'5',
    badge: '3 Tours',
    heading: 'Italy',
    button: 'Explore →',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     link: '/morocco-tour-detail',
  },
  {
    id:'6',
    badge: '3 Tours',
    heading: 'Japan',
    button: 'Explore →',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      link: '/morocco-tour-detail',
  },
];
export default function Destination() {
  return (
    <>
         <section className="bg-no-repeat bg-cover bg-center w-full h-full" style={{ backgroundImage:`url(${BreadcrumbBanner})`}}>
          <div className="container">
            <div className="py-16" >
              <h2 className="text-4xl text-white font-bold">Destination</h2>
              </div>
              <div className="flex justify-end">
                <ol className="flex gap-4 bg-white rounded-t-lg px-8 py-4 items-center w-fit">
                <li className='text-sm font-bold text-[#313041]'><Link to="/">Home</Link> </li>
                 <li className="text-sm font-bold text-[#e8604c] relative before:absolute before:content-['/'] before:top-0 before:left-[-10px] before:text-[#ccc] ">Destination</li>
              </ol>
            </div>
          </div>
        </section>
         <section className=" py-16">
      <div className="container">
       <div className="text-center pb-7">
        <span className="main-title text-xl font-['Reey']">Destination lists</span>
       <h2 className="text-5xl text-[#313041] font-bold">Go Exotic Places</h2>
    </div>
       <div className="grid grid-cols-3 gap-5">
      { blocks.map((block) =>
          (<div className="relative" key={block.id}>
           <img className="rounded-lg w-full h-100 object-cover"
            src={block.image}
            alt={block.name}/>
           <span class="absolute top-5 right-5 bg-[#e8604c] text-white text-xs rounded-md py-1 px-2">{block.badge}</span>
            <div className="absolute bottom-4 flex justify-between items-center w-full px-5 ">
             <span className="text-2xl font-bold text-white">{block.heading}</span>
              <Link to={block.link} className="text-base text-white underline">{block.button}</Link>
            </div>
           
        </div>
        )
      )}

  </div>
    </div>
   </section>
         <section
            className="py-20 bg-cover bg-center bg-no-repeat bg-fixed w-full h-full relative 
            after:content-[''] after:absolute after:inset-0 after:z-0
            after:bg-[linear-gradient(to_right,#000000e8_0%,rgb(4_8_26/68%)_55%,rgb(0_0_0/85%)_100%)]"
            style={{ backgroundImage: `url(${BookingBanner})` }}>  
          <div className="container">
              <div className="flex items-center justify-between relative z-10" >
                <div className="w-1/2">
                  <button className="play-btn relative w-[92px] h-[92px] bg-[#e8604c] rounded-md cursor-pointer flex items-center justify-center" aria-label="Play video">
                  <svg className='w-[28px] h-[28px] fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </button>
                 <p className='text-3xl font-[Reey] main-title py-5 indent-[10px] mt-3'>Are you ready to travel?</p>
                 <h2 className='text-5xl text-white font-bold '>Tevily is a World Leading Online Tour Booking Platform</h2>
                </div>
                <div className="w-1/2 grid grid-cols-2 items-stretch gap-2 max-w-[460px] mx-auto  ">
              
               <a className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
                after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
                after:bg-[#e8604c] after:-z-10 
                after:scale-y-0 after:origin-top
                hover:after:scale-y-100
                after:transition-transform after:duration-500" href="/">
        
              <div>
               <svg className="w-[64px] h-[64px] fill-none stroke-[#e8442a] group-hover:stroke-white stroke-2 transition-colors duration-300" viewBox="0 0 64 64">
                 <path d="M32 48 C32 48 24 42 22 36 C20 30 22 24 22 24 C20 22 16 20 14 16 C18 16 20 18 22 20 C22 16 20 12 18 8 C22 10 24 14 24 18 C26 14 28 10 32 8 C36 10 38 14 40 18 C40 14 42 10 46 8 C44 12 42 16 42 20 C44 18 46 16 50 16 C48 20 44 22 42 24 C42 24 44 30 42 36 C40 42 32 48 32 48 Z"/>
                 <circle cx="26" cy="22" r="1.5" fill="#e8442a" stroke="none"/>
                   <path d="M28 38 L24 48 M36 38 L40 48"/>
                </svg>
              </div>
        
             <h6 className="text-xl text-white font-bold text-center">
            Wildlife<br/>Tours
             </h6>
            </a>
                 <a className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
                    after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
                    after:bg-[#e8604c] after:-z-10 
                    after:scale-y-0 after:origin-top
                    hover:after:scale-y-100
                    after:transition-transform after:duration-500" href="/">
                    <div className="">
                       <svg className='w-[64px] h-[64px] fill-none stroke-[#e8442a] group-hover:stroke-white stroke-widht-2' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"> <path d="M10 28 Q20 12 32 14 Q44 12 54 28"/>  <path d="M10 28 Q20 20 32 22 Q44 20 54 28"/>    <line x1="20" y1="27" x2="30" y2="42"/> <line x1="44" y1="27" x2="34" y2="42"/>
                      <line x1="32" y1="22" x2="32" y2="42"/>
                      <circle cx="32" cy="44" r="3"/>
                      <path d="M29 47 L27 54 M35 47 L37 54 M27 50 L37 50"/>
                    </svg>
                    </div>
                    <h6 className='text-xl text-white font-bold text-center'>Paragliding<br/>Tours</h6>
                  </a>
                      <a className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
                    after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
                    after:bg-[#e8604c] after:-z-10 
                    after:scale-y-0 after:origin-top
                    hover:after:scale-y-100
                    after:transition-transform after:duration-500" href="/">
                    <div className="">
                       <svg className='w-[64px] h-[64px] fill-none stroke-[#e8442a] group-hover:stroke-white stroke-widht-2' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 52 L28 36 L24 28 L32 18 L40 28 L36 36 L44 52"/>
                      <circle cx="32" cy="14" r="4"/>
                      <path d="M24 34 L18 38 M40 34 L46 38"/>
                      <path d="M28 44 L20 52 M36 44 L44 52"/>
                      <line x1="44" y1="32" x2="52" y2="24"/>
                      <path d="M48 24 L54 22 L52 28 Z"/>
                    </svg>
                    </div>
                    <h6 className='text-xl text-white font-bold text-center'>Adventure<br/>Tours</h6>
                  </a>
                      <a className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
                    after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
                    after:bg-[#e8604c] after:-z-10 
                    after:scale-y-0 after:origin-top
                    hover:after:scale-y-100
                    after:transition-transform after:duration-500" href="/">
                    <div className="">
                     <svg className='w-[64px] h-[64px] fill-none stroke-[#e8442a] group-hover:stroke-white stroke-widht-2' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 38 L32 16 L56 38 Z"/>
                      <line x1="32" y1="16" x2="32" y2="40"/>
                      <line x1="8" y1="38" x2="56" y2="38"/>
                      <path d="M24 38 L32 48 L40 38"/>
                      <circle cx="32" cy="44" r="3"/>
                      <path d="M30 47 L28 54 M34 47 L36 54"/>
                    </svg>
                    </div>
                    <h6 className='text-xl text-white font-bold text-center'>Hang Gliding<br/>Tours</h6>
                  </a>
                </div>
              </div>
            </div>
        </section>

            <section className="pt-20 bg-[#f5ede4] bg-no-repeat bg-cover bg-center w-full h-full " style={{backgroundImage:`url(${MemberBanner})` }}>
          <div className="container">
            <div className="flex justify-center gap-10">
              <div className="w-full max-w-[600px]">
                <div className="p-2 flex flex-col gap-3  justify-center h-full">
                  <h4 className='text-xl main-title indent-2'>Join to us</h4>
                  <h2 className='text-5xl font-bold text-[#313041]'>Not a Member Yet?</h2>
                  <p className='py-3 text-base text-[#757783] max-w-[400px]'>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
                  <div className="flex">
                    <button className="bg-[#FC3C3C] text-white py-3 px-6 rounded-md text-sm tracking-[2px] font-bold uppercase flex items-center gap-1">
                      <svg class="w-[14px] h-[14px] fill-[#fff]" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
                      Sign In</button>
                    <button className="bg-[transparent] py-3 px-6 rounded-md ml-4 border border-[#ccc] text-[#1e2235] font-bold uppercase flex items-center gap-2">
                      <svg class="w-[14px] h-[14px] fill-[#1e2235]" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4-1.3 4-4S14.7 4 12 4 8 5.3 8 8s1.3 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"></path></svg>
                      Register</button>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full max-w-[400px] ">
                <img className='w-full h-full object-cover' src={AppImg} alt="App" />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
