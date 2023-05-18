import Link from "next/link";
import { useState } from "react";
const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
      setNavbar(!navbar);
      console.log("clicked");
    };


  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <h1>Content Manager</h1>
            </Link>
            <button className=' inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <input
                    className="input is-rounded"
                    type="email"
                    placeholder="Search"
                  />
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <Link
                href="/"
                className="navbar-item is-active is-size-5 has-text-weight-semibold"
              >
                Home
              </Link>
              <Link
                href="/resources/new"
                className="navbar-item is-size-5 has-text-weight-semibold"
              >
                Add
              </Link>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
