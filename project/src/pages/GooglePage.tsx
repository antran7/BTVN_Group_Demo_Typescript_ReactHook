import React, { useState } from 'react';
import './GooglePage.css';
import { Link } from "react-router-dom";
import { Avatar, Menu, IconButton } from "@mui/material";
import { Apps as AppsIcon } from '@mui/icons-material';
import GoogleSearchBar from '../components/googleSearchBar/GoogleSearchBar';

function GooglePage() {
    const [anchorEl, setAnchorEl] = useState(null);
    const logoUrl = "https://lh3.googleusercontent.com/a/ACg8ocLchgRqmkFE-dLxveuQwFDBEuTdvdLJiOmD-c-h15JDOh_GgA=s288-c-no";

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    return (
        <div className='google-container'>
            <div className='google-header'>
                <Link to=''>Gmail</Link>
                <Link to=''>Images</Link>
                <IconButton onClick={handleMenuOpen}>
                    <AppsIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    PaperProps={{
                        style: {
                            padding: '30px',
                            backgroundColor: '#202124',
                            color: 'white',
                            borderWidth: '2px',
                            borderColor: '#5F6368',
                            borderRadius: '20px',
                        },
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '30px',
                            padding: '10px',
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={logoUrl}
                                alt="Account"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Account</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/google-web-search.png"
                                alt="Search"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Search</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/maps.png"
                                alt="Maps"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Maps</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/youtube-play.png"
                                alt="YouTube"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>YouTube</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/gmail.png"
                                alt="Gmail"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Gmail</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/google-meet.png"
                                alt="Meet"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Meet</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/google-drive.png"
                                alt="Drive"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Drive</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://img.icons8.com/color/48/000000/google-calendar.png"
                                alt="Calendar"
                                style={{ width: '45px', height: '45px', marginBottom: '5px' }}
                            />
                            <div>Calendar</div>
                        </div>
                    </div>
                </Menu>
                <Avatar
                    alt="User Account"
                    src={logoUrl}
                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                />
            </div>
            <div className='google-logo'>
                <img className='google-logo'
                    src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
                    width={'300px'}
                />
            </div>
            <div className='google-searchbar'>
                <GoogleSearchBar />
            </div>
        </div>
    );
}

export default GooglePage;