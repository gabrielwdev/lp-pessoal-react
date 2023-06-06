import "./App.css";
import Header from "./assets/components/header";
import Section from "./assets/components/section";
import Aside from "./assets/components/Aside";

function App() {
  return (
    <>
      <body className="corpo-dark">
        {/* <Header /> */}
        <main className="container-maior">
          <Section />
          <Aside />
        </main>
      </body>
    </>
  );
}

export default App;
