const Preparings = () => {
  return (
    <div className="w-full lg:w-5/12">
      <div className="overflow-x-auto">
        <div className="border-b border-slate-300 mx-3 lg:mx-10  text-center pb-4">
          <h2 className=" font-semibold text-2xl text-slate-700">
            Want to cook: 01
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
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <th>
                <button className="px-3 py-2 bg-[#0BE58A]  font-bold text-slate-700 rounded-full  ">
                  Preparing
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preparings;
