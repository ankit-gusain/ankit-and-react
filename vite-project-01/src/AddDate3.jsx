import { useState } from "react";
import "./AddCss.css"

function AddDate3(props) {
    let name = props.name;
    let date = props.date;

    const [title, setTitle] = useState(props.name);

    function clickHandler() {
        console.log("i m clicked");
        setTitle("sample");
    }
    return (
        <>
            <br />
            <h2> {title}</h2>
            <div className="styler2">
                <div>{props.type}</div>
                <div>{name}</div>
                <div>{date}</div>
                <button onClick={clickHandler}>submit mee</button>
                <br />
            </div>
            <br />
        </>
    )
}

export default AddDate3;    