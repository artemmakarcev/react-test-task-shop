import { Link } from "react-router";
import arrowBack from "../assets/img/arrowBack.svg";

const BackHome = () => {
  return (
    <Link to={"/"} className="flex gap-2">
      <img src={arrowBack} alt="arrowBack" className="w-5 h-5 mr-1" />
      Вернуться к списку товаров
    </Link>
  );
};

export default BackHome;
