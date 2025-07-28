import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { RootElement, ContentWrapper } from "my-material-theme-ui-components";
import TopNavBarComponnet from "./components/sideNav";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Projects = lazy(() => import("./pages/Projects"));
  const Dashboards = lazy(() => import("./pages/Dashboards"));
  const Notes = lazy(() => import("./pages/Notes"));
  const Gallery = lazy(() => import("./pages/Gallery"));
  const OfficeDays = lazy(() => import("./pages/OfficeDays"));
  const [isMobile, setisMobile] = useState<boolean>();

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    console.log(isMobile);
    if (isMobile) {
      setisMobile(true);
    }
  };

  useEffect(() => {
    console.log("message");
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <RootElement
          $gap="12px"
          $padding="12px"
          $flexDirection={!isMobile ? "row" : "column"}
        >
          <TopNavBarComponnet isMobile={isMobile} />
          <ContentWrapper $backgroundColor="#ECE8DE">
            <Suspense fallback="loading">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboards" element={<Dashboards />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/office-days" element={<OfficeDays />} />
                <Route path="*" element={<>no Page Found</>} />
              </Routes>
            </Suspense>
          </ContentWrapper>
        </RootElement>
      </Router>{" "}
    </>
  );
}

export default App;
