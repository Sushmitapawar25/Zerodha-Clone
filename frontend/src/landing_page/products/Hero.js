import React from 'react';

function Hero() {
    return ( 
        <div className="container border-bottom">
            <div className="row text-center mt-5 text-muted" style={{marginBottom:"90px"}}>
                <h1 style={{fontSize:"28px", marginTop:"40px"}}>Zerodha Products</h1>
                <h3 className='text-muted mt-3' style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3'>Check out our <a href= "" style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;