import styles from '../../../styles/Article.module.css'
import React from "react";


export default async function Details({ params }) {
  const {id} = params
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const article = await res.json();
  console.log({ params })
  return (
    <> 
      <div className={styles.details}>
        <section className={styles.imgs_details}>
          <img src={article.image}  width={100} height={100} />
          <span className={styles.price}>$ {article.price}</span>
        </section>
        <section className={styles.deatils_desc}>
          <span className={styles.category}>{article.category}</span>
          <p> {article.title} </p> 
          <p className={styles.description}>{article.description}</p>
          <h3 className={styles.id}>{article.id}</h3>
        </section>
      </div>
    </>
  );
}
