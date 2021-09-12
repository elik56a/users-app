import Routes from "./routes";
import { StoresProvider } from "./stores/StoresProvider";

const App = () => (
  <StoresProvider>
    <Routes />
  </StoresProvider>
);

export default App;
