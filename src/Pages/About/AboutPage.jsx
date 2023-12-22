import Footer from "../Home/Footer";
import FeaturesSection from "./FeaturesSection";


const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Introduction Section */}
            <section className=" py-6">
                <h1 className="text-5xl text-center font-bold mb-4">Welcome to TaskManager</h1>
                <div className="flex justify-center">
                <img src="https://i.ibb.co/SJp82cP/aboutUs1.jpg" alt="" />
                </div>


                <div className="py-7 ">

                    <h1 className="text-4xl font-bold py-3">Increased Productivity</h1>
                    <p>A task management system streamlines workflows, aiding web developers in organizing tasks efficiently. It enhances productivity by offering clear visibility into pending tasks, deadlines, and project statuses, enabling developers to focus more on coding and less on administrative tasks.</p>
                </div>


                <div className="py-7">
                    <h1 className="text-4xl font-bold py-3"> Improved Collaboration</h1>
                    <p>With collaborative features, a task management platform allows web developers to work seamlessly with teams. Shared task boards, real-time updates, and assignment functionalities foster better communication and coordination among team members, enhancing the collaborative spirit among developers.</p>
                </div>


                <div className="py-7">
                    <h1 className="text-4xl font-bold py-3"> Structured Task Prioritization</h1>
                    <p>By providing tools to prioritize tasks based on urgency or project importance, a task management system helps web developers stay on top of their workload. The ability to set priorities and deadlines ensures that crucial tasks are addressed promptly, leading to efficient project management.</p>
                </div>


                <div className="py-7">
                    <h1 className="text-4xl font-bold py-3"> Enhanced Time Management</h1>
                    <p>Task management systems offer time-tracking capabilities, enabling developers to monitor the time spent on specific tasks or projects. This functionality aids in analyzing work patterns, identifying time-consuming activities, and optimizing workflows for better time management.</p>
                </div>

                <div className="py-7">
                    <h1 className="text-4xl font-bold py-3">Streamlined Workflow</h1>
                    <p>By centralizing task-related information and project details in one platform, a task management system simplifies workflow management for web developers. Quick access to project files, task dependencies, and status updates reduces confusion and streamlines development processes.</p>
                </div>

                <p className="text-lg mb-8">Efficient Task Management Made Simple</p>
                {/* Image or illustration showcasing task management */}
            </section>

            <FeaturesSection />
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;
