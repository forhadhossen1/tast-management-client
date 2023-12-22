import { FaTrash } from "react-icons/fa";
import useTask from "../../Hooks/useTask";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllTask = () => {
    const [isLoading, allTask, refetch] = useTask();
    const axiosPublic = useAxiosPublic();
    if (isLoading) {
        return <div>Loading...</div>;
    }


    const handleDeleteTask = (task) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/all-Task/${task._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
            }
        });

    }


    return (
        <div className="grid grid-cols-1 gap-4">
            {allTask.map(task => (
                <div key={task._id} className="bg-white p-2 rounded flex justify-between">
                    <div>
                        <h2>{task.title}</h2>
                        <p>{task.time}</p>
                    </div>

                    <div>
                        <button onClick={() => handleDeleteTask(task)} className="btn btn-sm text-red-600"><FaTrash></FaTrash> </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllTask;