const Card = ({ card }) => {
  const {
    recipe_img,
    recipe_name,
    short_description,
    preparing_time,
    ingredients,
    calories,
  } = card;

  return (
    <div>
      <div className="card card-compact bg-base-100 border border-slate-200 p-6">
        <figure className="h-52 rounded-xl">
          <img
            src={recipe_img}
            alt="food Images"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="">
          <div className="border-b border-slate-200">
            <h2 className="text-2xl text-slate-800 pt-5 font-bold">
              {recipe_name}
            </h2>
            <p className="text-slate-500 py-4">{short_description}</p>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xl font-semibold text-slate-600 pt-6 pb-4">
              Ingredients: {ingredients.length}
            </h3>
            <ul className="list-disc ml-8 text-slate-500 ">
              {ingredients.map((items, id) => (
                <li key={id}>{items}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6 pt-5 pb-4 text-slate-700">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock text-lg"></i>
              <p>{preparing_time}</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-fire-flame-curved text-lg"></i>
              <p>{calories}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className="btn bg-[#0BE58A] px-6 font-bold text-slate-700 rounded-full py-1 ">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
