import React from "react";
import { Button } from "antd";

const AdminDocuments = () => {
  return (
    <div className="admindocuments">
      <div className="admindocuments__childs">
        <p>Document : <Button>Upload</Button>
        </p>
        <p>ID Number : 98765</p>
        <p>Expiry Date of ID : 10/10/2024</p>
      </div>
    </div>
  );
};

export default AdminDocuments;
