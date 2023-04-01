import './App.css';
import { Features } from './components/Features/Features';
import { ArticleBox } from './components/ArticleBox/ArticleBox';

function App() {
  return (
    <div className="App">
      <h1>Techcrunch</h1>
      <Features />
      <ArticleBox />
    </div>
  );
}

export default App;
