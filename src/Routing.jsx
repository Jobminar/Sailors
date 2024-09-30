
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/login'
import { Header } from './components/header/header'

const Routing = () =>{
    return(
        <>
            <BrowserRouter>
               <Header/>
                <Routes>
                    
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing