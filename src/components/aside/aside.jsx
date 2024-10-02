import './aside.css'
export function Asideicons() {
    return (
        <>
            <aside id="aside-icons">
                <div className="sidebar py-3  " style={{ backgroundColor: "#1B3249" }}>
                    <div className="btn-group-vertical sidebarIcon">
                        <button className="bi  bi-twitter text-light fs-2 btn"></button>
                        <button className="bi bi-facebook text-light fs-2 btn"></button>
                        <button className="bi bi-instagram text-light fs-2 btn"></button>
                        <button className="bi bi-youtube text-light fs-2 btn"></button>
                    </div>
                </div>
            </aside>
        </>
    )
}