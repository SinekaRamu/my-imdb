import { useEffect } from "react";
import Nav from "./Nav";

const Layout = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);
  return (
    <>
      <Nav />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
