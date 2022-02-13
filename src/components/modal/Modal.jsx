import AddTask from "../addTask/AddTask";

const Modal = ({ handleModal, modalShown }) => {
  return (
    <section>
      <div className={`bg-[#f4f6fd]`}>
        <AddTask closeModal={handleModal} />
      </div>
    </section>
  );
};

export default Modal;
