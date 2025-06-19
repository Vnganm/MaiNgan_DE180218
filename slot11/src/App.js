import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput'; // Exercise 4
import EmailPasswordForm from './components/EmailPasswordForm'; // Exercise 5
import CompleteForm from './components/CompleteForm'; // Exercise 6

function App() {
  return (
    <div>
    <ValidatedInput/>
    <EmailPasswordForm/>
    <CompleteForm/>

    </div>
  );
}

export default App;