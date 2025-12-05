import { useState, useContext } from 'react';
import Context from '../context/Context';
import { ADD_TODO } from '../context/actionTypes';

const Form = () => {
  const [todoString, setTodoString] = useState('');
  const { dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (todoString === '') {
      alert('Please enter a note to add!');
      return;
    }

    dispatch({
      type: ADD_TODO,
      payload: todoString
    });

    setTodoString('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 m-4">
      <input
        type="text"
        placeholder="Enter notes"
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
        className="border-2 border-gray-300 rounded px-4 py-2 w-96"
      />
      <button
        type="submit"
        className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
      >
        Add
      </button>
    </form>
  );
};

export default Form;