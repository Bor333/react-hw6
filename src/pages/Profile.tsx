import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from 'src/store/profile/actions';
import { ProfileState } from 'src/store/profile/reducer';

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: ProfileState) => state.name);
  const visible = useSelector((state: ProfileState) => state.visible);
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Profile page</h2>
      <p>visible: </p>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      <p>name: {name}</p>
      <p>Change name:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>change name</button>
    </>
  );
};

// export default Profile;
