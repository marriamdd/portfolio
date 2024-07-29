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

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
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
    <>
      {!submit && (
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
                {emailError && (
                  <Alert message="Error sending email." type="error" />
                )}
                <Button
                  className="bg-[#1C2B3A]"
                  type="primary"
                  htmlType="submit"
                >
                  submit-message
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
      )}
      {submit && (
        <div className="xl:border-r-[1px] gap-[1rem]  flex flex-col justify-center items-center animate-fadeIn xl:border-[#1E2D3D]">
          <span className="text-[2.6rem] font-[450]">Thank you! 🤘</span>
          <p className="text-[#607B96] py-[1rem] px-[3rem] text-[1.8rem] font-[450]">
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <button
            onClick={() => setSubmit(false)}
            className="bg-[#1C2B3A] rounded-[8px] py-[1rem] px-[1rem] text-[1.8rem] font-[450]"
          >
            send-new-message
          </button>
        </div>
      )}
    </>
  );
};

export default FormComp;
