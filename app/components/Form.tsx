"use client";
import React from "react";
import { Button, Form, Input, InputNumber, Layout } from "antd";
import { EemployerInfo } from "../contact/page";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};
interface FormCompProps {
  setEmployer: React.Dispatch<React.SetStateAction<EemployerInfo>>;
}

const FormComp: React.FC<FormCompProps> = ({ setEmployer }) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmployer((prevValues: EemployerInfo) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Form
      className="xl:border-r-[1px]   animate-fadeIn xl:border-[#1E2D3D]"
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
        rules={[{ type: "email" }]}
      >
        <Input name="gmail" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item name={["user", "introduction"]} label="_message:">
        <Input.TextArea name="message" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item>
        <Button className="bg-[#1C2B3A]" type="primary" htmlType="submit">
          submit-message
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormComp;
