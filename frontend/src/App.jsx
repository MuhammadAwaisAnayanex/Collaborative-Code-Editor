import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <YourAppComponents />
    </AuthProvider>
  );
}

export default App;
