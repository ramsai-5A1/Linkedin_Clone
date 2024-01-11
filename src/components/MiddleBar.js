import { useCallback, useEffect, useState } from "react";
import { BACKEND_POSTS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPostsToDatabase } from "../utils/PostsDataSlice";
import ShimmerUI from "./ShimmerUI";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";


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
            <TopMostComponent/>
            {posts.map((post) => <PostComponent key={post.id} dataObj={post} info={info}/>)}
        </div>
    )
};

const TopMostComponent = () => {
    return (
        <div className="py-6">
            <div className="w-[600px] h-28 rounded-xl bg-white">

            </div>
        </div>
    )
}

const PostComponent = ({ dataObj, info }) => {
    const { name, profilePic, bio, time, postBody, postImageUrl, postImage } = dataObj;

    return (
        <div className="p-2">
            <div className="w-[600px] h-auto min-h-72 bg-white rounded-lg">
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
            <div className="p-4 flex">

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
    const {name, profileUrl} = info;
    
    return (
        <div className="p-1">
            <div className="w-full h-1 bg-gray-100 m-1 rounded-xl shadow-xl"></div>
            <div className="flex justify-between">
                <div className="flex p-1">
                    <BiLike/>
                    <span className="text-sm pl-1">Like</span>
                </div>

                <div className="flex p-1">
                    <FaRegCommentDots/>
                    <span className="text-sm pl-1">Comment</span>
                </div>

                <div className="flex p-1">
                    <BiRepost/>
                    <span className="text-sm pl-1">Repost</span>
                </div>

                <div className="flex p-1">
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