import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData();
  }, []);

  const Updateddata = useSelector((store) => {
    return store.todo;
  });

  const getUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'Json-todo',
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Delete = (i) => {
    var newData=[...Updateddata]
    newData.splice(i,1)
    dispatch({
      type: 'Json-todo',
      payload: newData,
    });
  };

  return (
    <div>
      <h2>Json Data</h2>
      {Updateddata.length > 0 ? (
        <>
          {Updateddata.map((e, i) => {
            return (
              <div key={i}>
                <p>
                  {e.title}
                  <button onClick={() => Delete(i)}>Delete</button>
                </p>
              </div>
            );
          })}
        </>
      ) : (
        'No data available'
      )}
    </div>
  );
};

export default Todo;
