import React, { useState } from 'react';
import './MovieRow.css';
    

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    const[scrollX, SetScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        SetScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 200;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        SetScrollX(x);
    }

    return(
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <ion-icon name="chevron-back-sharp" style={{fontSize: 50}}></ion-icon>
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <ion-icon name="chevron-forward-sharp" style={{fontSize: 50}}></ion-icon>
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 200
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}