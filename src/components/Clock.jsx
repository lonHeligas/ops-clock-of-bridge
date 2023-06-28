import Clock from "react-flip-clock-en";
import "../styles/Clock.css"
 
const Index = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};
 
render(<Index />, document.getElementById("app"));