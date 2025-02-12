"use client";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { addPost } from "../(services)/Post.service";
import { FormControl } from "@/app/components/shared/form-control/FormControl";
import toast from "react-hot-toast";

const postSchema = yup.object().shape({
  title: yup.string().required("Required").min(15),
  content: yup.string().required("Required").min(30),
  authorName: yup.string().required("Required"),
});
const AddPostForm = () => {
  return (
    <div className="w-[300px] md:[w-450px] lg:w-[600px]">
      <Formik
        initialValues={{
          title: "",
          content: "",
          authorName: "",
        }}
        validationSchema={postSchema}
        onSubmit={(values: any, { resetForm }) => {
          addPost(values)
            .then((res) => {
              console.log(res);
              console.log("posts added successfully");
              toast.success("Post added");
              resetForm();
              setTimeout(() => {
                window.location.reload();
              }, 500);
            })
            .catch((err) => console.log("Error adding post"));
        }}
      >
        {({ values, handleChange, handleSubmit, resetForm }) => {
          return (
            <Form method="post" className="flex flex-col gap-y-6">
              <FormControl name="title" placeholder="Enter title" />
              <FormControl name="content" placeholder="Enter Description" />
              <FormControl name="authorName" placeholder="Enter Author Name" />
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
