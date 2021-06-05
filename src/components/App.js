import Calendar from "./Calendar";
import ToDo from "./ToDo";
import Cart from "./ShoppingCart";
import ResetPassword from "./ResetPassword";
import CampSite from "./CampSite";
import { StatefulComponent, MyStatefulComponent } from "./StatefulComponent";
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
      <MyStatefulComponent />
    </>
  );
}

export default App;
