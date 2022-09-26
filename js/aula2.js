console.log(document.body.childElementCount - 1);

function paragrafo() {
  if (document.body.childElementCount - 1 > 5) {
    return true;
  } else {
    return false;
  }
}
console.log(paragrafo());

const myNodeList = document.querySelectorAll("div");
