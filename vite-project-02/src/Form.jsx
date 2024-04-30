import { useState } from "react";
import './form.css'

function Form() {
    const [newType, setNewType] = useState('');
    const [newName, setNewName] = useState('');

    function TypeHandler(event) {
        setNewType(event.target.value);
    }

    function NameHandler(event) { 
    }

    function SubmitHandler(event) {
        event.preventDefault();

        let newProduct = {
            type: newType,
            name: newName
        };

        console.log(newProduct);

        // Clear input fields by resetting state
        setNewName('');
        setNewType('');
    }

    return (
        <>
            <form action="" className="form" onSubmit={SubmitHandler}>
                <label htmlFor="" className="label" >Name:</label>
                <input type="text" name="" id="" className="input" onChange={NameHandler} value={newName} />
                <br />
                <label htmlFor="" className="label">Type:</label>
                <input type="text" name="" id="" className="input" onChange={TypeHandler} value={newType} />
                <br />
                <button type="submit" className="btn">add to basket</button>
            </form>
        </>
    )
}

export default Form;
