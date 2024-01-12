import { useEffect, useState } from "react";
import PopUpMessage from "./PopupMessage";
import {MOCK_DATA_3} from "../utils/Mocks/MOCK_DATA_3";

const RightSideBar = () => {
    return (
        <div className="p-4">
            <NewsComponent/>
        </div>
    )
};

const DisclaimerComponent = ({setShowDisclaimer}) => {
    return (
        <div>
            <div className="w-80 h-28 bg-gray-300 p-2 rounded-lg flex flex-col">
                <span onClick={() => setShowDisclaimer(false)} className="flex p-1 justify-end hover:cursor-pointer">⤫</span>
                <span>These are the day’s top professional news stories and conversations.<a href="https://linkedin.com/help/linkedin/answer/a523356" target="_blank" className="text-blue-500 hover:cursor-pointer"> Learn more </a> about how they’re selected. </span>
                
            </div>
        </div>
    )
}

const NewsComponent = () => {

    const [newsData, setNewsData] = useState([]);
    const [length, setLength] = useState(4);
    const [index, setIndex] = useState(0);
    const message = ["Show more", "Show less"];

    const handleShowMore = () => {
        if (index === 0) {
            setIndex(1);
            setLength(8);
        } else {
            setIndex(0);
            setLength(4);
        }
    }

    useEffect(() => {
        const GetNewsDataFromBackend = async () => {
            // const rawData = await fetch(BACKEND_NEWS_DATA_API);
            // const data = await rawData.json();
            const data = MOCK_DATA_3;
            setNewsData(data);
        };
        GetNewsDataFromBackend();
    }, []);

    const [showDisclaimer, setShowDisclaimer] = useState(false);

    const handleSmallBlackBox = () => {
        setShowDisclaimer(true);
    }

    return (
        <div className="w-full">
            <div className=" h-full  w-80 bg-white rounded-lg shadow-lg">
                {showDisclaimer && <DisclaimerComponent setShowDisclaimer={setShowDisclaimer}/>}
                <div className="flex p-4 justify-between">
                    <span className="font-bold text-l">LinkedIn News</span>
                    <div onClick={handleSmallBlackBox} className="w-2 h-2 hover:cursor-pointer bg-black"></div>
                </div>

                <div className="">
                        {newsData.slice(0, length).map((news) => <SingleNewsRow news={news}/>)}
                </div>

                <div className="p-3">
                    <span onClick={handleShowMore} className="w-28 h-4 p-1 hover:cursor-pointer hover:bg-gray-500 bg-gray-300 rounded-md">{message[index]}</span>
                </div>
            </div>

            <PopUpMessage/>
            {/* <div className="w-[300px] h-[50px] bg-white rounded-md">

                </div> */}
        </div>
    )
}

const SingleNewsRow = ({news}) => {
    return (
        <div>
            <div className="w-80 hover:cursor-pointer hover:bg-gray-300 h-auto p-2 flex justify-start">
                    <div className="pr-4 py-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>  
                    
                    <div className="flex flex-col">
                        <span className="font-bold">{news.name}</span>
                        <div className="flex">
                        <span className="font-light text-sm">{news.days} ago</span>
                        <span className="pl-4 font-light text-sm">{news.readersCount} readers</span>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}


export default RightSideBar;