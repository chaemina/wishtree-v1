import MessageCard from "../atoms/MessageCard";

const MainMolecule = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <MessageCard message={message} />
    </div>
  );
};

export default MainMolecule;
