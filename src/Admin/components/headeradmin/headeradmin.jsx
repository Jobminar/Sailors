import logoImage from '../../assets/Images/logo.png'
import dpdummy from '../../assets/Images/dp-dummy.png'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

export function Headeradmin(){
    const [admin,setadmin] = useState({})
    const [adminCookie, setCookie, removeCookie] = useCookies(["useradmin","admin"]);
    const fetchadmin = async() =>{
        try{
            const response = await axios.get(`http://localhost:7000/subadmin/${adminCookie.admin}`)
            setadmin(response.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(adminCookie.admin){
            fetchadmin()
        }
    },[])
    return(
        <div className="row bg-light ps-3 py-2">
                <div className="col-2 pe-5   d-flex justify-content-between align-items-center" >
                    {/* <div className='ps-2'>
                        <i class="bi bi-list  fs-4 "></i>
                    </div> */}
                    <img
                        src={logoImage}
                        alt="logo-image"
                        className="logo-image-admit-card w-75 "
                    />
                </div>
                <div className="col-10 text-end pe-3 " style={{alignContent:"center"}}>
                    {/* <button className="btn btn-light border border-2 me-4" >
                        <span className="bi bi-bell-fill text-warning position-relative " ><span className="position-absolute badge  " style={{ backgroundColor: "#F97D3D", marginTop: "-15px" }}>2</span></span>
                    </button> */}
                    <span >
                        {
                            (adminCookie.admin)?<Link to={`dashboardadmin/adminprofile/${admin.number}`}><img src={dpdummy} style={{ width: "3%" }} className="bg-dark rounded-circle"></img></Link>:<Link to={`/dashboardadmin/subadmin`}><img src={dpdummy} style={{ width: "3%" }} className="bg-dark rounded-circle"></img></Link>
                        }
                        
                    </span>
                </div>
            </div>
    )
}