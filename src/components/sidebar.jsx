import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return(
        <div className="h-screen flex">
            {/* <div className="">
                <i className="">
                    <div className=""></div>
                </i>
            </div> */}
            <div className=" flex w-48 bg-purple-100">
                {/* <div className="">
                    <h4>Hari Pvt Ltd</h4>
                </div> */}
                <div className="flex justify-center">
                    <ul className="">
                        <li className="pl-12 pt-2 pb-2 font-sans text-xl  hover:bg-gray-50 w-screen border border-gray-300" >
                            <Link to="/">Device</Link>
                        </li>
                        <li className="pl-12 pt-2 pb-2  font-sans text-xl  hover:bg-gray-50 w-screen border border-gray-300">
                        <   Link to="/employee">Employee</Link>
                        </li>
                        <li className="pl-12 pt-2 pb-2 font-sans text-xl  hover:bg-gray-50 w-screen border border-gray-300">
                        <Link to="/employee">Device</Link>
                        </li>
                        <li className="pl-12 pt-2 pb-2 font-sans text-xl hover:bg-gray-50 w-screen border border-gray-300">
                        <Link to="/">Other</Link>
                        </li>
                        <li className="pl-12 pt-2 pb-2  font-sans text-xl hover:bg-gray-50 w-screen border border-gray-300">
                            <span>About</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;