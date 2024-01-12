import { useSelector } from "react-redux";
import { FaSortDown } from "react-icons/fa";


const LeftSideBar = () => {
    return (
        <div className="h-auto pl-44 py-4 pr-4">
            <div className="p-1">
                <TopBox/>
            </div>

            <div className="p-1">
                <BottomBox/>
            </div>
            
        </div>
    )
};

const TopBox = () => {
    const info = useSelector((store) => store.profileInfo.info);
    const { profileUrl, name, bio } = info;

    return (
        <div className="w-52 h-[325px] bg-white shadow-lg rounded-xl">
            <div className="absolute px-16 py-8">
                <div className="w-16 h-16 bg-gray-300 rounded-full hover:cursor-pointer">
                    <img
                        className="rounded-full"
                        src={profileUrl}
                    />
                </div>
            </div>
            <div className="top-0">
                <div className="w-full h-16 bg-gray-300"></div>
            </div>

            <div className="py-12">
                <div className="flex flex-col items-center">
                    <span className="font-bold hover:underline hover:cursor-pointer">{name}</span>
                    <span>{bio}</span>
                </div>
            </div>

            <div className="w-full h-1 bg-gray-100 shadow-lg"></div>
            <div>
                <div className="flex justify-between p-3 hover:cursor-pointer hover:bg-gray-200">
                    <span className="text-gray-400 font-semibold">Profile viewers</span>
                    <span>158</span>
                </div>

                <div className="hover:bg-gray-200 px-2">
                    <span className="text-gray-400 text-sm hover:cursor-pointer font-semibold ">View all my analytics</span>
                </div>
            </div>

            <div className="w-full h-1 bg-gray-100 shadow-lg"></div>
            <div className="flex p-2 hover:bg-gray-300 hover:cursor-pointer h-auto rounded-bl-lg rounded-br-lg">
                <FaSortDown/>
                <span className="font-semibold">My items</span>
            </div>
        </div> 
    )
};

const BottomBox = () => {
    return (
        <div className="py-2 w-52 h-[450px] bg-white shadow-lg rounded-xl">
        </div>
    )
};

export default LeftSideBar;