import { useContext } from 'react';
import Dashboard from "./pages/Dashboard";
import Patiens from "./pages/Patiens";
import SignIn from "./pages/SignIn";
import Help from './pages/Help';
import TambahPasien from './pages/TambahPasien';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/pasien",
    element: <Patiens />,
  },
  {
    path: "/tambah_pasien",
    element: <TambahPasien />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  const authContext = useContext(AuthContext)


  if (authContext?.authState?.authenticated === true) {
    return  <RouterProvider router={router} />
  } else{
    return <SignIn />
  }
}

export default App;

// import { db } from "./firebase/firebase";
// import { set, ref, onValue, remove, update } from "firebase/database";
// import { useState, useEffect } from "react";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [tempUuid, setTempUuid] = useState("");

//   const handleTodoChange = (e) => {
//     setTodo(e.target.value);
//   };

//   //read
//   useEffect(() => {
//     onValue(ref(db), (snapshot) => {
//       setTodos([]);
//       const data = snapshot.val();
//       if (data !== null) {
//         Object.values(data.user).map((todo) => {
//           setTodos((oldArray) => [...oldArray, todo]);
//         });
//       }
//     });
//   }, []);

//   //write
//   const writeToDatabase = () => {
//     const uuid = Date.now();
//     set(ref(db, `/${uuid}`), {
//       todo,
//       uuid,
//     });

//     setTodo("");
//   };

//   //update
//   const handleUpdate = (todo) => {
//     setIsEdit(true);
//     setTempUuid(todo.uuid);
//     setTodo(todo.todo);
//   };

//   const handleSubmitChange = () => {
//     update(ref(db, `/${tempUuid}`), {
//       todo,
//       uuid: tempUuid,
//     });

//     setTodo("");
//     setIsEdit(false);
//   };

//   //delete
//   const handleDelete = (todo) => {
//     remove(ref(db, `/${todo.uuid}`));
//   };

//   // console.log(todos);
//   return (
//     <div className="App">
//       <input type="text" value={todo} onChange={handleTodoChange} />
//       {isEdit ? (
//         <>
//           <button onClick={handleSubmitChange}>Submit Change</button>
//           <button
//             onClick={() => {
//               setIsEdit(false);
//               setTodo("");
//             }}
//           >
//             X
//           </button>
//         </>
//       ) : (
//         <button onClick={writeToDatabase}>submit</button>
//       )}
//      {todos.map((todo) => (
//         <div key={todo.nama}>
//           <h1>{todo.nama}</h1>
//           <button onClick={() => handleUpdate(todo)}>Update</button>
//           <button onClick={() => handleDelete(todo)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// npm install firebase
// npm install uid
