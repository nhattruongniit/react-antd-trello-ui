import {
  Card,
  Avatar,
  Tooltip,
  Popconfirm,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function SimpleCard() {
  return (
    <Card
      className="cardItem"
      cover={<img alt="example" src="https://picsum.photos/265/160" />}
      actions={[
        <Tooltip title="View">
          <FileTextOutlined key="view" />
        </Tooltip>,
        <Tooltip title="Edit">
          <EditOutlined key="edit" />
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
        </Popconfirm>,
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
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
              className="avatarGroup"
            >
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              
            </Avatar.Group>
          </>
        }
      />
    </Card>
  );
}

export default SimpleCard;