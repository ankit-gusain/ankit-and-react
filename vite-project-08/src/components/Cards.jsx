import Card from "./Card"; // Assuming Card component is imported correctly

export default function Cards({ courses }) {
    // Check if courses is undefined or null, or not an object
    if (!courses || typeof courses !== "object") {
        console.error("Courses data is not properly defined or initialized:", courses);
        return (
            <div className="text-red-500 font-semibold">
                Courses data is not available. Please check the data source.
            </div>
        );
    }

    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }

    return (
        <>
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} /> // Corrected key and spread operator
                ))
            }
        </>
    )
}
