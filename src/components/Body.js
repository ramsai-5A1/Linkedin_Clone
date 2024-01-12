import { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleBar from "./MiddleBar";
import RightSideBar from "./RightSideBar";
import ShimmerUI from "./ShimmerUI";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";

const Body = () => {
    console.log("Body");
    const [apiData, setApiData] = useState(false); 

    useEffect(() => {
        setTimeout(() => {
            setApiData(true);
        }, 2000);
    }, []);

    if (!apiData ) {
        return <ShimmerUI/>
    }
    return (
        <div className="">
            <Outlet/>
        </div>
    )
};

export const HeaderDummy = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export const MainContainer = () => {
    const info = useSelector((store) => store.profileInfo.info);
    return (
        <div className="flex bg-gray-100 py-14"> 
            <LeftSideBar/>
            <MiddleBar info={info}/>
            <RightSideBar/>
        </div>
    )
}

export default Body;