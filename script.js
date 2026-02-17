// Each name should be in the format "Stu1, Stu2, and Stu3" with an optional URL
var names = [
    ["Alessandro", "https://codehs.com/share/id/final-project-MbUEpb/run"],
    ["Ivan", "https://codehs.com/share/id/final-project-891f2h/run"],
    ["Vonn", "https://codehs.com/share/id/final-project-CGu32v/run"],
    ["Maddie", "https://codehs.com/share/id/final-project-FICB9H/run"],
    ["Miles", "https://codehs.com/share/id/final-project-OWkyVF/run"],
    ["Henry,Mason,Noah", "https://codehs.com/sandbox/kstewart/retro-polo"],
    ["Mason", "https://codehs.com/sandbox/kstewart/blackjack-p5"],
    ["Sam,Kaylee","https://codehs.com/sandbox/kstewart/final-pacman"],
    ["Marsi", "https://codehs.com/share/id/final-project-891f2h/run"],
    ["Vanessa", "https://codehs.com/share/id/final-project-fy2fVB/run"],
    ["Nicholas", "https://codehs.com/share/id/final-project-fZETxB/run"],
    ["Kayleb", "https://codehs.com/share/id/final-project-ETZ9XQ/run"],
    ["Adam", "https://codehs.com/share/id/final-project-MELUKX/run"],
    ["Koa", "https://codehs.com/share/id/final-project-UqSd1j/run"]
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '" target="_blank" rel="noopener noreferrer"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var fileUrl = "";
    if (name.constructor === Array) {
    	name = names[idx][0];
    	fileUrl = names[idx][1];
    }
    var file = name.replaceAll(" ","").replaceAll(",","").replace("and","");
    var imageName = file + ".png"
    
    if (fileUrl != "") file = fileUrl;
    var card = generateCard(name, imageName, name, file);
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
