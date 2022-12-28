import React from "react";
import { Table as DashTable } from "@tanstack/react-table";
const columns = [
  { title: "Name", key: "name" },
  { title: "Email", key: "email" },
  { title: "Phone", key: "phone" },
];

const data = [
  { name: "John Smith", email: "john@example.com", phone: "555-555-1212" },
  { name: "Jane Doe", email: "jane@example.com", phone: "555-555-1213" },
  { name: "Bob Johnson", email: "bob@example.com", phone: "555-555-1214" },
];

function DataTable() {
  return (
    <>
      <DashTable columns={columns} data={data} />
    </>
  );
}
export default DataTable;
