import Footer from "../footer/Footer";
import "../global.componets.css";
import Nav from "../navbar/Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout bg-[#0b1220] ">
        <Nav/>
        <main className="content">{children}</main>
        <Footer />
    </div>
  );
};

export default Layout;
