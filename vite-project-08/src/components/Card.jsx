import { data } from "autoprefixer"
export default function Card(course) {
    return (
        <>
            <div>
                <img src={course.image.url} />
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div> 
        </>
    )
}