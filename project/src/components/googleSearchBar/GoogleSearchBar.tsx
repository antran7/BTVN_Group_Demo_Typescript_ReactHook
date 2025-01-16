import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./GoogleSearchBar.css";
import MicIcon from '@mui/icons-material/Mic';
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";

const GoogleSearchBar = () => {

  return (
    <div className="google-search-bar">
      <Input
        className="search-input"
        placeholder="Search Google or type a URL"
        prefix={<SearchOutlined style={{ marginRight: '10px' }}/>}
        suffix={
          <>
            <MicIcon
              style={{
                cursor: 'pointer',
                color: '#5E97F6',
                fontSize: '22px'
              }}
            />
            <FilterCenterFocusIcon
              style={{
                cursor: 'pointer',
                color: '#5E97F6',
                fontSize: '22px',
                marginLeft: '10px'
              }}
            />
          </>
        }
        size="large"
      />

      <div className="buttons">
        <Button className="search-button">Google Search</Button>
        <Button className="search-button">I'm Feeling Lucky</Button>
        
      </div>
    </div>
  );
};

export default GoogleSearchBar;
