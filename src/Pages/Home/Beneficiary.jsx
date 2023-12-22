
const Beneficiary = () => {
    return (
        <div>

            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-indigo-200">

                        <section className="py-12 text-center">
                            <h2 className="text-6xl font-bold mb-8">Developer Beneficiary</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 pt-10">
                                <div className="max-w-xs mx-4" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <img src="https://i.ibb.co/2MCmzRS/digital-marketing.png" alt="Task Management" className="mx-auto mb-4 w-20 h-20" />
                                    <p className="text-gray-800">Effortlessly manage tasks and workflows.</p>
                                </div>
                                <div className="max-w-xs mx-4" data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <img src="https://i.ibb.co/4Ssm1ht/lecture.png" alt="Collaboration Tools" className="mx-auto mb-4 w-20 h-20" />
                                    <p className="text-gray-800">Enhance collaboration with team members.</p>
                                </div>
                                <div className="max-w-xs mx-4" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <img src="https://i.ibb.co/0sCs4BD/prioritization.png" alt="Priority Management" className="mx-auto mb-4 w-20 h-20" />
                                    <p className="text-gray-800">Effectively prioritize tasks for streamlined productivity.</p>
                                </div>
                                {/* Add more beneficiary items as needed */}
                            </div>
                        </section>
                    </div>
                </div>
                <img src="https://i.ibb.co/s6KdYW7/custom.webp" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>

        </div>
    );
};

export default Beneficiary;