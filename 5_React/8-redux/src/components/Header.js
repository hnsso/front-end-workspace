import { useSelector } from "react-redux"; // 초기값을 가져오는
const Header = () => {
  const counter = useSelector((state) => state.counter);
  return <h1>Total Clicks : {counter}</h1>;
};

export default Header;
