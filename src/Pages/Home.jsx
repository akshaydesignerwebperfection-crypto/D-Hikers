import { useState } from 'react';
import heroImg from '../assets/images/hero.jpg';
import BookingBanner from '../assets/images/platform-banner.jpg';
import OurpartnerBanner from '../assets/images/bg-line.png';
import TestimonialBanner from '../assets/images/bg-plane-bird.png';
import GalleryBanner from '../assets/images/bg-map.png';
import BenifitBanner from '../assets/images/bg-map-2.png';
import MemberBanner from '../assets/images/bg-line-2.png';
import AppImg from '../assets/images/image-app.png';
import { Link } from 'react-router-dom';
import BrandLogo from '../assets/images/brand-1.png';
import BrandLogo2 from '../assets/images/brand-6.png';
import BrandLogo3 from '../assets/images/brand-2.png';
import BrandLogo4 from '../assets/images/brand-3.png';
import BrandLogo5 from '../assets/images/brand-4.png';
import BrandLogo6 from '../assets/images/brand-5.png';


const blocks = [
  {
    id:'1',
    badge: '3 Tours',
    heading: 'Morocco',
    button: 'Explore →',
    link:'/morocco-tour-detail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id:'2',
    badge: '6 Tours',
    heading: 'United Kingdom',
    button: 'Explore →',
     link:'/united-kingdom-tour-detail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id:'3',
    badge: '3 Tours',
    heading: 'Singapore',
    button: 'Explore →',
    link:'/morocco-tour-detail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id:'4',
    badge: '3 Tours',
    heading: 'Hungary',
    button: 'Explore →',
    link:'/morocco-tour-detail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id:'5',
    badge: '3 Tours',
    heading: 'Italy',
    button: 'Explore →',
    link:'/morocco-tour-detail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id:'6',
    badge: '3 Tours',
    heading: 'Japan',
    button: 'Explore →',
    link:'/morocco-tour-detail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
];

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
    link:'/morocco-tour-detail',
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
    link:'/morocco-tour-detail',
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
    link:'/morocco-tour-detail',
  },
      {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Greece, Italy, Switzerland and Paris',
    day:'5 Days',
    price:'$500',
    location:'Java & Bali One Life Adventures',
    duration:'5 Days',
    groupsize:'05 People',
    button:'Explore →',
    link:'/morocco-tour-detail',
  },

];
const Ourpartners =[
  {
    logo: BrandLogo,
  },
    {
    logo: BrandLogo3,
  },
    {
    logo: BrandLogo4,
  },
    {
    logo: BrandLogo5,
  },
  {
    logo: BrandLogo6,
  },
    {
    logo: BrandLogo2,
  },
];
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
const GalleryCards =[
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     title: 'Discovery Islands',
     description: 'Sightseeing',
     link:'/',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     title: 'Discovery Islands',
     description: 'Sightseeing',
      link:'/',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     title: 'Discovery Islands',
     description: 'Sightseeing',
      link:'/',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     title: 'Discovery Islands',
     description: 'Sightseeing',
      link:'/',
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
     title: 'Discovery Islands',
     description: 'Sightseeing',
      link:'/',
  },

];
const articles =[
  {
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Travel the Most Beautiful Places in the World',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'08',
    month:'Aug',
     link:'/',
  },
  {
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'A Place where Start New Life with Peace',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'09',
    month:'Nov',
     link:'/',
  },
    {
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Journeys are Best Measured with Friends',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'10',
    month:'Dec',
     link:'/',
  },
]
export default function Home() {
    // Add state for each field
  const [destination, setDestination] = useState('');
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    // You can replace this with navigation or filtering logic
    alert(`Destination: ${destination}\nActivity: ${activity}\nDate: ${date}\nGuests: ${guests}`);
  };
  return (
   <>
   <section className="relative h-[500px] sm:h-[700px] overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-0
    after:bg-[linear-gradient(to_bottom,rgba(10,20,40,0.35)_0%,rgba(10,20,40,0.15)_60%,rgba(10,20,40,0.55)_100%)]">
    <div className="bg-cover bg-center w-full h-full absolute top-0 left-0 w-100 h-100 animate-[subtleZoom_14s_ease-in-out_infinite_alternate] " style={{ backgroundImage: `url(${heroImg})` }} > </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <h1 className="main-title text-5xl sm:text-7xl font-normal font-['Reey']">Travel & <span class="hero-underline">Adventures
      </span></h1>
      <div className="text-4xl text-white font-medium capitalize pt-5">Where Would You Like To Go?</div>
    </div>
  </section>

    <section className='relative '>
        <div className=" static transform-none max-w-[1240px] mx-auto my-0 sm:absolute left-1/2 -bottom-14 sm:-translate-x-1/2 w-full bg-white rounded-md z-10">
          <div className=" flex-wrap  md:flex-row flex justify-start items-center gap-5 shadow-lg rounded-lg p-4">
            {/* Destination */}
            <div className="flex items-center gap-2 border-b-2 border-[#EBE6DE] p-4 flex-1">
              <span className="sf-icon">
               <svg className='stroke-[#e8604c]' width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-[#757783]">Where are you going?</span>
                <select
                  className="text-base text-[#313041] font-semibold bg-transparent border-none outline-none"
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                >
                  <option value="">Select Destination</option>
                  <option value="Morocco">Morocco</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
            </div>
            {/* Activity */}
            <div className="flex items-center gap-2 border-b-2 border-[#EBE6DE] p-4 flex-1">
              <span className="sf-icon">
                <svg className='stroke-[#e8604c]' width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-[#757783]">Activity type</span>
                <select
                  className="text-base text-[#313041] font-semibold bg-transparent border-none outline-none"
                  value={activity}
                  onChange={e => setActivity(e.target.value)}
                >
                  <option value="">Select Activity</option>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Paragliding">Paragliding</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Hang Gliding">Hang Gliding</option>
                </select>
              </div>
            </div>
            {/* Date */}
             <div className="flex items-center gap-2 border-b-2 border-[#EBE6DE] p-4 flex-1">
              <span className="sf-icon">
                 <svg className='stroke-[#e8604c]' width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
            <div className="flex flex-col">
                <span className="text-sm text-[#757783]">When</span>
                <input
                  type="date"
                  className="text-base text-[#313041] font-semibold bg-transparent border-none outline-none"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-2 border-b-2 border-[#EBE6DE] p-4 flex-1">
              <span className="sf-icon">
                <svg className='stroke-[#e8604c]' width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-[#757783]">Guests</span>
                <input
                  type="number"
                  min={1}
                  className="text-base text-[#313041] font-semibold bg-transparent border-none outline-none"
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                />
              </div>
            </div>
             {/* <svg className='stroke-[#e8604c]' width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="[currentColor]" stroke-width="1"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/><circle cx="4" cy="12" r="2"/><circle cx="8" cy="18" r="2"/></svg> */}
            <button
              className="brand-btn flex items-center gap-2 text-white text-sm rounded-md py-4 px-6 uppercase tracking-wide"
              onClick={handleSearch}
            >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search
            </button>
          </div>
        </div>
      </section>
   <section className=" pb-5  pt-[60px] sm:pt-[100px]">
      <div className="container">
       <div className="text-center pb-7">
        <span className="main-title text-xl font-['Reey']">Destination lists</span>
       <h2 className="text-4xl sm:text-5xl  text-[#313041] font-bold">Go Exotic Places</h2>
      </div>
       <div className=" grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-5">
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

  <section className="pt-12 pb-10">
      <div className='container'>
        <div className=" flex-col lg:flex-row flex justify-between items-stretch gap-12 max-w-[1080px] mx-auto">
      <div className="flex-auto  relative sm:flex-[0_0_480px] h-[420px]">
      <div className="bg-[#e8e8e8] w-full h-[400px] sm:h-[440px] sm:w-[440px] absolute top-1/2 left-1/2 inset-0 -translate-x-1/2 -translate-y-1/2 rounded-[62%_38%_55%_45%/_48%_60%_40%_52%] "></div>

      <img className="w-full h-[340px] sm:w-[400px] sm:h-[360px] absolute top-1/2 left-1/2  inset-0 -translate-x-1/2 -translate-y-1/2 rounded-[62%_38%_55%_45%/_48%_60%_40%_52%]"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="Eiffel Tower Paris"/>

      <div className="absolute top-15 right-10 flex flex-col justify-center items-center">
        <span className="text-5xl sm:text-6xl main-title font-['Reey']">30%</span>
        <span className="font-bold text-4xl  sm:text-5xl text-[#313041]">Discount</span>
      </div>

      <div className="absolute bottom-20 left-0 flex flex-col items-center bg-white p-3 rounded-md shadow-md">
        <span className="text-xs">Book Tour Now</span>
        <span className="text-base font-medium">78075 28705</span>
      </div>
    </div>
    <div className="flex-1">
      <span className="main-title text-xl font-['Reey'] ident-2 main-title indent-[15px] block pb-3">Get to know us</span>
      <h2 className="text-4xl sm:text-5xl font-bold text-[#313041]">Plan Your Trip with<br/>Trevily</h2>
      <p className="py-5 text-base text-gray">
        There are many variations of passages of available but the majority
        have suffered alteration in some form, by injected hum randomised
        words which don't look even slightly.
      </p>
       <ul className="checklist">
          <li className='flex items-center gap-1'>
            <span className="check-icon">
              <svg className='w-[16px] h-[16px] fill-none stroke-[#e8604c] stroke-w-2 ' viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
            </span>
            Invest in your simply neighborhood
          </li>
          <li className='flex items-center gap-1'>
            <span className="check-icon">
              <svg className='w-[16px] h-[16px] fill-none stroke-[#e8604c] stroke-w-2 ' viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
            </span>
            Support people in free text extreme
          </li>
          <li className='flex items-center gap-1'>
            <span className="check-icon">
              <svg className='w-[16px] h-[16px] fill-none stroke-[#e8604c] stroke-w-2 ' viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
            </span>
            Largest global industrial business
          </li>
        </ul>
        <a href="#" className="mt-5 py-4 px-6 rounded-lg bg-[#e8604c] block w-max text-white">Book With Us Now</a>
      </div>
    </div>
      </div>
  </section>
  <section className='pt-10 pb-16'>
     <div className="container">
      <div className="text-center pb-6">
        <h5 className='text-xl main-title font-[Reey]'>Featured tours</h5>
        <h2 className=' text-4xl sm:text-5xl text-[#333] font-bold'>Most Popular Tours</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:flex-row md:flex gap-4 items-stretch">
        {TourCards.map((tour) => (
          <div className=" w-full md:w-1/2 shadow-lg rounded-[12px] overflow-hidden" key={tour.id}>
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
                    <Link className='text-sm text-[#e8604c] font-medium' to={tour.link}>{tour.button}</Link>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
     </div>
  </section>

  <section
    className="py-20 bg-cover bg-center bg-no-repeat bg-fixed w-full h-full relative 
    after:content-[''] after:absolute after:inset-0 after:z-0
    after:bg-[linear-gradient(to_right,#000000e8_0%,rgb(4_8_26/68%)_55%,rgb(0_0_0/85%)_100%)]"
    style={{ backgroundImage: `url(${BookingBanner})` }}>  
  <div className="container">
      <div className=" flex-col md:flex-row gap-5 md:gap-0 flex items-center justify-between relative z-10" >
        <div className="w-full md:w-1/2 ">
          <button className="play-btn relative w-[92px] h-[92px] bg-[#e8604c] rounded-md cursor-pointer flex items-center justify-center" aria-label="Play video">
          <svg className='w-[28px] h-[28px] fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </button>
         <p className='text-3xl font-[Reey] main-title py-5 indent-[10px] mt-3'>Are you ready to travel?</p>
         <h2 className='text-4xl sm:text-5xl text-white font-bold '>Tevily is a World Leading Online Tour Booking Platform</h2>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 items-stretch gap-2 max-w-[460px] mx-auto  ">
      
       <Link className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
        after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
        after:bg-[#e8604c] after:-z-10 
        after:scale-y-0 after:origin-top
        hover:after:scale-y-100
        after:transition-transform after:duration-500" to="/">

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
</Link>
         <Link className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
            after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
            after:bg-[#e8604c] after:-z-10 
            after:scale-y-0 after:origin-top
            hover:after:scale-y-100
            after:transition-transform after:duration-500" to="/">
            <div className="">
               <svg className='w-[64px] h-[64px] fill-none stroke-[#e8442a] group-hover:stroke-white stroke-widht-2' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"> <path d="M10 28 Q20 12 32 14 Q44 12 54 28"/>  <path d="M10 28 Q20 20 32 22 Q44 20 54 28"/>    <line x1="20" y1="27" x2="30" y2="42"/> <line x1="44" y1="27" x2="34" y2="42"/>
              <line x1="32" y1="22" x2="32" y2="42"/>
              <circle cx="32" cy="44" r="3"/>
              <path d="M29 47 L27 54 M35 47 L37 54 M27 50 L37 50"/>
            </svg>
            </div>
            <h6 className='text-xl text-white font-bold text-center'>Paragliding<br/>Tours</h6>
          </Link>
              <Link className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
            after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
            after:bg-[#e8604c] after:-z-10 
            after:scale-y-0 after:origin-top
            hover:after:scale-y-100
            after:transition-transform after:duration-500" to="/">
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
          </Link>
              <Link className="group basis-1/2 items-center flex flex-col justify-center relative overflow-hidden z-10 border border-[#ffffff33] p-4 rounded-md
            after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full
            after:bg-[#e8604c] after:-z-10 
            after:scale-y-0 after:origin-top
            hover:after:scale-y-100
            after:transition-transform after:duration-500" to="/">
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
          </Link>
        </div>
      </div>
    </div>
</section>
<section className="py-20 bg-no-repeat bg-size-cover w-full h-full bg-[#e8604c]" style={ { backgroundImage: `url(${OurpartnerBanner})` }}>
  <div className="container">
    <div className="flex-col md:flex-row flex gap-10 justify-between">
      <div className="">
        <h2 className='text-4xl sm:text-5xl text-white font-bold whitespace-nowrap'>Our Partners</h2>
      </div>
      <div className=" overflow-x-auto md:overflow-hidden flex items-center justify-around gap-8 w-full max-w-[1200px]">
        {Ourpartners.map((partner) => (
          <div className="w-[100px] h-[70px]" key={partner.id}>
            <img className='w-full h-full object-contain' src={partner.logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-no-repeat bg-left w-full h-full" style={{ backgroundImage: `url(${TestimonialBanner})` }}>
  <div className="container">
    <div className="pb-6 text-center">
      <h4 className='text-xl indent-3 main-title'>Testimonials & reviews</h4>
      <h2 className='text-4xl sm:text-5xl font-bold text-[#313041]'>What They’re Saying</h2>
    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:flex-row md:flex gap-5 items-stretch">
      { tesimonials.map((testimonial) => (
        <div className="" key={testimonial.id}>
           <div className="h-[230px] w-[230px] rounded-full overflow-hidden mx-auto">
            <img className='w-full h-full object-cover rounded-full' src={testimonial.image} alt="" />
            </div>
            <div className='p-5 bg-white text-center rounded-lg'>
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
<section className='py-12 sm:py-20 w-full h-full bg-cover bg-no-repeat bg-[#FAF5EE] pt-[200px] sm:pt-[300px] -mt-[220px]' style={{ backgroundImage: `url(${GalleryBanner})` }}>
   <div className="container">
     <div className="grid grid-cols-1 sm:grid-cols-2  md:flex items-stretch gap-5">
      { GalleryCards.map((Gcard)=> (
       <div className="w-full md:w-1/2" key={Gcard.id}>
         <div className="h-[250px] w-full overflow-hidden rounded-md relative">
          <Link to={Gcard.link}>
          <img className='w-full h-full object-cover rounded-md' src={Gcard.image} alt={Gcard.title} />
            <div className=" z-10 h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300   flex justify-center items-center flex-col after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-[#313041] after:-z-10 after:opacity-0 hover:after:opacity-80 after:transition-opacity after:duration-300">  
            <p className='text-xl font-bold text-white'>{Gcard.title}</p>
            <h4 className='text-xl font-normal main-title'>{Gcard.description}</h4>
          </div>
          </Link>
         </div>
       </div>
          ))}
     </div>
   </div>
</section>
<section className='py-8'>
   <div className="flex-col md:flex-row flex items-stretch">
    <div className="w-full md:w-1/2">
       <img className='h-[400px] w-full sm:h-[600px] min-h-full object-cover relative z-20' src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80" alt="Infinity pool with mountain view at sunset"/>
    </div>
    <div className="w-full md:w-1/2 bg-no-repeat bg-contain bg-center h-auto  bg-[#313041] py-10 px-8 sm:px-20  flex justify-start items-center relative after:absolute after:content-[''] after:top-[100px] after:bottom-[100px] after:left-[-3px] after:w-[12px]  after:bg-[#e85d3e] after:rounded-e-lg after:z-10" style={{ backgroundImage: `url(${BenifitBanner})`}}>
    <div className='max-w-[720px]'>
      <h4 className='main-title text-xl font-normal'>Our benefit lists</h4>
      <h2 className='text-4xl sm:text-5xl text-white font-bold pb-4 pt-3'>Why Choose Dhauladhar Hikers</h2>
      <p className='text-base text-[#A9A8B6] max-w-[420px]'>There are many variations of passages of Lorem Ipsum is simply free text available in the market for you, but the majority have suffered alteration in some form.</p>
   
    <div className="grid grid-cols-1  sm:grid-cols-2 items-stretch gap-6 mt-9">
      <div className="flex gap-4 items-start">
        <p>
        <svg className="w-[52px] h-[52px]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="4" fill="#1e2235"/>
          <g stroke="#e85d3e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M26 14c-2 0-4 1-5 3l-6 10h22l-6-10c-1-2-3-3-5-3z"/>
            <path d="M15 27l-2 6h26l-2-6"/>
            <path d="M20 33v4M32 33v4"/>
            <circle cx="36" cy="20" r="3"/>
            <path d="M36 17v-3M39 20h3M36 23v3M33 20h-3"/>
          </g>
        </svg>
        </p>
        <div>
            <h5 className='text-xl font-bold text-white pb-2'>Professional and Certified</h5>
            <p className='text-base text-[#A9A8B6]'>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
        </div>
      </div>
        <div className="flex gap-4 items-start">
        <p>
          <svg className="w-[52px] h-[52px]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="4" fill="#1e2235"/>
          <g stroke="#e85d3e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 36l8-8 5 5 7-10 6 6"/>
            <path d="M38 18h-6v6"/>
            <path d="M26 26l12-8"/>
          </g>
        </svg>
        </p>
        <div>
            <h5 className='text-xl font-bold text-white pb-2'>Best Price Guarantee</h5>
            <p className='text-base text-[#A9A8B6]'>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
        </div>
      </div>
        <div className="flex gap-4 items-start">
        <p>
        <svg className="w-[52px] h-[52px]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="4" fill="#1e2235"/>
          <g stroke="#e85d3e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="22" cy="24" r="7"/>
            <path d="M19 24l2 2 4-4"/>
            <path d="M27 30l8 8"/>
            <path d="M34 28l5 5-3 3-5-5"/>
          </g>
        </svg>
        </p>
        <div>
            <h5 className='text-xl font-bold text-white pb-2'>Get Instant Tour Bookings</h5>
            <p className='text-base text-[#A9A8B6]'>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
        </div>
      </div>
        <div className="flex gap-4 items-start">
        <p>
     <svg className="w-[52px] h-[52px]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="4" fill="#1e2235"/>
          <g stroke="#e85d3e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="26" cy="24" r="8"/>
            <path d="M26 16v8l5 3"/>
            <path d="M18 36l-4 4M34 36l4 4"/>
          </g>
        </svg>
        </p>
        <div>
            <h5 className='text-xl font-bold text-white pb-2'>24/7 Customer Support</h5>
            <p className='text-base text-[#A9A8B6]'>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
        </div>
      </div>
    </div>
    </div>
     </div>
   </div>
</section>

<section className='pt-7 pb-14'>
  <div className="container">
    <div className="pb-10 flex justify-between items-end">
      <div className="">
      <h4 className='text-xl main-title'>From the blog post</h4>
      <h2 className='text-4xl sm:text-5xl font-bold text-[#313041]'>News & Articles</h2>
      </div>
      <div>
        <a className='py-4 px-8 bg-[#e8604c] text-white uppercase text-sm rounded-md block hover:bg-[#d1503d  ] transition duration-300' href="/">Views All Posts</a>

      </div>
    </div>
    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:flex items-stretch gap-10 ">
      { articles.map((article) => (
        <div className="border border-[#e8e8e8] rounded-md overflow-hidden" key={article.id}>
          <div className="relative">
            <img className='w-full h-full object-cover' src={article.image} alt={article.title} />
            <div className=" bg-[#e85d3e] absolute bottom-0 right-0 text-center p-3 rounded-tl-md min-w-[64px] pb-[24px] ">
              <h6 className='text-[18px] text-white font-bold leading-[20px]'>{article.day}</h6>
              <p className='text-white text-xs uppercase'>{article.month}</p>
            </div>
          </div>
          <div className="p-4 pt-0 relative z-10 after:absolute after:content-[''] after:top-[-18px] after:left-0 after:w-full after:h-[20px] after:bg-[#fff]  after:rounded-t-3xl ">
            <div class="flex items-center gap-5 pb-4">
              <span class="text-xs text-[#757783] flex gap-2 items-center">
                <svg class="w-[14px] fill-[#aaa] " viewBox="0 0 24 24"><path d="M12 12c2.7 0 4-1.3 4-4S14.7 4 12 4 8 5.3 8 8s1.3 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"></path>
                </svg>Admin
                </span>
                <span class="text-xs text-[#757783] flex gap-2 items-center">
                  <svg class="w-[14px] fill-[#aaa] " viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                 </svg>0 Comments
                </span>
              </div>
              <h3 className=' text-2xl/7 text-[#313041] font-bold '>{article.title}</h3>
              <p className='text-base text-[#757783] py-4'>{article.excerpt}</p>
              <div className=''>
                <Link className='text-sm text-[#e85d3e] font-bold' to={article.link}>{article.button}</Link>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="pt-20 bg-[#f5ede4] bg-no-repeat bg-cover bg-center w-full h-full " style={{backgroundImage:`url(${MemberBanner})` }}>
  <div className="container">
    <div className=" flex-col md:flex-row flex justify-center gap-10">
      <div className="w-full max-w-[600px]">
        <div className="p-2 flex flex-col gap-3  justify-center h-full">
          <h4 className='text-xl main-title indent-2'>Join to us</h4>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#313041]'>Not a Member Yet?</h2>
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
