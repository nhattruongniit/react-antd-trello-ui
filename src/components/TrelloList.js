import React from 'react';
import { Draggable, Droppable } from "react-beautiful-dnd";

// ant core
import {
  Card,
  Tooltip,
  Button,
  Popconfirm,
} from "antd";

// ant icons
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

// components
import SimpleCard from './SimpleCard';

function TrelloList({ index, listId, title, cards, setOpen }) {

  return (
    <Draggable
      draggableId={String(listId)}
      index={index}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)} type="CARD">
            {(provided) => (
              <Card
                title={title}
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
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  >
                  {cards.map((card, cardIndex) => (
                    <SimpleCard 
                      key={card.id}
                      index={cardIndex}
                      card={card}
                    />
                  ))}
                </div>
                {provided.placeholder}
                
              </Card>
            )}
          </Droppable>
          
        </div>
      )}
    </Draggable>
  )
}

export default TrelloList