import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import SelectPoojaPackage from './components/SelectPoojaPackage'
import PoojasList from './components/Poojas'
import MyPoojaBookings from './components/MyPoojaBookings'
import PujaPackage from './components/PujaPakages'
import FillDetails from './components/FillDetails'
import Payment from './components/Payment'

import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/bookPoojaNow' element={<SelectPoojaPackage />} />
        <Route exact path='/poojas' element={<PoojasList />} />
        <Route exact path='/participate' element={<MyPoojaBookings />} />
        <Route exact path='/selectPackage' element={<PujaPackage />} />
        <Route exact path='/fillDetails' element={<FillDetails />} />
        <Route exact path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App