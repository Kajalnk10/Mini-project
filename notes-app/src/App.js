import { useReducer, useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import reducer from './context/reducer';
import Form from './components/Form';
import DisplayNotes from './components/DisplayNotes';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import FileUpload from './components/FileUpload';

const usersDB = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user1", password: "user123", role: "user" },
  { username: "user2", password: "user123", role: "user" },
];

function App() {
  const initialTodos = JSON.parse(localStorage.getItem('notes')) || [];
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(todos));
  }, [todos]);

  // Login nahi hua toh sirf login page dikhao
  if (!currentUser)
    return <Login onLogin={setCurrentUser} />;

  // Admin login hua toh admin panel dikhao
  if (currentUser.role === "admin")
    return (
      <div>
        <h1 className="text-center text-4xl font-bold py-8">Admin Panel</h1>
        <AdminPanel users={usersDB} />
        <button onClick={() => setCurrentUser(null)} className="m-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    );

  // User login hua toh Notes + FileUpload dikhao
  return (
    <Context.Provider value={{ todos, dispatch }}>
      <div className="App">
        <h1 className="text-center text-4xl font-bold py-8">Notes App</h1>
        <Form />
        <DisplayNotes />
        <FileUpload />
        <button onClick={() => setCurrentUser(null)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </Context.Provider>
  );
}

export default App;