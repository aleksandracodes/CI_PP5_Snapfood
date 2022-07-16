import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";

function App() {

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Body}>
            <Switch>
              <Route exact path="/" render={() => <Landing />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/login" render={() => <LogInForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm /> } />
              <Route exact path="/posts/:id" render={() => <PostPage /> } />
              <Route render={() => <h3>Ooops, this page was not found!</h3>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;
