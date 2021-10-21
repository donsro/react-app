import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from './features/button';

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <h4>Assignment</h4>
      <div className="my-5">
        <ul className="list-unstyled">
          <li className="my-2">
            <Button>Save as <FontAwesomeIcon icon={faSave} /></Button> <Button disabled>Save as (disabled)</Button>
          </li>
          <li className="my-2">
            <Button>Delete <FontAwesomeIcon icon={faTrash} /></Button> <Button disabled>Delete <FontAwesomeIcon icon={faTrash} /> (disabled)</Button>
          </li>
          <li className="my-2">
            <Button variant="secondary">Save as <FontAwesomeIcon icon={faSave} /></Button> <Button variant="secondary" disabled>Save as <FontAwesomeIcon icon={faSave} /> (disabled)</Button>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
