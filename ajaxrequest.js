function loadDoc(url) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("figs")[0].append(this.responseText);
  }
};
  xhttp.open("GET", url, true);
  xhttp.send();
}