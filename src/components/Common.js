
const Common = ({ message }) => {
    return (
        <div className="p-20 px-36">
            <div className="w-full h-40 bg-gray-300 flex justify-center rounded-lg">
                <div className="flex flex-col">
                    <span className="font-bold text-xl p-4">{message} webpage</span>
                    <span className="font-bold">{"(Under construction)"}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Common;