import {useEffect} from 'react';
import axios from 'axios';
import Dashboard from 'pages/Dashboard';
function App() {
    useEffect(() => {
        axios.get('/home').then(res => {
            console.log(res);
        });
    }, []);
    return (
        <div className="App">
            <main>
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
