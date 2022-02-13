import Header from "../header/Header";
import Text from "../Text";
import Button from "../button/Button";
import Cards from "../categoryCard/Cards";
import Tasks from "../tasks/Tasks";
import { IoAdd } from "react-icons/io5";
import Modal from "../modal/Modal";
import { useState } from "react";

const Main = ({ handleOpen, open }) => {
  const [modalShown, setModalShown] = useState(false);
  const handleModal = () => {
    setModalShown(!modalShown);
  };
  return (
    <main className="relative">
      <div>
        <Header isOpen={handleOpen} />
      </div>
      <div className="p-4">
        <Text
          text="What's up, Mathew!"
          classes="text-gray-600 text-3xl font-bold"
        />
      </div>
      <div className="">
        <div className="p-4 pb-0">
          <Text text="categories" />
        </div>
        <div className="p-4 overflow-auto">
          <Cards />
        </div>
      </div>
      <div className="p-4">
        <div className="p-2">
          <Text text="today's tasks" />
        </div>
        <div className="py-2">
          <Tasks />
        </div>
      </div>
      <div
        className={`${
          modalShown
            ? "w-full h-full bottom-0 right-0 mt-[-90vh] z-20"
            : "w-0 h-0 bottom-[2.5%] right-[30px] invisible z-0"
        } sticky transition-all duration-[400ms] overflow-hidden`}
      >
        <Modal handleModal={handleModal} modalShown={modalShown} />
      </div>
      <div
        className={`${
          open
            ? "hidden"
            : " flex justify-end sticky bottom-[3%] pr-[20px] z-10 -mt-10"
        }`}
      >
        <Button Icon={IoAdd} handleClick={handleModal} />
      </div>
      
    </main>
  );
};

export default Main;
