import { FiBookmark } from "react-icons/fi";
import Text from "../Text";
const NavItem = ({ Icon, navName}) => {
  return (
    <div>
      <a href="#" className="flex">
        <div className="p-2 pl-0">
            <Icon className="text-gray-400 inline-block align-middle"/>
        </div>
        <div className="p-2">
          <Text text={navName} classes="text-white align-bottom" />
        </div>
      </a>
    </div>
  );
};

export default NavItem;
