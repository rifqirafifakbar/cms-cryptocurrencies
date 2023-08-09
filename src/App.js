import logo from './logo.svg';
import './App.css';
import { Input } from './components/atoms/input/input';
import './styles/main.scss';
import { LoginPage } from './pages/loginPage';
import { DashboardApp } from './pages/dashboard';

function App() {
  return (
    // <LoginPage />
    <DashboardApp />
  );
}

export default App;
