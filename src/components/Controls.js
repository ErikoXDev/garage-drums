function Controls(parent) {
  this.element = document.createElement("div");
  this.element.classList.add("controls");

  this.record = document.createElement("button");
  this.record.classList.add("record-button");

  parent.appendChild(this.element);
}

export default Controls;
