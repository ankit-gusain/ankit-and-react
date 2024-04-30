import "./AddCss.css"
function AddDate2(props) {
    let type = props.type;
    let day = props.day;
    let year = props.year;

    return (
        <>
            <div className="styler1">
                <div>{type}</div>
                <div>{day}</div>
                <div>{year}</div>
                <br />
            </div>
            <br />
        </>
    )
}

export default AddDate2;    