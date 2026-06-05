import AboutBanner from '../assets/images/breadcrumb.jpg';
import BookingBanner2 from '../assets/images/bg-1.jpg';
import TourBanner from '../assets/images/bg-line.png';
import TesimonialsBanner from '../assets/images/bg-map.png';
import { Link } from 'react-router-dom';


const tesimonials =[
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: '★★★★★',
    review: 'This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit..',
    name: 'John Doe',
    job: 'Founder & CEO'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: '★★★★★',
    review: 'This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit..',
    name: 'David Anderson',
    job: 'Customer'
  },
      {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: '★★★★★',
    review: 'This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit..',
    name: 'Shirley Smith',
    job: 'Founder & CEO'
  },
        {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: '★★★★★',
    review: 'This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit..',
    name: 'John',
    job: 'CEO'
  },
];
const TeamMember =[
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Jessica Brown',
    job:'Consultant',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Yoni Albert',
    job:'Consultant',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Christine Eve',
    job:'Consultant',
  },
   {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'David Hardson',
    job:'Consultant',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Fred Andrew',
    job:'Consultant',
  },
];
export default function About() {
  return (
    <>
     <section className="bg-no-repeat bg-cover bg-center w-full h-full" style={{ backgroundImage:`url(${AboutBanner})`}}>
      <div className="container">
        <div className="py-16" >
          <h2 className="text-4xl text-white font-bold">About</h2>
          </div>
          <div className="flex justify-end">
            <ol className="flex gap-4 bg-white rounded-t-lg px-8 py-4 items-center w-fit">
            <li className='text-sm font-bold text-[#313041]'><Link to="/">Home</Link> </li>
             <li className="text-sm font-bold text-[#e8604c] relative before:absolute before:content-['/'] before:top-0 before:left-[-10px] before:text-[#ccc] ">About</li>
          </ol>
        </div>
      </div>
    </section>
     <section className='py-16'>
      <div className="container">
        <div className="flex justify-between items-stretch gap-10">
          <div className="w-1/2">
            <div className="relative py-[30%] rounded-lg overflow-hidden h-full">
              <img className='absolute top-0 left-0 w-full h-full object-cover' src={AboutBanner} alt="" />
            </div>
          </div>
          <div className="w-1/2">
           <div className=" p-2">
            <h4 className='main-title text-xl indent-2'>Learn about us</h4>
            <h2 className='text-5xl text-[#313041] font-bold'>Dare to Explore with Tevily Agency</h2>
            <p className='text-base text-[#757783] pt-4'>We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page.</p>
             <div className="mt-4">
              <div className="flex justify-between items-center">
                <p>Best Services</p>
                <p>88%</p>
                 </div>
                <div className='mt-3 w-full h-[13px]  bg-[#FAF5EE] rounded-md shadow-md'>
                  <div className="bg-[#e8604c] rounded-md w-full h-full " role="progressbar"  aria-valuenow={88}  aria-valuemin={0}  aria-valuemax={100}  style={{ width: "88%" }}></div>      
                </div>
             </div>
              <div className="mt-4">
              <div className="flex justify-between items-center">
                <p>Tour Agents</p>
                <p>70%</p>
                 </div>
                <div className='mt-3 w-full h-[13px]  bg-[#FAF5EE] rounded-md shadow-md'>
                  <div className="bg-[#e8604c] rounded-md w-full h-full " role="progressbar"  aria-valuenow={70}  aria-valuemin={0}  aria-valuemax={100}  style={{ width: "70%" }}></div>      
                </div>
             </div>
             <div className="flex items-center gap-4 mt-9">
              <a className='bg-[#f7f7f7] py-3 px-8 text-base font-medium text-[#313041] block' href="#">/ Get Right Solutions</a>
              <a className='bg-[#f7f7f7] py-3 px-8 text-sm font-medium text-[#313041] block'  href="#">/  Expert Architecture</a>
             </div>
           </div>
          </div>
        </div>
      </div>
     </section>
       <section className='py-24 bg-[#e8604c] w-full h-full bg-no-repeat ' style={{ backgroundImage:`url(${TourBanner})`}}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h4 className='text-xl text-white indent-1 '>Plan your trip with us</h4>
            <h2 className='text-5xl font-bold text-white'>Ready for an unforgetable tour?</h2>
            </div>
            <div className="">
              <a href="#" className='py-4 px-8 bg-[#313041] rounded-md text-white  text-sm'> Book Tour Now</a>
            </div>
          </div>
        </div>
       </section>
       <section className="py-20 bg-repeat w-full h-full bg-[#FAF5EE]" style={{ backgroundImage: `url(${TesimonialsBanner})` }}>
         <div className="container">
           <div className="pb-7 text-center">
             <h4 className='text-xl indent-3 main-title'>Testimonials & reviews</h4>
             <h2 className='text-5xl font-bold text-[#313041]'>What They’re Saying</h2>
           </div>
            <div className="flex gap-5 items-stretch">
             { tesimonials.map((testimonial) => (
               <div className="" key={testimonial.id}>
                  <div className="h-[230px] w-[230px] rounded-full overflow-hidden mx-auto">
                   <img className='w-full h-full object-cover rounded-full' src={testimonial.image} alt="" />
                   </div>
                   <div className='p-5 bg-white text-center rounded-lg mt-5'>
                   <p className='text-2xl text-[#f5a42b]'>{testimonial.rating}</p>
                   <p className='text-[#757783] text-base py-2'>{testimonial.review}</p>
                   <p className='text-xl text-black font-bold'>{testimonial.name}</p>
                   <p className='text-sm text-[#e8604c]'>{testimonial.job}</p>
                  </div>
               </div>
             ))}
            </div>
         </div>
       </section>
      <section
        className="py-20 bg-cover bg-center bg-no-repeat bg-fixed w-full h-[650px] relative flex justify-center items-center"  style={{ backgroundImage: `url(${BookingBanner2})` }}>  
         <div className="container">
          <div className="flex items-center justify-between relative z-10" >
            <div className="w-full max-w-[700px] mx-auto flex flex-col items-center">
              <button className="play-btn relative w-[92px] h-[92px] bg-[#e8604c] rounded-md cursor-pointer flex items-center justify-center" aria-label="Play video">
              <svg className='w-[28px] h-[28px] fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
             <p className='text-3xl font-[Reey] main-title py-5 indent-[10px] mt-3'>Are you ready to travel?</p>
             <h2 className='text-6xl text-white font-bold text-center '>Tevily is a World Leading Online Tour Booking Platform</h2>
            </div>
          </div>
        </div>
    </section>
         <section className='py-0'>
        <div className="container">
           <div className="grid grid-cols-4 gap-4 p-7 shadow-md rounded-md bg-white top-[-65px] relative">
            <div className="border-r  borer-[#ebe6de] text-center">
              <h4 className='main-title text-5xl font-normal' >400</h4>
              <p className='text-base text-[#757783]'>Total Donations </p>
            </div>
              <div className="border-r borer-[#ebe6de] text-center">
              <h4 className='main-title text-5xl font-normal' >40</h4>
              <p className='text-base text-[#757783]'>Campaigns Closed </p>
            </div>
              <div className="border-r borer-[#ebe6de] text-center">
              <h4 className='main-title text-5xl font-normal' >1400</h4>
              <p className='text-base text-[#757783]'>Happy People </p>
            </div>
              <div className="text-center">
              <h4 className='main-title text-5xl font-normal' >80</h4>
              <p className='text-base text-[#757783]'> Our Volunteers </p>
            </div>
           </div>
        </div>
       </section>
       <section className='pb-16'>
        <div className="container">
          <div className="grid grid-cols-5 gap-8 items-stretch">
            {TeamMember.map((Teamblock) =>(
              <div className="p1 group" key={Teamblock.id} >
                <div className="relative py-[70%] rounded-md overflow-hidden">
                  <img className=' rounded-md  absolute top-0 left-0 w-full h-full object-cover' src={Teamblock.image} alt={Teamblock.title} />
                  <div className="absolute top-[10px] right-[10px] flex flex-col gap-1 opacity-0 group-hover:opacity-100 duration-500 " >
                    <a className="w-[38px] h-[38px] bg-[#0000005c] rounded-full flex items-center justify-center" href="#">
                      <svg className='w-[18px] h-[18px] fill-[#fff]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
                      <a className="w-[38px] h-[38px] bg-[#0000005c] rounded-full flex items-center justify-center"  href="#">
                       <svg className='w-[18px] h-[18px] fill-[#fff]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
                      <a className="w-[38px] h-[38px] bg-[#0000005c] rounded-full flex items-center justify-center"  href="#">
                      <svg className='w-[18px] h-[18px] fill-[#fff]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.16 0-2.13-1.43-3.62-3.48-3.62-2.37 0-3.76 1.78-3.76 3.62 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.83-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.83 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.65 5.59-.91 0-1.76-.47-2.05-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.85.26 1.75.4 2.69.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg></a>
                      <a className="w-[38px] h-[38px] bg-[#0000005c] rounded-full flex items-center justify-center"  href="#">
                    <svg className='w-[18px] h-[18px] fill-[#fff]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#fff"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#1f2c0f"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1f2c0f" stroke-width="2"></line></svg></a>
                  </div>
                </div>
                <div className="p-2 bg-white rounded-md mx-3 mt-[-22px] text-center relative z-10">
                  <p className='text-xl text-[#313041] font-bold'>{Teamblock.name}</p>
                  <p className='text-xs text-[#e8604c] uppercase'>{Teamblock.job}</p>
                </div>
              </div>
            )
           )
            }
          </div>
        </div>
       </section>
    </>
  );
}
