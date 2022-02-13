import Randomstring from "randomstring";
import NavItem from "./NavItem";
import navItemsInfo from "./navItemsInfo";

const NavItems = () => {

    return (
        <div>
           { navItemsInfo.map((navItem)=> {
               return (
                   <NavItem Icon={navItem.Icon} navName={navItem.navName} key={navItem.id} />
               )
           })}
        </div>
            
    )
}

export default NavItems;