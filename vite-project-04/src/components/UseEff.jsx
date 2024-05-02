import { useEffect, useState } from "react"

export default function UseEff() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("#useEffect1: runs always and on every click\n")
    })

    useEffect(() => {
        console.log("#useEffect2: runs for the 1st time only \n")
    }, [])

    useEffect(() => {
        if (count >= 15) {
            alert("range reched")
            console.log("#useEffect3: runs on dependecy")
            return;
        }
    }, [count])

    function clickHandler() {
        setCount(count + 1)
    }
    return (
        <>
            <div className="flex justify-center mt-5 mb-5">
                <input
                    type="text"
                    placeholder="0000"
                    value={count}
                    className="p-3 m-3 border-2 border-red-950" />

                <button
                    className="p-3 m-3 border-2 border-black bg-gray-400"
                    onClick={clickHandler}
                >
                    click to inc
                </button>
            </div>
        </>
    )
}