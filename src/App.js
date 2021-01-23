import './App.css';
import { PaymentPage } from '../src/screens/payment/PaymentPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          나는 홈페이지를 만들꺼야
        </p> */}
        <PaymentPage/>
        <button>
          Button
        </button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
