import React from 'react';
import styles from '../styles/ProductCard.module.css';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <a href={link} className={styles.product_card}>
      <img src={imageSrc} alt={title} className={styles.product_image} />
      <h2 className={styles.product_title}>{title}</h2>
      <p className={styles.product_description}>{description}</p>
    </a>
  );
};

export default ProductCard;
