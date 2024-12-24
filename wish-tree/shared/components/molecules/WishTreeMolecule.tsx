import MediumTree from "../atoms/icons/MediumTree";
import { Wishes, Wish } from "../../types/WishProps";
import { getObjectComponent } from "../../constants/object";
import { OBJ_POSITIONS } from "../../constants/position";

const WishTreeMolecule: React.FC<Wishes> = ({ wishes }) => {
    if (!wishes) {
        return null; // wishes가 undefined일 경우를 처리
    }

    if (wishes.length > OBJ_POSITIONS.length) {
        console.error("The number of wishes exceeds the number of positions available. Please add more positions.");
        return null;
    }

    return (
        <>
            <MediumTree className="z-0 h-[400px] w-[400px]" />
            {wishes.map((wish: Wish, index: number) => {
                const position = OBJ_POSITIONS[index];
                return (
                    <div 
                        className={`absolute flex flex-col items-center z-10 ${position.TB} ${position.LR}`} 
                        key={wish.wish_id}
                    >
                        <div>{getObjectComponent(wish.obj_id)}</div>
                        <p>{wish.writer_name}</p>
                    </div>
                );
            })}
        </>
    );
};

export default WishTreeMolecule;
