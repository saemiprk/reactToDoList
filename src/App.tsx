import { useEffect, useReducer, useRef } from 'react'
import './App.css'
import Editor from './components/Editor/Editor'
import Header from './components/Header/Header'
import List from './components/List/List'
import { Todo } from './types'


type ActionType =
 | { type: 'INIT', data: Todo[] }
 | { type: 'CREATE', data: Todo }
 | { type: 'UPDATE', targetId: number, data: Todo }
 | { type: 'DELETE', targetId: number };

function reducer(state: Todo[], action: ActionType){
  let nextState;

  switch(action.type){
    case 'INIT': 
      return action.data;
    case 'CREATE':{
        nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE':{
      nextState = state.map((item: Todo) => item.id === action.targetId ? {...item, isCheck: action.data.isCheck, content: action.data.content, date: action.data.date} : item);
      break;
    }
    case 'DELETE':{
      nextState = state.filter((item: Todo) => item.id !== action.targetId);
      break;
    }      
    default:
      return state;
  }

  localStorage.setItem("todo", JSON.stringify(nextState));
  return nextState;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedDate = localStorage.getItem('todo');
    if(!storedDate){
        return;
    }
    const parsedDate = JSON.parse(storedDate);
    if(!Array.isArray(parsedDate)){
        return;
    }

    let maxId = 0;
    parsedDate.forEach((item: Todo) => {
      if(Number(item.id) > maxId){
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedDate
    });
  }, []);

  const onCreate = (content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isCheck: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }

  const onUpdate = ({targetId, content, isCheck} : { targetId: number, content: string, isCheck: boolean}) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
      data: {
        id: targetId,
        content: content,
        isCheck: isCheck,
        date: new Date().getTime(),
      }
    })
  }

  const onDelete = (targetId : number) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default App
