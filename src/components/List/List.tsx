import { useState } from 'react';
import { Todo } from '../../types';
import TodoItem from '../TodoItem/TodoItem';
import './List.css';

type ListProps = {
    todos: Todo[];
    onUpdate: ({targetId, content} : {
        targetId: number,
        content: string,
        isCheck: boolean,
    }) => void;
    onDelete: (targetId: number) => void;
}

export default function List({ todos, onUpdate, onDelete }: ListProps){
    const [search, setSearch] = useState('');
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    const getSearchedData = () => {
        if(search === ''){
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const SearchedTodos = getSearchedData();

    return (
        <div className='List'>
            <input type='text' placeholder='Search...' value={search} onChange={onChangeSearch} />
            <div className='todos_wrapper'>
                {SearchedTodos?.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}