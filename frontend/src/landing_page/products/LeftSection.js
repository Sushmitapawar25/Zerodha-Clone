import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container" style={{marginTop:"85px"}}>
            <div className="row mt-5" >
                <div className="col-6">
                    <img src={imageURL} />
                </div>
                
                <div className="col-6 p-5 mt-5">
                    <h1 style={{fontSize:"24px"}}>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft: "70px", textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft: "20px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;