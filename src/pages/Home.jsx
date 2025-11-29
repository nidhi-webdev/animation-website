import HomeBottomText from "../components/Home/HomeBottomText"
import HomeTopText from "../components/Home/HomeTopText"
import Video from "../components/Home/Video"


const Home = () => {
    return (
        <div>
            <div className="fixed h-screen w-screen ">
                <Video />
            </div>
            <div className="h-screen w-screen relative flex flex-col justify-between">
                <HomeTopText />
                <HomeBottomText />
            </div>
           
        </div>
    )
}

export default Home
