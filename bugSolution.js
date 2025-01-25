```javascript
// pages/about.js
import {useEffect, useState, Suspense} from 'react';

const MyComponent = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/data');
            const json = await res.json();
            setData(json);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>About Page</h1>
            <p>Data from API: {JSON.stringify(data)}</p>
        </div>
    );
}

export default function About() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyComponent/>
        </Suspense>
    );
}
```