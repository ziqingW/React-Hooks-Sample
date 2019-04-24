import React, { useState } from 'react';
import './App.css';

export default function App() {
  const initialItems = [
    {
    content: ['Drink milk',
    'Feed the cat',
    'Dry washing clothes'],
    title: 'Great'
  },
    {
    content: ['Coding practice',
    'Read a blog',
    'Sing a song',
    'Try a cooking recipe'],
    title: 'Nice'
  },
    {
    content: ['Sneak into the classroom',
    'Code challenge',
    'Grocery shopping'],
    title: 'Average'
  },
    {
    content:['Write coverletter, again',
    'Apply more jobs',
    'Receive denial one more time XD'],
    title: 'OK'
  }
];
  const inputDisplay = Array(initialItems.length).fill(false);
  const [display, setDisplay] = useState(inputDisplay);
  function addItem(i) {
    setNewContent('');
    let newDisplay = [...inputDisplay];
    newDisplay[i] = true;
    setDisplay(newDisplay);
  }

  const [newContent, setNewContent] = useState('');
  function addInput(e) {
    setNewContent(e.target.value);
  }

  const [items, setItems] = useState(initialItems);
  function addContent(i) {
    let newItems = JSON.parse(JSON.stringify(items));
    if (newContent.trim().length) {
      newItems[i].content.push(newContent);
      setItems(newItems);
      setNewContent('');
    }
    setDisplay(inputDisplay);
  }

  function delItem(i, j) {
    let newItems = JSON.parse(JSON.stringify(items));
    newItems[i].content.splice(j, 1);
    setItems(newItems);
  }
  const titleColors = ['#f49841', '#7641f4', '#337add', '#179322'];
  return (
    <div className="wrapper">
      {items.map((item, i) => {
        return (
          <div className="single-card" key={i}>
            <h3 style={{backgroundColor: titleColors[i]}}>{item.title}</h3>
            <ul>
              {item.content.map((singleItem, j) => <li key={j}><button className="btn btn-del" onClick={() => delItem(i, j)}>-</button><p className="content">{singleItem}</p></li>)}
            </ul>
            {!display[i] ? (<button className="btn btn-add" onClick={() => addItem(i)}>+</button>) : null}
            {display[i] ? (<div><textarea rows="4" onChange={e => addInput(e)}/><button className="btn-input" onClick={() => addContent(i)}>OK</button></div>) : null}
        </div>)
      })}
    </div>
  );
}
