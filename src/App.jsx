import "./App.css";
import Aside from "./assets/components/Aside";
import Section from "./assets/components/Section";

function App() {
  return (
    <>
      <body className="corpo-dark">
        <main className="container-maior">
          <Section />
          <Aside />
        </main>
      </body>
    </>
  );
}

export default App;
