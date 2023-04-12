import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home";
import AddExpense from "./pages/add-expese";
import Header from "./components/header";
import Footer from "./components/footer";



export default function App() {
  return (
    <Router>      
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-expense' element={<AddExpense />} />
        </Routes>
        <Footer />     
    </Router>    
  )
}
