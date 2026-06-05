import { useState } from 'react'
import BreadcrumbBanner from '../assets/images/breadcrumb.jpg'
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Travel the Most Beautiful Places in the World',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'08',
    month:'Aug',
     link:'/',
  },
  {
    id: 2,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'A Place where Start New Life with Peace',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'09',
    month:'Nov',
     link:'/',
  },
  {
    id: 3,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Journeys are Best Measured with Friends',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'10',
    month:'Dec',
     link:'/',
  },
  {
    id: 4,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'The Surfing Man Will Blow Your Mind',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'12',
    month:'Dec',
     link:'/',
  },
  {
    id: 5,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Top 10 Destinations & Adventure Trips',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'14',
    month:'Dec',
     link:'/',
  },
  {
    id: 6,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Travel the Most Beautiful Places in the World',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'08',
    month:'Dec',
     link:'/',
  },
  // Duplicate articles to show pagination works (Page 2)
  {
    id: 7,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Adventure Awaits in the Mountains',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'15',
    month:'Jan',
     link:'/',
  },
  {
    id: 8,
    image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title:'Discover Hidden Gems of the World',
    excerpt: 'There are many variations of but the majority have simply free text available not suffered.',
    button:'Read More →',
    day:'20',
    month:'Feb',
     link:'/',
  },
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(articles.length / itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top of articles section
    window.scrollTo({ top: 100, behavior: 'smooth' })
  }

  return (
    <>
      <section className="bg-no-repeat bg-cover bg-center w-full h-full" style={{ backgroundImage:`url(${BreadcrumbBanner})`}}>
        <div className="container">
          <div className="py-16" >
            <h2 className="text-4xl text-white font-bold">News</h2>
          </div>
          <div className="flex justify-end">
            <ol className="flex gap-4 bg-white rounded-t-lg px-8 py-4 items-center w-fit">
              <li className='text-sm font-bold text-[#313041]'><Link to="/">Home</Link> </li>
              <li className="text-sm font-bold text-[#e8604c] relative before:absolute before:content-['/'] before:top-0 before:left-[-10px] before:text-[#ccc] ">News</li>
            </ol>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className="container">
          <div className="grid grid-cols-3 items-stretch gap-8 ">
            { currentArticles.map((article) => (
              <div className="border border-[#e8e8e8] rounded-md overflow-hidden" key={article.id}>
                <div className="relative">
                  <img className='w-full h-full object-cover' src={article.image} alt={article.title} />
                  <div className="bg-[#e85d3e] absolute bottom-0 right-0 text-center p-3 rounded-tl-md min-w-[64px] pb-[24px] ">
                    <h6 className='text-[18px] text-white font-bold leading-[20px]'>{article.day}</h6>
                    <p className='text-white text-xs uppercase'>{article.month}</p>
                  </div>
                </div>
                <div className="p-4 pt-0 relative z-10 after:absolute after:content-[''] after:top-[-18px] after:left-0 after:w-full after:h-[20px] after:bg-[#fff]  after:rounded-t-3xl ">
                  <div className="flex items-center gap-5 pb-4">
                    <span className="text-xs text-[#757783] flex gap-2 items-center">
                      <svg className="w-[14px] fill-[#aaa]" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4-1.3 4-4S14.7 4 12 4 8 5.3 8 8s1.3 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"></path></svg>Admin
                    </span>
                    <span className="text-xs text-[#757783] flex gap-2 items-center">
                      <svg className="w-[14px] fill-[#aaa]" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>0 Comments
                    </span>
                  </div>
                  <h3 className='text-2xl/7 text-[#313041] font-bold '>{article.title}</h3>
                  <p className='text-base text-[#757783] py-4'>{article.excerpt}</p>
                  <div>
                    <Link className='text-sm text-[#e85d3e] font-bold' to={article.link}>{article.button}</Link>
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