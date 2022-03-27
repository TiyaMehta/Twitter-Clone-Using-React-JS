import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
//import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>

        <SidebarOption active text = "Home" Icon={HomeIcon}/>
        <SidebarOption text = "Explore" Icon={TagIcon}/>
        <SidebarOption text = "Notifications" Icon={NotificationsNoneIcon}/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}
        {/* Sidebar Component */}

        {/* Button -> tweet */}
        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar