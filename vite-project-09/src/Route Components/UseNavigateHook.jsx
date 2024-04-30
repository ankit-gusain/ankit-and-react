import { useNavigate } from "react-router-dom"

export default function UseNavigateHook() {
    const goto = useNavigate();

    function gotoHome() {
        goto("/home");
    }
    function goback() {
        goto(-1);
    }

    return (
        <>
            <div>
                hey there this is a use navigate hook lets go then and do the stuff Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora doloribus itaque exercitationem minima vero repellendus
                debitis veritatis voluptatum vitae dolorum! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
                <br />
                <button onClick={gotoHome}>go to home</button>
                <br />
                <button onClick={goback}> go back</button>
            </div>
        </>
    )

}