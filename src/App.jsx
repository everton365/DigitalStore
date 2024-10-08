import Header from "./components/header/header.jsx";
import AppRoutes from "./routes/routes.jsx";
import Provider from "./context/Provider.jsx";

function App() {
  return (
    <>
      <Provider>
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App;
