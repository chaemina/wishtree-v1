import { BoxProps } from "../../types/BoxProps";

const Box = ({children} : BoxProps) => {
    return(
        <div className="w-full bg-opacity-30 p-2 flex justify-center rounded-xl items-center bg-white">{children}
        </div>
    )
}

export default Box;