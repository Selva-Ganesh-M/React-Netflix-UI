import { useRef, useState } from "react";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import ListItem from "../ListItem/ListItem";
import "./List.scss";

const List = () => {
  const listRef = useRef();
  const [itemIndex, setItemIndex] = useState(0);
  const handleClick = (direction) => {
    const distToBeMoved = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && itemIndex !== 0) {
      setItemIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
      listRef.current.style.transform = `translateX(${230 + distToBeMoved}px)`;
      console.log(itemIndex);
    }
    if (direction === "right" && itemIndex <= 5) {
      setItemIndex((prev) => (prev === 6 ? prev : prev + 1));
      listRef.current.style.transform = `translateX(${distToBeMoved - 230}px)`;
      console.log(itemIndex);
    }
  };
  return (
    <>
      <div className="list">
        <span className="list-title">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            onClick={() => handleClick("left")}
            className="icon left"
          />
          <div ref={listRef} className="container">
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
            <ListItem index={9} />
          </div>
          <ArrowForwardIosOutlined
            onClick={() => handleClick("right")}
            className="icon right"
          />
        </div>
      </div>
    </>
  );
};

export default List;
