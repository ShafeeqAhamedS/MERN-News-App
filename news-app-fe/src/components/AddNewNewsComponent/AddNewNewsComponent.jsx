import React, { useState } from 'react';
import './AddNewNewsComponent.css';

function AddNewNewsComponent() {
  const [newsData, setNewsData] = useState({
    newsTitle: '',
    newsID: '',
    newsArticle: '',
    newsAuthor: '',
    newsLocation: '',
    newsCategory: ''
  });

  const {
    newsTitle,
    newsID,
    newsArticle,
    newsAuthor,
    newsLocation,
    newsCategory
  } = newsData;

  const newsTitleHandler = (event) => {
    setNewsData({ ...newsData, newsTitle: event.target.value });
  };
  const newsIDHandler = (event) => {
    setNewsData({ ...newsData, newsID: event.target.value });
  };
  const newsArticleHandler = (event) => {
    setNewsData({ ...newsData, newsArticle: event.target.value });
  };
  const newsAuthorHandler = (event) => {
    setNewsData({ ...newsData, newsAuthor: event.target.value });
  };
  const newsLocationHandler = (event) => {
    setNewsData({ ...newsData, newsLocation: event.target.value });
  };
  const newsCategoryHandler = (event) => {
    setNewsData({ ...newsData, newsCategory: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    fetch('http://localhost:3500/api/v1/news', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        newsTitle,
        newsID,
        newsArticle,
        newsAuthor,
        newsLocation,
        newsCategory
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert(`The new news on ${data.newsCategory} is added successfully`);
          window.location.href = '/';
        }
      });
  };

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding new news</h2>

      <div className='form-group'>
        <label>News Title</label>
        <input
          type='text'
          placeholder='Enter the news title'
          value={newsTitle}
          onChange={newsTitleHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>News ID</label>
        <input
          type='text'
          placeholder='Enter the news ID'
          value={newsID}
          onChange={newsIDHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>News Article</label>
        <textarea
          type='text'
          rows='10'
          placeholder='Enter the news article'
          value={newsArticle}
          onChange={newsArticleHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>News Author</label>
        <input
          type='text'
          placeholder='Enter the news author'
          value={newsAuthor}
          onChange={newsAuthorHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>News Location</label>
        <input
          type='text'
          placeholder='Enter the news location'
          value={newsLocation}
          onChange={newsLocationHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>News Category</label>
        <select
          value={newsCategory}
          onChange={newsCategoryHandler}
          required
        >
          <option value=''>-- Please select --</option>
          <option value='Sports'>Sports</option>
          <option value='Politics'>Politics</option>
          <option value='Cinema'>Cinema</option>
          <option value='Economics'>Economics</option>
        </select>
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
}

export default AddNewNewsComponent;
