
const ShimmerUI = () => {
    return (
        <div className="flex bg-gray-100">
            <ShimmerLeftSideBar/>
            <ShimmerMiddleBar/>
            
        </div>
    )
};

const ShimmerLeftSideBar = () => {
    return (
        <div className="h-auto pl-44 pr-4 py-4">
            <div className="p-1">
                <div className="w-52 h-[350px] bg-white shadow-lg rounded-xl">
                </div> 
            </div>

            <div className="p-1">
                <div className="py-2 w-52 h-[450px] bg-white shadow-lg rounded-xl">
                </div>
            </div>
            
        </div>
    )
}

const ShimmerMiddleBar = () => {
    return (
        <div>
            <div className="py-6">
                <div className="w-[600px] h-28 rounded-xl bg-white">
                </div>
            </div>

            <div className="flex flex-col">
                <ShimmerPostComponent/>
                <ShimmerPostComponent/>
                <ShimmerPostComponent/>
                <ShimmerPostComponent/>
                <ShimmerPostComponent/>
            </div>
            
        </div>
    )
}

const ShimmerPostComponent = () => {
    return (
        <div>
            <div className="py-1">
                <div className="w-[600px] h-auto min-h-96 bg-white">
                </div>
            </div>
        </div>
    )
}

export default ShimmerUI;