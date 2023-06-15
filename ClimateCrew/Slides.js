var totalParagraphs = 3;
var jcurrParagraph = 0;
var dcurrParagraph = 0;
var bcurrParagraph = 0;
var bncurrParagraph = 0;
var sncurrParagraph = 0;
var baycurrParagraph = 0;
var coxcurrParagraph = 0;
var scurrParagraph = 0;

var area;


function showParagraph(area,curr) {
    document.getElementById(area + "paragraph" + curr).style.display = "block";
    document.getElementById(area + "paragraphNum").innerHTML = curr + "/" + totalParagraphs;
}

function hideParagraphs(area) {
    for (var i = 1; i <= totalParagraphs; i++) {
        document.getElementById(area + "paragraph" + i).style.display = "none";
    }
}


//-------------jamuna----------------------------------------------------
function showNextJamuna() {
    area='j';
    if (jcurrParagraph < totalParagraphs) {
        jcurrParagraph++;
        hideParagraphs(area);
        showParagraph(area,jcurrParagraph);
    }
}

function showPrevJamuna() {
    area='j';
    if (jcurrParagraph > 1) {
        jcurrParagraph--;
        hideParagraphs(area);
        showParagraph(area, jcurrParagraph);
    }
}


//-------------dhaka--------------------------------------------------------------------


function showNextDhaka() {
    area='d';
    if (dcurrParagraph < totalParagraphs) {
        dcurrParagraph++;
        hideParagraphs( area);
        showParagraph(area, dcurrParagraph);
    }
}

function showPrevDhaka() {
    area='d';
    if (dcurrParagraph > 1) {
        dcurrParagraph--;
        
        hideParagraphs(area);
        showParagraph(area, dcurrParagraph);
    }
}


//---------------buriganga------------------------------------------

function showNextBuriganga() {
    area='b';
    if (bcurrParagraph < totalParagraphs) {
        bcurrParagraph++;
        hideParagraphs( area);
        showParagraph(area, bcurrParagraph);
    }
}

function showPrevBuriganga() {
    area='b';
    if (bcurrParagraph > 1) {
        bcurrParagraph--;
        
        hideParagraphs(area);
        showParagraph(area, bcurrParagraph);
    }
}

//-----------Bandarban-------------------------------------------------------------
function showNextBandarban() {
    area="bn";
    if (bncurrParagraph < totalParagraphs) {
        bncurrParagraph++;
        hideParagraphs(area);
        showParagraph(area,bncurrParagraph);
    }
}

function showPrevBandarban() {
    area="bn";
    if (bncurrParagraph > 1) {
        bncurrParagraph--;
        hideParagraphs(area);
        showParagraph(area, bncurrParagraph);
    }
}



//-------------Sundarban----------------------------------------------------
function showNextSundarban() {
    area="sn";
    if (sncurrParagraph < totalParagraphs) {
        sncurrParagraph++;
        hideParagraphs(area);
        showParagraph(area,sncurrParagraph);
    }
}

function showPrevSundarban() {
    area="sn";
    if (sncurrParagraph > 1) {
        sncurrParagraph--;
        hideParagraphs(area);
        showParagraph(area, sncurrParagraph);
    }
}



//-----------------------Bay---------------------------------------------

function showNextBay() {
    area="bay";
    if (baycurrParagraph < totalParagraphs) {
        baycurrParagraph++;
        hideParagraphs(area);
        showParagraph(area,baycurrParagraph);
    }
}

function showPrevBay() {
    area="bay";
    if (baycurrParagraph > 1) {
        baycurrParagraph--;
        hideParagraphs(area);
        showParagraph(area, baycurrParagraph);
    }
}







//---------------------Cox---------------------------------------------
function showNextCox() {
    area="cox";
    if (coxcurrParagraph < totalParagraphs) {
        coxcurrParagraph++;
        hideParagraphs(area);
        showParagraph(area,coxcurrParagraph);
    }
}

function showPrevCox() {
    area="cox";
    if (coxcurrParagraph > 1) {
        coxcurrParagraph--;
        hideParagraphs(area);
        showParagraph(area, coxcurrParagraph);
    }
}



//-----------------------------------Sylhet--------------------------------------
function showNextSylhet() {
    area='s';
    if (scurrParagraph < totalParagraphs) {
        scurrParagraph++;
        hideParagraphs(area);
        showParagraph(area,scurrParagraph);
    }
}

function showPrevSylhet() {
    area='s';
    if (scurrParagraph > 1) {
        scurrParagraph--;
        hideParagraphs(area);
        showParagraph(area, scurrParagraph);
    }
}

