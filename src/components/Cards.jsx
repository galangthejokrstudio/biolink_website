import CardFrame from "./CardFrame";
import C from "../assets/images/C.jpg";
import LinksGridButton from "./LinksGridButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLink, faMusic, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faLastfm, faSpotify, faSteam, faYoutube } from "@fortawesome/free-brands-svg-icons";
import roblox from "../assets/images/roblox.png"
import aoty from "../assets/images/aoty.png"
import bgmusic from "../assets/songs/bgmusic.mp3"
import AudioPlayer from "./AudioPlayer";

const Cards = () => {
  return (
    <div className="relative flex justify-center items-center md:justify-normal md:items-start flex-col gap-4 md:w-[60%]">
      {/* Profile Card */}
      <CardFrame className="p-4 pr-5 shadow-lg rounded-lg md:mt-4 top-4 md:top-0 fixed w-[92%] md:w-auto md:relative z-50">
        <div className="flex items-center space-x-4">
          <img src={C} className="object-cover rounded-full w-16 h-16" alt="Profile" />
          <div className="inline-block">
            <h1 className="font-bold text-lg">kyoto</h1>
            <h2 className="text-xs whitespace-nowrap">
              teen, I code lua, py and react websites<br/>discord: @kyoto.q
            </h2>
          </div>
        </div>
      </CardFrame>

      <div className="md:w-full fixed mx-4 md:mx-0 md:static flex gap-2 md:gap-4 md:p-0 flex-col bottom-4">
        
      {/* Links Card */}
        <CardFrame className="p-4 shadow-lg rounded-lg w-full md:w-max">
          <div className="items-center space-x-4 p-2">
            <div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faLink}/>
                <div>
                  <h1 className="font-bold text-lg">Links</h1>
                  <h2 className="text-xs whitespace-nowrap">Useful links maybe? if u wanna check them...</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 pt-4">
                <LinksGridButton link={"https://open.spotify.com/user/ouu982by96ws7v6r9ugkxz4u4"} text={"Spotify"}><FontAwesomeIcon icon={faSpotify} className="pr-2"/></LinksGridButton>
                <LinksGridButton link={"https://www.last.fm/user/ilyIucas"} text={"Last.fm"}><FontAwesomeIcon icon={faLastfm} className="pr-2"/></LinksGridButton>
                <LinksGridButton link={"https://steamcommunity.com/id/lucasixiv"} text={"Steam"}><FontAwesomeIcon icon={faSteam} className="pr-2"/></LinksGridButton>
                <LinksGridButton link={"https://www.roblox.com/users/1154813280/profile"} text={"Roblox"}><img className="h-4 w-4 mr-2" src={roblox}/></LinksGridButton>
                <LinksGridButton link={"https://www.albumoftheyear.org/user/ilylucas/"} text={"AOTY"}><img className="h-4 w-4 mr-2" src={aoty}/></LinksGridButton>
                <LinksGridButton link={"https://www.youtube.com/watch?v=hHtW6fDkD2g"} text={"Es decir que se..."}><FontAwesomeIcon icon={faYoutube} className="pr-2"/></LinksGridButton>
              </div>
            </div>

          </div>
        </CardFrame>

        {/* Music Card */}
        <AudioPlayer/>
      </div>
    </div>
  );
};

export default Cards;
