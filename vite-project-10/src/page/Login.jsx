import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
    return (
        <Template
            title="Push Your Limits "
            desc1="Success is not final, failure is not fatal, It is the courage to continue that counts 🌟"
            desc2="Study hard to future-proof your career."
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Login;
