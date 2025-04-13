import React from 'react';
import TextUpdater from './TextUpdater';
import SubmitForm from './SubmitForm';
import UserCard from './UserCard';
import StyledButton from './StyledButton';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="p-6 space-y-6">
      <TextUpdater />
      <SubmitForm />
      <UserCard name="John Doe" email="john@example.com" />
      <StyledButton />
      <LoginForm />
    </div>
  );
}

export default App;

