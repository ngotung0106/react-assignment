import { NavLink } from 'react-router-dom'
import { Flame, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <NavLink to="/" className="brand" onClick={close}>
          <span className="brand-mark"><Flame size={25} fill="currentColor" /></span>
          <span>FPT <b>Aptech</b><small>UNLEASH YOUR POTENTIAL</small></span>
        </NavLink>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/about" onClick={close}>About Us</NavLink>
          <NavLink to="/subjects" onClick={close}>Products</NavLink>
          <a href="#booking" onClick={close}>Booking</a>
          <a href="#locations" onClick={close}>Locations</a>
          <div className="nav-actions">
            <button className="btn btn-orange" onClick={() => alert('Sign in feature coming soon!')}>Sign In</button>
            <button className="btn btn-outline" onClick={() => alert('Sign up feature coming soon!')}>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
