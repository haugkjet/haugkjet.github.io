import TopBar from "./components/TopBar";
import ContentArea from "./components/ContentArea";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <TopBar />
      <ContentArea />
      <Footer />
    </div>
  );
}

export default App;
