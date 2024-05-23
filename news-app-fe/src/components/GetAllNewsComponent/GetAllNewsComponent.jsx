import React, {useState, useEffect} from 'react'
import './GetAllNewsComponent.css'
import NewsComponent from './NewsComponent'

function GetAllNewsComponent() {
    const [news, setNews] = useState([])

    const fetchAllNews  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/news')
        const data = await response.json()
        setNews(data)
    }

    useEffect(() => {
        fetchAllNews()
    }, [])

  return (
    <div className='news'>
        {news.map(newsItem=>(
            <NewsComponent newsItem={newsItem}/>
        ))}
    </div>
  )
}

export default GetAllNewsComponent