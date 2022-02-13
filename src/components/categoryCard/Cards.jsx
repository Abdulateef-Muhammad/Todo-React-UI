import Card from "./Card";
import cardsInfo from "./cardsInfo";
const Cards = () => {
    return (
        <div className="flex">
            {
                cardsInfo.map((card) => {
                    return (
                        <Card catName={card.catName} progress={card.progress} numOfTasks={`${card.numOfTasks} tasks`} key={card.id} />
                    )
                })
            }
        </div>
    )
}

export default Cards;