import useFetch from '../hooks/useFetch';
import { Smartphone, MapPin, User } from 'react-feather';
import Loading from './Loading';

export default function AuthorInfo({ userId }) {
  const { result, loading } = useFetch(`user/${userId}`);

  if (loading) return <Loading />;

  return (
    <div className="author_info">
      <img src={result.picture} alt={result.firstName} />
      <div className="author_name">
        {result.firstName} {result.lastName}
      </div>
      <div className="author_email">{result.email}</div>
      <div className="row">
        <div>
          <MapPin />
          {result.location.city}, {result.location.country}
        </div>
        <div>
          <User />
          {result.gender}
        </div>
        <div>
          <Smartphone />
          {result.phone}
        </div>
      </div>
    </div>
  );
}
