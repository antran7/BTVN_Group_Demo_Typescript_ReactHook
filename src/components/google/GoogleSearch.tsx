import React, { useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./GoogleSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { Button, Form, Input } from "antd";

const GoogleSearchBar = () => {
  const { state, dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (state.currentSearch.trim()) {
      dispatch({ type: 'ADD_TO_HISTORY', payload: state.currentSearch });
      // dispatch({ type: 'ADD_SEARCH', payload: '' });
    }
    navigate("/search/" + state.currentSearch);
  };

  return (
    <Form
      className="google-search-bar"
      onFinish={handleSearch}
    >
      <Input
        className="search-input"
        placeholder="Search Google or type a URL"
        prefix={<SearchOutlined style={{ marginRight: '10px' }} />}
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
        value={state.currentSearch}
        size="large"
        onChange={(e) =>
          dispatch({ type: 'ADD_SEARCH', payload: e.target.value })
        }
      />

      <div className="buttons">
        <Button className="search-button">Google Search</Button>
        <Button className="search-button">I'm Feeling Lucky</Button>

      </div>
      <div>
        <h3>Search History</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {state.searchHistory.length > 0 ? (
            state.searchHistory.map((query, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                {query}
              </li>
            ))
          ) : (
            <p>No search history available</p>
          )}
        </ul>
      </div>
    </Form>
  );
};

const GoogleSearchHeader = () => {
  const { state, dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (state.currentSearch.trim()) {
      dispatch({ type: 'ADD_TO_HISTORY', payload: state.currentSearch });
    }
    navigate("/search/" + state.currentSearch);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="header-search-input">
        <SearchIcon className="search-input-icon" />
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: 'ADD_SEARCH', payload: e.target.value })
          }
          value={state.currentSearch}
        />
        <div className="search-icon-wrapper" data-tooltip="Search by voice">
          <MicIcon className="google-blue-icon" />
        </div>
        <div className="search-icon-wrapper" data-tooltip="Search by image">
          <FilterCenterFocusIcon className="google-blue-icon" />
        </div>
        <div className="search-icon-wrapper" data-tooltip="Search by image">
          <SearchIcon className="google-blue-icon" />
        </div>

      </div>
    </form>
  )
}

export { GoogleSearchBar, GoogleSearchHeader };