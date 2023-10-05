import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-4 mt-4">
        <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Website</p>
        </div>
    </footer>
  )
}

export default Footer