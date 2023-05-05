import styles from './Loader.module.css'

function Loader() {
  return (
    <div style={{paddingTop: "5vh", textAlign: "center"}}>
      <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader