import React from "react";
import {
  BsFillDice3Fill,
  BsFillDice1Fill,
  BsFillDice2Fill,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
function Sidebar() {
  const SidebarIcon = ({ icon, text = "tooltip" }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex text-secondary flex-col bg-primary shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<FaPoo size="28" />} />
      <SidebarIcon icon={<BsFillDice3Fill size="28" />} />
      <SidebarIcon icon={<BsFillDice1Fill size="28" />} />
      <SidebarIcon icon={<BsFillDice2Fill size="28" />} />
    </div>
  );
}

export default Sidebar;
