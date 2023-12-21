
const Dashboard = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Task Management Dashboard</h2>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
        {/* To-Do Section */}
        <div className=" bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-4">Wor</h3>
          {/* Placeholder tasks */}
          <div className="bg-white p-2 mb-2 rounded">Task 1</div>
          <div className="bg-white p-2 mb-2 rounded">Task 2</div>
          {/* Add logic to display tasks */}
        </div>

        {/* Doing Section */}
        <div className=" bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-4">Doing</h3>
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
