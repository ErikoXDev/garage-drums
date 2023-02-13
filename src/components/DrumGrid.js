import Drum from "./Drum";

function DrumGrid(parent) {
  this.element = document.createElement("div");
  this.element.classList.add("drum-grid");

  this.drums = [];

  this.gridWidth = 4;
  this.gridHeight = 3;
  for (let y = 0; y < this.gridHeight; y++) {
    for (let x = 0; x < this.gridWidth; x++) {
      const drumElement = new Drum(this.element, x, y);
      this.drums.push(drumElement);
    }
  }

  parent.appendChild(this.element);
}

DrumGrid.prototype.selectInstrument = (instrument) => {
  for (let i = 0; i < this.drums.length; i++) {
    const drum = this.drums[i];
    drum.setInstrument(instrument);
  }
};

export default DrumGrid;
