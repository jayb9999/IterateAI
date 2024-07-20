import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PujaPackage = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const navigate = useNavigate()
    return (
        <div>
            <h3>Select puja package</h3>
            <p>Click on the below prices</p>
            <select onChange={e => setSelectedValue(e.target.value)}>
                <option value = "851">Rs.851</option>
                <option value = "1000">Rs.1000</option>
                <option value = "1800">Rs.1800</option>
                <option value = "2500">Rs.2500</option>
            </select>
            <div>
                <h3>Individual Puja <br/> Puja for 1 person</h3>
                <ul>
                    <li>xxxxx</li>
                    <li>xxxxx</li>
                    <li>xxxxx</li>
                    <li>xxxxx</li>
                </ul>
            </div>
            <button onClick={() => navigate('/payment', {state: {selectedValue}})}>Participate</button>
        </div>
)}

export default PujaPackage