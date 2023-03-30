import React from 'react';
import styles from './UrClients.module.css';
import img1 from '../assets/images/_21.jpg';
import img2 from '../assets/images/_31.jpg';
import img3 from '../assets/images/_41.jpg';
import img4 from '../assets/images/_51.jpg';
import img5 from '../assets/images/_61.jpg';
import img6 from '../assets/images/_71.jpg';
import img7 from '../assets/images/_81.jpg';
import img8 from '../assets/images/_91.jpg';
import img9 from '../assets/images/_111.jpg';
import img10 from '../assets/images/_191.jpg';
import img11 from '../assets/images/_121.jpg';
import img12 from '../assets/images/biola300x3001.jpg';

const Num5OurClients = () => {
  return (
    <div className={styles.num5OurClients}>
      <p className={styles.ourClients}>our clients</p>
      <div className='bord'></div>

     
      {/* <div className={styles.flexWrapperOne}>
        <img
          alt=""
          className={styles.line7}
        />
        <p className={styles.ourClients}>our clients</p>
        <img
          alt=""
          className={styles.line8}
        />
      </div> */}

      <div className={styles.flexWrapperTwo}>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img1} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img2} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img3} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img4} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img5} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img6} />
        </div>

        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img7} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img8} />
        </div>

        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img9} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img10} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img11} />
        </div>
        <div className={styles.group6}>
          <img alt="" className={styles.num21} src={img12} />
        </div>
      </div>
    </div>
  );
};

export default Num5OurClients;
