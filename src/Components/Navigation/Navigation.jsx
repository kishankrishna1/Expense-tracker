import React, { useState } from 'react'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import Styles from "./Navigation.module.css";

function Navigation({active, setActive}) {
    
    return (
        <div className={Styles.main}>
            <div className={Styles.userCon}>
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>kishan</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className={Styles.menuItems}>
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? `${Styles.active}`: ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </div>
    )
}

export default Navigation