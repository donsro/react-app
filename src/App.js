import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './features/button';

function App() {
  return (
    <div className="container">
      <h1>Assignment</h1>
      <div className="my-5">
        <ul className="list-unstyled">
          <li className="my-2">
            <Button>Save as...</Button> <Button disabled>Save as... (disabled)</Button>
          </li>
          <li className="my-2">
            <Button variant="secondary">Save as...</Button> <Button variant="secondary" disabled>Save as... (disabled)</Button>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
