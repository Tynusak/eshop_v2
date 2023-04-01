import './ArticleBox.css';
import { Article } from '../Article/Article';

export const ArticleBox = () => {
  return (
    <div className="articleBox">
      <Article />
      <Article />
      <Article />
    </div>
  );
};
