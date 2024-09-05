import './Header.css';

export default function Header(){

    return (
        <div className="Header">
            <div>{new Date().toDateString()}</div>
        </div>
    )
}