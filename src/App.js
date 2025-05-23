import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ant core
import {
  Card,
  Tooltip,
  Input,
  Button,
  Popconfirm,
} from "antd";
// ant icons
import { DeleteOutlined, PlusOutlined, BarChartOutlined, CloseOutlined } from "@ant-design/icons";

// components
import SimpleCard from "./components/SimpleCard";
import ModalAddCard from "./components/ModalAddCard";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

function App() {
  const [openAddCard, setOpenAddCard] = useState(false);
  const [openCreateList, setOpenCreateList] = useState(false);
  const [editTitleList, setEditTitleList] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="header__container">
          <div className="dashboard" style={{ width: 30, flexShrink: 0 }}  onClick={() => navigate('/report')}>
            <BarChartOutlined size={15} />
          </div>
          <div className="header__logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
          <div className="header__right">
            <div className="header__avatar">
              <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container flex mt-2 px-2">
          <Card
            title={
              <>
                <div style={{ paddingRight: 12 }}>
                  {editTitleList ? (
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d9d9d9', borderRadius: 6, paddingRight: 8 }}>
                      <Input style={{ border: 0, outline: 0, boxShadow: '0 0 0 transparent' }} />
                      <Button type="text" icon={<CloseOutlined />} size="small" onClick={() => setEditTitleList(false)} />
                    </div>
                   
                  ) : (
                    <div onClick={() => setEditTitleList(true)} style={{ cursor: 'pointer' }}>
                      List 1
                    </div>
                  )}
                </div>
              </>
            }
            className="cardList"
            extra={
              <>
                <Tooltip title="Add a card">
                  <Button
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={() => setOpenAddCard(true)}
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
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </Card>
          
          <div>
            {openCreateList ? (
              <Card style={{ width: 300 }} size="small">
                <span>Title:</span><Input />
                <div style={{ display: 'flex', justifyContent: 'end', marginTop: 8 }}>
                  <Button type="text" danger onClick={() => setOpenCreateList(false)} style={{ marginRight: 4 }}>Close</Button>
                  <Button type="primary" onClick={() => setOpenCreateList(false)}>Create</Button>
                </div>
              </Card>
            ) : (
              <Button type="text" onClick={() => setOpenCreateList(true)}>
                <PlusOutlined /> Add another list
              </Button>
            )}
          </div>
          
        </div>
      </main>

      <ModalAddCard openAddCard={openAddCard} setOpenAddCard={setOpenAddCard} />

    </>
  );
}

export default App;
