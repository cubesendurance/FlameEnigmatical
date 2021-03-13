import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WordCounter text="I love passwords and I love SN" targetWordCount={94} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

function Counter({ count }) {
  return (
    <p className="mb2">
      Word count: {count}
    </p>
  );
}

function ProgressBar({ completion }) {
  const percentage = completion * 100;
  return (
    <div className="mv2 flex flex-column">
      <label htmlFor="progress" className="mv2">
        Progress
      </label>
      <progress value={completion} id="progress" className="bn">
        {percentage}%
      </progress>
    </div>
  );
}

function Editor({
  text
}) {
  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
      <textarea value={text} id="editor" />
    </div>
  )
}

function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}

function WordCounter({ text, targetWordCount }) {
  const wordcount = countWords(text);
  const progress = wordcount / targetWordCount;

  return (
    <form className="measure pa4 sans-serif">
      <Editor text={text} />
      <div className="flex mt3">
        <Counter count={wordcount} />
        <ProgressBar completion={progress} />
      </div>
    </form>
  );
}

// class WordCounter extends React.Component {
//   constructor() {
//     super();
//     this.state = { text: '' };
//   }

//   render() {
//     const { targetWordCount } = this.props;
//     const { text } = this.state;
//     const wordCount = countWords(text);
//     const progress = wordCount / targetWordCount;

//     return (
//       <form className="measure pa4 sans-serif">
//         <Editor text={text}></Editor>
//         <Counter count={wordCount} />
//         <ProgressBar completion={progress} />
//       </form>
//     )
//   }
// }