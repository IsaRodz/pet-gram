import { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

export default function UsersAutocomplete({ onSelect }) {
  const { result, loading } = useFetch('/user');
  const [userName, setUserName] = useState('');

  const filteredUsers =
    result.data &&
    result.data.filter(user => {
      return user.firstName.toLowerCase().includes(userName.toLowerCase());
    });

  if (loading) {
    return <Loading />;
  }

  return (
    <Autocomplete
      wrapperStyle={{ display: 'block' }}
      value={userName}
      items={filteredUsers}
      onChange={({ target }) => setUserName(target.value)}
      onSelect={onSelect}
      getItemValue={item => item.id}
      renderItem={renderOption}
      renderInput={() => <input placeholder="Type to get post by an user" />}
    />
  );
}

const renderOption = (item, isHighlighted) => {
  const fullName = `${item.firstName} ${item.lastName}`;

  return (
    <div className={`autocomplete_option ${isHighlighted ? ' active' : ''}`}>
      {fullName}
    </div>
  );
};
