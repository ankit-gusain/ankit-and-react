export default function Cards({ id, images, price, info, name, removeTour }) {
    return (
        <div className="flex justify-center">
            <div className="max-w-md mx-4 my-4 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
                <img className="w-full h-48 object-cover object-center" src={images} alt="Tour" />
                <div className="px-4 py-4">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600 mb-2">Price: {price}</p>
                    <p className="text-gray-700">{info}</p>
                </div>
                <div className="px-4 pb-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={() => removeTour(id)}>Not Interested</button>
                </div>
            </div>
        </div>
    );
}
