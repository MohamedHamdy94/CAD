import React from 'react';
import './OURPORTFOLIO.css';

const OurPortfoio = () => {
  return (
    <>
      <div className="gradient mt-5 " style={{ border: '2px solid blue' }}>
        <h6 className="oURPORTFOLIO pt-5">OUR PORTFOLIO</h6>
        <div className='bord'></div>

        <div className="w-100 d-flex  justify-content-center ">
        <div className="w-75 grid">
            <div className="websiteApp" style={{backgroundImage:'url("/assets/websiteApple11.jpg")'}}></div>
            <div className="websiteApp" style={{backgroundImage:'url("/assets/websiteCarmax1.jpg")'}}></div>
            <div className="websiteApp" style={{backgroundImage:'url("/assets/websiteProtest1.jpg")'}}></div>
            <div className="websiteApp" style={{backgroundImage:'url("/assets/websiteSimplychocolate1.jpg")'}}></div>
            <div className="websiteApp" style={{backgroundImage:'url("/assets/websiteSirinlabs1.jpg")'}}></div>
            <div className="websiteApp" style={{backgroundImage:'url("/assets/websiteSlack1.jpg")'}}></div>

          {/* <div className="d-flex  justify-content-between mb-2" style={{ border: '2px solid red' }}>
            <div className="websiteApp"></div>
            <div className="websiteApp"></div>
            <div className="websiteApp"></div>
          </div>
          <div className="d-flex justify-content-between" style={{ border: '2px solid red' }}>
            <div className="websiteApp"></div>
            <div className="websiteApp"></div>
            <div className="websiteApp"></div>
          </div> */}

        </div>
        </div>
                <butoon className='tOGETTHECONSULTATION btn m-5' style={{color:'#fff',    backgroundColor: 'salmon'}}>TO GET THE CONSULTATION</butoon>
       
      </div>
      {/* <div className={classes.oURPORTFOLIO}>OUR PORTFOLIO</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.websiteApple11}></div>
      <div className={classes.websiteSimplychocolate1}></div>
      <div className={classes.websiteCarmax1}></div>
      <div className={classes.websiteSirinlabs1}></div>
      <div className={classes.websiteProtest1}></div>
      <div className={classes.websiteSlack1}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.tOGETTHECONSULTATION}>TO GET THE CONSULTATION</div> */}
    </>
  );
};

export default OurPortfoio;
