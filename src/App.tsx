import Header from "./components/header/Header";
import { LandingPageSection } from "./pages/LandingPageSection";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <>
        <Header />
        {/* <MainSection />
        <ExplainSection />
        <ServicesSection />
        <FeaturesSection />
        <Footer /> */}
        <LandingPageSection />
      </>
    </MuiThemeProvider>
  );
}

export default App;
