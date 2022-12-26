
import { useState } from 'react';
import { Card, Avatar, Tooltip, Button, Popconfirm, Modal, Input, Form, Select } from 'antd';
import { EditOutlined, DeleteOutlined, AntDesignOutlined, UserOutlined, PlusOutlined, FileTextOutlined } from '@ant-design/icons';

const { Meta } = Card;
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
    console.log('values: ', values)

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
      title: 'Card Detail',
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

  return (
    <>
      <header>
        <div class="header__container">
          <div class="header__logo" />  
            <div class="header__right">
              <div class="header__avatar">
                <img src="/assets/images/avatar.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="content">
              <Card title="List 1" 
                className="cardList"
                extra={
                  <>
                    <Tooltip title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} onClick={() => setOpen(true)} />
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
                        <Button shape="circle" icon={<DeleteOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                } 
              >
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
              </Card>
              <Card title="List 1" 
                className="cardList"
                extra={
                  <>
                    <Tooltip title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} onClick={() => setOpen(true)} />
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
                        <Button shape="circle" icon={<DeleteOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                } 
              >
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
              </Card>
              <Card title="List 1" 
                className="cardList"
                extra={
                  <>
                    <Tooltip title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} onClick={() => setOpen(true)} />
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
                        <Button shape="circle" icon={<DeleteOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                } 
              >
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
              </Card>
              <Card title="List 1" 
                className="cardList"
                extra={
                  <>
                    <Tooltip title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} onClick={() => setOpen(true)} />
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
                        <Button shape="circle" icon={<DeleteOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                } 
              >
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
              </Card>
              <Card title="List 1" 
                className="cardList"
                extra={
                  <>
                    <Tooltip title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} onClick={() => setOpen(true)} />
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
                        <Button shape="circle" icon={<DeleteOutlined />} />
                      </Tooltip>
                    </Popconfirm>
                  </>
                } 
              >
                <Card
                  className="cardItem"
                  cover={
                    <img
                      alt="example"
                      src="https://picsum.photos/265/160"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <FileTextOutlined key="view" onClick={handleViewDetail} />
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" onClick={() => setOpen(true)} />
                    </Tooltip>,
                    <Popconfirm
                      title="Delete the card"
                      description="Are you sure to delete this card?"
                      onConfirm={() => {}}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                      className="ml-10"
                    >
                      <Tooltip title="Delete">
                      <DeleteOutlined key="ellipsis" />
                      </Tooltip>
                    </Popconfirm>
                  ]}
                >
                  <Meta
                    title="Learn javascript"
                    description={
                      <>
                        <div>This is description</div>
                        <Avatar.Group
                          maxCount={2}
                          maxPopoverTrigger="click"
                          size="large"
                          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                          className="avatarGroup"
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                          <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                          </Tooltip>
                          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        
                      </>
                    }
                  />
                </Card>
              </Card>
              

              <Button type="text"><PlusOutlined /> Add another list</Button>
            </div>
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
            initialValues={{ status: 'new' }}
            onFinish={handleSubmit}
            autoComplete="off"
            labelCol={{ flex: '110px' }}
            labelAlign="left"
            wrapperCol={{ flex: 1 }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Member"
              name="member"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
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

            <Form.Item
              label="Status"
              name="status"
            >
              <Select
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  {
                    value: 'new',
                    label: 'New',
                  },
                  {
                    value: 'inprocess',
                    label: 'In process',
                  },
                  {
                    value: 'done',
                    label: 'Done',
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
