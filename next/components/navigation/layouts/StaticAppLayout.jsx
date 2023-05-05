import React, { useEffect } from 'react'

import Infobar from '../Infobar'
import AppHeader from '../AppHeader'
import Breadcrum from '../Breadcrum'
import AppFooter from '../AppFooter'
import LogoImg from '../../../assets/img/logo.svg'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './AppLayout.module.css'

function StaticAppLayout({children}) {
  const app = {indexUrl:"#", appLogo: LogoImg};
  
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[]);

  return (
    <div>
      <div className={styles.page_container}>
        <div
          className="container-fluid no-padding"
          style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
          <Infobar />
          <AppHeader app={app} />
          <Breadcrum />

          <main className="container-fluid no-padding">
              <div className={styles.main_container}>
                {children}
              </div>
              <AppFooter  app={app}/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default StaticAppLayout