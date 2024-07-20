import { useNavigate } from 'react-router-dom'

const FillDetails = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h6>Enter Your Whatsapp Number</h6>
            <p>Your puja booking updates like puja photos, videos and otherdetails will be sent on WhatsApp on below numbers.</p>
            <input type='number' placeholder='Your Whatsapp number'></input>
            <h6>Enter Your Name</h6>
            <input type='text' placeholder='Your Name'></input>
            <button onClick={() => navigate('/payment')}>Next</button>
        </div>
)}

export default FillDetails