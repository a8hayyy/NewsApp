import React from 'react'

function Each({image, title, description}) {
  return (
        <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href="/" className="btn btn-primary">More</a>
                </div>
            </div>
        </div>
  )
}

export default Each