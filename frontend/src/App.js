import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layout/Layout';
import Dashboard from './component/Dashboard';
import Algorithm from './component/Algorithm';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {/* Routes with Auth Layout */}
            <Route
              path="/"
              element={<MainLayout>
                <Dashboard />
              </MainLayout>}
            />
            <Route
              path="/algorithm"
              element={
                <MainLayout>
                  <Algorithm />
                </MainLayout>
              }
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
