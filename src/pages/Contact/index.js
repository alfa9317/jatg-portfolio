import React from 'react';
import "./style.css";
import NavBar from "../../components/NavBar"
import { Form, Input, Button,Card } from 'antd';

const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const validateMessages = {
    required: 'This field is required!',
    types: {
      email: 'Not a validate email!',
      number: 'Not a validate number!',
    },
  };
  

function Contact() {
    const onFinish = values => {
        console.log(values);
        window.location.href = `mailto:josealfredotg@gmail.com?subject=Contact Info&body=${values.user.name}%0D${values.user.email}%0D${values.user.number}%0D${values.user.introduction}`;
      };
  return (
    <div>
        <NavBar/>
        <Card title="Ing. José Alfredo Torres" style={{ width: '92%',margin:'20px 4vw 0 4vw' }} align='start'>
            <p>Email: josealfredotg@gmail.com</p>
            <p>Phone number: 443-117-3768</p>
            <p>LinkedIn: linkedin.com/in/josealfredotorres</p>
            <p>Github: github.com/alfa9317</p>
        </Card>
        <Card title="Contact Form" style={{ width: '92%',margin:'20px 4vw 0 4vw' }} align='start'>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} align='start' action="mailto:josealfredotg@gmail.com" method="post" enctype="text/plain">
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                    {
                        type: 'email',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'number']} label="Phone number">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Message">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                    <Button style={{margin:''}}type="primary" block htmlType="submit" value="Send">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
  );
}

export default Contact;