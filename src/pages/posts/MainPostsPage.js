import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../styles/MainPostsPage.module.css";
import columnStyles from "../../styles/SmallMenuContainer.module.css";
import appStyles from "../../App.module.css";
import Post from "./Post";
import Asset from "../../components/Asset";
import NoResultsImage from "../../assets/no-results-found.png";
import LikeFeedAddPost from "../../components/LikeFeedAddPost";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function MainPostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [category, setCategory] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  // detect the url change between home, feed & liked pages
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [query, setQuery] = useState("");

  /*
    Handles API request using the filters for each of pages
    to fetch relevant posts to the filter
    Displays all the posts, just posts by the profiles followed, 
    just the liked posts or posts in a specific category
    Shows a loading spinner when required
  */
  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const { data } = await axiosReq.get(
                `/posts/?${filter}search=${query}${
                    category !== null ? `&category=${category}` : ""
                }`
            );
            setPosts(data);
            setHasLoaded(true);
        } catch (err) {
          // console.log(err)
        }
    };
    setHasLoaded(false);
    /*
      Delays making an API request and fetching posts of 1 second
      instead of on each key stroke
    */
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser, category]);

  return (
    <Container>
      <Row>
        <Col className={`${columnStyles.SplitColumns} pt-2 p-0 p-lg-2`} lg={4}>
            <LikeFeedAddPost />

          <Container
            className={`${appStyles.Content} ${columnStyles.CollapsedColumn} mb-2`}
          >
            <PopularProfiles />
          </Container>

          <Container
            className={`${appStyles.Content} ${columnStyles.CollapsedColumn} ${columnStyles.CategoriesColumn}`}
          >
            <p className=" font-weight-bold ml-2">Post categories</p>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory(null)}>All</Badge>     
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Spanish")}>Spanish</Badge>             
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Polish")}>Polish</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Portuguese")}>Portuguese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Italian")}>Italian</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Greek")}>Greek</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Turkish")}>Turkish</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("French")}>French</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("British")}>British</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("German")}>German</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Austrian")}>Austrian</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Lebanese")}>Lebanese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Moroccan")}>Moroccan</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Caribbean")}>Caribbean</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Indian")}>Indian</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Thai")}>Thai</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Japanese")}>Japanese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Chinese")}>Chinese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Mexican")}>Mexican</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("American")}>American</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("Other")}>Other</Badge>
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>

        {/* Posts text search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(e) => e.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
          <i className={`fa-solid fa-eraser ${styles.Clear}`} onClick={() => setQuery("")} />
        </Form>

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              // InfiniteScroll component handles loading more pages of posts as the user scrolls
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post 
                    key={post.id} 
                    {...post} 
                    setPosts={setPosts} 
                    // truncate post description on the main page to 500 characters
                    description={post.description.length > 500 ? (post.description.slice(0, 500) + " .....") : post.description} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              // if no results found, show no results asset with a relevant message
              <Container className={appStyles.Content}>
                <Asset src={NoResultsImage} width={20} height={20} message={message} />
              </Container>
            )}
          </>
        ) : (
          // display a loading spinner if the posts haven't been loaded yet
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}

        </Col>
      </Row>
    </Container>
  );
}

export default MainPostsPage;