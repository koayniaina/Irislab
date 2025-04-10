import Link from "next/link";
import styles from "../../styles/Article.module.css";
import React from "react";

export default async function ArticleAll() {
  const res = await fetch("https://fakestoreapi.com/products");
  const articles = await res.json();
  return (
    <>
      <div className={styles.article}>
        {articles.map((article) => (
          <Link href={"/articles/" + article.id} key={article.id}>
            <main className={styles.wraper}>
              <section className={styles.card_top}>
                <img src={article.image} />
                <span className={styles.category}>{article.category}</span>
              </section>
              <section className={styles.card_bottom}>
                <span>$ {article.price}</span>
                <p className={styles.title}> {article.title} </p>
                <h3>{article.id}</h3>
              </section>
            </main>
          </Link>
        ))}
      </div>
    </>
  );
}
