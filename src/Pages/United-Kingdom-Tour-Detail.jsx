
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbBanner from '../assets/images/breadcrumb.jpg';
import TourImg1 from '../assets/images/platform-banner.jpg';
import TourImg2 from '../assets/images/hero.jpg';

const TourCards =[
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Greece, Italy, Switzerland and Paris',
    day:'5 Days',
    price:'$500',
    location:'Central Park West NY, USA',
    duration:'5 Days',
    groupsize:'10 People',
    button:'Explore →',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Sri Lanka One Life Adventures',
    day:'5 Days',
    price:'$500',
    location:'Morocco',
    duration:'5 Days',
    groupsize:'10 People',
    button:'Explore →',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Greece, Italy, Switzerland and Paris',
    day:'5 Days',
    price:'$500',
    location:'North Island Adventure Tour',
    duration:'5 Days',
    groupsize:'10 People',
    button:'Explore →',
  },
];

const DealTour =[
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$1099.00',
        title:'Java & Bali One Life Adventures',
        rating: '★★★★★',
        link:'/'
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$1499.00',
        title:'Sri Lanka One Life Adventures',
        rating: '★★★★',
        link:'/'
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$1199.00',
        title:'North Island Adventure Tour',
        rating: '★★★★★',
        link:'/'
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$1299.00',
        title:'Greece, Italy, Switzerland and Paris',
        rating: '★★★★★',
        link:'/'
    },
];
const RecommendedTour =[
    {
     image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     badge:'3 Tours',
     subtitle: 'Wildlife',
     title:'Morocco',
     link:'/morocco-tour-detail'
    },
    {
     image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     badge:'3 Tours',
     subtitle: 'Adventure',
     title:'ThaiLand',
      link:'/'
    },
    {
     image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     badge:'3 Tours',
     subtitle: 'Relax',
     title:'France',
      link:'/'
    },
];

export default function UnitedKingdomTourDetail(){
  const [openIndex, setOpenIndex] = useState(0);
  
  const tourDays = [
    {
      title: 'Day 1',
      content: 'Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.'
    },
    {
      title: 'Day 2',
      content: 'Day 2 content goes here. Add your itinerary details for day 2.'
    },
    {
      title: 'Day 3',
      content: 'Day 3 content goes here. Add your itinerary details for day 3.'
    },
    {
      title: 'Day 4',
      content: 'Day 4 content goes here. Add your itinerary details for day 4.'
    },
  ];
 return(
  <>
    <section className="bg-no-repeat bg-cover bg-center w-full h-full" style={{ backgroundImage:`url(${BreadcrumbBanner})`}}>
    <div className="container">
        <div className="py-16" >
        <h2 className="text-4xl text-white font-bold">United Kingdom</h2>
        </div>
        <div className="flex justify-end">
            <ol className="flex gap-4 bg-[#faf5ee] rounded-t-lg px-8 py-4 items-center w-fit">
            <li className='text-md font-bold text-[#313041]'><Link to="/">Home</Link> </li>
            <li className="text-md font-bold text-[#e8604c] relative before:absolute before:content-['/'] before:top-0 before:left-[-10px] before:text-[#ccc] ">United Kingdom</li>
        </ol>
        </div>
    </div>
    </section>
      <section className='bg-[#faf5ee] py-14 sm:py-16'>
        <div className="container">
            <div className=" block flex-col md:flex-row sm:flex items-center gap-5 justify-between">
                <div className="">
                    <h2 className='text-4xl sm:text-5xl text-[#313041] font-bold'>United Kingdom</h2>
                    <p className='text-base text-[#757783] flex items-center gap-1'> 
                     <span className='w-[15px] h-[15px]'>
                      <svg className="stroke-[#e8604c] w-[15px] h-[15px] " width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                     </span>
                     Bryce Canyon Central Park, USA
                     </p>
                </div>
                <div className=' pt-5 overflow-x-auto sm:pt-0 sm:overflow-hidden  flex gap-5'>
                    <div className=" flex-[0_0_150px] sm:flex-0 flex items-center gap-3">
                        <p className=''>
                         <svg className="stroke-[#e8604c] fill-none " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"width="36" height="36" ><rect x="5" y="2" width="16" height="22" rx="2"/>  <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><circle cx="12" cy="16" r="1.2" fill="#e05a3a" stroke="none"/></svg>
                        </p>
                        <p className='flex flex-col'>
                            <span className='text-base text-[#757783]'>From</span>
                            <span className='text-[18px] text-[#313041] font-medium'>$59.00</span>
                        </p>
                    </div>
                    <div className=" flex-[0_0_150px] sm:flex-0 flex items-center gap-3">
                        <p className=''>
                        <svg className="stroke-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </p>
                        <p className='flex flex-col'>
                            <span className='text-base text-[#757783]'>Duration</span>
                            <span className='text-[18px] text-[#313041] font-medium'>10 days</span>
                        </p>
                    </div>
                    <div className=" flex-[0_0_150px] sm:flex-0 flex items-center gap-3">
                        <p className=''>
                          <svg className="stroke-[#e8604c] fill-[#faf5ee]" width="36" height="36"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/> </svg>
                        </p>
                        <p className='flex flex-col'>
                          <span className='text-base text-[#757783]'>Tour Type</span>
                          <span className='text-[18px] text-[#313041] font-medium'>Cruises</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section className='py-5 border-b border-[#EBE6DE]'>
        <div className="container">
            <div className=" overflow-x-auto md:overflow-hidden flex justify-between items-center ">
                <div className=" flex-[0_0_250px] md:flex-0 flex items-center gap-3">
                    <p className='text-[#f5a42b] text-xl'>★★★★★</p>
                    <p className='text-base text-[#757783]'>4.33 by 3 <span >reviews</span></p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to='' className='flex items-center gap-2 bg-[#f0f3f6] py-3 px-4 rounded-md text-sm uppercase tracking-widest text-[#757783] '>  
                     <svg className="stroke-[#e8604c] w-[14px] h-[14px] fill-[#f0f3f6]" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                    Share</Link>
                    <Link to='' className='flex items-center gap-2 bg-[#f0f3f6] py-3 px-4 rounded-md text-sm uppercase tracking-widest text-[#757783] '> 
                       <svg className="stroke-[#e8604c] w-[14px] h-[14px] fill-[#f0f3f6]" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>                     Reviews</Link>
                    <Link to='' className='flex items-center gap-2 bg-[#f0f3f6] py-3 px-4 rounded-md text-sm uppercase tracking-widest text-[#757783] '>
                        <svg className="stroke-[#e8604c] w-[14px] h-[14px] fill-[#f0f3f6]" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      Wishlist</Link>
                </div>
            </div>
        </div>
    </section>
   <section className='py-8'>
     <div className="container">
     <div className=" flex-col lg:flex-row flex items-stretch gap-4 justify-between ">
      <div className="w-full lg:w-[74%] pr-4 ">
        <div className="">
        <div className="relative rounded-lg overflow-hidden">
       <div className="w-full">
      <img className='w-full h-full rounded-lg' src={TourImg1} alt="" />
    </div>
    <div class="flex gap-2 absolute bottom-0 right-0 bg-[#000000bd] w-full max-w-[90px] p-4 " ><div class="flex relative" ><svg class="w-[23px] h-[23px] stroke-[#fff] stroke-[2] fill-none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"></rect><circle cx="12" cy="12" r="3"></circle></svg><span class="text-[10px] bg-[#e8442a] text-white p-1 rounded-full font-bold w-[15px] h-[15px] flex items-center justify-center absolute top-[-6px] right-[-6px]">5</span></div><div bis_skin_checked="1"><svg class="w-[23px] h-[23px] stroke-[#fff] stroke-[2] fill-none " viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg></div></div>
  </div>
   <div className="pt-8">
     <h2 className='text-4xl text-[#313041] font-bold'>Overview</h2>
    <p className='text-[#757783] text-base pt-2'>Lorem ipsum available isn but the majority have suffered alteratin in some or form injected simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.</p>
     </div>
    <div className="py-8">
      <h2 className='text-3xl text-[#313041] font-bold'>Included/Exclude</h2>
       <div className="flex justify-between place-items-stretch gap-4 pt-8">
         <ul className='flex flex-col gap-2 '>
          <li className='flex items-center gap-2 text-[#757783] text-base'><span>  <svg className='fill-none' width="20" height="20" viewBox="0 0 24 24"> <path d="M20 6L9 17L4 12" stroke="#e8604c" strokeWidth="2.5" /> </svg></span>Pick and Drop Services</li>
          <li className='flex items-center gap-2 text-[#757783] text-base'><span>  <svg className='fill-none' width="20" height="20" viewBox="0 0 24 24"> <path d="M20 6L9 17L4 12" stroke="#e8604c" strokeWidth="2.5" /> </svg></span>1 Meal Per Day</li>
          <li className='flex items-center gap-2 text-[#757783] text-base'><span>  <svg className='fill-none' width="20" height="20" viewBox="0 0 24 24"> <path d="M20 6L9 17L4 12" stroke="#e8604c" strokeWidth="2.5" /> </svg></span>Cruise Dinner & Music Event</li>
          <li className='flex items-center gap-2 text-[#757783] text-base '><span>  <svg  className='fill-none' width="20" height="20" viewBox="0 0 24 24"> <path d="M20 6L9 17L4 12" stroke="#e8604c" strokeWidth="2.5" /> </svg></span>Visit 7 Best Places in the City With Group</li>
        </ul>
        <ul className='flex flex-col gap-2 '>
          <li className='flex items-center gap-2 text-[#757783] text-base'><span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2.5" /></svg> </span>Additional Services</li>
          <li className='flex items-center gap-2 text-[#757783] text-base'><span>  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2.5" /></svg></span>Insurance</li>
          <li className='flex items-center gap-2 text-[#757783] text-base'><span>  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2.5" /></svg></span>Food & Drinks</li>
           <li className='flex items-center gap-2 text-[#757783] text-base '><span>  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2.5" /></svg></span>Tickets</li>
        </ul>
        </div>
    </div>
    <div className="pt-8 border-t border-[#EBE6DE]">
            <h2 className='text-3xl text-[#313041] font-bold'>Tour Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-8">
          <div className=" flex-col sm:flex-row text-center flex items-center gap-3" >
              <p className="">
                <svg className="stroke-[#e8604c] fill-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/> <line x1="1" y1="9" x2="23" y2="9" stroke="#fff" stroke-width="2"/> <rect x="3" y="12" width="4" height="2" rx="0.5" fill="#fff"/>  <rect x="8" y="12" width="3" height="2" rx="0.5" fill="#fff"/></svg>
              </p>
              <p className=""><span class="text-base text-[#757783]">Accepts Credit Cards</span>
              </p>
            </div>
            <div className=" flex-col sm:flex-row text-center flex items-center gap-3">
              <p className="">
               <svg className="fill-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="1" width="18" height="22" rx="2"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="DM Sans, sans-serif">P</text></svg>
              </p>
                <p className=""><span className="text-base text-[#757783]">Car Parking</span>
            </p>
             </div>
             <div className=" flex-col sm:flex-row text-center  flex items-center gap-3">
              <p className="">
                <svg className="fill-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L9 2 3 8v2l9 12 9-12V8L15 2h-3z"/> <circle cx="9.5" cy="9.5" r="1.5" fill="#fff"/> <line x1="8" y1="14" x2="14" y2="8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><circle cx="13.5" cy="13.5" r="1.5" fill="#fff"/></svg>
                </p>
                 <p className="">
                <span className="text-base text-[#757783]">Free Coupons</span>
             </p>
                </div>
            <div className=" flex-col sm:flex-row text-center  flex items-center gap-3">
              <p className="">
                <svg className="fill-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="2.5" rx="1"/><rect x="4" y="9.5" width="2" height="6" rx="1"/><rect x="18" y="9.5" width="2" height="6" rx="1"/> <rect x="1" y="13" width="7" height="2" rx="1"/>
                <rect x="2" y="15" width="2" height="4" rx="1"/><rect x="5" y="15" width="2" height="4" rx="1"/><rect x="1" y="12" width="2" height="4" rx="1"/>
                <rect x="16" y="13" width="7" height="2" rx="1"/><rect x="17" y="15" width="2" height="4" rx="1"/><rect x="20" y="15" width="2" height="4" rx="1"/>
                <rect x="21" y="12" width="2" height="4" rx="1"/> </svg>
                 </p>
                  <p className="">
                <span class="text-base text-[#757783]">Outdoor Seating</span>
             </p>
                </div>
                <div className="flex flex-col sm:flex-row text-center items-center gap-3">
                  <p className="">
                    <svg className="fill-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="5" r="3"/><path d="M7 10 Q7 8 12 8 Q17 8 17 10 L18 20 H6 Z"/><rect x="8" y="2" width="8" height="1.2" rx="0.6"/><circle cx="17" cy="14" r="3.5" fill="#c0392b"/><text x="17" y="15.2" text-anchor="middle" font-size="5" font-weight="700" fill="#fff" font-family="DM Sans, sans-serif">$</text> </svg>
                  </p>
                   <p className="">
                <span className="text-base text-[#757783]">Smoking Allowed</span>
             </p>
             </div>
                <div className="flex flex-col sm:flex-row text-center items-center gap-3">
                  <p className="">
                <svg className="fill-[#e8604c]" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.5 C5.5 4.5 18.5 4.5 22.5 8.5" stroke="#e05a3a" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                <path d="M4.5 11.5 C7 9 17 9 19.5 11.5" stroke="#e05a3a" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M7.5 14.5 C9 13 15 13 16.5 14.5" stroke="#e05a3a" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                <circle cx="12" cy="18" r="1.8"/>
            </svg>  
            </p>
             <p className="">
              <span className="text-base text-[#757783]">Wireless Internet</span>
            </p>
          </div>
         </div>   
            </div>
            <div className="pt-8">
             <h2 className='text-3xl text-[#313041] font-bold'>Tour Plan</h2>
             <div className="pt-8">
             <div className="flex flex-col gap-4">
                {tourDays.map((day, idx) => (
                <div className='focus-visible:outline-none ' key={day.title}>
              <button
             className={`w-full flex justify-between items-center text-left px-6 py-5 rounded-lg font-bold text-xl focus-visible:outline-none transition-all ${openIndex === idx ? 'bg-white border border-[#EBE6DE]' : 'bg-[#faf5ee]'}`}
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
           aria-expanded={openIndex === idx}
          aria-controls={`accordion-panel-${idx}`}>
        <span className="text-[#313041]">{day.title}</span>
      <svg className={`w-5 h-5 transition-transform duration-200 ${openIndex === idx ? 'rotate-180 text-[#e8604c]' : 'text-[#757783]'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
    </button>
      {openIndex === idx && (
      <div id={`accordion-panel-${idx}`}
      className="px-6 pb-6 pt-0 border border-t-0 border-[#EBE6DE] rounded-b-lg bg-white" >
     <p className='text-base text-[#757783]'>{day.content}</p>
      </div>
       )}
       </div>
        ))}
        </div>
          </div>
        </div>
        <div className="pt-16">
        <h2 className='text-3xl text-[#313041] font-bold'>Location</h2>
          <div className="pt-8">
            <iframe className='rounded-md'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.8481373284308!2d-0.11951919999999999!3d51.5031864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e1!3m2!1sen!2sin!4v1775820489744!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="pt-10 sm:pt-14">
            <h2 className='text-3xl text-[#313041] font-bold'>Related Tours</h2>
        <div className=" overflow-x-auto lg:overflow-hidden flex gap-4 items-stretch pt-8">
        {TourCards.map((tour) => (
          <div className="flex-[0_0_300px] lg:flex-0 w-1/2 shadow-lg rounded-[12px] overflow-hidden" key={tour.id}>
              <div className="">
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className="pb-2  relative z-10 after:absolute after:content after:top-[-18px] after:left-0 after:w-full after:h-[20px] after:rounded-t-[20px] after:bg-white after:z-[-1]  " >
                <div className='px-4'>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                   <div className="flex ">
                    <span className="text-[#f5a623]">★</span>
                    <span className="text-[#f5a623]">★</span>
                    <span className="text-[#f5a623]">★</span>
                    <span className="text-[#f5a623]">★</span>
                    <span className="text-[#f5a623]">★</span>
                   </div>
                    <span className="text-xs text-[#555] font-bold">4.2</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex relative">
                         <svg className='w-[18px] h-[18px] stroke-[#555] stroke-[2] fill-none' viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/></svg>
                         <span className="text-[10px] bg-[#e8442a] text-white p-1 rounded-full font-bold w-[15px] h-[15px] flex items-center justify-center absolute top-[-6px] right-[-6px]">5</span>
                      </div>
                      <div>
                         <svg className='w-[18px] h-[18px] stroke-[#555] stroke-[2] fill-none ' viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                      </div>
                    </div>
                </div>
                <h3 className='text-base text-[#1a1a2e] font-bold'>{tour.title}</h3>
                <div className="flex items-center gap-1 text-sm text-[#888] py-1 ">
                <svg className='w-[12px] h-[12px] fill-none stroke-[#e8442a] stroke-[2]' viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {tour.location}
                </div>
                <h5 className='text-sm text-[#555]'>from <strong className='text-base text-[#e8442a]'>{tour.price}</strong></h5>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-[#eeee] px-4 mt-3 pt-3 pb-2">
                  <div className='flex gap-2'>
                  <p className='flex text-xs text-[#888] font-medium gap-1'>
                  <svg className='w-[13px] h-[13px] fill-none stroke-[#aaa] stroke-[2] ' viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                   {tour.duration}
                  </p>
                  <p className="flex text-[#888] text-xs font-medium gap-1">
                    <svg className='w-[13px] h-[13px] fill-none stroke-[#aaa] stroke-[2]' viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                     {tour.groupsize}
                  </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a className='text-sm text-[#e8604c] font-medium' href="">{tour.button}</a>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
        </div>
       </div>
      </div>
     <div className=" w-full lg:w-[26%]">
       <div className="">
        <div className="p-6 bg-[#fff] rounded-lg shadow-md border border-[#0000000f]">
            <h5 className='text-xl font-bold text-[#313041] border-b pl-4 border-[#EBE6DE] pb-3 relative after:absolute after:content-[""] after:top-[4px]  after:left-0 after:w-[2px] after:h-[24px] after:bg-[#e8604c]'>Booking Tour</h5>
        </div>
         <div className="mt-6 p-6 bg-[#fff] rounded-lg shadow-md border border-[#0000000f]">
            <h5 className='text-xl font-bold text-[#313041]  pl-4 pb-3 relative after:absolute after:content-[""] after:top-[4px]  after:left-0 after:w-[2px] after:h-[24px] after:bg-[#e8604c]'>Last Minute Deals</h5>
            <div className="flex flex-col gap-6 pt-3">
                {DealTour.map((Dblock) =>(
                <div className="flex items-center gap-3 border-b border-[#EBE6DE] pb-6 last:pb-0 last:border-0 " key={Dblock.id}>
                    <Link className='w-[30%]' to={Dblock.link}>
                    <img className='w-[90px] h-[80px] object-cover rounded-md' src={Dblock.image} alt={Dblock.title} />
                    </Link>
                    <div className='w-[70%]'>
                        <p className='text-[#f5a623]'>{Dblock.rating}</p>
                        <p className='text-base font-semibold text-[#313041] whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[90%]'>{Dblock.title}</p>
                        <p className='font-medium text-sm text-[#757783]'>from <span className='text-[#e8604c] text-[15px]'>{Dblock.price}</span></p>
                    </div>
                </div> 
                ))}
            </div>
        </div>
         <div className="mt-6 p-6 bg-[#fff] rounded-lg shadow-md border border-[#0000000f]">
            <h5 className='text-xl font-bold text-[#313041]  pl-4 pb-3 relative after:absolute after:content-[""] after:top-[4px]  after:left-0 after:w-[2px] after:h-[24px] after:bg-[#e8604c]'>Tour Information</h5>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mt-3">
                        <svg className="stroke-[#e8604c] fill-[#fff]" width="36" height="36" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h2"/><circle cx="17" cy="7" r="3" stroke-dasharray="0"/><path d="M21 21v-2a5 5 0 0 0-4-4.9"/></svg>
                    <div>
                        <p className='text-sm  text-[#757783] '>Max Guests</p>
                        <p className='text-base text-[# 313041]'>50</p>
                    </div>
                </div> 
                    <div className="flex items-center gap-3 ">
                         <svg className="stroke-[#e8604c] fill-white" width="36" height="36" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><circle cx="12" cy="8" r="1.5" stroke="none" fill="#e05a3a"/> </svg>
                    <div>
                        <p className='text-sm  text-[#757783] '>Min Age</p>
                        <p className='text-base text-[# 313041]'>12+</p>
                    </div>
                </div> 
                    <div className="flex items-center gap-3 ">
                       <svg className="stroke-[#e8604c] fill-white " width="36" height="36" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
                    <div>
                        <p className='text-sm  text-[#757783] '> Tour Location</p>
                        <p className='text-base text-[# 313041]'>Nigeria,Tanzania</p>
                    </div>
                </div> 
                    <div className="flex items-center gap-3">
                      <svg className="stroke-[#e8604c] fill-white" width="36" height="36"  viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/> <path d="M12 3c-3 4-3 14 0 18"/> <path d="M12 3c3 4 3 14 0 18"/></svg>
                    <div>
                        <p className='text-sm  text-[#757783] '>Languages Support</p>
                        <p className='text-base text-[# 313041]'>English,German</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className="pt-6">
            <div className="flex flex-col gap-6 ">
                {RecommendedTour.map((RecoBlock) =>(
                  <div className="relative" key={RecoBlock.id} >
                    <Link to={RecoBlock.link}>
                    <img className='rounded-lg w-full h-[300px] object-cover' src={RecoBlock.image} alt={RecoBlock.title} />
                    <p className='absolute top-4 right-4 bg-[#e8442a] py-1 px-4 rounded-md text-white text-sm uppercase'>{RecoBlock.badge}</p>
                    <div className="absolute bottom-5 left-5">
                        <h4 className='text-xl font-normal main-title' >{RecoBlock.subtitle}</h4>
                        <h2 className='text-3xl font-bold text-[#fff]'>{RecoBlock.title}</h2>
                    </div>
                    </Link>
                  </div>  
                ))}
            </div>
        </div>
       </div>
     </div>
     </div>
    </div>
    </section>
  </>
 )
}