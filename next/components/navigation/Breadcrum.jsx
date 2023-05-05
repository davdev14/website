import React, {useEffect, useState} from 'react'
import styles from './BreadcrumItem.module.css'
import BreadcrumItem from './BreadcrumItem'
import { useRouter } from 'next/router'


function Breadcrum({}) {
  const router = useRouter();
  const home = {
    text: "#", 
    url : "/",
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (router && !router.asPath.startsWith('/[')) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { text: path, url: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      if(pathArray.length){
        pathArray[pathArray.length-1].active = true;
      }
      setItems(pathArray);
    }
  }, [router]);
  
  return (
    <div>
         <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb" >
                        <ol className="breadcrumb" style={{margin: "0.2em 0", fontSize: "0.8em "}}>
                          <BreadcrumItem item={home} />
                          {items.map((item, key) => (
                              <BreadcrumItem item={item} active={item.active}  key={key}/>
                          ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrum