const Preparings = ({ cooks, handlePreparing, currently, times, calories }) => {
  return (
    <div className="w-full lg:w-5/12">
      {/* Want to cook */}
      <div className="overflow-x-scroll">
        <div className="border-b border-slate-300 mx-0 lg:mx-10  text-center pb-4">
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
              <tr key={idx} className="hover text-sm">
                <th>{idx + 1}</th>
                <td>{cook.recipe_name}</td>
                <td>{cook.preparing_time} minutes</td>
                <td>{cook.calories} calories</td>
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
          </tbody>
        </table>
      </div>

      {/* Currently cooking */}
      <div className="overflow-x-auto pt-5">
        <div className="border-b border-slate-300 mx-3 lg:mx-10  text-center pb-4">
          <h2 className=" font-semibold text-2xl text-slate-700">
            Currently cooking: {currently.length}
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
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currently.map((current, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{current.recipe_name}</td>
                <td>{current.preparing_time} minutes</td>
                <td>{current.calories} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xs">
              <th></th>
              <th></th>
              <th></th>
              <th>Total times = {times} minutes</th>
              <th>Total Calories = {calories} calories</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Preparings;
