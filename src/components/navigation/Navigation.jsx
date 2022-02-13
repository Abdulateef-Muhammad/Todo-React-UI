import AvatarText from "./AvatarText";
import { IoIosArrowBack } from "react-icons/io";
import NavItems from "./NavItems";
import TotalProgress from "./TotalProgress";

const Navigation = ({isOpen}) => {
  return (
    <nav className="bg-cBlue-1000 h-full overflow-auto p-4">
      <div className="flex">
        <div className="flex-grow p-4">
          <AvatarText />
        </div>

        <div className="flex-1 p-6">
          <a href="#" className="p-2 border-[1px] border-[#13262a] inline-block rounded-full" onClick={isOpen}>
            <IoIosArrowBack className="text-white text-xl"/>
          </a>
        </div>
      </div>
      <div className="p-4">
        <NavItems />
      </div>
      <div className="p-4">
        <TotalProgress />
      </div>
    </nav>
  );
};

export default Navigation;
