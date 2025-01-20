import React, { useContext, useEffect, useState } from "react";
import "./GoogleSearchPage.css";
import { Avatar, Menu, MenuItem, IconButton, Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import ResultLinkItem from "./ResultLinkItem";
import { GoogleSearchHeader } from "./GoogleSearch";
import { SearchContext } from "../../context/SearchContext";

function GoogleSearchPage() {
  const { state, dispatch } = useContext(SearchContext);
  const tabs = ["All", "Images", "Videos", "Shopping", "News", "⫶ More"];
  const [activeTab, setActiveTab] = useState("All");
  const [anchorElMenu1, setAnchorElMenu1] = useState(null);
  const [anchorElMenu2, setAnchorElMenu2] = useState(false);
  const navigate = useNavigate();
  const searchInput = state.searchHistory.length
    > 0 ? state.searchHistory[state.searchHistory.length - 1] : "default query";
  const formattedQuery = searchInput.replace(' ', '_').toLowerCase();

  const handleYouTubeClick = () => {
    navigate("/youtube");
  };
  const handleGmailClick = () => {
    navigate("/gmail");
  };

  const handleDocsClick = () => {
    navigate("/docs");
  };

  const handleMenuOpen = (event) => {
    setAnchorElMenu1(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElMenu1(null);
  };

  const handleProfileOpen = (event) => {
    setAnchorElMenu2(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElMenu2(null);
  };

  const fakeResults = [
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} - Những tin tức mới nhất`,
      url: `https://example.com/${formattedQuery}`,
      description: `Chào mừng bạn đến với [website_name], nơi bạn có thể khám phá toàn bộ thông tin về ${state.searchHistory[state.searchHistory.length - 1]}. Từ tiểu sử, thành tựu, đến những câu chuyện thú vị xung quanh chủ đề ${state.searchHistory[state.searchHistory.length - 1]}, chúng tôi luôn sẵn sàng cung cấp cho bạn nội dung tốt nhất. Đừng bỏ lỡ cơ hội tìm hiểu thêm về ${state.searchHistory[state.searchHistory.length - 1]}!`
    },
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} Wiki chính thức`,
      url: `https://vi.wikipedia.org/wiki/${formattedQuery}`,
      description: `${state.searchHistory[state.searchHistory.length - 1]} là một chủ đề đầy sức hút, từ những điều cơ bản đến các khía cạnh ít ai biết đến. Tại đây, bạn sẽ tìm thấy tất cả thông tin chi tiết về ${state.searchHistory[state.searchHistory.length - 1]} được trình bày một cách dễ hiểu và trực quan.`
    },
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} - Những sự thật bạn chưa biết`,
      url: `https://facts.com/${formattedQuery}`,
      description: `Bạn có biết những bí mật thú vị về ${state.searchHistory[state.searchHistory.length - 1]}? Tham gia cùng chúng tôi để khám phá những khía cạnh đặc biệt của ${state.searchHistory[state.searchHistory.length - 1]} mà bạn chưa từng nghe đến!`
    },
    {
      title: `Cập nhật về ${state.searchHistory[state.searchHistory.length - 1]} hôm nay`,
      url: `https://news.example.com/${formattedQuery}`,
      description: `Những tin tức nóng hổi về ${state.searchHistory[state.searchHistory.length - 1]} đang chờ bạn! Hãy khám phá các bài viết mới nhất để luôn dẫn đầu trong việc cập nhật các thông tin về ${state.searchHistory[state.searchHistory.length - 1]}.`
    },
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} - Toàn cảnh chi tiết`,
      url: `https://overview.com/${formattedQuery}`,
      description: `Đây là nguồn tài nguyên đầy đủ và toàn diện về ${state.searchHistory[state.searchHistory.length - 1]}. Bạn sẽ tìm thấy tất cả những điều quan trọng liên quan đến ${state.searchHistory[state.searchHistory.length - 1]} được tổ chức một cách dễ tiếp cận và hữu ích.`
    },
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} trong lịch sử`,
      url: `https://historyhub.com/${formattedQuery}`,
      description: `Tìm hiểu về những mốc thời gian quan trọng và ảnh hưởng của ${state.searchHistory[state.searchHistory.length - 1]} trong lịch sử. Đây là nơi hoàn hảo để bạn mở rộng hiểu biết về chủ đề hấp dẫn này.`
    },
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} - Hỏi đáp và hướng dẫn`,
      url: `https://faq.example.com/${formattedQuery}`,
      description: `Bạn có câu hỏi về ${state.searchHistory[state.searchHistory.length - 1]}? Hãy truy cập ngay để xem các câu trả lời chi tiết và các hướng dẫn dành riêng để giúp bạn hiểu rõ hơn về ${state.searchHistory[state.searchHistory.length - 1]}.`
    },
    {
      title: `Khám phá ${state.searchHistory[state.searchHistory.length - 1]} qua hình ảnh`,
      url: `https://gallery.example.com/${formattedQuery}`,
      description: `Một bộ sưu tập hình ảnh tuyệt đẹp về ${state.searchHistory[state.searchHistory.length - 1]} đang chờ bạn khám phá. Hãy để hình ảnh kể câu chuyện thú vị về ${state.searchHistory[state.searchHistory.length - 1]}!`
    },
    {
      title: `Câu chuyện thú vị về ${state.searchHistory[state.searchHistory.length - 1]}`,
      url: `https://stories.example.com/${formattedQuery}`,
      description: `Mỗi câu chuyện về ${state.searchHistory[state.searchHistory.length - 1]} đều mang một góc nhìn riêng. Cùng tìm hiểu và tận hưởng những nội dung thú vị, đầy cảm hứng về ${state.searchHistory[state.searchHistory.length - 1]}.`
    },
    {
      title: `${state.searchHistory[state.searchHistory.length - 1]} - Công cụ & tài liệu`,
      url: `https://tools.example.com/${formattedQuery}`,
      description: `Chúng tôi cung cấp các tài liệu và công cụ mạnh mẽ để bạn có thể nghiên cứu và khám phá thêm về ${state.searchHistory[state.searchHistory.length - 1]} một cách hiệu quả.`
    }
  ];


  return (
    <div className="google-search-page">
      <header className="search-page-header">
        <div className="search-header-left">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            className="google-logo"
            draggable="false"
            onClick={() => navigate("/")}
          />
          <GoogleSearchHeader />
        </div>

        <div className="">
          <IconButton onClick={handleMenuOpen}>
            <AppsIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElMenu1}
            open={Boolean(anchorElMenu1)}
            onClose={handleMenuClose}
            className="menu-dropdown"
            PaperProps={{
              elevation: 0,
              style: {
                borderRadius: "24px",
                padding: "16px",
                minWidth: "280px",
                maxWidth: "90vw",
                marginRight: "20px",
                "@media (min-width: 600px)": {
                  minWidth: "340px",
                  maxWidth: "340px",
                },
              },
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div
              className="menu-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                gap: "8px",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <div
                  className="icon-wrapper"
                  style={{
                    backgroundColor: "#5F6368",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "16px" }}>N</span>
                </div>
                <span className="menu-item-text">Account</span>
              </MenuItem>

              <MenuItem onClick={handleGmailClick}>
                <span className="app-icon icon-gmail"></span>
                <span className="menu-item-text">Gmail</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-drive"></span>
                <span className="menu-item-text">Drive</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-classroom"></span>
                <span className="menu-item-text">Classroom</span>
              </MenuItem>

              <MenuItem onClick={handleDocsClick}>
                <span className="app-icon icon-docs"></span>
                <span className="menu-item-text">Docs</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-sheets"></span>
                <span className="menu-item-text">Sheets</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-slides"></span>
                <span className="menu-item-text">Slides</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-calendar"></span>
                <span className="menu-item-text">Calendar</span>
              </MenuItem>

              <MenuItem onClick={handleYouTubeClick}>
                <div className="icon-container">
                  <div className="app-icon icon-youtube"></div>
                </div>
                <span className="menu-item-text">YouTube</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-meet"></span>
                <span className="menu-item-text">Meet</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-forms"></span>
                <span className="menu-item-text">Forms</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-sites"></span>
                <span className="menu-item-text">Sites</span>
              </MenuItem>
            </div>
            <div className="menu-indicator"></div>
          </Menu>

          <IconButton onClick={handleProfileOpen}>
            <Avatar />
          </IconButton>

          <Menu
            anchorEl={anchorElMenu2}
            open={Boolean(anchorElMenu2)}
            onClose={handleProfileClose}
            className="profile-dropdown"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleProfileClose} className="profile-menu">
              <div className="profile-menu">
                <h3>nhom3@gmail.com</h3>
                <Avatar className="profile-avatar" src="" />
                <p>Hi, nhom3!</p>
                <Button className="first-button">
                  Manage your Google Account
                </Button>
                <div className="button-inline">
                  <Button
                    style={{
                      borderRadius: "30px 5px 5px 30px",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      backgroundColor: "#a3a3a3",
                    }}
                    className="second-button"
                  >
                    <AddIcon />
                    <p>Add account</p>
                  </Button>

                  <Button
                    style={{
                      borderRadius: "5px 30px 30px 5px",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      backgroundColor: "#a3a3a3",
                    }}
                    className="third-button"
                  >
                    <LogoutIcon />
                    <p>Sign out</p>
                  </Button>
                </div>
                <div>
                  <span>Privacy Policy </span>
                  <span>• Terms of services</span>
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </header>

      <div className="google-tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`google-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="google-search-result">
        {
          fakeResults.map((result, index) => (
            <ResultLinkItem
              key={index}
              title={result.title}
              url={result.url}
              description={result.description}
            />
          ))
        }
      </div>

    </div>
  );
};

export default GoogleSearchPage;