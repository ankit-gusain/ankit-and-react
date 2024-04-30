export default function Spinner() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="relative w-16 h-16 animate-spin">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>


            <p>Loading...</p>

        </>
    )
}
