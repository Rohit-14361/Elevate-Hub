import React, { useState } from "react";
import { Modal } from "antd";
import Dashboard from "./dashboard";
function Service() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [editingService, setIsEditingService] = useState(null);

  return (
    <div>
      <Dashboard>
        <button onClick={() => setIsEditingService(true)}>Add New</button>
        <Modal
          title={editingService ? "Edit Service" : "Create New Service"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
        >
          <Form
            onFinish={editingService ? handleEditService : handleCreateService}
            initialValue={editingService}
          >
            <Form.Item
              label="Name"
              rules={[{ required: true }, { message: "Name is Required" }]}
            >
              <input type="text" placeholder="Enter Your Name" />
            </Form.Item>
          </Form>
        </Modal>
      </Dashboard>
    </div>
  );
}

export default Service;
