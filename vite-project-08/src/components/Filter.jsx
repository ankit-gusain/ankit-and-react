import { filterData } from "../Data";

export default function Filter({ FilterData }) {
    return (
        <div>
            {filterData.map((data) => (
                <button key={data.id}>{data.title}</button>
            ))}
        </div>
    );
}
