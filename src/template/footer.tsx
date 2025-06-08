import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
       <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">&copy; 2025 Blog Speaks. All Rights Reserved.
          Created by ❤️<Link to="https://sd-95.github.io/SD_Portfolio/" target="_blank" rel="noopener noreferrer">Somes Dash</Link>
        </p>
      </footer>
    </React.Fragment>
  )
}

export default Footer
