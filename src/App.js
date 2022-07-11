import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className={styles.App}>
        <NavBar />
        <Container className={styles.Body}>
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/login" render={() => <h1>Log in</h1>} />
            <Route render={()=><h3>Ooops, this page was not found!</h3>} />
          </Switch>
        </Container>
    </div>
  );
}

export default App;