import { useState } from "react";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import Text from "./components/Text";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
        
      <div className="flex justify-center md:flex-row flex-col md:h-[100vh] p-2 bg-gradient-to-r from-teal-800 to-teal-600">
      <Text text="A Todo React UIs" classes="text-white text-4xl p-8 md:basis-[300px] shrink-0 grow-0 font-bold drop-shadow-xl"/>
        <div className="flex w-[320px] md:h-[90vh] h-[100vh] overflow-hidden bg-[#020417] rounded-xl border-2 shadow-2xl justify-self-center self-center">
          <aside
            className={`${
              !open ? "-ml-[100%] w-full" : "w-10/12"
            } transition-all duration-300 overflow-y-auto shrink-0 grow-0`}
          >
            <Navigation isOpen={handleOpen} />
          </aside>
          <div
            className={`${
              open ? "py-10" : "bg-[#f4f6fd]"
            } w-full overflow-y-auto shrink-0 grow-0`}
          >
            <div
              className={`${
                open ? "rounded-[36px] border-2 overflow-hidden" : ""
              } bg-[#f4f6fd] h-full transition-all duration-300`}
            >
              <Main handleOpen={handleOpen} open={open} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
