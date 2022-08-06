import { Form, Input } from "antd";
import React from "react";
import "../Resources/Stylesheets/profile.css"

const { TextArea } = Input;

function PersonalInfo() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 details">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="linkedIn"
            label="LinkedIn"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            name="github"
            label="GitHub"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item
            name="portfolio"
            label="Portfolio"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
