import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Footer from "./components/Footer";
import Layout from "@/layout/Layout";
function App() {

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
