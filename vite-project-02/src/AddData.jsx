import { useState } from "react";
import Form from "./Form";

function AddData(props) {
    // Corrected props usage and state initialization
    let [type, setType] = useState(props.type);
    let [name, setName] = useState(props.name);

    function ClickHandler() {
        // Corrected state updates using setter functions
        setType("soap");
        setName("555");
    }

    return (
        <>
            <div>
                <h5>{type}</h5>
                <h5>{name}</h5>
                <button onClick={ClickHandler}>click dosto</button>
                <br />
            </div>
        </>
    );
}

export default AddData;
