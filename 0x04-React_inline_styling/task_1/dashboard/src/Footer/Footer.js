import React from "react"
// import "./Footer.css"
import getFullYear, { getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
'App-footer': {
  textAlign: 'center',
},
});
export default function App() {
  return (
    <div className={css(styles['App-footer'])}>
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  </div>
  )
}
