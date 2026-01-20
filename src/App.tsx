import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import BattleScreen from "./components/pages/battlescreen/Battlescreen";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/battle" element={<BattleScreen />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
