import styles from '../styles/Home.module.css'
import AppLayout from '../components/navigation/layouts/AppLayout'
import { useRouter } from 'next/router'
import { getPage, getTitle, LANG_STORAGE_KEY, DEFAULT_LANG } from '../data/pages/Pages'
import { State } from '../components/state/State'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const Index = () => {
  const [content, setContent] = useState(null);
  const [path, setPath] = useState('/');
  const [title, setTitle] = useState('CIA - Welcome');
  const router = useRouter(); 

  useEffect(()=>{
    const params = router.query.params || ['home']; 
    const route = params.join('/');
    setPath(router.asPath);
    setContent(getPage(route, State.getLang()));
    setTitle(getTitle(route, State.getLang()));
  },[path, router, content]);
  
  if(content){
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"/>
          <link rel="manifest" href="/fav/site.webmanifest"></link>
        </Head>
        <AppLayout className={styles.container} layouts={content} route={path}/>
      </>
    )
  }else{
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"/>
          <link rel="manifest" href="/fav/site.webmanifest"></link>
        </Head>
        <div>Loading...</div>
      </>
    )
  }
}

export default Index
