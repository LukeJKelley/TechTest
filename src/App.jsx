import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BookDisplay from "./container/BookDisplay/BookDisplay";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<BookDisplay />} />
          <Route
            path="/book/:index"
            element={<BookDetails location={window.location} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
