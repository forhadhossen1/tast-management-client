import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UserProfile from "./UserProfile";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const Dashboard = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = async (data) => {

        // now send the menu item data to the server with the image url 
        const taskItem = {
            time: data.time,
            title: data.title,
            tag: data.tag,
            email: data.email,
            description: data.description,
        }

        const taskRes = await axiosPublic.post('/allTask', taskItem);
        console.log(taskRes.data);
        if (taskRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is added to the post.`,
                showConfirmButton: false,
                timer: 1000
              });
        }



    };
    return (
        <section className="py-8 px-4">
            <h2 className="text-3xl font-bold text-center py-5">Task Management Dashboard</h2>

            <UserProfile></UserProfile>

            <div className="flex justify-center items-center gap-4 py-5">
                <p className="text-2xl font-bold py-4">New To Do Add</p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn text-xl font-bold" onClick={() => document.getElementById('my_modal_5').showModal()}>Add +</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div>
                            <h2 className="text-4xl font-bold text-center py-4 block tracking-normal antialiased relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Add Task</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-bold">Deadlines*</span>
                                    </label>
                                    <input {...register("name", { required: true })}
                                        type="date" placeholder="deadline." className="input input-bordered w-full " />

                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-bold">Task Title*</span>
                                    </label>
                                    <input {...register("title", { required: true })}
                                        type="text" placeholder="Recipe name" className="input input-bordered w-full " />

                                </div>


                                <div className="felx-col md:flex gap-6">
                                    {/* tag */}
                                    <div className="form-control w-full md:w-1/2 ">
                                        <label className="label">
                                            <span className="label-text font-bold">Priority*</span>
                                        </label>
                                        <select defaultValue='default' {...register('tag', { required: true })}
                                            className="select select-bordered w-full ">
                                            <option disabled value='default'>Select a Priority</option>
                                            <option value='low'>Low</option>
                                            <option value='moderate'>Moderate</option>
                                            <option value='high'>High</option>
                                        </select>
                                    </div>

                                    {/*email */}
                                    <div className="form-control w-full md:w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Author Email*</span>
                                        </label>
                                        <input {...register("email", { required: true })}
                                            defaultValue={user?.email}
                                            type="text" placeholder="Recipe email" className="input input-bordered w-full " />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Task Description*</span>
                                    </label>
                                    <textarea {...register("description")}
                                        className="textarea textarea-bordered h-24" placeholder="Recie Details"></textarea>
                                </div>

                                {/* <input  className="btn btn-block" type="submit" /> */}
                                <button className="btn btn-block bg-gradient-to-r from-orange-400 to-red-600" >Add Task </button>
                            </form>

                            <form className="fixed top-2 right-3 bg-slate-400 rounded-md">
                                <button className="btn-sm">Close</button>
                            </form>

                        </div>
                    </div>
                </dialog>
            </div>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-3 py-8">
                {/* To-Do Section */}
                <div className=" bg-gray-100 p-4 rounded">
                    <h3 className="text-xl font-semibold mb-4">To-Do</h3>
                    {/* Placeholder tasks */}
                    <div className="bg-white p-2 mb-2 rounded">Task 1</div>
                    <div className="bg-white p-2 mb-2 rounded">Task 2</div>
                    {/* Add logic to display tasks */}
                </div>

                {/* Doing Section */}
                <div className=" bg-gray-100 p-4 rounded">
                    <h3 className="text-xl font-semibold mb-4">Ongoing</h3>
                    {/* Placeholder tasks */}
                    <div className="bg-white p-2 mb-2 rounded">Task 3</div>
                    {/* Add logic to display tasks */}
                </div>

                {/* Completed Section */}
                <div className=" bg-gray-100 p-4 rounded">
                    <h3 className="text-xl font-semibold mb-4">Completed</h3>
                    {/* Placeholder tasks */}
                    <div className="bg-white p-2 mb-2 rounded">Task 4</div>
                    {/* Add logic to display tasks */}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
