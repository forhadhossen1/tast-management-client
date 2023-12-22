
import useTask from "../../Hooks/useTask";


const AllTask = () => {
    const [isLoading, allTask, refetch] = useTask();
    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <div className="grid grid-cols-1 gap-4">
            {allTask.map(task => (
                <div key={task._id} className="bg-white p-2 rounded">
                    <h2>{task.title}</h2>
                    {/* Other task details */}
                </div>
            ))}
        </div>
    );
};

export default AllTask;