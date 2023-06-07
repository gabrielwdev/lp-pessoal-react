import "./App.css";
import Section from "./assets/components/section";
import Aside from "./assets/components/aside";

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
