const Preparings = ({ cooks, handlePreparing }) => {
  console.log(cooks);
  return (
    <div className="w-full lg:w-5/12">
      <div className="overflow-x-auto">
        <div className="border-b border-slate-300 mx-3 lg:mx-10  text-center pb-4">
          <h2 className=" font-semibold text-2xl text-slate-700">
            Want to cook: {cooks.length}
          </h2>
        </div>
        <table className="table mt-3">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th></th>
              <th>Name</th>
              <th>Times</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cooks.map((cook, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{cook.recipe_name}</td>
                <td>{cook.preparing_time}</td>
                <td>{cook.calories}</td>
                <th>
                  <button
                    onClick={() => handlePreparing(cook)}
                    className="px-3 py-2 bg-[#0BE58A]  font-bold text-slate-700 rounded-full  "
                  >
                    Preparing
                  </button>
                </th>
              </tr>
            ))}
            {/* <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <th>
                <button className="px-3 py-2 bg-[#0BE58A]  font-bold text-slate-700 rounded-full  ">
                  Preparing
                </button>
              </th>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preparings;
