import React, { useContext} from "react"
import getFullYear, { getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  a: {
    textDecoration: "underline",
    color: "#e0354b"
  },
});

export default function Footer({className}) {
  const contextValue = useContext(AppContext);
  return (
    <div className={className}>
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
    {contextValue.user.isLoggedIn ? (
      <a className={css(styles.a)}>Contact us</a>
    ) : null}
  </div>
  )
}
