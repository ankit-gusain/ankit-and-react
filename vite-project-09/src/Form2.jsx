import { useState } from "react";

function Form2() {
    const [data, setData] = useState({ firstName: "", number: "", isCheck: true, state: "delhi" })
    console.log(data)
    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div>
            <form action="">
                <label htmlFor="firstName">Name </label>
                <input
                    type="text"
                    name="firstName"
                    value={data.firstName}          //to maintain the state
                    id="firstName"
                    onChange={changeHandler}
                    placeholder="First name"
                />

                <input
                    type="number"
                    name="phone"
                    value={data.number}          //to maintain the state
                    id="number"
                    onChange={changeHandler}
                    placeholder="Phone Number"
                />


                <label htmlFor="isCheck"></label>
                <input
                    type="checkbox"
                    name="isCheck"
                    onChange={changeHandler}
                    checked={data.isCheck}
                />

                <select
                    name="state"
                    id="state"
                    value={data.state}
                    onChange={changeHandler}
                >

                    <option value="andhra pradesh"> Andhra Pradesh</option>
                    <option value="arunchal pradesh"> Arunachal pradesh</option>
                    <option value="delhi">Delhi</option>
                    <option value="uttrakhand">Uttrakhand</option>
                    <option value="uttar pradesh"> Uttar Pradesh</option>
                    <option value="tamil nadu">Tamil Nadu</option>
                    <option value="Haryana">Haryana</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="gujrat">Gujrath</option>
                </select>
            </form>
        </div>
    )
}

export default Form2;