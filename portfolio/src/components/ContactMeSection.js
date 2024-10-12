import { Box, Button, FormControl, FormLabel, Input, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmit } from "../hooks/useSubmit"; // Adjust the path as necessary
import { useAlertContext } from "../context/alertContext"; // Adjust the path as necessary

const ContactMeSection = () => {
  const { submit, isLoading, response } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const res = await submit(values);
      if (res.type === "success") {
        onOpen({ type: "success", message: `Thank you, ${values.firstName}!` });
        resetForm();
      } else {
        onOpen({ type: "error", message: res.message });
      }
    },
  });

  return (
    <Box id="contactme-section" bg="gray.200" minH="100vh" p={8}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input id="firstName" {...formik.getFieldProps("firstName")} />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" {...formik.getFieldProps("email")} />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.type && formik.errors.type}>
          <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
          <Input id="type" {...formik.getFieldProps("type")} />
          <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
          <FormLabel htmlFor="comment">Message</FormLabel>
          <Textarea id="comment" {...formik.getFieldProps("comment")} />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactMeSection;