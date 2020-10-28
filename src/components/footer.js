import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>© 2018-2020 - Made with <span className="icon -love"><RiHeart2Line/></span> by Muhammad Sumair Kaleem<Link to="/">msumairk1981.work</Link></p>
    </div>
  </footer>
)

export default Footer
