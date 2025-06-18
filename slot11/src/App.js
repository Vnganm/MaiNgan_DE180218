import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput'; // Exercise 4
import EmailPasswordForm from './components/EmailPasswordForm'; // Exercise 5
import CompleteForm from './components/CompleteForm'; // Exercise 6

function App() {
  return (
    <div className="App">

      {/* Exercise 4 */}
      <div className="mb-5">
        <h2 className="text-center">Exercise 4: Basic Validation</h2>
        <ValidatedInput />
      </div>
      
      {/* Exercise 5 */}
      <div className="mb-5">
        <h2 className="text-center">Exercise 5: Email & Password Validation</h2>
        <EmailPasswordForm />
      </div>
      
      {/* Exercise 6 */}
      <div className="mb-5">
        <h2 className="text-center">Exercise 6: Complete Form Validation</h2>
        <CompleteForm />
      </div>
    </div>
  );
}

export default App;