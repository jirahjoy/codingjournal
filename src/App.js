import logo from './logo.svg';
import './App.css';
import todo from './assets/todo.css';
import CreateTask from './components/CreateTask';
import CreateThoughts from './components/CreateThoughts';


function App() {
  return (
    <div className='container'>
      <h2>Jirah's Coding Journal</h2>
      <div className='innerContainer'>
        <CreateTask />
        <CreateThoughts />
      </div>
    </div>
  );
}
export default App;
