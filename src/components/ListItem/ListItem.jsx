import Add from "@material-ui/icons/Add";
import PlayArrow from "@material-ui/icons/PlayArrow";
import ThumbDownOutlined from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useRef, useState, useEffect } from "react";
import "./ListItem.scss";
const ListItem = ({ index }) => {
  const listItemRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const hoverStyles = {
    borderRadius: "5px",
    position: "absolute",
    top: "-185px",
    width: "325px",
    height: "auto",
    zIndex: "4",
    backgroundColor: "var(--main-color)",
    overflow: "visible",
    // transition: "width 1s 0.1s ease-in-out",
    left: isHovered ? `${index * 230 - 50}px` : "",
  };
  return (
    <>
      <div
        className="list-item"
        style={isHovered ? hoverStyles : {}}
        ref={listItemRef}
        onMouseEnter={() => {
          console.log("hover detected");
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <img
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          alt=""
        />
        {isHovered && (
          <>
            <video progress src={trailer} autoPlay={true} loop />
            <div className="item-info">
              <div className="li-icons">
                <PlayArrow className="li-icon" />
                <Add className="li-icon" />
                <ThumbUpAltOutlined className="li-icon" />
                <ThumbDownOutlined className="li-icon" />
              </div>
              <div className="item-info-top">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListItem;
