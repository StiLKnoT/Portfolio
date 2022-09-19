import React from 'react'
import { $ } from 'jquery'


function NewsCard() {
  return (
    <div>
        <div className="page-wrapper">
  <a className="btn trigger" href="#">click me</a>
</div>

<div className="modal-wrapper">
  <div className="modal">
    <div className="head">
      <a className="btn-close trigger" href="#">
        <i className="fa fa-times" aria-hidden="true"></i>
      </a>
    </div>
    <div className="content">
        <div className="good-job">
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <h1>Good Job!</h1>
        </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default NewsCard
