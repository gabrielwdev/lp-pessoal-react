import "./App.css";
import Aside from "./assets/components/aside";
import Section from "./assets/components/section";

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
