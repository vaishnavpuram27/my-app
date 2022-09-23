import React, { useState } from 'react'

const OnChange = () => {
    const [name, setName] = useState({ firstName: "First", lastName: "Last" });
    function changeFirstName(e){
        const nameVal = e.target.value;
        console.log(nameVal)
        setName((prev) => ({
            firstName : nameVal,
            lastName:prev.lastName
        }))
    }
    function changeLastName(e){
        const nameVal = e.target.value;
        setName((prev) => ({
            lastName : nameVal,
            firstName:prev.firstName
        }))
    }
    return (
        <div className='change'>
            <p>{name.firstName} {name.lastName}</p>
            <label>First Name</label>
            <input type = "text" name="firstname" onChange={changeFirstName} />
            <label>Last Name</label>
            <input type = 'text' name="lastname" onChange={changeLastName} />

        </div>
    )
}

export default OnChange