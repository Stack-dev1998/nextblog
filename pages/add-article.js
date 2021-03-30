import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addPostRequest } from "../components/actions/addPost.action";
import TextEditor from "../components/common/addPost";
import * as types from "../components/types";
import Head from "next/head";
import { Container, Button, Form } from "react-bootstrap";

export default function Home() {
  const [formData, setFormData] = useState("");
  const [img, setImg] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const onSaveChanges = (payload) => {
    setFormData(payload);
  };

  const onSubmit = () => {
    dispatch(addPostRequest(formData));
  };
  return (
    <div style={{ backgroundColor: "#eaecde" }}>
      <Head>
        <title>Add article</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container
        fluid
        style={{ backgroundColor: "white" }}
        className="py-4 py-md-3 "
      >
        <div>
          <h4 className="d-block d-sm-inline text-center">Add Article</h4>
          <div className="float-none float-sm-right  d-flex justify-content-center d-sm-inline  mt-3 mt-sm-0 ">
            <Button
              className="btn btn-sm pl-1 pl-sm-3 pr-1 pr-sm-3 mt-2 mt-sm-0 ml-2"
              onClick={onSubmit}
            >
              Publish Post
            </Button>
            <Button
              className="btn btn-sm pl-1 pl-sm-3 pr-1 pr-sm-3 mt-2 mt-sm-0 ml-2"
              variant="outline-info"
              onClick={() => {
                router.push("/");
              }}
            >
              Cancel Post
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-4">
        <TextEditor onSaveChanges={onSaveChanges} />
      </Container>
    </div>
  );
}
