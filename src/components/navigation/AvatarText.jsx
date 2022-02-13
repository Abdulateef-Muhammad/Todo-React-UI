import Avatar from "./Avatar";
import Text from "../Text";

const AvatarText = () => {
  const imgSrc =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80";
  return (
    <div>
      <div>
        <Avatar imgSrc={imgSrc} pct={45} />
      </div>
      <div className="pt-6">
        <Text text="Mathew Raymond" classes="text-2xl font-bold text-white" />
      </div>
    </div>
  );
};

export default AvatarText;
