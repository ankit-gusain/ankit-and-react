import { useState } from "react";

function Form2() {


    const [newName, setName] = useState("");
    const [newAge, setAge] = useState("");
    function nameHandler(event) {
        setName(event.target.value);
    }

    function agehandler(event) {
        setAge(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        let data = [
            {
                name: newName,
                age: newAge
            }
        ]
        console.log(data);

    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <label>name:</label>
                <input type="text" onChange={nameHandler} />
                <br />
                <label>age:</label>
                <input type="text" onChange={agehandler} />
                <br />
                <button type="submit"> submit </button>
            </form>
        </>
    )
}
export default Form2;