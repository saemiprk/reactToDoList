import { useRef, useState } from 'react';
import './Editor.css';

type EditorProps = {
    onCreate: (content: string) => void;
}

export default function Editor({ onCreate } : EditorProps){
    const [content, setContent] = useState('');
    const contentRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const onSubmit = () => {
        if(content === ''){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    const onKeydown = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            onSubmit();
        }
    }

    return (
        <div className='Editor'>
            <input type='text' placeholder='New Todo'
                ref={contentRef}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={onKeydown}
                value={content}
            />
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}