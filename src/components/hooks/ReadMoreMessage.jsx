import {useState} from 'react';

const ReadMoreMessage = () => {
    const [hide, setHide] = useState(true);
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet sapien sit amet nulla pharetra semper. Fusce nec semper nunc, ac pretium lorem. Nunc nec sapien sit amet augue.";
    const chars = 30;

    if(message.length <= chars){
        return <span>{message}</span>
    }

    return ( 
        <p>
            {hide ? `${message.substr(0,chars).trim()}...` : message}
            {hide ? (
                <button onClick={() => setHide(false)}>See More</button>
            ):(
                <button onClick={() => setHide(true)}>See Less</button>
            )}
        </p>
    );
}

export default ReadMoreMessage;