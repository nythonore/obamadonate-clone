import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/payment' component={PaymentPage} />

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
