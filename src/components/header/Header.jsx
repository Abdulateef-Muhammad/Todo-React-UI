import { HiMenuAlt4 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Header = ({isOpen}) => {
  return (
    <div className="">
      <ul className="p-4 flex">
        <li className="flex-none">
          <a href="#" className="align-bottom p-2 inline-block hover:bg-gray-100 rounded-full" onClick={isOpen}>
            <HiMenuAlt4 />
          </a>
        </li>
        <li className="grow"/>
        <li className="flex-none">
          <a href="#" className="align-bottom p-2 inline-block hover:bg-gray-100 rounded-full">
            <FiSearch className="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
