import {useEffect} from 'react';

const HookEffect = ({}) => {
useEffect(() => {
    console.log('mounted');
}, []);

return (
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Morbi sit amet sapien sit amet nulla pharetra semper. Fusce nec semper nunc, ac pretium lorem. Nunc nec sapien sit amet augue.</p>
)};

export default HookEffect;