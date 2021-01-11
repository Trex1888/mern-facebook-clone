import React from "react";
import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Alarm,
  Bookmark,
  Chat,
  Description,
  EmojiFlags,
  Event,
  ExpandMore,
  Favorite,
  Games,
  LocalHospital,
  People,
  PeopleOutline,
  Shop,
  Storefront,
  SupervisedUserCircle,
  VideoLibrary,
  Work,
} from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} alt="img" title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Info Center" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={SupervisedUserCircle} title="Groups" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos on Watch" />
      <SidebarRow Icon={Alarm} title="Memories" />
      <SidebarRow Icon={Bookmark} title="Saved" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={Description} title="News" />
      <SidebarRow Icon={Favorite} title="Dating" />
      <SidebarRow Icon={Event} title="Events" />
      <SidebarRow Icon={Games} title="Gaming" />
      <SidebarRow Icon={Work} title="Jobs" />
      <SidebarRow Icon={Shop} title="Shop" />
      <SidebarRow Icon={PeopleOutline} title="Nearby Friends" />
      <SidebarRow Icon={ExpandMore} title="More" />
    </div>
  );
}

export default Sidebar;
