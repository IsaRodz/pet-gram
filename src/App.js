import { useState } from 'react';
import useFetch from './hooks/useFetch';
import Card from './components/Card';
import Loading from './components/Loading';

export default function App() {
  const [resource, setResource] = useState('/post');

  const { result, loading, error } = useFetch(resource);

  const getPostsByTag = tag => {
    setResource(`/tag/${tag}/post`);
    document.body.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  return (
    <div className="feed-container">
      {/* {JSON.stringify(result.data)} */}
      {result.data.map(item => (
        <Card key={item.id} item={item} onClickTag={getPostsByTag} />
      ))}
    </div>
  );
}
