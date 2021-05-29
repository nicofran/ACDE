// Styles
import "../assets/style/main.scss";
import { useEffect, useState } from "react";

// Libraries
import { Helmet } from "react-helmet";

// Components

const Layout = (props) => {
  return (
    <main data-aos="fade">
      <Helmet>
        {/* <title>{t("seo.title")}</title> */}
        {/* <meta name="description" content={t("seo.description")} /> */}
      </Helmet>
      {props.children}
    </main>
  );
};

export default Layout;
