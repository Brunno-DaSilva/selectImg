console.log("works");

const one = document.getElementById("one");
const two = document.getElementById("two");
const imgContainerOne = document.getElementById("img__container-one");
const imgContainerTwo = document.getElementById("img__container-two");

const arr = [];

imgContainerOne.addEventListener(
  "click",
  function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
      src = target.getAttribute("src");
    arr.push(src);

    for (let i = 0; i < arr.length; i++) {
      if (arr.length > 1) {
        arr.shift();
      }
      imgContainerTwo.innerHTML = `<img src="${arr[i]}" alt="">`;
    }
  },
  true
);
