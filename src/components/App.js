import Calendar from "./Calendar";
import ToDo from "./ToDo";
import Cart from "./ShoppingCart";
import ResetPassword from "./ResetPassword";
import CampSite from "./CampSite";
import { StatefulComponent, MyStatefulComponent } from "./StatefulComponent";
import ChangeName from "./ChangeName";
import Counter10 from "./Counter10";
import Counter from "./Counter";
import NowYouSeeMe from "./NowYouSeeMe";
import ControlledInput from "./ControlledInput";
import SubmitInput from "./SubmitInput";
import FirstNavBar from "./FirstNavBar";
import GetRender from "./GetRender";
import DidMount from "./DidMount";
import EventListener from "./EventListener";
import OnlyEvens from "./OnlyEvens";
import Colorful from "./InlineStyles";
import MagicEightBall from "./MagicEightBall";
import CheckUserAge from "./TernaryCondition";

import "../index.css";

function App() {
  return (
    <>
      <Calendar />
      <ToDo />
      <Cart />
      <ResetPassword />
      <CampSite />
      <StatefulComponent />
      <ChangeName />
      <Counter10 />
      <Counter />
      <NowYouSeeMe />
      <MyStatefulComponent />
      <ControlledInput />
      <SubmitInput />
      <FirstNavBar />
      <GetRender />
      <DidMount />
      <EventListener />
      <OnlyEvens />
      <Colorful />
      <MagicEightBall />
      <CheckUserAge />
    </>
  );
}

export default App;
