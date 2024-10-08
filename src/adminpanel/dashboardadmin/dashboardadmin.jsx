import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Adminsidebar } from "../components/adminsidebar/adminsidebar";
import { Headeradmin } from "../components/headeradmin/headeradmin";

export function Dashboardadmin() {
  const [selectedItem, setSelectedItem] = useState("dashboardadmin");

  return (
    <div>
      <Headeradmin />
      <div style={{ display: "flex" }}>
        <Adminsidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <div style={{width:"100%"}}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}
