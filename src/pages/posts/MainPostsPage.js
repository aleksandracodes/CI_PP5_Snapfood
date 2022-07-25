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
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [query, setQuery] = useState("");

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
        }
    };

    setHasLoaded(false);
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
            className={`${appStyles.Content} ${columnStyles.CollapsedColumn} ${columnStyles.CategoriesColumn} mb-2`}
          >
            <p className=" font-weight-bold ml-2">Post categories</p>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory(null)}>All</Badge>     
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("spanish")}>Spanish</Badge>             
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("polish")}>Polish</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("italian")}>Italian</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("greek")}>Greek</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("turkish")}>Turkish</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("french")}>French</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("british")}>British</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("german")}>German</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("austrian")}>Austrian</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("lebanese")}>Lebanese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("moroccan")}>Moroccan</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("caribbean")}>Caribbean</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("indian")}>Indian</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("thai")}>Thai</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("japanese")}>Japanese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("chinese")}>Chinese</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("mexican")}>Mexican</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("american")}>American</Badge>
              <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCategory("other")}>Other</Badge>
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>

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
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResultsImage} width={20} height={20} message={message} />
              </Container>
            )}
          </>
        ) : (
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