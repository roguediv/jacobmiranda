import Head from 'next/dist/shared/lib/head';
import { useRouter } from 'next/router'
import { useState } from 'react/cjs/react.production.min';
import Article from '../../components/article/Article'
import { ArticleManager } from '../../database/article/ArticleManager';

export default function PageArticle({ dtaArticle }) {
  const router = useRouter();
  const {title} = router.query;
  const article = dtaArticle.article.find(x => x.titleID === title)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="This is the portfolio of Jacob Miranda." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {article != undefined ? <Article article={article} /> : "There was an issue loading this article."}
    
    </>
  )
}

export async function getServerSideProps() {
  var dtaArticle = ArticleManager.getAll()

  return {
    props: {
      dtaArticle: dtaArticle
    }
  }
}
