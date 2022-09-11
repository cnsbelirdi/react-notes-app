import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className='container'>
      <Header />
      <Form />
      <NoteList />
    </div>
  );
}

export default App;
