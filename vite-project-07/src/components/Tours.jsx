import Cards from "./Cards";

export default function Tours({ tours, removeTour }) {
    if (!tours || !Array.isArray(tours) || tours.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 my-4">No Tours Available</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 my-4">Available Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tours.map((tour) => (
                    <Cards key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </div>
    );
}
