import Controls from "./components/Controls";
import DrumGrid from "./components/DrumGrid";
import "./style.css";

const app = document.getElementById("app");
app.classList.add("app");

new Controls(app);
new DrumGrid(app);
