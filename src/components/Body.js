import { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleBar from "./MiddleBar";
import RightSideBar from "./RightSideBar";
import ShimmerUI from "./ShimmerUI";
import { useSelector } from "react-redux";

const Body = () => {

    const [apiData, setApiData] = useState(false); 
    const info = useSelector((store) => store.profileInfo.info);

    useEffect(() => {
        setTimeout(() => {
            setApiData(true);
        }, 2000);
    }, []);

    if (!apiData ) {
        return <ShimmerUI/>
    }
    return (
        <div className="flex bg-gray-100">
            <LeftSideBar/>
            <MiddleBar info={info}/>
            <RightSideBar/>
        </div>
    )
};

export default Body;