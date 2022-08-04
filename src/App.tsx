import Cards from "./components/cards";
import { happyIcon, moveitIcon, reactIcon, viteIcon } from "./components/icons";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <div className="homepage">
        <div className="cards">
          <Cards
            icon={viteIcon}
            title="myAuth"
            link="https://myoauth.vercel.app"
            description="a login app with todo list"
          />
          <Cards
            icon={reactIcon}
            title="databasePeople"
            link="https://database-people.vercel.app"
            description="a crud app that do the 4 basic operations"
          />
          <Cards
            icon={reactIcon}
            title="coin_converter"
            link="https://coin-converter-seven.vercel.app"
            description="a currencie site that you can convert any coin"
          />
          <Cards
            icon={moveitIcon}
            title="moveit"
            link="https://moveit-chi-umber.vercel.app"
            description="a app that help people that pass a long time sitted - by rocketseat"
          />
          <Cards
            icon={happyIcon}
            title="happy"
            link="https://happy-psi.vercel.app"
            description="a app thinkned to connect people to orphanages - by rocketseat"
          />
          <Cards
            icon={reactIcon}
            title="windowsCalc"
            link="https://windows-calc.vercel.app"
            description="a windows calculator copy"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
