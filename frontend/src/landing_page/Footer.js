import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250 250" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2026, Zerodha Broking Ltd.<br/>All rights reserved.
            </p>
            <ul className="social p-0 m-0" style={{ display: "flex", listStyle : "none", gap:"25px"}}>
                <li>
                    <a target="_blank" href="https://x.com/zerodha" style={{color:"rgb(66, 66, 66"}}><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a target="_blank" href="https://facebook.com/zerodha.social" style={{color:"rgb(66, 66, 66"}}><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a target="_blank" href="https://instagram.com/zerodhaonline/" style={{color:"rgb(66, 66, 66"}}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a target="_blank" href="https://linkedin.com/company/zerodha" style={{color:"rgb(66, 66, 66"}}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </li>
            </ul>
          </div>
          <div className="col">
            <h5>Company</h5>
         
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px" , display:"block"}}>About</a>
           
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Products</a>
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Referral program</a>
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Pricing</a>
           
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Careers</a>
           
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Zerodha.tech</a>
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Press & media</a>
           
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Zerodha Cares (CSR)</a>
        
          </div>
          <div className="col">
            <h5>Support</h5>
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Contact us</a>
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Support portal</a>
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Z-Connect blog</a>
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>List of charges</a>
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Downloads & resources</a>
            
          </div>
          <div className="col">
            <h5>Account</h5>
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Open an account</a>
            
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>Fund transfer</a>
           
            <a href="" className="text-muted" style={{textDecoration:"none", lineHeight:"40px", display:"block"}}>60 day challenge</a>
            
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on
            SCORES portal & SMARTODR. Mandatory details for filing complaints on
            SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
        <div className="text-center  d-flex flex-column align-items-center">
            <ul style={{ display: "flex", listStyle : "none", gap:"25px"}}>
                <li><a rel="noFollow" href="https://nseindia.com"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>NSE</a></li>
                <li><a rel="noFollow" href="https://www.bseindia.com"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>BSE</a></li>
                <li><a rel="noFollow" href="https://www.mcxindia.com"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>MCX</a></li>
                <li><a rel="noFollow" href="https://zerodha.com/terms-and-conditions/"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>Terms & Conditions</a></li>
                <li><a rel="noFollow" href="https://zerodha.com/policies-and-procedures/"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>Policies & procedures</a></li>
                <li><a rel="noFollow" href="https://zerodha.com/privacy-policy/"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>Privacy policy</a></li>
                <li><a rel="noFollow" href="https://zerodha.com/disclosure/"  className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>Disclosure</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
