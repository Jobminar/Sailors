import './aside.css'
export function Asideicons() {
    return (
        <>
            <aside id="aside-icons">
                <div className="sidebar py-3  " style={{ backgroundColor: "#1B3249" }}>
                    <div className="btn-group-vertical sidebarIcon">
                        <a href="https://www.instagram.com/loidsmarine/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}><button className="bi  bi-twitter text-light fs-2 btn"></button></a>
                        <a href="https://www.facebook.com/profile.php?id=61566467150811" target='_blank' style={{ color: 'black', textDecoration: 'none' }}><button className="bi bi-facebook text-light fs-2 btn"></button></a>
                        <a href="https://www.instagram.com/loidsmarine/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}><button className="bi bi-instagram text-light fs-2 btn"></button></a>
                        <a href="https://www.instagram.com/loidsmarine/" target='_blank' style={{ color: 'black', textDecoration: 'none' }}><button className="bi bi-youtube text-light fs-2 btn"></button></a>
                    </div>
                </div>
            </aside>
        </>
    )
}