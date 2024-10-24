import Card from "../Card/Card";

const Cards = ({ cards, handleWantToCook }) => {
  return (
    <div className="w-full lg:w-7/12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {cards.map((card) => (
          <Card
            key={card.recipe_id}
            card={card}
            handleWantToCook={handleWantToCook}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
