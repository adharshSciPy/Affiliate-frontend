import { ArrowCircleRight, ArrowCircleLeft, SignOut, ListMagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'
import profileImg from '../../assets/images/profile.png'
import { MagnifyingGlass } from 'react-loader-spinner'

const Sidebar = ({ isOpen, setIsOpen }) => {

  const handleSidebar = () => {
    setIsOpen((prev) => {
      localStorage.setItem('sidebarOpen', !prev)
      return !prev
    })
  }

  return (
    <div className={`sidebar ${!isOpen && 'offSidebar'}`}>
      {/* middle button to close and open */}
      <div className="sidebar__shutter" onClick={() => handleSidebar()}>
        {
          isOpen ? <ArrowCircleRight size={32} color='grey' /> : <ArrowCircleLeft size={32} color='grey' />
        }
      </div>


      <div className="sidebar__container">
        <div className="sidebar__logo">
          <h1>LOGO</h1>
        </div>

        <div className="sidebar__search">
          <input type="text" placeholder='Search here..' />
        </div>

        <div className="sidebar__routes">
          
        </div>

        <div className="sidebar__profile">
          <div className="sidebar__profile--logo">
            <img src={profileImg} alt="profile-picture" />
          </div>

          <div className="sidebar__profile--name">
            <p><span>hello, </span>Rajan David</p>
            <p>helloadmin@gmail.com</p>
          </div>

          <div className="sidebar__profile--logout">
            <button>
              <SignOut size={28} color="white" weight="fill" />
            </button>
          </div>
        </div>

        <div className="sidebar__support">
          <div className="sidebar__support--text">
            <h4>Help and Support</h4>
            <p>support@affiliatemarketting.com</p>
          </div>

          <div className="sidebar__support--social">
            Facebook
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar