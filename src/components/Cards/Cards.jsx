import Card from "../Card/Card";

const Cards = ({ cards }) => {
  console.log(cards);
  return (
    <div className="w-full lg:w-7/12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {cards.map((card) => (
          <Card key={card.recipe_id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
