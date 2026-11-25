import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function MainLayout({ children }) {
  return (
    <>
      <div className="app">
        <div className="nav-spacer">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default MainLayout;
