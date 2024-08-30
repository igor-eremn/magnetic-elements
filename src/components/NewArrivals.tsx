import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/Home.module.css';
import { ThemeContext } from '../context/ThemeContext';
import ProductCard from './ProductCardProps';

import image2 from '../assets/images/image2.avif';

const NewArrivals: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme } = themeContext;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={`${theme === 'light' ? styles.light : styles.dark} ${styles.new_arrive}`}>
      <h1 className={styles.ts_h1}>Top Seller</h1>
      <Carousel responsive={responsive}>
        <ProductCard imageSrc={image2} 
          title="Product 1" 
          description="This is an awesome product." 
          link="/about" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 2" 
          description="This is an awesome product." 
          link="/account" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 3" 
          description="This is an awesome product." 
          link="/about" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 4" 
          description="This is an awesome product." 
          link="/account" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 5" 
          description="This is an awesome product." 
          link="/about" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 6" 
          description="This is an awesome product." 
          link="/account" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 7" 
          description="This is an awesome product." 
          link="/about" 
        />
        <ProductCard imageSrc={image2} 
          title="Product 8" 
          description="This is an awesome product." 
          link="/account" 
        />
      </Carousel>
    </div>
  );
};

export default NewArrivals;
