import React from "react";
import { Form, Select, Input, Button, Checkbox } from "antd";
import { Typography } from "antd";
import { Store } from "antd/lib/form/interface";

const { Title } = Typography;
const { Option } = Select;
interface FormComponentProps {
  username: string;
  password: string | number;
  onFinish: (values: Store) => void;
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormComponent: React.FC<FormComponentProps> = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormComponent;
