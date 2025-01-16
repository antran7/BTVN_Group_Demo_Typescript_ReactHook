import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./GoogleSearchBar.css";

const GoogleSearchBar = () => {
  return (
    <div className="google-search-bar">
      <Input
        className="search-input"
        placeholder="Search Google or type a URL"
        prefix={<SearchOutlined />}
        size="large"
      />
      <div className="buttons">
        <button className="search-button">Google Search</button>
        <button className="search-button">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default GoogleSearchBar;
