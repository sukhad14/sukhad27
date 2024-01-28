import React from 'react';
import "./navbar.css";
import logo from "./logo.png";
import { UserOutlined, UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className='container'>
            <div className='left-section'>
                <div className='logo'>
                    <img src={logo} alt='logo' style={{ width: "45px", fontFamily: "Roboto,sansSerif" }} />
                </div>
                <div className='company-name'>
                    WASSERSTOFF
                </div>
            </div>
            <div className='search-section'>
                <Input
                    placeholder="Enter your username"
                    suffix={
                        <Tooltip title="Extra information">
                            < SearchOutlined
                                style={{
                                    color: 'rgba(0,0,0,.45)',
                                }}
                            />
                        </Tooltip>
                    }
                />
            </div>
            <div className='navigation'>
                <NavLink className="navigation__link" to='#'>Statics</NavLink>
                <NavLink className="navigation__link" to="/">Overview</NavLink>
                <NavLink className="navigation__link" to="dashboard">Dashboard</NavLink>
                <NavLink className="navigation__link" to='#'>Analytics</NavLink>
            </div>
            <div className='right-side'>
                <div className='user'>
                    <UserOutlined />
                </div>
                <div className='option'>
                    <UnorderedListOutlined />
                </div>
            </div>
        </div>
    );
}

export default Navbar;



// import React from "react";
// import { Input } from "antd";
// import { Link } from "react-router-dom";
// import logo from "./logo.png";
// import { UserOutlined, UnorderedListOutlined } from "@ant-design/icons";
// import SearchInput from '../AntComponents/SearchInput';
// import "./navbar.css";