import React, {useState} from 'react';

function Demo() {
    const [name, setName] = useState("poli");
    const changeName = () => {
        setName("vinoth");
        console.log("++");
    }

    return (
        <div>
            <div>{name}</div>
            <button onClick={changeName}>clickme</button>
        </div>
    );
}

export default Demo;