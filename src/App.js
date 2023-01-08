import { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// ant core
import {
  Card,
  Avatar,
  Tooltip,
  Button,
  Popconfirm,
  Modal,
  Input,
  Form,
  Select,
} from "antd";

// ant icons
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

// components
import SimpleCard from "./components/SimpleCard";

// mock data
import { data } from "./data";

const { TextArea } = Input;
const { Option } = Select;

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

function App() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleSubmit = (values) => {
    console.log("values: ", values);

    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  function handleViewDetail() {
    Modal.info({
      title: "Card Detail",
      content: (
        <>
          <div>
            <h4>Title</h4>
            <div>This is title</div>
          </div>
          <br />
          <div>
            <h4>Description</h4>
            <div>This is description</div>
          </div>
          <br />
          <div>
            <h4>Member</h4>
            <div>
              <Avatar.Group>
                <Tooltip title="Tony Nguyen" placement="top">
                  <Avatar src="https://picsum.photos/265/160" />
                </Tooltip>
                <Tooltip title="Phuong Nguyen" placement="top">
                  <Avatar src="https://picsum.photos/265/160" />
                </Tooltip>
              </Avatar.Group>
            </div>
          </div>
          <br />
          <div>
            <h4>Status</h4>
            <div>New</div>
          </div>
        </>
      ),
      onOk() {},
    });
  }

  // using useCallback is optional
  const onBeforeCapture = useCallback((result) => {
    console.log("onBeforeCapture: ", result);
  }, []);
  const onBeforeDragStart = useCallback((result) => {
    console.log("onBeforeDragStart: ", result);
  }, []);
  const onDragStart = useCallback((result) => {
    console.log("onBeforeDragStart: ", result);
  }, []);
  const onDragUpdate = useCallback((result) => {
    console.log("onBeforeDragStart: ", result);
  }, []);
  const onDragEnd = useCallback((result) => {
    console.log("onBeforeDragStart: ", result);
  }, []);

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__logo" />
          <div className="header__right">
            <div className="header__avatar">
              <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="LIST"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={
                    {
                      // backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                    }
                  }
                  className="listContainer"
                  {...provided.droppableProps}
                >
                  <>
                    {data.columns.map((listId, listIndex) => {
                      const listItem = data.lists[listId];

                      return (
                        <Draggable
                          draggableId={String(listId)}
                          index={listIndex}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card
                                title={listItem.title}
                                className="cardList"
                                extra={
                                  <>
                                    <Tooltip title="Add a card">
                                      <Button
                                        shape="circle"
                                        icon={<PlusOutlined />}
                                        onClick={() => setOpen(true)}
                                      />
                                    </Tooltip>

                                    <Popconfirm
                                      title="Delete the list"
                                      description="Are you sure to delete this list?"
                                      onConfirm={() => {}}
                                      onCancel={() => {}}
                                      okText="Yes"
                                      cancelText="No"
                                      className="ml-10"
                                    >
                                      <Tooltip title="Delete this list">
                                        <Button
                                          shape="circle"
                                          icon={<DeleteOutlined />}
                                        />
                                      </Tooltip>
                                    </Popconfirm>
                                  </>
                                }
                              >
                                <SimpleCard />
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                    <Button type="text">
                      <PlusOutlined /> Add another list
                    </Button>
                  </>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>

      <Modal
        title="Add Card"
        open={open}
        onOk={form.submit}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
      >
        <br />
        <Form
          name="basic"
          form={form}
          initialValues={{ status: "new" }}
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
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              optionLabelProp="label"
              onChange={handleChange}
            >
              <Option value="tony123" label="tony 123">
                <div className="selectField">
                  <Avatar src="https://picsum.photos/id/237/200/300" />
                  <span>Tony Nguyen</span>
                </div>
              </Option>
              <Option value="phuong123" label="phuong 123">
                <div className="selectField">
                  <Avatar src="https://picsum.photos/id/237/200/300" />
                  <span>Phuong Nguyen</span>
                </div>
              </Option>
            </Select>
          </Form.Item>

          <Form.Item label="Status" name="status">
            <Select
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "new",
                  label: "New",
                },
                {
                  value: "inprocess",
                  label: "In process",
                },
                {
                  value: "done",
                  label: "Done",
                },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default App;
