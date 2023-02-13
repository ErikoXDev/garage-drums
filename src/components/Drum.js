import drumConfig from "../drumsConfig";

import { Howl, Howler } from "howler";

function Drum(parent, drumX, drumY) {
  this.element = document.createElement("div");
  this.element.classList.add("drum");

  this.element.addEventListener("mousedown", () => {
    let sound = this.sound;
    sound.play();
  });

  this.instrument = "808 Flex";
  this.drumX = drumX;
  this.drumY = drumY;

  this.image = document.createElement("img");
  this.image.src =
    "/icons/" +
    drumConfig[this.instrument][this.drumY][this.drumX].icon +
    ".svg";
  this.image.classList.add("drum-icon");
  this.element.appendChild(this.image);
  // this.element.innerText =
  //   drumConfig[this.instrument][this.drumY][this.drumX].sound;

  this.sound = new Howl({
    src:
      "/sounds/" +
      this.instrument +
      "/" +
      drumConfig[this.instrument][this.drumY][this.drumX].sound +
      ".wav",
  });

  parent.appendChild(this.element);
}

// Drum.prototype.setInstrument = (instrument) => {
//   this.instrument = instrument;
//   this.sound = new Audio(
//     "/sounds/" +
//       this.instrument +
//       "/" +
//       drumConfig[this.instrument][this.drumY][this.drumX].sound +
//       ".wav"
//   );
// };

export default Drum;
