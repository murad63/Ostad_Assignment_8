
import IncomePage from './pages/Income';
import ExpensePage from './pages/Expense';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <div >
        {/* <Header /> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Income</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/expenses">Expenses</Link>
              </li>

            </ul>
          </div>
        </nav>
        <div className='container'>
          <Routes>
            <Route path="/" element={<IncomePage />} />
            <Route path="/expenses" element={<ExpensePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
