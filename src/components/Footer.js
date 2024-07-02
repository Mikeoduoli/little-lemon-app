import logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <footer>
            <section>
              <div className="info">
                <img 
                  src={logo}
                  alt="Little Lemon"
                />
                <p>
                  We are a family owned Mediterranean restraunt, focused on traditional 
                  recipes served with a modern twist.
                </p>
                <div>
                  <h3>USeful Links</h3>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Menu</a></li>
                      <li><a href="/">Reservation</a></li>
                      <li><a href="/">Order Online</a></li>
                      <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                  <h3>Contact</h3>
                    <ul>
                      <li>Address: <br/> Monrovia Street, Opp - I&M Building</li>
                      <li>Mobile: <br/> +254712 345 678</li>
                      <li>Email: <br/> littlelemon.nrb-info@lemon.com</li>
                    </ul>
                </div>
                
                <div>
                  <h3>Connect With Us</h3>
                    <ul>
                      <li><a href="/">Instagram</a></li>
                      <li><a href="/">Tiktok</a></li>
                      <li><a href="/">X(Twitter)</a></li>
                    </ul>
                </div>
              </div>
            </section>
        </footer>
      </div>
    </>
  )
}

export default Footer;
