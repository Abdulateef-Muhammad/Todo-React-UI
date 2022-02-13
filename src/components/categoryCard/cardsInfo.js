import generateString from "../../helpers/stringGenerator"

const cardsInfo = [
    {
        id: generateString(5),
        catName: "Business",
        numOfTasks: 20,
        progress: 70 // out of 100
    },
    {
        id: generateString(5),
        catName: "Personal",
        numOfTasks: 50,
        progress: 20 // out of 100
    },
    {
        id: generateString(5),
        catName: "Weekend",
        numOfTasks: 10,
        progress: 90 // out of 100
    },
];

export default cardsInfo;