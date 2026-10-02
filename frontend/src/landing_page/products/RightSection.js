import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container ">
            <div className="row" >
                <div className="col-6 p-5" style={{marginTop:"10%"}}>
                    <h1 style={{fontSize:"24px"}}>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;