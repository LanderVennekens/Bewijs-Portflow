import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import NavigationBar from './navigation/navbar'
import Routing from './navigation/routing'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <>
   <StrictMode>
         <BrowserRouter>
           <NavigationBar/>
           <Routing/>
         </BrowserRouter>
   </StrictMode>
  </>

)
