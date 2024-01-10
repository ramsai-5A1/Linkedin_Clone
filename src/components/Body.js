import LeftSideBar from "./LeftSideBar";
import MiddleBar from "./MiddleBar";
import RightSideBar from "./RightSideBar";

const Body = () => {
    return (
        <div className="flex">
            <LeftSideBar/>
            <MiddleBar/>
            <RightSideBar/>
        </div>
    )
};

export default Body;