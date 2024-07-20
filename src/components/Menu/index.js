import { Link } from 'react-router-dom'
import './index.css'

const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <div>
                <button>Login / Create an account</button>
                <div>
                    <h4>Account Details</h4>
                    <ul>
                    <li>My profile</li>
                    <Link to="/bookPoojaNow"><li>My Puja Bookings</li></Link>
                    <li>My Ramotsav Bookings</li>
                    <li>Book a Puja New</li>
                    </ul>
                </div>
                <div>
                    <h4>Explore Sri Mandir Services</h4>
                    <ul>
                    <Link to="/"><li>Home</li></Link>
                    <li>Panchang</li>
                    <li>Puja Seva New</li>
                    <li>Sanatan Sahitya</li>
                    <li>Aarti</li>
                    <li>Chalisa</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar