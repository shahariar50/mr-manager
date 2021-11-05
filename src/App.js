import RootLayout from "components/common/layout/RootLayout";
import HomePage from "pages/HomePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
        </Switch>
      </RootLayout>
    </div>
  );
}

export default App;
