import {FC, useEffect, useState} from "react";
import {api} from "src/constants";


interface IArticles {
    id: string;
    title: string;
}

export const Articles: FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [articles, setArticles] = useState<IArticles[]>([]);
    useEffect(() => {
        getFetchArticles();
    }, [])

    const getFetchArticles = async () => {
        setLoading(true);
        setArticles([]);
        setError('');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if(Math.random() > 0.5) {
            fetch(`${api}/v3/articles`).then(response => response.json().then(data => setArticles(data))
                .catch((err: Error) => setError(err.message))
                .finally(() => setLoading(false)));
        } else {
            setError('custom error');
            setLoading(false);
        }

    }

    return (
        <>
            <h2>Articles</h2>
            {loading && <div>Loading...</div>}
            <button onClick={getFetchArticles}>reload</button>
            <ul>{articles.map((article) => (
                <li key={article.id}>{article.title}</li>
            ))}</ul>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    );
}