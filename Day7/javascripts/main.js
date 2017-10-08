var getImg = function() {
  const url = document.getElementById("user-input").value;
  const div = document.createElement("div");
  div.className = "imageWrapper";
  const img = document.createElement("img");
  img.src = url;
  div.appendChild(img);
  document.getElementById("images").innerHTML = "";
  document.getElementById("images").appendChild(div);
  return false;
}; //GET IMAGE FUNC

const inputs = document.querySelectorAll(".controls input");

const handleUpdate = function() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}; // HANDLEUPDATE FUNC

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
