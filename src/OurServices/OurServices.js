import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <>
      <section className='contan '>
        <p className="ourServices  mt-5 d-flex flex-column justify-content-around ">Our services</p>
        <div className='bord'></div>
        <div className="  w-100 " >
        <div className="  w-100 d-flex justify-content-center mb-5" >

        <div className="w-75 d-flex justify-content-around  ">
          <div>
            <h5>WEB</h5>
            <div className="imgborder p-3">
              <div className="freeIconArtboard92863511 p-3" style={{backgroundImage:" url('/assets/freeIconStartup86056411.jpg')"}}></div>
            </div>
          </div>
          <div>
            <h5>DESIGN</h5>
            <div className="imgborder p-3">
              <div className="freeIconArtboard92863511 p-3" style={{backgroundImage:" url('/assets/freeIconPoster92863701.jpg')"}}></div>
            </div>
          </div>
          <div>
            <h5>DEV</h5>
            <div className="imgborder p-3">
              <div className="freeIconArtboard92863511 p-3"style={{backgroundImage:" url('/assets/freeIconArtboard92863511.jpg')"}}></div>
            </div>
          </div>
          <div>
            <h5>MARKETING</h5>
            <div className="imgborder p-3">
              <div className="freeIconArtboard92863511 p-3" style={{backgroundImage:" url('/assets/freeIconBigData69087901.jpg')"}}></div>
            </div>
          </div>
          <div>
            <h5>SEO</h5>
            <div className="imgborder p-3">
              <div className="freeIconArtboard92863511 p-3" style={{backgroundImage:" url('/assets/freeIconSitemap86049561.jpg')"}}></div>
            </div>
          </div>
          <div>
            <h5>ADVERTISING</h5>
            <div className="imgborder p-3">
              <div className="freeIconArtboard92863511 p-3" style={{backgroundImage:" url('/assets/freeIconMegaphone92494771.jpg')"}}></div>
            </div>
          </div>
        </div>
        </div>

        <div>
          
        </div>
        <div className="  w-100 d-flex justify-content-center " >

        <div className=" d-flex justify-content-center "style={{width:'100px'}}>

        <div className='bordblack' ></div>
        <div className='bord'></div>
        <div className='bord'></div>
        <div className='bord'></div>
        </div>

        </div>

        </div>

      </section>
    </>

  );
};

export default OurServices;
