
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
    return (
        <div className="w-52 h-[350px] bg-white shadow-lg rounded-xl">
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