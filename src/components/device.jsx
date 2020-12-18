import React, { useEffect, useState } from 'react';


function Device() {

    const [devicesList, setDevicesList] = useState("");
    const [popupActive, setPopupActive] = useState(false);
    const getDevicesList = () => {
        var xmlRequest = new XMLHttpRequest();
        console.log("function called");
        xmlRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // console.log(xmlRequest);
                // console.log(xmlRequest.responseText);
                setDevicesList(xmlRequest.responseText);
            }
          };
        xmlRequest.open('GET', 'http://localhost:8080/restapi/device', true);
        xmlRequest.send();
        
    }

    const displayDevicesList = () => {
        let returnValue = "";
        devicesList ? 
        returnValue = (
            <div>
                <table>
                    <tr>
                        <td>type</td>
                        <td>Model</td>
                        <td>Id</td>
                    </tr> 
                    {
                        devicesList.map((devices) => {
                               return (
                                <tr>
                                <td>{devices.deviceType}</td>
                                <td>{devices.id}</td>
                                <td>{devices.brand}</td>
                            </tr>
                               )
                        })
                    }
                    
                    
                </table>
            </div>

        ) : 
        returnValue = <div>NO devices</div>

        return returnValue;
    }

    const something = () => {
        return "something";
    }

    const onClickAddButton = () => {
        setPopupActive(!popupActive);
    }

    const onClickCancelButton = () => {
        setPopupActive(false);
    }

    const displayDevicesListDemo = () => {
        return <span>{devicesList.forEach(element => {
            return element.id
        })}</span>
    }

    return (
        <div className="">
            <div className="h-screen w-screen bg-red-200">
                <div className="flex h-32 bg-gray-500 p-10 ">
                    <div className="border border-gray-300 p-5" onClick={onClickAddButton}>
                        add
                    </div>
                    <div className="border border-gray-300 ml-20 p-5">
                        delete
                    </div>
                    <div className="border border-gray-300 ml-20 p-5" onClick={getDevicesList}>
                        load
                    </div>
                </div>
                <div className="" >
                    {console.log(devicesList)}
                    <div>
                        {getDevicesList()}
                    </div>
                </div>
            </div>
            {popupActive ? (<div className="absolute top-20 ml-72 bg-yellow-200 w-1/3 h-2/3 shadow rounded-xl" >
                <div className="bg-green-600 h-20 rounded-t-xl flex">
                    <label className="text-3xl mt-5 ml-5" >Add Device</label>
                    <div className="mt-6 ml-36" onClick={onClickCancelButton}>X</div>
                </div>
                <div>
                    <table className="mt-5">
                        <tr>
                            <td>
                                <label className="text-xl ml-20 w-20 bg-red-500 pb-5">Type </label>
                            </td>
                            <td>
                                :<input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="text-lg ml-20 w-20 bg-red-500 pb-5">Model </label>
                            </td>
                            <td>
                                :<input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="text-lg ml-20 w-20 bg-red-500 pb-5">ID </label>
                            </td>
                            <td>
                                :<input type="text"></input>
                            </td>
                        </tr>
                    </table>
                    <div className="flex ml-56 mt-20">
                            <div className="w-20 h-10 bg-gray-500 rounded pl-6 pt-2">
                                <label>Add</label>
                            </div>
                            <div className="w-24 h-10 bg-gray-500 rounded pl-6 pt-2  ml-5 hover:bg-red-900 cursor-pointer" onClick={onClickCancelButton}>
                                <label>Cancel</label>
                            </div>
                        </div>
                    
                </div>
            </div>) : ""}
            
            
        </div>
    )
}
export default Device;
