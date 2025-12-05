import { useContext, useState } from 'react';
import Context from '../context/Context';
import { REMOVE_TODO, EDIT_TODO } from '../context/actionTypes';

const DisplayNotes = () => {
  const { todos, dispatch } = useContext(Context);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Delete functionality
  const handleDelete = (index) => {
    dispatch({
      type: REMOVE_TODO,
      payload: index
    });
  };

  // Edit functionality
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const saveEdit = () => {
    dispatch({
      type: EDIT_TODO,
      payload: { index: editIndex, value: editValue }
    });
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-yellow-100 p-4 rounded shadow-md hover:shadow-lg flex flex-col items-center"
        >
          {editIndex === index ? (
            <>
              <input
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="mb-2 p-2 border rounded w-full"
              />
              <button
                className="bg-green-500 text-white px-3 py-1 rounded mb-2"
                onClick={saveEdit}
              >
                Save
              </button>
              <button
                className="bg-gray-400 text-white px-3 py-1 rounded"
                onClick={() => setEditIndex(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="text-center w-full">{todo}</p>
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayNotes;  