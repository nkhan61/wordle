function intialize() {
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("title");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }
}
