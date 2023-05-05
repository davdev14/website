import React from 'react'
import styles from './Infobar.module.css'
import Link from 'next/link'
import { State } from '../state/State'

function Infobar() {
  const setLang = (lang) => {
    if(!State.isActiveLang(lang)){
      State.setLang(lang);
      window.location.reload(); 
    }
  };
  return (
    <div>
        <div style={{backgroundColor: "#3c3c3c", color: "#bbb", fontSize: "0.8em", padding: "0.2em"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8">Customer Lines : (+237) 693 48 06 50 | (+237) 681 79 57 16</div>
                <div className="col-sm-4" style={{textAlign: "right"}}>
                  Language : <span className={State.isActiveLang('en')? styles.active_lang : styles.inactive_lang} onClick={()=> setLang('en')}>English</span> | <span className={State.isActiveLang('fr')? styles.active_lang : styles.inactive_lang} onClick={()=> setLang('fr')}>Français</span></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Infobar