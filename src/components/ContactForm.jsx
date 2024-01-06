import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Full name is required"),
  subject: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Subject is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  body: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Body is required"),
});

const ContactForm = () => {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              {...field}
            />
          )}
        />
        {errors && errors.subject && (
          <Form.Text className="text-danger">
            {errors.subject.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              type="text"
              placeholder="Enter the subject"
              {...field}
            />
          )}
        />
        {errors && errors.subject && (
          <Form.Text className="text-danger">
            {errors.subject.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              type="email"
              placeholder="Enter your email"
              {...field}
            />
          )}
        />
        {errors && errors.email && (
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="body">
        <Form.Label>Body</Form.Label>
        <Controller
          name="body"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              {...field}
            />
          )}
        />
        {errors && errors.body && (
          <Form.Text className="text-danger">{errors.body.message}</Form.Text>
        )}
      </Form.Group>

      <Button type="submit" variant="dark">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
