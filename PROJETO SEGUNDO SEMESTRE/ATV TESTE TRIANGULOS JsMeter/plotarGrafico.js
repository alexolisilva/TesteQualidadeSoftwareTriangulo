var plotly = require('plotly')('alex.silva','BC2igUdFk74uoAKgoDHJ');
var fs = require('fs');

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: "scatter"
};

var figure = { 'data': [trace1] };

var imgOpts = {
    format: 'png',
    width: 1000,
    height: 500
};

plotly.getImage(figure, imgOpts, function (error, imageStream) {
    if (error) return console.log (error);

    var fileStream = fs.createWriteStream('1.png');
    imageStream.pipe(fileStream);
});