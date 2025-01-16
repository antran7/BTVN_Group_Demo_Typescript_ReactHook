import React from 'react'
import './GooglePage.css'
import GoogleSearchBar from '../components/googleSearchBar/GoogleSearchBar'


function GooglePage() {
    return (
        <div className='google-container'>
            <div>
                Header
            </div>
            <div>
                <div className='google-logo'>
                    <img className='google-logo'
                        src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
                        width={'300px'}
                    />
                </div>
                <div>
                    <GoogleSearchBar/>
                </div>
            </div>
        </div>
    )
}

export default GooglePage