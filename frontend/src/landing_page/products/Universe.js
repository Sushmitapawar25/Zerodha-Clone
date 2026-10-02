import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center" style={{marginBottom:"50px"}}>
        <h1 style={{fontSize:"24px"}} className='text-muted'>The Zerodha Universe</h1>
        <p className='mt-3'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
            <a href='https://www.zerodhafundhouse.com/' className='text-muted' style={{textDecoration:"none"}}>
                <img src="media/images/zerodhaFundhouse.png"  style={{height:"55px", maxWidth:"100%", marginBottom:"20px"}}/><br/>
                <span>Our asset management venture <br/> that is creating simple and transparent index <br/> funds to help you save for your goals.</span>
            </a>
        </div>
        <div className="col-4 p-3 mt-5">
            <a href='https://sensibull.com/'  className='text-muted' style={{textDecoration:"none"}}>
                <img src="media/images/sensibullLogo.svg" style={{height:"55px", maxWidth:"100%", marginBottom:"20px"}} /><br/>
                <span>Options trading platform that lets you<br/> create strategies, analyze positions, and examine <br/> data points like open interest, FII/DII, and more.</span>
            </a>
        </div>
        <div className="col-4 p-3 mt-5">
            <a href='https://www.tijorifinance.com/dashboard/' className='text-muted' style={{textDecoration:"none"}}>
                <img src="media/images/tijori.svg" style={{height:"55px", maxWidth:"100%", marginBottom:"20px"}} /><br/>
                <span>Investment research platform <br/> that offers detailed insights on stocks,<br/> sectors, supply chains, and more.</span>
            </a>
        </div>
        <div className="col-4 p-3 mt-5">
            <a href='https://www.streak.tech/' className='text-muted' style={{textDecoration:"none"}}>
                <img src="media/images/streakLogo.png" style={{height:"55px", maxWidth:"100%", marginBottom:"20px"}} /><br/>
                <span>Systematic trading platform <br/> that allows you to create and backtest<br/> strategies without coding.</span>
            </a>
        </div>
        <div className="col-4 p-3 mt-5">
            <a href='https://smallcase.zerodha.com/' className='text-muted' style={{textDecoration:"none"}}>
                <img src="media/images/smallcaseLogo.png" style={{height:"55px", maxWidth:"100%", marginBottom:"20px"}} /><br/>
                <span>Thematic investing platform<br/> that helps you invest in diversified <br/> baskets of stocks on ETFs.</span>
            </a>
        </div>
        
        <div className="col-4 p-3 mt-5">
            <a href='https://joinditto.in/' className='text-muted' style={{textDecoration:"none"}}>
                <img src="media/images/dittoLogo.png"  style={{height:"55px", maxWidth:"100%", marginBottom:"20px"}}/>
                <br/>
                <span>Personalized advice on life  <br/> and health insurance. No spam <br/> and no mis-selling.</span>
            </a>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", marginTop:"55px"}}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;