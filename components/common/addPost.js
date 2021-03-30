import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const TextEditor = (props) => {
  const [thumbnail, setThumbnail] = useState("");
  const [editorData, setEditorData] = useState("");
  const [formErrors, setFormError] = useState({
    isError: false,
    message: "",
  });

  const handleContent = (e) => {
    setEditorData(e);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      summary: "",
      tags: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "Must be min 2 characters or greater")
        .required("Required"),
      summary: Yup.string()
        .min(2, "Must be min 2 characters or greater")
        .required("Required"),
      tags: Yup.string()
        .min(2, "Must be min 2 characters or greater")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const payload = {
        title: values.title,
        summary: values.summary,
        tags: values.tags,
        thumbnail: thumbnail,
        editorData: editorData,
      };

      payload.thumbnail.size > 0
        ? props.onSaveChanges(payload)
        : setFormError({
            ...formErrors,
            isError: true,
            message: "Thumbnail image is required",
          });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Control
        id="title"
        name="title"
        type="text"
        placeholder="Enter blog title here.."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}
      <Form.Control
        type="text"
        className="mt-4"
        name="summary"
        placeholder="Blog summary..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
      />
      {formik.touched.summary && formik.errors.summary ? (
        <div>{formik.errors.summary}</div>
      ) : null}

      <Form.Control
        type="text"
        className="mt-4"
        id="tags"
        name="tags"
        placeholder="Add tags..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.tags}
      />
      {formik.touched.tags && formik.errors.tags ? (
        <div>{formik.errors.tags}</div>
      ) : null}
      <br></br>
      <Form.Control
        id="file"
        name="file"
        type="file"
        placeholder="Enter blog title here.."
        onChange={(e) => {
          setThumbnail(e.target.files[0]);
        }}
      />
      <p className="text-danger">{formErrors.isError && formErrors.message}</p>
      <br></br>
      <SunEditor
        id="editor"
        name="editor"
        lang="en"
        height="500"
        placeholder="Your article here..."
        setOptions={{
          buttonList: buttonList.complex,
        }}
        onChange={handleContent}
      />
      {formik.touched.editor && formik.errors.editor ? (
        <div>{formik.errors.editor}</div>
      ) : null}
      <br></br>
      <button type="submit" className="btn btn-success float-right mb-4 ">
        Save Changes
      </button>
    </Form>
  );
};
export default TextEditor;
