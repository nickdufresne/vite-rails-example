import React from 'react'

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/books')
    .then((res) => res.json())
    .then((data) => {setData(data)});
  }, []);
  return (
    <div>
      Books:
      {
        data.map(({title, author, description}) =>
          <div className="book">
            <div> Title: {title}</div>
            <div> Author: {author}</div>
            <div> Description: {description}</div>
          </div>
        )
      }
    </div>
  );
}

export default App;
