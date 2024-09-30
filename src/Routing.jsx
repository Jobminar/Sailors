
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/login.jsx'

const Routing = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                   <Route path='/' element={<Login/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing