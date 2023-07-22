import React from "react";

// Styles
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, price_change_24h }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
      <span
        className={
          price_change_24h > 0
            ? styles.greenprice_change_24h
            : styles.redprice_change_24h
        }
      >
        {price_change_24h?.toFixed(2)}%
      </span>
      <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
