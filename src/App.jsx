import "./App.css";
import Section from "./assets/components/section.jsx";
import Aside from "./assets/components/aside.jsx";

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
