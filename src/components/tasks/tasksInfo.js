import generateString from "../../helpers/stringGenerator"
const tasksInfo = [
    {
        id: generateString(5),
        taskText: "Meeting with Amelie at Restaurant.",
        checked: false,
        deleted: false
    },
    {
        id: generateString(5),
        taskText: "Meeting with Amelie at Restaurant.",
        checked: false,
        deleted: false
    },
    {
        id: generateString(5),
        taskText: "Meeting with Amelie at Restaurant.",
        checked: false,
        deleted: false
    },
    {
        id: generateString(5),
        taskText: "Reading about API.",
        checked: true,
        deleted: false
    },
    {
        id: generateString(5),
        taskText: "Watch The last Season of The Sopranos.",
        checked: false,
        deleted: false
    },
    {
        id: generateString(5),
        taskText: "Fixing the trip car at FixMart Avenue.",
        checked: true,
        deleted: false
    }
]

export default tasksInfo;