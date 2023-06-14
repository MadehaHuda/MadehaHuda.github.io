var currParagraph = 1;
var totalParagraphs = 3;

function showParagraph() {
    document.getElementById("paragraph" + currParagraph).style.display = "block";
    document.getElementById("paragraphNum").innerHTML = currParagraph + "/" + totalParagraphs;
}

function hideParagraphs() {
    for (var i = 1; i <= totalParagraphs; i++) {
        document.getElementById("paragraph" + i).style.display = "none";
    }
}

function showNext() {
    if (currParagraph < totalParagraphs) {
        currParagraph++;
        hideParagraphs();
        showParagraph();
    }
}

function showPrev() {
    if (currParagraph > 1) {
        currParagraph--;
        hideParagraphs();
        showParagraph();
    }
}




/* prevButton = document.getElementById("prev");
nextButton = document.getElementById("next");
number = document.getElementById("number");

var i = 1;
function ready() {
    prevButton.disabled = true;
  }

  function next() {
    i++;
    //console.log("Value of i:", i);
    if (i == 3) {
      nextButton.disabled = true;
    }
    console.log("Value of i:", i);
    prevButton.disabled = false;
    number.innerHTML = i;
  }

  function prev() {
    i--;
    if (i == 1) {
      prevButton.disabled = true;
    }
    console.log("Value of i:", i);
    nextButton.disabled = false;
    number.innerHTML = i;
  } */