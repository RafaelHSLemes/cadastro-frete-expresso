import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css";
import Logo from "../components/templates/logo";
import Nav from "../components/templates/nav";
import Home from "../components/home/Home";
import Footer from "../components/templates/footer";

const App = props => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
