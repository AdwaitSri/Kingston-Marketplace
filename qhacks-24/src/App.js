
import './App.css';

function App() {

  const [data, setData] = useState([
    {
      condition: "Like New",
      description: "Test description",
      postalcode: "K7L 1E1",
      price: "8000",
      title: "Test title",
      category: "Unchecked",
      seller:"Me",
      url:"",
    },
  ]);

  return (
    <div className="App">
      <h1>
        Welcome to the React app! 
      </h1>
    </div>
  );
}

export default App;