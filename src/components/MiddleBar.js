import { useCallback, useEffect, useState } from "react";
import { BACKEND_POSTS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPostsToDatabase } from "../utils/PostsDataSlice";
import ShimmerUI from "./ShimmerUI";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { BiSolidLike } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";



const MiddleBar = ({ info }) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            const rawData = await fetch(BACKEND_POSTS_API);
            const data = await rawData.json();
            setPosts(data.data);
            dispatch(addPostsToDatabase(data.data));
        }
        fetchDataFromBackend();
    }, []);
   
    const fetchDataAgain = useCallback(async() => {
        if (isLoading)  return;
        setIsLoading(true);
        const rawData = await fetch(BACKEND_POSTS_API);
        const data = await rawData.json();
        const temp = data.data;
        setPosts([...posts, ...temp]);
        setIsLoading(false);
    }, [isLoading]);
    

    useEffect(() => {
        const handleScrollEvent = () => {
            const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                fetchDataAgain();
            }
        }

        document.addEventListener("scroll", handleScrollEvent);
        return () => {
            document.removeEventListener("scroll", handleScrollEvent);
        }
    }, [fetchDataAgain]);

    if (posts === undefined || posts.length === 0) {
        return <ShimmerUI/>
    }

    return (
        <div>
            <TopMostComponent info={info}/>
            {posts.map((post) => <PostComponent key={post.id} dataObj={post} info={info}/>)}
        </div>
    )
};

const TopMostComponent = ({info}) => {
    const { profileUrl } = info;

    return (
        <div className="py-4">
            <div className="w-[600px] h-28 rounded-xl bg-white shadow-lg">
                <div className="flex p-2">
                    <div className="w-10 h-10 rounded-full py-3 ">
                        <img 
                            alt="profileImage"
                            className="rounded-full"
                            src={profileUrl}/>
                    </div>
                    <input
                        type="text"
                        className="p-2 m-2 border rounded-full w-[550px] border-gray-300"
                        placeholder="Start a post"
                    />
                </div>

                <div className="flex justify-between pl-24 w-[500px]">
                    <div className="w-[70px] flex justify-between hover:cursor-pointer hover:bg-gray-300 rounded-lg p-1"> 
                        <div className="py-1">
                            <BsCardImage />
                        </div>
                        
                        <span>Media</span>
                    </div>

                    <div className="w-[65px] flex justify-between hover:cursor-pointer hover:bg-gray-300 rounded-lg p-1"> 
                        <div className="py-1">
                            <FaRegCalendarDays/>
                        </div>
                        
                        <span>Event</span>
                    </div>

                    <div className="w-[120px] flex justify-between hover:cursor-pointer hover:bg-gray-300 p-1 rounded-lg"> 
                        <div className="py-1">
                            <GrArticle/>
                        </div>
                        <div className="">
                            <span>Write article</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const PostComponent = ({ dataObj, info }) => {
    const { name, profilePic, bio, time, postBody, postImageUrl, postImage } = dataObj;

    return (
        <div className="p-2">
            <div className="w-[600px] h-auto min-h-72 bg-white rounded-lg shadow-lg">
                <PostHeader name={name} profilePic={profilePic} bio={bio} time={time}/>
                <PostBody postBody={postBody} postImageUrl={postImageUrl}/>
                <PostFooter info={info}/>
            </div>
        </div>
    )
};

const PostHeader = ({name, profilePic, bio, time}) => {
    return (
        <div>
            <div className="p-4 flex hover:cursor-pointer">

                <div className="p-2">
                    <img className="h-12 w-12 rounded-full" src={profilePic}/>
                </div>

                <div className="flex flex-col p-1">
                    <span className="font-bold">{name}</span>
                    <span className="text-sm">{bio}</span>
                    <span className="text-xs">{time}</span>
                </div>

            </div>
        </div>
    )
}

const PostBody = ({ postBody, postImageUrl }) => {

    const [seeMore, setSeeMore] = useState(false);
    const [length, setLength] = useState(140);

    const performSeeMore = () => {
        setLength(postBody.length);
        setSeeMore(true);
    }

    const performShowMore = () => {
        setLength(140);
        setSeeMore(false);
    }

    return (
        <div>
            <div className="">
                <p className="p-2">{postBody.substring(0, length)}
                    {!seeMore && <label onClick={performSeeMore} className="hover:cursor-pointer text-gray-500">...see more</label>}
                    {seeMore && <label onClick={performShowMore} className="hover:cursor-pointer text-gray-500"> show less</label>}
                </p>
                { postImageUrl.length > 0 && <div>
                    <img className="w-full h-52" src={postImageUrl}/>
                </div>}
            </div>
        </div>
    )
}

const PostFooter = ({info}) => {    
    const [liked, setLiked] = useState(false);
    const {name, profileUrl} = info;
    
    return (
        <div className="p-1">
            <div className="w-full h-1 bg-gray-100 m-1 rounded-xl shadow-xl"></div>
            <div className="flex justify-between">
                <div className="flex p-1 hover:cursor-pointer hover:bg-gray-300 rounded-lg">
                    { !liked && <BiLike/> }
                    { liked && <BiSolidLike/> }
                    <span onClick={() => setLiked(!liked)} className="text-sm pl-1">Like</span>
                </div>

                <div className="flex p-1 hover:cursor-pointer hover:bg-gray-300 rounded-lg">
                    <FaRegCommentDots/>
                    <span className="text-sm pl-1">Comment</span>
                </div>

                <div className="flex p-1 hover:cursor-pointer hover:bg-gray-300 rounded-lg">
                    <BiRepost/>
                    <span className="text-sm pl-1">Repost</span>
                </div>

                <div className="flex p-1 hover:cursor-pointer hover:bg-gray-300 rounded-lg">
                    <LuSend/>
                    <span className="text-sm pl-1">Send</span>
                </div>
            </div>
            <div className="flex p-2">
                <div className="">
                    <img className="w-12 h-12 rounded-full" src={profileUrl}/>
                </div>
                <div className="pl-2 w-full">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="rounded-full border border-black w-full p-2"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default MiddleBar;