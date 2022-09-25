import FireStoreOperation from "./FirestoreOperation/FirestoreOperation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <ToastContainer limit={1} />

      <FireStoreOperation />

    </div>
  );
}

export default App;
