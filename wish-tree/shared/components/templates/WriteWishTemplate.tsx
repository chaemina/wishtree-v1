import MessageCard from "../atoms/MessageCard";

const WriteWishTemplate = () => {

    const name = "채민아" // api 연결 
    return (
        <div className="w-full h-full flex flex-col items-center">
            <MessageCard message={`${name}의 크리스마스 소원`}/>
        </div>
    )
}

export default WriteWishTemplate