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
import MainPostsPage from "./pages/posts/MainPostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Body}>
            <Switch>
              <Route 
                exact path="/" 
                render={() => (
                  <MainPostsPage 
                    message="No results found. Adjust the search keyword." /> 
                )} 
              />
              {/* Feed route */}
              <Route 
                exact path="/feed" 
                render={() => (
                  <MainPostsPage 
                    message="No results found. Adjust the search keyword or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`} />
                )} 
              />
              {/* Like posts route */}
              <Route 
                exact path="/liked" 
                render={() => (
                  <MainPostsPage 
                    message="No results found. Adjust the search keyword or like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />
                )} 
              />

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
