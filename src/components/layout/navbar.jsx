import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-list'>
          <ul>
            <a href='/'><li>Home</li></a>
            <a href='about_us'><li>About us</li></a>
            <a href='societies'><li>Societies</li></a>
            <a href='teachings'><li>Teachings</li></a>
            <a href='news'><li>News</li></a>
            <a href='gallery'><li>Gallery</li></a>
            <a href='outreach'><li>Outreach</li></a>
            <a href='contact'><li>Contact</li></a>
            {/* <Link to ="/contact/members">Members</Link> */}

          </ul>
        </div>
    </div>
  )
}

export default Navbar