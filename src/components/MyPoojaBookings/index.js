import { useNavigate } from 'react-router-dom'

const MyPoojaBookings = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div><img src="xx" alt="img"/></div>
            <h6>PURNIMA SHAKTHIPEETH NIGHT SPECIAL</h6>
            <hr/>
            <h2>Divya Mahakali Tantrokta Havan</h2>
            <p>For Courage and Protection from Obstacles</p>
            <p>Location: Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
            <p>Time: 21 july, Sunday, Ashadha Shukla Chaturdasi</p>
            <button onClick={() => navigate('/selectPackage')}>Select puja package</button>
        </div>
)}

export default MyPoojaBookings