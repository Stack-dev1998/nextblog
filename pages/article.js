import { useState } from "react";
import { Container, Row, Col, Form, Button, Nav, Media } from "react-bootstrap";
import Header from "../components/common/publicHeader";
import style from "../styles/article.module.css";
import Image from "next/image";
import Head from "next/head";

import ShareIcon from "@material-ui/icons/Share";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

export default function Articles() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Head>
        <title>Article</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container className={("h-100 p-2", style.header)}>
        <h2 className="text-upercase text-center ">
          How to improve your eating habit?
        </h2>
      </Container>

      <Container style={{ maxWidth: "90%" }} className="p-2 pl-3 pr-3 ">
        <Row>
          <Col xs="12" sm="2" md="3" lg="3" xl="3">
            <p> NOVEMBER, 25,2020</p>
          </Col>
          <Col xs="12" sm="7" md="7" lg="7" xl="7">
            <div className="float-start">
              <ShareIcon className=" text-primary" />
              <a href="facebook.com">
                <FacebookIcon className="ml-3 text-primary" />
              </a>
              <a href="facebook.com">
                <InstagramIcon className="ml-3 text-primary" />
              </a>
              <a href="facebook.com">
                <TwitterIcon className="ml-3 text-primary" />
              </a>
              <a href="facebook.com">
                <PinterestIcon className="ml-3 text-primary" />
              </a>
            </div>
          </Col>
          <Col xs="12" sm="2" md="2" lg="2" xl="2">
            <p className="float-right">By Hassan</p>
          </Col>
        </Row>

        <div className="d-flex justify-content-center">
          <Image src="/sub_img_2.jpg" width={600} height={300} />
        </div>
        <p className=" pt-3 pb-2 border-bottom border-primary">
          <strong className="text-primary">Summary: </strong> Google Chrome is a
          web browser developed by Google, released in 2008. Chrome is the
          world's most popular web browser today!Not everyone will have access
          to that same font. Which means you will have a problem. That beautiful
          font you just chose is going to show up as something random for your
          visitors.
        </p>
        <div className="mx-auto">
          <p>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!Not
            everyone will have access to that same font.
          </p>
          <p>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!Not
            everyone will have access to that same font. Which means you will
            have a problem. That beautiful font you just chose is going to show
            up as something random for your visitors.
          </p>
          <p>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!Not
            everyone will have access to that same font. Which means you will
            have a problem. That beautiful font you just chose is going to show
            up as something random for your visitors. Not everyone will have
            access to that same font. Which means you will have a problem. That
            beautiful font you just chose is going to show up as something
            random for your visitors.
          </p>
          <br></br>
          <h5>Conclusion</h5>
          <p>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!Not
            everyone will have access to that same font. Which means you will
            have a problem.
          </p>
          <p>
            That beautiful font you just chose is going to show up as something
            random for your visitors. Not everyone will have access to that same
            font. Which means you will have a problem. That beautiful font you
            just chose is going to show up as something random for your
            visitors.
          </p>
        </div>
      </Container>
      <br></br>
      <div
        className="position-relative"
        style={{
          height: "100px",
          backgroundColor: "#c3dbf0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
              <Nav activeKey="/home">
                <Nav.Item>
                  <Nav.Link style={{ color: "black" }}>
                    <LoyaltyIcon className="mr-1" />
                    Tags:
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className=" pl-0 pr-1">
                    <span
                      className="pr-3 pl-3 bg-danger"
                      style={{
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Blog
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className=" pl-0 pr-1">
                    <span
                      className="pr-3 pl-3 mr-0 ml-0 bg-warning"
                      style={{
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Seo
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className=" pl-0 pr-1">
                    <span
                      className="pr-3 pl-3 mr-0 ml-0 bg-info"
                      style={{
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Bing
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className=" pl-0 ">
                    <span
                      className="pr-2 pl-2 mr-0 ml-0 bg-primary"
                      style={{
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      google
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" xl="4">
              <div className="float-right">
                <ShareIcon className=" text-primary" />
                <a href="facebook.com">
                  <FacebookIcon className="ml-3 text-primary" />
                </a>
                <a href="facebook.com">
                  <InstagramIcon className="ml-3 text-primary" />
                </a>
                <a href="facebook.com">
                  <TwitterIcon className="ml-3 text-primary" />
                </a>
                <a href="facebook.com">
                  <PinterestIcon className="ml-3 text-primary" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <Container>
        <h3>Comments</h3>
        <br></br>
        <Row>
          <Col xs="4" sm="4" md="4" lg="2" xl="2" className="text-center">
            <img src="/sub_img_2.jpg" className="img-fluid rounded"></img>
            <br></br>
            <h5>Stcak devp</h5>
          </Col>
          <Col xs="8" sm="9" md="10" lg="10" xl="10">
            <Form className="mb-3">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="btn btn-sm float-right ">Add Comment</Button>
            </Form>
          </Col>
        </Row>

        <hr></hr>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3 rounded"
            src="/sub_img_2.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="d-inline mt-0 pt-0 lh-sm">Stack devp</h5>
            <Button
              className="d-inline pr-3 pl-3 btn-sm float-right"
              variant="outline-primary"
            >
              Edit
            </Button>
            <br></br>
            <small className="text-muted"> 3/3/2020</small>
            <p className="text-justify">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin sdf sdf sdfsd fsd f sdf sdf sd fsd f
              sdsdf sdf sd fsd fs df sdf commodo. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fuscesdfsdf sdf sd fsd f dsf
              sd condimentum nunc ac nisi vulputate fringilla. Donec lacinia
              congue felis in faucibus.
            </p>
            <Button className=" btn btn-sm mt-0 pt-0 " variant="outline-info">
              Reply
            </Button>{" "}
            <Button className=" btn btn-sm mt-0 pt-0 " variant="outline-danger">
              Delete
            </Button>{" "}
            <hr></hr>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3 rounded"
                src="/sub_img_2.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-inline mt-0 pt-0 lh-sm">Stack devp</h5>
                <Button
                  className="d-inline pr-3 pl-3 btn-sm float-right"
                  variant="outline-primary"
                >
                  Edit
                </Button>
                <br></br>
                <small className="text-muted"> 3/3/2020</small>
                <p className="text-justify">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin sdf sdf sdfsd fsd f sdf sdf sd
                  fsd f sdsdf sdf sd fsd fs df sdf commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fuscesdfsdf
                  sdf sd fsd f dsf sd condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <Button
                  className=" btn btn-sm mt-0 pt-0 "
                  variant="outline-info"
                >
                  Reply
                </Button>{" "}
                <Button
                  className=" btn btn-sm mt-0 pt-0 "
                  variant="outline-danger"
                >
                  Delete
                </Button>{" "}
              </Media.Body>
            </Media>
          </Media.Body>
        </Media>
        <hr></hr>
        <div className="d-flex justify-content-center pt-3 pb-4">
          <Button className=" btn btn-sm mt-0 pt-0 " variant="outline-info">
            Load More Comments
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
}
