import { useState } from 'react';
import BreadcrumbBanner from '../assets/images/breadcrumb.jpg';
import { Link } from 'react-router-dom';
export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      // Replace with your Formspree form ID
      const response = await fetch('https://formspree.io/f/mkplzlky', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-no-repeat bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${BreadcrumbBanner})` }}>
        <div className="container">
          <div className="py-16">
            <h2 className="text-4xl text-white font-bold">Contact</h2>
          </div>
          <div className="flex justify-end">
            <ol className="flex gap-4 bg-white rounded-t-lg px-8 py-4 items-center w-fit">
              <li className='text-sm font-bold text-[#313041]'><Link to="/">Home</Link></li>
              <li className="text-sm font-bold text-[#e8604c] relative before:absolute before:content-['/'] before:top-0 before:left-[-10px] before:text-[#ccc]">Contact</li>
            </ol>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className="container">
          <div className="flex gap-5 justify-between items-stretch">
            <div className="w-1/3">
              <h4 className='text-xl main-title font-normal pb-2 indent-2'>Talk with our team</h4>
              <h2 className='text-5xl font-bold text-[#313041]'>Any Question? Feel Free to Contact</h2>
              <p className='text-base text-[#757783] py-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.</p>
              <div className="flex gap-3 items-center pt-2">
                <a className="group w-[46px] h-[46px] rounded-full border border-[#FAF5EE] bg-[#FAF5EE] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c] duration-500" href="#">
                  <svg className="w-[20px] h-[20px] fill-[#555] group-hover:fill-[#fff]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="group w-[46px] h-[46px] rounded-full border border-[#FAF5EE] bg-[#FAF5EE] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c] duration-500" href="#">
                  <svg className="w-[20px] h-[20px] fill-[#555] group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="group w-[46px] h-[46px] rounded-full border border-[#FAF5EE] bg-[#FAF5EE] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c] duration-500" href="#">
                  <svg className="w-[20px] h-[20px] fill-[#555] group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.16 0-2.13-1.43-3.62-3.48-3.62-2.37 0-3.76 1.78-3.76 3.62 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.83-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.83 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.65 5.59-.91 0-1.76-.47-2.05-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.85.26 1.75.4 2.69.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path>
                  </svg>
                </a>
                <a className="group w-[46px] h-[46px] rounded-full border border-[#FAF5EE] bg-[#FAF5EE] flex items-center justify-center hover:bg-[#e8604c] hover:border-[#e8604c] duration-500" href="#">
                  <svg className="w-[20px] h-[20px] fill-[#555] group-hover:fill-[#fff]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect className="group-hover:fill-white" x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#555"></rect>
                    <path className="group-hover:fill-[#e8604c]" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#f5f5f5"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#f5f5f5" strokeWidth="2"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="contact-form-block">
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-3 items-center pb-4">
                    <div className="w-full">
                      <input className='bg-[#faf5ee] text-base py-4 px-5 rounded-md border-transparent w-full focus-visible:outline-none' placeholder="Your Name" type="text" name="name" required />
                    </div>
                    <div className="w-full">
                      <input className='bg-[#faf5ee] text-base py-4 px-5 rounded-md border-transparent w-full focus-visible:outline-none' placeholder="Email Address" type="email" name="email" required />
                    </div>
                  </div>
                  <div className="flex gap-3 items-center pb-4">
                    <div className="w-full">
                      <input className='bg-[#faf5ee] text-base py-4 px-5 rounded-md border-transparent w-full focus-visible:outline-none' placeholder="Phone Number" type="tel" name="phone" />
                    </div>
                    <div className="w-full">
                      <input className='bg-[#faf5ee] text-base py-4 px-5 rounded-md border-transparent w-full focus-visible:outline-none' placeholder="Subject" type="text" name="subject" />
                    </div>
                  </div>
                  <div className="your-message">
                    <textarea className='bg-[#faf5ee] text-base py-4 px-5 rounded-md border-transparent resize-y w-full focus-visible:outline-none' name="message" cols="35" rows="8" placeholder="Write Message" required></textarea>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="bg-[#e8604c] py-4 px-6 rounded-md text-sm uppercase font-bold text-white disabled:opacity-50">
                      {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send A Message'}
                    </button>
                  </div>
                  {status === 'success' && <p className="text-green-600 pt-2">Thank you! We'll get back to you soon.</p>}
                  {status === 'error' && <p className="text-red-600 pt-2">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-16'>
        <div className="container">
          <div className="grid items-center grid-cols-3 gap-5">
             <div className="flex items-center justify-center border border-[#EBE6DE] rounded-md p-6  gap-3 ">
              <span className="w-[48px] h-[48px] bg-[#FAF5EE] rounded-full flex items-center justify-center">
              <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
              </span>
              <span>
               <h5 className="text-xl font-bold text-[#313041]">Address</h5>
               <p className="text-base text-[#757783]">88 Broklyn Street NY, USA</p>
              </span>
              </div>
            <div className="flex items-center justify-center border border-[#EBE6DE] rounded-md p-6 gap-3 ">
              <a href='tel:78075 28705' className="w-[48px] h-[48px] bg-[#FAF5EE] rounded-full flex items-center justify-center">
                <svg class="w-[16px] h-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"></path></svg>        
                 </a>
              <a href='tel:78075 28705'>
               <h5 className="text-xl font-bold text-[#313041]">Phone</h5>
               <p className="text-base text-[#757783]">78075 28705</p>
              </a>
              </div>
              <div className="flex items-center justify-center border border-[#EBE6DE] rounded-md p-6 gap-3 ">
              <a href='mailto:dhauladharhikers72@gmail.com' className="w-[48px] h-[48px] bg-[#FAF5EE] rounded-full flex items-center justify-center">
                <svg class="w-[16px] h-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>     
                </a>
              <a href='mailto:dhauladharhikers72@gmail.com'>
               <h5 className="text-xl font-bold text-[#313041]">Email</h5>
               <p className="text-base text-[#757783]">dhauladharhikers72@gmail.com</p>
              </a>
              </div>
          </div>
        </div>
      </section>
      <section className="map-section">
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.8481373284308!2d-0.11951919999999999!3d51.5031864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e1!3m2!1sen!2sin!4v1775820489744!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  </section>
    </>
  )
}