import React from 'react'
import './ResultLinkItem.css'

function ResultLinkItem({ title, url, description }) {

    const truncateContent = (description, wordsLimit) => {
        const content = description.split(" ");
        return content.length > wordsLimit ?
            content.slice(0, wordsLimit).join(" ") + "..." : description; 
    }


    return (
        <div className="search-result-item">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="result-item"
            >
                <p className='result-item-link'>{url}</p>
                <p className='result-item-title'>{title}</p>
            </a>
            <small className='result-item-description'>
                {truncateContent(description, 30)}
            </small>
        </div>
    )
}

export default ResultLinkItem
