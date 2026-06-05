import { useState } from 'react'
import BreadcrumbBanner from '../assets/images/breadcrumb.jpg'
import { Link } from 'react-router-dom';

const tours = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Morocco Desert Tour',
    location: 'Morocco',
    price: '$680',
    duration: '3 Days',
    groupsize: '12',
    rating: '★★★★★',
    ratingCount: '(4.2)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'London City Tour',
    location: 'United Kingdom',
    price: '$920',
    duration: '5 Days',
    groupsize: '8',
    rating: '★★★★★',
    ratingCount: '(4.5)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Singapore Explorer',
    location: 'Singapore',
    price: '$540',
    duration: '4 Days',
    groupsize: '10',
    rating: '★★★★★',
    ratingCount: '(4.8)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Budapest Adventure',
    location: 'Hungary',
    price: '$780',
    duration: '6 Days',
    groupsize: '15',
    rating: '★★★★★',
    ratingCount: '(4.0)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Rome Historical Tour',
    location: 'Italy',
    price: '$850',
    duration: '7 Days',
    groupsize: '20',
    rating: '★★★★★',
    ratingCount: '(4.6)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Tokyo Cultural Tour',
    location: 'Japan',
    price: '$1200',
    duration: '8 Days',
    groupsize: '12',
    rating: '★★★★★',
    ratingCount: '(4.9)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  // Additional tours for Page 2
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Paris浪漫之旅',
    location: 'France',
    price: '$950',
    duration: '5 Days',
    groupsize: '10',
    rating: '★★★★★',
    ratingCount: '(4.7)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'New York City Break',
    location: 'USA',
    price: '$1100',
    duration: '6 Days',
    groupsize: '15',
    rating: '★★★★★',
    ratingCount: '(4.3)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Sydney Harbour Tour',
    location: 'Australia',
    price: '$1350',
    duration: '7 Days',
    groupsize: '8',
    rating: '★★★★★',
    ratingCount: '(4.8)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Dubai Desert Safari',
    location: 'UAE',
    price: '$890',
    duration: '4 Days',
    groupsize: '12',
    rating: '★★★★★',
    ratingCount: '(4.5)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Bali Beach Retreat',
    location: 'Indonesia',
    price: '$720',
    duration: '5 Days',
    groupsize: '10',
    rating: '★★★★★',
    ratingCount: '(4.6)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    title: 'Swiss Alps Expedition',
    location: 'Switzerland',
    price: '$1650',
    duration: '6 Days',
    groupsize: '8',
    rating: '★★★★★',
    ratingCount: '(4.9)',
    button: 'View Details',
    link: '/morocco-tour-detail',
  },
];

export default function Tour() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTours = tours.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(tours.length / itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <>
      <section className="bg-no-repeat bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${BreadcrumbBanner})` }}>
        <div className="container">
          <div className="py-16">
            <h2 className="text-4xl text-white font-bold">Tour Packages</h2>
          </div>
          <div className="flex justify-end">
            <ol className="flex gap-4 bg-white rounded-t-lg px-8 py-4 items-center w-fit">
              <li className='text-sm font-bold text-[#313041]'><Link  to="/">Home</Link></li>
              <li className="text-sm font-bold text-[#e8604c] relative before:absolute before:content-['/'] before:top-0 before:left-[-10px] before:text-[#ccc]">Tour Packages</li>
            </ol>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className="container">
          <div className="grid grid-cols-4 gap-6 items-stretch">
            {currentTours.map((tour) => (
              <div className="w-full shadow-lg rounded-[12px] overflow-hidden" key={tour.id}>
                <div className="">
                  <img src={tour.image} alt={tour.title} className="w-full" />
                </div>
                <div className="pb-2 relative z-10 after:absolute after:content after:top-[-18px] after:left-0 after:w-full after:h-[20px] after:rounded-t-[20px] after:bg-white after:z-[-1]">
                  <div className='px-4'>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          <span className="text-[#f5a623]">{tour.rating}</span>
                        </div>
                        <span className="text-xs text-[#555] font-bold">{tour.ratingCount}</span>
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
                    <div className="flex items-center gap-1 text-sm text-[#888] py-1">
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

          {/* Functional Pagination */}
          <div className="pt-10">
            <ul className="flex gap-4 justify-center">
              {/* Previous Button */}
              <li>
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`py-2 px-4 border rounded-md text-sm block ${currentPage === 1 ? 'border-[#EBE6DE] text-[#ccc] cursor-not-allowed' : 'border-[#EBE6DE] text-[#313041] hover:border-[#e8604c] hover:text-[#e8604c]'}`}
                >
                  Prev
                </button>
              </li>
              
              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1
                return (
                  <li key={page}>
                    <button 
                      onClick={() => handlePageChange(page)}
                      className={`py-2 px-4 border rounded-md text-sm block ${currentPage === page ? 'border-[#e8604c] bg-[#e8604c] text-white' : 'border-[#EBE6DE] text-[#313041] hover:border-[#e8604c] hover:text-[#e8604c]'}`}
                    >
                      {page}
                    </button>
                  </li>
                )
              })}
              
              {/* Next Button */}
              <li>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`py-2 px-4 border rounded-md text-sm block ${currentPage === totalPages ? 'border-[#EBE6DE] text-[#ccc] cursor-not-allowed' : 'border-[#EBE6DE] text-[#313041] hover:border-[#e8604c] hover:text-[#e8604c]'}`}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}