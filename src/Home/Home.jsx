import Featured from "../components/Featured/Featured";
import Navbar from "../components/Navbar/Navbar";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
    </div>
  );
};

export default Home;
