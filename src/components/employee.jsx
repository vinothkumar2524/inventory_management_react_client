import React, { useEffect, useState } from 'react';

function Employee() {

    const [devicesList, setDevicesList] = useState("");

    const getDevicesList = () => {
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(xmlRequest);
                console.log(xmlRequest.responseText);
            }
          };
        xmlRequest.open('GET', 'http://localhost:8080/restapi/device', true);
        xmlRequest.send();
        
    }

    const something = () => {
        return "something";
    }

    return (
        <div>
            <div className="device-home">
                <div className="device-options">
                    <span>This is employee page  something</span>
                    <button className="device-button">
                        add
                    </button>
                    <button className="device-button">
                        delete
                    </button>
                    <button className="device-button" onClick={getDevicesList}>
                        load
                    </button>
                </div>
                <div className="device-list" >
                    {devicesList}
                    <div>
                        {something()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Employee;
