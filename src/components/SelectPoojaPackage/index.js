import { useNavigate } from 'react-router-dom'

const SelectPoojaPackage = () => {
    const navigate = useNavigate()
    return (
    <>
        <div><img src="xx" alt="img"/></div>
        <h3>No Puja has been booked yet</h3>
        <p>Book your Puja online at Popular Temples of Indis.</p>
        <button onClick={() => navigate('/poojas')}>Book Pooja Now</button>
    </>
)}

export default SelectPoojaPackage