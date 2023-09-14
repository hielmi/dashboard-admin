import { useContext, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Patiens from "./pages/Patiens";
import SignIn from "./pages/SignIn";
import Help from "./pages/Help";
import TambahPasien from "./pages/TambahPasien";
import {
  Routes,
  Route,
  useNavigate, // Import useNavigate
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // mengecek apakah
    if (!authContext.authState.authenticated) {
      // If not authenticated, navigate to SignIn
      navigate("/signin");
    }
  }, [authContext, navigate]);

  return (
    <Routes>
      {authContext.authState.authenticated ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pasien" element={<Patiens />} />
          <Route path="/tambah_pasien" element={<TambahPasien />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/*"
            element={
              <>
                <h1>Halaman tidak ditemukan</h1>
              </>
            }
          />
        </>
      ) : (
        // Redirect to SignIn if not authenticated
        <Route path="/signin" element={<SignIn />} />
      )}
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
