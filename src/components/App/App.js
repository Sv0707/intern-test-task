import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./App.css";

const App = () => {
  const HomePage = lazy(() =>
    import("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
  );
  const IssuesDetailPage = lazy(() =>
    import(
      "../../pages/IssuesDetailPage/IssuesDetailPage" /* webpackChunkName: "issues-detail-page" */
    )
  );

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:issueNumber">
            <IssuesDetailPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
