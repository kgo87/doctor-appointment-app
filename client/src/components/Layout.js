import React from 'react';
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import {Navigate} from 'react-router-dom';


function Layout({children}) 
{
    const location = useLocation();
    const userMenu = [
        {
            name: "Home",
            path: "/",
            icon: "ri-home-line"
        },
        {
            name: "Appointments",
            path: "/appointments",
            icon: "ri-file-list-line"
        },
        {
            name: "Apply as Doctor",
            path: "/apply-doctor",
            icon: "ri-hospital-line"
        },
        {
            name: "Profile",
            path: "/profile",
            icon: "ri-user-line"
        },
        {
            name: "Logout",
            path: "/lpgout",
            icon: "ri-login-box-line"
        }
    ];

    const menuToBeRendered = userMenu;

    return (
        <div className = "main"> 
            <div className = "d-flex layout"> 
                <div className = "sidebar"> 
                    <div className = "sidebar-header">
                        <h1> HC </h1> 
                    </div>
                    <div className = "menu">
                    {menuToBeRendered.map((menu) => 
                    {
                        const isActive = location.pathname === menu.path;
                        return (
                        <div className = {`d-flex menu-item ${
                            isActive && "active-menu-item"
                          }`}>
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                        </div>
                            );
                    })}
                    </div>
                </div>
                <div className = "content">
                    <div className = "header"> header</div>
                    <div className = "body"> 
                        {children}
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Layout