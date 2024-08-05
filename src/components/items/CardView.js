import React, { useContext, useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings';
import Helper from '../../utils/Helper';
import globalContenxt from '../../utils/globalContenxt';

function CardView(props) {
    let {
        title,
        alt_title,
        type,
        description,
        genre,
        author,
        artist,
        rate,
        image,
        released,
        rank,
        comic_url: initialComicUrl,
        col,
        onButtonClick 
    } = props
    const [comicUrl, setComicUrl] = useState(initialComicUrl);
    const { globalData, setglobalData } = useContext(globalContenxt);

    useEffect(() => {
        if(!comicUrl){
            let generatedUrl = ``
            switch (globalData.extention){
                case 'komikcast':
                    generatedUrl = `https://komikcast.com/komik/${Helper.formatTitle(title)}`
                    break;
                case 'westmanga':
                    generatedUrl = `https://westmanga.fun/manga/${Helper.formatTitle(title)}`
                    break;
            }
            // const generatedUrl = `https://komikcast.com/komik/${Helper.formatTitle(title)}`;
            // const generatedUrl = `https://westmanga.fun/manga/${Helper.formatTitle(title)}`; 
            setComicUrl(generatedUrl);
        }
    }, [])
    
    return (
        <div className={`col-md-${col}`}>
            <div className="thumb-blog-simple transation hover-img-zoom mb-0">
                <div className="post-image overflow-hidden" style={{ position: "relative" }}>
                    <img 
                        src={image}
                        alt="Image not found!"
                        style={{width: "100%", height: "auto"}}
                        onError={(e) => { e.target.src = "assets/images/blog/grid/16.png"; }}
                    />
                    <button 
                        className='btn btn-white' 
                        style={{position: "absolute", top: "0px", right: "0px"}}
                        onClick={onButtonClick}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="post-content overflow-hidden py-3">
                    <div className="post-meta font-mini text-uppercase list-color-light">
                        <a href={comicUrl} target='_blank'><span>{type}</span></a>
                    </div>
                    <h4><a href={comicUrl} target='_blank' className="transation text-dark hover-text-primary d-block">{Helper.setlimitText(title, 20)}</a></h4>
                    <h6><span  target='_blank' className="font-mini">{Helper.setlimitText(genre)}</span></h6>
                    <h6>
                        <StarRatings
                            rating={(rate ?? 0)/2}
                            starDimension="15px"
                            starSpacing="5px"
                        />
                    </h6>
                    <a href={comicUrl} target='_blank' className="my-2 btn-link text-primary">Read More &raquo;</a>
                </div>
            </div>
        </div>
    )
}

export default CardView