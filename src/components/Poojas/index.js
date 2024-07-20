import { useNavigate } from 'react-router-dom'

const PoojasList = () => {
    const navigate = useNavigate()
    return(
    <>
        <div>
            <div><img src="xx" alt="img"/></div>
            <h6>MAHAVIDYA PURNIMA SPECIAL</h6>
            <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
            <p>for Victory in Court Cases and victory over enimies</p>
            <p>Location: Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
            <p>Time: 21 july, Sunday, Ashadha Shukla Chaturdasi</p>
            <button onClick={() => navigate('/participate')}>Participate</button>
            <hr/>
        </div>
        <div>
            <div><img src="xx" alt="img"/></div>
            <h6>MAHAVIDYA PURNIMA SPECIAL</h6>
            <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
            <p>for Victory in Court Cases and victory over enimies</p>
            <p>Location: Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
            <p>Time: 21 july, Sunday, Ashadha Shukla Chaturdasi</p>
            <button onClick={() => navigate('/participate')}>Participate</button>
            <hr/>
        </div>
        <div>
            <div><img src="xx" alt="img"/></div>
            <h6>MAHAVIDYA PURNIMA SPECIAL</h6>
            <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
            <p>for Victory in Court Cases and victory over enimies</p>
            <p>Location: Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
            <p>Time: 21 july, Sunday, Ashadha Shukla Chaturdasi</p>
            <button onClick={() => navigate('/participate')}>Participate</button>
            <hr/>
        </div>
    </>
)}

export default PoojasList