import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className='widgets__searchIcon'></SearchIcon>
          <input placeholder='Search Twitter' type="text"></input>
        </div> 
        
        <div className='widgets__widgetContainer'>
          <h2>What's Happening?</h2>
          <TwitterTweetEmbed tweetId={"858551177860055040"} />

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
    </div>
  )
}

export default Widgets
