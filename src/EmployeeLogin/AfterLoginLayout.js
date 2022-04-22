import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function AfterLoginLayout() {

    const Navigate = useNavigate();
    useEffect(() => {
        return () => {
      
        }
    }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container">
                    <Link className='navbar-brand' to="/">Employee</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav">
                        <button className='mr-sm-2 btn btn-outline-dark' onClick={() => {
                            sessionStorage.removeItem("OwnerLogin")
                            Navigate("/Login")
                        }}>Logout</button>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default AfterLoginLayout