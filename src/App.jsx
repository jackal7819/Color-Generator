import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { useState } from 'react';

const App = () => {
    const [colors, setColors] = useState(new Values('#8125f1').all(10));
    
    return (
        <main>
            <Form />
            <ColorList colors={colors} />
        </main>
    );
};

export default App;
