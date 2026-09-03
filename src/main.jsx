import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Instagram_profile from './instagram_profile.jsx'
import Items from './assets/functional_component/items.jsx'
import Counter from './classbased component/count.jsx'
import Counterapp from './assets/functional_component/counter.jsx'
import Customnavbar from './assets/functional_component/customnavbars.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Customcarousels from './assets/functional_component/customcarousels.jsx'
import Getproducts from './assets/functional_component/getproducts.jsx'


let items=[
  {name:'meghana',pic:'https://i.pinimg.com/474x/8d/8f/0a/8d8f0a482a2fccc637a430b1acd756c5.jpg?nii=t',count:'2000',posts:'20'},
  {name:'vinay',pic:'https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg',count:'2500',posts:'15'},
  {name:'devi',pic:'https://tse3.mm.bing.net/th/id/OIP.0bpu7Db_PoyVk1kdANVACQHaHa?r=0&pid=Api&P=0&h=180',count:'3000',posts:'25'}
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Customnavbar/>
    <Customcarousels/>
    <Getproducts/>


   
  </StrictMode>,
)
