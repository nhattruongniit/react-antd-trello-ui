import { useState } from "react";

// ant core
import {
  Avatar,
  Modal,
  Input,
  Form,
  Select,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;

function ModalAddCard({ openAddCard, setOpenAddCard }) {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleSubmit = (values) => {
    console.log("values: ", values);

    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setOpenAddCard(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal
    title="Add Card"
    open={openAddCard}
    onOk={form.submit}
    onCancel={handleCancel}
    confirmLoading={confirmLoading}
  >
    <br />
    <Form
      name="basic"
      form={form}
      onFinish={handleSubmit}
      autoComplete="off"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      wrapperCol={{ flex: 1 }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input your description!" },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Member"
        name="member"
        rules={[
          { required: true, message: "Please input your description!" },
        ]}
      >
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          optionLabelProp="label"
          onChange={handleChange}
        >
          <Option value="tony" label="Tony Nguyen">
            <Avatar style={{ backgroundColor: '#f56a00' }}>T</Avatar>
            <span style={{ paddingLeft: 8 }}>Tony Nguyen</span>
          </Option>
          <Option value="patrick" label="Patrick">
            <Avatar style={{ backgroundColor: '#f56a00' }}>P</Avatar>
            <span style={{ paddingLeft: 8 }}>Patrick</span>
          </Option>
        </Select>
      </Form.Item>
    </Form>
  </Modal>
  )
}

export default ModalAddCard