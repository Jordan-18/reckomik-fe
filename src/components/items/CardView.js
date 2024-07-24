import React from 'react'

function CardView(props) {
    const {
        title,
        alt_title,
        type,
        description,
        genre,
        author,
        artist,
        rate,
        img,
        released,
    } = props
    
    return (
        <div className="col-md-3">
            <div className="thumb-blog-simple transation hover-img-zoom mb-0">
                <div className="post-image overflow-hidden">
                    <img src="assets/images/blog/grid/16.png" alt="Image not found!" />
                </div>
                <div className="post-content overflow-hidden py-3">
                    <div className="post-meta font-mini text-uppercase list-color-light">
                        <a href="#"><span>Austria</span></a>
                    </div>
                    <h4><a href="#" className="transation text-dark hover-text-primary d-block mb-4">Woman in Black Outfit Standing on Beach Sand</a></h4>
                    <a href="#" className="my-2 btn-link text-secondary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default CardView