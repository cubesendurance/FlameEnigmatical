import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

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
  text,
  onTextChange
}) {
  function handleChange(event) {
    onTextChange(event.target.value);
  }

  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
      <textarea value={text} onChange={handleChange} id="editor" />
    </div>
  )
}

function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}

class WordCounter extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.handleTextChange = this.handleTextChange.bind(this);//To make sure always called inside the Wordconter context
  }

  handleTextChange(currentText) {
    this.setState(() => ({ text: currentText })) //We're creating a closure to that the scope is preserved
    //setState takes a function that MUST return an object w/ updated state properties. React merges current state w/ this object
    //setState must be a pure function
  }

  render() {
    const { targetWordCount } = this.props;
    const { text } = this.state;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;

    return (
      <form className="measure pa4 sans-serif">
        <Editor text={text} onTextChange={this.handleTextChange}></Editor>
        <Counter count={wordCount} />
        <ProgressBar completion={progress} />
      </form>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <WordCounter targetWordCount={94} />
  </React.StrictMode>,
  document.getElementById('root')
);