function validateForm() {
  let x = document.getElementById("form");
  if (x.p1.value == '' || x.p2.value == '' || x.p3.value == '') {


    alert("Nie pozostawiaj pustych pól");
    return false;
  }
  if (!x.p4.checked) {
    alert("Zaznacz zgodę");
    return false;
  }

  return true;
}