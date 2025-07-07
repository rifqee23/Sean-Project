import "./index.css";
import MainLayout from "./features/layouts/MainLayout";
import HomePage from "./features/Home/page/HomePage";
import Carrousel from "./features/Home/components/Carrousel";

const App = () => {
  return (
    <div>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
};

export default App;
