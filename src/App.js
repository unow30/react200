import "./styles.css";
import ReactstrapButtonDropdown from "./reactstrap/R037_ReactstrapButtonDropdown";
import "bootstrap/dist/css/bootstrap.css";
import R004 from "./list/R004_LifecycleEx";
export default function App() {
  return (
    // <div className="App">
    //   <h1>start react 200</h1>
    //   <p>css 적용하기</p>
    //   <ReactstrapButtonDropdown />
    // </div>
    <div>
      <h1>start react 200</h1>
      <p>css 적용하기</p>
      <R004 prop_value="FromApp.js"></R004>
    </div>
  );
}
