// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './beer.scss';
import common from '../lib/utils';
import BeerBtnBoxCart from './BeerBtnBoxCart';
import BeerBtnBoxBeers from './BeerBtnBoxBeers';


/**
 * 함수형으로 만든  BeerBtnBoxCart.js 
 */
const Beer = (props) => {

   
        const {pageName, beer, cartCnt, onClick} = props;
        let beerBtnBox;
        if(pageName === "cart"){
            beerBtnBox = <BeerBtnBoxCart beer={beer} cartCnt={cartCnt} onClick={onClick}/>
        }else if((pageName === "beers")){
            beerBtnBox = <BeerBtnBoxBeers beer={beer} cartCnt={cartCnt} onClick={onClick}/>
        }
        return(
            <div className ="beer__item">
                <div className ="beer__top">
                    <div className ="beer__img">
                        <img src={`${beer.image}`} alt={`${beer.name}`} />
                    </div>
                    <div className ="beer__info">
                        <p className ="beer__name"> {beer.name}</p>
                        <p className ="beer__tags"> {beer.tags.join(', ')}</p>
                        <p className ="beer__price"> {common.comma(beer.price)} <em>원</em></p>
                        <div className ="beer__count">
                            <p>재고 <em>{common.comma(beer.stock)}</em></p>
                            <p>수량 <em>{common.comma(cartCnt)}</em></p>
                        </div>
                    </div>
                </div>
                <div className ="beer__bottom">
                    {beerBtnBox}
                </div>
            </div>
        )

    
};

Beer.propTypes = {
    beer: PropTypes.object,
    onClick: PropTypes.func,
    pageName: PropTypes.string


};

export default Beer;