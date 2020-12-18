import React from 'react';
import {Link} from 'react-router-dom';


const SideBar = () => {
    return(
        <div className="h-screen flex">
            <div className="">
                <i className=""></i>
            </div>
            <div className=" flex w-48 bg-red-300">
                <div className="">
                    <h4>Jessica</h4>
                </div>
                <div className="flex justify-center p-5">
                    <ul>
                        <li className="p-3">
                            <Link to="/">Device</Link>
                        </li>
                        <li className="p-3">
                        <   Link to="/employee">Employee</Link>
                        </li>
                        <li className="p-3">
                        <Link to="/employee">Device</Link>
                        </li>
                        <li className="p-3">
                        <Link to="/">other</Link>
                        </li>
                        <li className="p-3">
                            <span>About</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;