import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/common/publicHeader";
import style from "../styles/index.module.css";

const Home = () => {
  const router = useRouter();
  const postsList = useSelector((state) => state.postReducer);
  const posts = postsList.posts;
  return (
    <div style={{ backgroundColor: "#eaecde" }}>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container
        fluid
        className="px-0 py-3"
        style={{
          borderBottom: "2px solid blue",
          width: "95%",
        }}
      >
        <Button
          onClick={() => {
            router.push("/add-article");
          }}
          className="pr-4 pl-4 ml-0 btn-sm"
        >
          Add Post
        </Button>
      </Container>

      {posts.length
        ? posts.map((post, index) => {
            return (
              <Container
                key={index}
                style={{
                  backgroundColor: "white",
                  width: "95%",
                  maxWidth: "95%",
                }}
                className="mt-3"
              >
                <Row>
                  <Col
                    xs="12"
                    sm="12"
                    md="4"
                    style={{
                      height: "350px",
                    }}
                    className={`${
                      index % 2 == 0 ? null : " order-1 order-sm-1 order-md-2"
                    } px-0`}
                  >
                    <img
                      className="img-fluid "
                      style={{ width: "100%", height: "100%" }}
                      src={URL.createObjectURL(post.thumbnail)}
                    />
                  </Col>
                  <Col
                    xs="12"
                    sm="12"
                    md="8"
                    className={`${
                      index % 2 == 0 ? null : "order-2 order-sm-2 order-md-1"
                    }`}
                  >
                    <article>
                      <h2 className="pb-3 text-uppercase">{post.title}</h2>
                      <p>{post.summary}</p>
                    </article>
                    <br></br>
                    <br></br>
                    <div
                      style={{
                        maxWidth: "100%",
                        bottom: "10px",
                        left: "10px",
                        right: "10px",
                        position: "absolute",
                      }}
                    >
                      <Button
                        className="btn-success btn-sm"
                        onClick={() => {
                          router.push("/article");
                        }}
                      >
                        Read More
                      </Button>
                      <div className="float-right">
                        <Button className="btn-primary btn-sm pl-3 pr-3">
                          Edit
                        </Button>
                        <Button className="btn-danger btn-sm pl-2 pr-2 ml-3">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            );
          })
        : null}
      <div className=" mx-auto mt-4 pb-4" style={{ width: "130px" }}>
        <Button className="btn btn-primary btn-sm pl-3 pr-3 ">Load More</Button>
      </div>
    </div>
  );
};
export default Home;
