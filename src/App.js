import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Gallery from "./pages/Gallery";
import Upload from "./pages/Upload";
import ImageState from "./context/ImageState";

function App() {
  return (
    <Router>
      <Switch>
        <ImageState>
          <Route exact path={"/"} component={Gallery}/>
          <Route exact path={"/upload"} component={Upload}/>
        </ImageState>
      </Switch>
    </Router>
);
}

export default App;
