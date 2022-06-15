import './App.css';
import CardContainter from './components/CardContainer';

const students = [
  {
    name: 'Martin',
    lastName: 'Lant',
    marks: [9, 8, null, 7, 5],
  },
  {
    name: 'Francesco',
    lastName: 'Portus',
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: 'Bill',
    lastName: 'Merdoc',
    marks: [10, null, null, null, 10],
  },
  {
    name: 'John',
    lastName: 'Entman',
    marks: [9, 8, 9, 7, 5],
  },
];

function App() {
  return (
    <div className="App">
      <CardContainter students={students} />
    </div>
  );
}

export default App;
