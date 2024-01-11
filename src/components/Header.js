import { FaHome } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";



const Header = () => {
    return (
        <div className="flex  w-full  h-14 shadow-lg">
            <div className="flex justify-between w-[3/12] py-2 px-[100px]">
                <img className="w-10 h-10 rounded-sm" src="data:image/png;base64,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"/>
                <div className="px-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[300px] rounded-sm p-2 h-10 bg-gray-300"
                    />
                </div>
                
            </div>

            <div className="w-[700px] p-1">
                <div className="flex justify-between ">
                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                        <div className="px-2">
                            <FaHome className="w-[30px] h-[30px] " />
                        </div>
                        <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">Home</span>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg "> 
                        <div className="px-6">
                            <BsFillPeopleFill className="w-[30px] h-[30px] " />
                        </div>
                        <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">My Network</span>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                         <div className="px-2">
                            <FaSuitcase className="w-[30px] h-[30px] " />
                        </div>
                        <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">Jobs</span>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                        <div className="px-4">
                            <FiMessageSquare className="w-[30px] h-[30px] " />
                        </div>
                        <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">Messaging</span>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                        <div className="px-4">
                            <IoNotificationsSharp className="w-[30px] h-[30px] " />
                        </div>
                        <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">Notifications</span>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                        <div className="px-2">
                            <CgProfile className="w-[30px] h-[30px] " />
                        </div>
                        <div className="flex">
                            <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">Me</span>
                            <BiSolidDownArrow/>
                        </div>

                    </div>

                    <div>
                        <div className="bg-gray-300 w-[1px] shadow-lg h-12"></div>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                        <div className="px-4">
                            <TbGridDots className="w-[30px] h-[30px] " />
                        </div>
                        <div className="flex">
                            <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">For Business</span>
                            <BiSolidDownArrow/>
                        </div>
                    </div>

                    <div className="flex flex-col hover:cursor-pointer rounded-lg ">
                        <div className="px-6">
                            <BsSuitcaseLgFill className="w-[30px] h-[30px] " />
                        </div>
                        <span className="text-xs w-full hover:bg-gray-200 p-1 rounded-lg">Post a job for free</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;