"use client";
import React from "react";
import { Button, Form, Input, Spin, Alert } from "antd";
import { EemployerInfo } from "../contact/page";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

interface FormCompProps {
  setEmployer: React.Dispatch<React.SetStateAction<EemployerInfo>>;
}

const FormComp: React.FC<FormCompProps> = ({ setEmployer }) => {
  const [submit, setSubmit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmployer((prevValues: EemployerInfo) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    setSubmit(false);
    setEmailError(false);
    console.log(values, "values");
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST", // Ensure this is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.user.name,
          email: values.user.email,
          message: values.user.message,
        }),
      });

      if (response.ok) {
        setSubmit(true);
      } else {
        setEmailError(true);
      }
    } catch (error) {
      setEmailError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      className="xl:border-r-[1px] animate-fadeIn xl:border-[#1E2D3D]"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Form.Item
        name={["user", "name"]}
        label="_name:"
        rules={[{ required: true }]}
      >
        <Input name="name" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="_email:"
        rules={[{ type: "email", required: true }]}
      >
        <Input name="email" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item
        name={["user", "message"]}
        rules={[{ required: true }]}
        label="_message:"
      >
        <Input.TextArea name="message" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item>
        {loading ? (
          <Spin />
        ) : (
          <>
            {submit && (
              <Alert message="Email sent successfully!" type="success" />
            )}
            {emailError && (
              <Alert message="Error sending email." type="error" />
            )}
            <Button className="bg-[#1C2B3A]" type="primary" htmlType="submit">
              submit-message
            </Button>
          </>
        )}
      </Form.Item>
    </Form>
  );
};

export default FormComp;
