import React, { useState, useEffect } from "react";

import { Tabs } from "antd";
import AdminBookingScreen from "./AdminBookingScreen";
import AdminRoomScreen from "./AdminRoomScreen";
import AdminUserScreen from "./AdminUserScreen";
import AdminAddRoomScreen from "./AdminAddRoomScreen";
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function AdminScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user || user.isAdmin == false) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="ml-3 mt-3 mr-3 bs">
      <h1 className="text-center">Admin Panel</h1>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Bookings" key="1">
          <AdminBookingScreen></AdminBookingScreen>
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <AdminRoomScreen></AdminRoomScreen>
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <AdminAddRoomScreen></AdminAddRoomScreen>
        </TabPane>
        <TabPane tab="Users" key="4">
          <AdminUserScreen></AdminUserScreen>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AdminScreen;
