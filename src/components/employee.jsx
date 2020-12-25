import React, { useEffect, useState } from 'react';


function Device() {

    const [devicesList, setDevicesList] = useState("");
    const [addDevicePopupActive, setAddDevicePopupActive] = useState(false);
    const [deleteDevicePopupActive, setDeleteDevicePopupActive] = useState(false);
    const [addDeviceType, setAddDeviceType] = useState("");
    const [addDeviceModel, setAddDeviceModel] = useState("");
    const [addDeviceId, setAddDeviceId] = useState("");
    const [deleteDeviceId, setDeleteDeviceId] = useState("");
    const getDevicesList = () => {
        var xmlRequest = new XMLHttpRequest();
        console.log("function called");
        xmlRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // console.log(xmlRequest);
                // console.log(xmlRequest.responseText);
                setDevicesList(JSON.parse(xmlRequest.responseText));
            }
          };
        xmlRequest.open('GET', 'http://localhost:8080/restapi/device', true);
        xmlRequest.send();
        
    }

    const displayDevicesList = () => {
        let returnValue = "";
        let devices = [];
        for( let i=0; i < devicesList.length ; i ++) {
                devices.push(devicesList[i]);
        }
        devicesList ? 
        returnValue = (
            <div >
                <table className="overflow-scroll" >
                    <tbody>
                    <tr className="bg-purple-200">
                        <td className="w-40" >type</td>
                        <td className="w-40" >Model</td>
                        <td className="w-40" >Id</td>
                        <td className="w-40">Employee Id</td>
                    </tr> 
                    {
                        devices.map((element) => {
                           console.log(element)
                            return <tr><td>{element.deviceType}</td>
                                        <td>{element.brand}</td>
                                        <td>{element.id}</td>
                                        <td>{element.employeeId}</td>
                                    </tr>;
                        })
                        
                    }
                    </tbody>
                </table>
            </div>

        ) : 
        returnValue = <div className="ml-52">Click on load Button</div>

        return returnValue;
    }

    const something = () => {
        return "something";
    }

    const onClickAddButton = () => {
        setAddDevicePopupActive(!addDevicePopupActive);
    }

    const onClickCancelButton = () => {
        if(addDevicePopupActive) 
            setAddDevicePopupActive(false);
        
        if(deleteDevicePopupActive) 
            setDeleteDevicePopupActive(false);

    }

    const onClickDeleteButton = () => {
        setDeleteDevicePopupActive( !deleteDevicePopupActive);
    }



    const getAddDeviceType = (event) => {
        console.log("event data", event.target.value)
        setAddDeviceType(event.target.value)
    }

    const getAddDeviceModel = (event) => {
        console.log("event data", event.target.value)
        setAddDeviceModel(event.target.value)
    }

    const getAddDeviceId = (event) => {
        console.log("event data", event.target.value)
        setAddDeviceId(event.target.value)
    }

    const getDeleteDeviceId = (event) => {
        setDeleteDeviceId(event.target.value);
    }

    const deleteDevice = () => {
        var xmlRequest = new XMLHttpRequest();
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open("DELETE","http://localhost:8080/restapi/device/"+deleteDeviceId,true);
        xmlRequest.setRequestHeader("Content-Type","application/json");
        xmlRequest.send();
        xmlRequest.onreadystatechange = function()
        {
            if( this.readyState == 4) {
                console.log("Device added successfully");
                setDeleteDevicePopupActive(false);
            }
            
        }
    }

    const displayDevicesListDemo = () => {
        return <span>{devicesList.forEach(element => {
            return element.id
        })}</span>
    }

    const addDevice = (event) => {
            console.log("Device type :", addDeviceType);
            console.log("Device Model : ", addDeviceModel);
            console.log("Device Id :", addDeviceId);
            var xmlRequest = new XMLHttpRequest();
            var data = {id: addDeviceId,deviceType: addDeviceType, brand: addDeviceModel};
            var toSend = JSON.stringify(data);
            var xmlRequest = new XMLHttpRequest();
            xmlRequest.open("POST","http://localhost:8080/restapi/device",true);
            xmlRequest.setRequestHeader("Content-Type","application/json");
            xmlRequest.send(toSend);
            xmlRequest.onreadystatechange = function()
            {
                if( this.readyState == 4) {
                    console.log("Device added successfully");
                }
                
            }

    }

    return (
        <div className="">
            <div className="h-screen w-screen bg-purple-50 ">
                <div className="flex h-32 bg-purple-50 p-10 relative">
                    <div className="border border-gray-300 pt-3 w-28 pl-10 hover:bg-purple-200 cursor-pointer" onClick={onClickAddButton}>
                        add
                    </div>
                    <div className="border border-gray-300 ml-20 w-28 pl-9 pt-3 hover:bg-purple-200 cursor-pointer " onClick={onClickDeleteButton}>
                        delete
                    </div>
                    <div className="border border-gray-300 ml-20 w-28 pl-10 pt-3 hover:bg-purple-200 cursor-pointer" onClick={getDevicesList}>
                        load
                    </div>
                </div>
                <div className="overflow-scroll h-96" >
                    <div>
                        {/* {getDevicesList()} */}
                        {displayDevicesList()}
                    </div>
                </div>
            </div>
            {/* Add device popup window */}
            {addDevicePopupActive ? (<div className="absolute top-20 ml-72 bg-yellow-200 w-1/3 h-2/3 shadow rounded-xl" >
                <div className="bg-green-600 h-20 rounded-t-xl flex">
                    <label className="text-3xl mt-5 ml-5 " >Add Device</label>
                    <div className="mt-6 ml-36 bg-red-600 h-5 w-5 hover:bg-blue-600 mr-5 pl-1 cursor-pointer" onClick={onClickCancelButton}>X</div>
                </div>
                <div>
                    <table className="mt-5">
                        <tr>
                            <td>
                                <label className="text-xl ml-20 w-20 bg-red-500 pb-5">Type </label>
                            </td>
                            <td>
                                :<input type="text" onInput={getAddDeviceType} value={addDeviceType}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="text-lg ml-20 w-20 bg-red-500 pb-5">Model </label>
                            </td>
                            <td>
                                :<input type="text" onInput={getAddDeviceModel} value={addDeviceModel}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="text-lg ml-20 w-20 bg-red-500 pb-5">ID </label>
                            </td>
                            <td>
                                :<input type="text" onInput={getAddDeviceId} value={addDeviceId}></input>
                            </td>
                        </tr>
                    </table>
                    <div className="flex ml-56 mt-20">
                            <div className="w-20 h-10 bg-gray-500 rounded pl-6 pt-2 hover:bg-green-500 cursor-pointer" onClick={addDevice}>
                                <label>Add</label>
                            </div>
                            <div className="w-24 h-10 bg-gray-500 rounded pl-6 pt-2  ml-5 hover:bg-red-900 cursor-pointer" onClick={onClickCancelButton}>
                                <label>Cancel</label>
                            </div>
                        </div>
                    
                </div>
            </div>) : ""}
            {/* Delete device pop up window */}
            {deleteDevicePopupActive ? (<div className="absolute top-20 ml-72 bg-yellow-200 w-1/3 h-2/3 shadow rounded-xl" >
                <div className="bg-green-600 h-20 rounded-t-xl flex">
                    <label className="text-3xl mt-5 ml-5" >Delete Device</label>
                    <div className="mt-6 ml-36 bg-red-600 h-5 w-5 hover:bg-blue-600 mr-5 pl-1" onChange={onClickCancelButton}>X</div>
                </div>
                <div>
                    <table className="mt-5">
                        <tr>
                            <td>
                                <label className="text-xl ml-20 w-20 bg-red-500 pb-5">Id </label>
                            </td>
                            <td>
                                :<input type="text" onInput={getDeleteDeviceId} value={deleteDeviceId}></input>
                            </td>
                        </tr>
                    </table>
                    <div className="flex ml-56 mt-20">
                            <div className="w-20 h-10 bg-gray-500 rounded pl-6 pt-2 hover:bg-green-500 cursor-pointer" onClick={deleteDevice}>
                                <label>Delete</label>
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
