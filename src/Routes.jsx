
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/login'

const Routes = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routes