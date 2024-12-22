"use client";

import CustomButton from "../../../shared/components/atoms/CustomButton"

export default function Main() {

    const work = () => {
        return (
            console.log("동작")
        )
    }
    return (
        <div>
          <CustomButton btnColor="red" handleClick={work}>소원 쓰기</CustomButton>
        </div>
    )
}