// const header = document.querySelector(".block");
// header.style.color = "red";
// header.style.width = "500px";
// header.style.padding = "50px";
// header.style.fontSize = "30px";
// header.style.backgroundColor = "blue";
// header.style.textAlign = "center";

const body = document.querySelector("body");

const div = document.createElement("div");
const urls = document.createElement("urls");

const intocode = document.createElement("a");
const google = document.createElement("a");
const instagram = document.createElement("a");

div.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda error cum nisi consequuntur perferendis dolores commodi qui ducimus, corrupti inventore ad nihil libero neque magnam deleniti velit ullam a blanditiis.";

intocode.textContent = "Intocode";
intocode.href = "https://www.intocode.ru";
intocode.target = "_blank";

google.textContent = "Google";
google.href = "https://www.google.com";
google.target = "_blank";

instagram.textContent = "Instagram";
instagram.href = "https://www.instagram.com";
instagram.target = "_blank";

body.style.margin = "auto";
body.style.paddingTop = "20px";

div.style.margin = "auto";
div.style.border = "1px solid yellow";
div.style.borderRadius = "10px";
div.style.width = "400px";
div.style.padding = "10px";
div.style.textAlign = "center";

urls.style.margin = "auto";
urls.style.marginTop = "20px";
urls.style.width = "400px";
urls.style.display = "flex";
urls.style.justifyContent = "space-between";

document.body.append(div, urls);
urls.append(intocode, google, instagram);
