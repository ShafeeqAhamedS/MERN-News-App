import React, {useState} from 'react'
import './NewsComponent.css'

function NewsComponent({newsItem}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    return (
        <div className="card">
          <div className="text-container">
            <h3>{newsItem.newsTitle}</h3>
            <p className="location"><span>{newsItem.newsCategory}</span> - {newsItem.newsID}</p>
            <p className="status">
            Authored by : {newsItem.newsAuthor}, {newsItem.newsLocation}
            </p>
            
            <button onClick={toggleModal} className="btn-modal">Read More</button>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2>{newsItem.newsTitle}</h2>
                  <p>
                    {newsItem.newsArticle}
                  </p>
                  <button className="close-modal" onClick={toggleModal}>
                    X
                  </button>
                </div>
              </div>
      )}
          </div>
        </div>
      )
}

export default NewsComponent