import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>© 2020-2022 - Made with <span className="icon -love"><RiHeart2Line/></span> by <Link to="https://www.blog.msk1981.xyz/">Muhammad Sumair Kaleem</Link></p>
    </div>
  </footer>
)

export default Footer
