import Availability from "@/layout/availability";
import NavBar from "./nav-bar";
import { ReactNode } from "react";
import Settings from "@/layout/settings";
import Footer from "./footer";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const { i18n } = useTranslation();
  // document.body.dir = i18n.dir();
  // if (localStorage.getItem('theme') != null) {
  //   document.documentElement.classList.remove('light', 'sunset', 'dark');
  //   document.documentElement.classList.add(localStorage.getItem('theme') as string);
  // } else {
  //   // window.matchMedia('(prefers-color-scheme: dark)').matches)
  // }
  return (
    <div>
      <NavBar />
      <Availability />
      <Settings />
      {children}
      {/* <ForFun /> */}
      {/* <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <AboutPage />
        </CSSTransition>
      </TransitionGroup> */}
      <Footer />
    </div>
  );
}
  
  export default Layout;