import generateString from "../../helpers/stringGenerator";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineViewGrid } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { FiPieChart } from 'react-icons/fi';


const navItemsInfo = [
    {
        id: generateString(5),
        navName: "Templates",
        Icon: FiBookmark
    },
    {
        id: generateString(5),
        navName: "Categories",
        Icon: HiOutlineViewGrid
    },
    {
        id: generateString(5),
        navName: "Analytics",
        Icon: FiPieChart
    },
    {
        id: generateString(5),
        navName: "Settings",
        Icon: FiSettings
    }
]

export default navItemsInfo;