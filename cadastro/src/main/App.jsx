import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css";
import Logo from "../components/templates/logo";
import Nav from "../components/templates/nav";
import Main from "../components/templates/main";
import Footer from "../components/templates/footer";

function App() {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main icon="home" title="Inicio" 
            subtitle="frete expresso"/>
      <Footer />
    </div>
  );
}

export default App;
