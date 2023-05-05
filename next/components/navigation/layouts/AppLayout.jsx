import React, { useEffect } from 'react'

import Infobar from '../Infobar'
import AppHeader from '../AppHeader'
import Breadcrum from '../Breadcrum'
import AppFooter from '../AppFooter'
import LogoImg from '../../../assets/img/logo.svg'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './AppLayout.module.css'

import CmpRenderer from '../../cmp/CmpRenderer'
import Loader from './Loader'

function AppLayout({layouts, route=null}) {
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
          <AppHeader app={app} route={route} />
          <Breadcrum />

          <main className="container-fluid no-padding">
              <div className={styles.main_container}>
                <CmpRenderer elts={layouts} loader={<Loader/>} />
              </div>
              <AppFooter  app={app}/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AppLayout