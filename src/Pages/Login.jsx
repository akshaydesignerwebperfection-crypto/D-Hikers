import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) return

    setLoading(true)

    // Simulate API call - Replace with your actual API
    setTimeout(() => {
      // Store user data (demo purpose)
      localStorage.setItem('user', JSON.stringify({
        email: formData.email,
        name: formData.email.split('@')[0]
      }))
      
      setLoading(false)
      alert('Login successful!')
      navigate('/') // Redirect to home
    }, 1000)
  }

  return (
    <>
      <section id="login" className="space-y-4 py-10">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative p-6">
              <h2 className="text-center text-xl font-semibold mb-1"> Signin </h2>
              <div className="w-10 h-[2px] bg-[#e8604c] mx-auto mb-6"></div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e8604c] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e8604c] ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#e8604c] hover:bg-[#d54a3a] text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
                >
                  {loading ? 'Logging in...' : 'LOGIN'}
                </button>
                
                <div className="text-center mt-4">
                  <a href="#" className="text-[#e8604c] text-sm block mb-2">
                    Lost your password?
                  </a>
                  <p className="text-sm text-gray-500">
                    Don't have an account? 
                    <a href="/register" className="text-[#e8604c] font-medium pl-1">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}