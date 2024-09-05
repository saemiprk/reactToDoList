import { ChangeEvent, useState } from 'react';
import { Todo } from '../../types';
import './TodoItem.css';

interface TodoItemProps extends Todo {
    onUpdate: ({targetId, content} : {
        targetId: number,
        content: string, 
        isCheck: boolean,
    }) => void;
    onDelete: (targetId: number) => void;
}

export default function TodoItem(props: TodoItemProps){
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(props.content);
    const [isCheck, setIsCheck] = useState(props.isCheck);

    const onClickCheck = () => {
        setIsEditing(false);

        props.onUpdate({
            targetId: props.id,
            content: content,
            isCheck: isCheck,
        });
    }

    const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
    const onChangeCheck = () => {
        setIsCheck(!isCheck);

        props.onUpdate({
            targetId: props.id,
            content: content,
            isCheck: !isCheck,
        });
    }

    const onClickDelete = () => {
        props.onDelete(props.id);
    }

    return (
        <div className='TodoItem'>
            <input type='checkbox' checked={isCheck} onChange={onChangeCheck} />
            {isEditing? (
                <input type='text' value={content} onChange={onChangeContent} />
            ): (
            <div className='content'>{content}</div>
            )}

            <div className='date'>{(new Date(props.date)).toLocaleDateString()}</div>
            {isEditing? (
                <button onClick={onClickCheck}>Check</button>
            ): (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
            
            <button onClick={onClickDelete}>Delete</button>
        </div>
    )
}