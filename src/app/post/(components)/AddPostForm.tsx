"use client";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { addPost } from "../(services)/Post.service";
import { FormControl } from "@/app/components/shared/form-control/FormControl";

const postSchema = yup.object().shape({
  title: yup.string().required("Required").min(5),
  content: yup.string().required("Required").min(10),
});
const AddPostForm = () => {
  return (
    <div className="w-[600px]">
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        validationSchema={postSchema}
        onSubmit={(values: any, { resetForm }) => {
          addPost(values)
            .then((res) => {
              console.log(res);
              console.log("posts added successfully");
            })
            .catch((err) => console.log("Error adding post"));
          resetForm();
          window.location.reload();
        }}
      >
        {({ values, handleChange, handleSubmit, resetForm }) => {
          return (
            <Form method="post" className="flex flex-col gap-y-6">
              <FormControl name="title" placeholder="Enter title" />
              <FormControl name="content" placeholder="Enter Description" />
              <button
                type="submit"
                className="self-start px-8 py-2 border rounded bg-green-500 text-white focus:bg-green-400 hover:bg-green-400 hover:border-green-800"
              >
                Add
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddPostForm;
