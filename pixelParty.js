colors = [
	['AliceBlue', '#F0F8FF'],
	['AntiqueWhite', '#FAEBD7'],
	['Aqua', '#00FFFF'],
	['Aquamarine', '#7FFFD4'],
	['Azure', '#F0FFFF'],
	['Beige', '#F5F5DC'],
	['Bisque', '#FFE4C4'],
	['Black', '#000000'],
	['BlanchedAlmond', '#FFEBCD'],
	['Blue', '#0000FF'],
	['BlueViolet', '#8A2BE2'],
	['Brown', '#A52A2A'],
	['BurlyWood', '#DEB887'],
	['CadetBlue', '#5F9EA0'],
	['Chartreuse', '#7FFF00'],
	['Chocolate', '#D2691E'],
	['Coral', '#FF7F50'],
	['CornflowerBlue', '#6495ED'],
	['Cornsilk', '#FFF8DC'],
	['Crimson', '#DC143C'],
	['Cyan', '#00FFFF'],
	['DarkBlue', '#00008B'],
	['DarkCyan', '#008B8B'],
	['DarkGoldenRod', '#B8860B'],
	['DarkGrey', '#A9A9A9'],
	['DarkGreen', '#006400'],
	['DarkKhaki', '#BDB76B'],
	['DarkMagenta', '#8B008B'],
	['DarkOliveGreen', '#556B2F'],
	['DarkOrange', '#FF8C00'],
	['DarkOrchid', '#9932CC'],
	['DarkRed', '#8B0000'],
	['DarkSalmon', '#E9967A'],
	['DarkSeaGreen', '#8FBC8F'],
	['DarkSlateBlue', '#483D8B'],
	['DarkSlateGrey', '#2F4F4F'],
	['DarkTurquoise', '#00CED1'],
	['DarkViolet', '#9400D3'],
	['DeepPink', '#FF1493'],
	['DeepSkyBlue', '#00BFFF'],
	['DimGrey', '#696969'],
	['DodgerBlue', '#1E90FF'],
	['FireBrick', '#B22222'],
	['FloralWhite', '#FFFAF0'],
	['ForestGreen', '#228B22'],
	['Fuchsia', '#FF00FF'],
	['Gainsboro', '#DCDCDC'],
	['GhostWhite', '#F8F8FF'],
	['Gold', '#FFD700'],
	['GoldenRod', '#DAA520'],
	['Grey', '#808080'],
	['Green', '#008000'],
	['GreenYellow', '#ADFF2F'],
	['HoneyDew', '#F0FFF0'],
	['HotPink', '#FF69B4'],
	['IndianRed', '#CD5C5C'],
	['Indigo', '#4B0082'],
	['Ivory', '#FFFFF0'],
	['Khaki', '#F0E68C'],
	['Lavender', '#E6E6FA'],
	['LavenderBlush', '#FFF0F5'],
	['LawnGreen', '#7CFC00'],
	['LemonChiffon', '#FFFACD'],
	['LightBlue', '#ADD8E6'],
	['LightCoral', '#F08080'],
	['LightCyan', '#E0FFFF'],
	['LightGoldenRodYellow', '#FAFAD2'],
	['LightGrey', '#D3D3D3'],
	['LightGreen', '#90EE90'],
	['LightPink', '#FFB6C1'],
	['LightSalmon', '#FFA07A'],
	['LightSeaGreen', '#20B2AA'],
	['LightSkyBlue', '#87CEFA'],
	['LightSlateGrey', '#778899'],
	['LightSteelBlue', '#B0C4DE'],
	['LightYellow', '#FFFFE0'],
	['Lime', '#00FF00'],
	['LimeGreen', '#32CD32'],
	['Linen', '#FAF0E6'],
	['Magenta', '#FF00FF'],
	['Maroon', '#800000'],
	['MediumAquaMarine', '#66CDAA'],
	['MediumBlue', '#0000CD'],
	['MediumOrchid', '#BA55D3'],
	['MediumPurple', '#9370DB'],
	['MediumSeaGreen', '#3CB371'],
	['MediumSlateBlue', '#7B68EE'],
	['MediumSpringGreen', '#00FA9A'],
	['MediumTurquoise', '#48D1CC'],
	['MediumVioletRed', '#C71585'],
	['MidnightBlue', '#191970'],
	['MintCream', '#F5FFFA'],
	['MistyRose', '#FFE4E1'],
	['Moccasin', '#FFE4B5'],
	['NavajoWhite', '#FFDEAD'],
	['Navy', '#000080'],
	['OldLace', '#FDF5E6'],
	['Olive', '#808000'],
	['OliveDrab', '#6B8E23'],
	['Orange', '#FFA500'],
	['OrangeRed', '#FF4500'],
	['Orchid', '#DA70D6'],
	['PaleGoldenRod', '#EEE8AA'],
	['PaleGreen', '#98FB98'],
	['PaleTurquoise', '#AFEEEE'],
	['PaleVioletRed', '#DB7093'],
	['PapayaWhip', '#FFEFD5'],
	['PeachPuff', '#FFDAB9'],
	['Peru', '#CD853F'],
	['Pink', '#FFC0CB'],
	['Plum', '#DDA0DD'],
	['PowderBlue', '#B0E0E6'],
	['Purple', '#800080'],
	['RebeccaPurple', '#663399'],
	['Red', '#FF0000'],
	['RosyBrown', '#BC8F8F'],
	['RoyalBlue', '#4169E1'],
	['SaddleBrown', '#8B4513'],
	['Salmon', '#FA8072'],
	['SandyBrown', '#F4A460'],
	['SeaGreen', '#2E8B57'],
	['SeaShell', '#FFF5EE'],
	['Sienna', '#A0522D'],
	['Silver', '#C0C0C0'],
	['SkyBlue', '#87CEEB'],
	['SlateBlue', '#6A5ACD'],
	['SlateGrey', '#708090'],
	['Snow', '#FFFAFA'],
	['SpringGreen', '#00FF7F'],
	['SteelBlue', '#4682B4'],
	['Tan', '#D2B48C'],
	['Teal', '#008080'],
	['Thistle', '#D8BFD8'],
	['Tomato', '#FF6347'],
	['Turquoise', '#40E0D0'],
	['Violet', '#EE82EE'],
	['Wheat', '#F5DEB3'],
	['White', '#FFFFFF'],
	['WhiteSmoke', '#F5F5F5'],
	['Yellow', '#FFFF00'],
	['YellowGreen', '#9ACD32']
].map(function (color) {
    return {name: color[0], hex: color[1], rgb: hexToRGB(color[1])};
});

function hexToRGB(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16)
    };
}

function addEventHandler(obj, evt, handler) {
    if(obj.addEventListener) {
        // W3C method
        obj.addEventListener(evt, handler, false);
    } else if(obj.attachEvent) {
        // IE method.
        obj.attachEvent('on'+evt, function(e) { 
            handler(e || window.event); 
        });
    } else {
        // Old school method.
        obj['on'+evt] = handler;
    }
}

function nearestColor(color, colors) {
    var distance,
        minDistance = Infinity,
        rgb,
        nearest;

    for (var i = 0; i < colors.length; ++i) {
        rgb = colors[i].rgb;
        distance = Math.sqrt(
            Math.pow(color.r - rgb.r, 2) +
            Math.pow(color.g - rgb.g, 2) +
            Math.pow(color.b - rgb.b, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearest = colors[i];
        }
    }

    return nearest;
}

function hrefFromColors(color1, color2) {
    return ('//' + color1.name + (color1 != color2 && color2.hex != 'transparent' ? ' /to_' + color2.name : '')).replace('Transparent', '').replace('// /', '/');
}

var pixels1 = [];
var pixels2 = [];

if(window.FileReader) { 
    addEventHandler(window, 'load', function() {
        var frames = [];
        for (var i = 1; i <= 2; ++i) {
            var frame = {
                canvas: document.createElement('canvas'),
                drop: document.getElementsByClassName('dropZone')[i - 1],
                result: document.getElementById('result' + i),
                pixels: window['pixels' + i]
            };
            frame['ctx'] = frame.canvas.getContext('2d');
            frames.push(frame);
        };
        var button = document.getElementById('generateButton');
  	
        function cancel(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            return false;
        }
        
        function noDrag(e) {
            for (var i = 0; i < 2; ++i) {
                frames[i].drop.className = 'dropZone ' + (i == 0 ? 'left' : 'right');
            }
            return cancel(e);
        }
        
        function dragHint(e) {
            if (e.dataTransfer.files.length == 1 && e.dataTransfer.files[0].type.startsWith('image/')) {
                for (var i = 0; i < 2; ++i) {
                    frames[i].drop.className = 'dropZone dragHint ' + (i == 0 ? 'left' : 'right');
                }
            }
            return cancel(e);
        }
        
        addEventHandler(window, 'drop', noDrag);
        addEventHandler(window, 'dragover', dragHint);        
        addEventHandler(window, 'dragenter', dragHint);
        addEventHandler(window, 'dragleave', noDrag);
        
        for (var i = 0; i < 2; ++i) (function () {
            
            var frameNr = i;
            var frame = frames[frameNr];
            addEventHandler(frame.drop, 'dragexit', dragHint);
            addEventHandler(frame.drop, 'dragleave', dragHint);
            
            addEventHandler(frame.drop, 'dragover', function (e) {
                cancel(e);
                if (e.dataTransfer.files.length == 1 && e.dataTransfer.files[0].type.startsWith('image/')) {
                    frame.drop.className = 'dropZone acceptDrag ' + (frameNr == 0 ? 'left' : 'right');
                    return true;
                }
                return false;
            });
            
            addEventHandler(frame.drop, 'drop', function (e) {
                var file = e.dataTransfer.files[0];
                
                if (e.dataTransfer.files.length == 1 && e.dataTransfer.files[0].type.startsWith('image/')) {
                    var reader = new FileReader();                
                    reader.onload = function(e) {
                        // Render thumbnail.
                        frame.result.setAttribute('src', e.target.result);

                        var image = new Image();
                        image.onload = function () {
                            frame.ctx.clearRect(0, 0, image.width, image.height);
                            frame.ctx.drawImage(image, 0, 0);
                            var pixelData = frame.ctx.getImageData(0, 0, image.width, image.height).data;
                            var i = 0;
                            frame.pixels = [];
                            for (var y = 0; y < image.height; ++y) {
                                var line = [];
                                for (var x = 0; x < image.width; ++x) {
                                    line.push(pixelData[i+3] > 128 && {r: pixelData[i], g: pixelData[i+1], b: pixelData[i+2]});
                                    i += 4;
                                }
                                frame.pixels.push(line);
                            }
                            button.disabled = false;
                        };
                        image.src = e.target.result;
                    };
                }
                reader.readAsDataURL(file);
                return noDrag(e);
            });
        })();
        
        addEventHandler(button, 'click', function () {
            var md = '#####s\n#####s\n#####s\n#####s\n#####s\n####s\n\n';
            var html = '<div class="md"><h5>s</h5><h5>s</h5><h5>s</h5><h5>s</h5><h5>s</h5><h4>s</h4>'
            for (var y = 0; y < Math.max(frames[0].pixels.length, frames[1].pixels.length); ++y) {
                var line1 = frames[0].pixels[y] || [];
                var line2 = frames[1].pixels[y] || [];
                var currentTag = ''
                var currentColor1 = '';
                var currentColor2 = '';
                var currentHTMLTag = '';
                html += '<p>';
                for (var x = 0; x < Math.max(line1.length, line2.length); ++x) {
                    var pixel1 = line1[x];
                    var pixel2 = line2[x];
                    var color1 = pixel1 ? nearestColor(pixel1, colors) : {name: 'Transparent', hex: 'transparent'};
                    var color2 = pixel2 ? nearestColor(pixel2, colors) : {name: 'Transparent', hex: 'transparent'};
                    
                    if (color1.name != color2.name) {
                        console.log('diff');
                    }
                    
                    if (currentColor1.name == color1.name && currentColor2.name == color2.name) {
                        currentTag += '..';
                        currentHTMLTag += '..';
                    } else {
                        if (currentTag) {
                            md += currentTag + '](' + hrefFromColors(currentColor1, currentColor2) + ')';
                            html += currentHTMLTag + '</a>';
                        }
                        currentTag = '[..';
                        currentHTMLTag = '<a href="' + hrefFromColors(color1, color2).replace(' ', '%20') + '">..';
                        currentColor1 = color1;
                        currentColor2 = color2;
                    }
                }
                if (!(currentColor1.name == 'Transparent' && currentColor1.name == 'Transparent')) {
                    md += currentTag + '](' + hrefFromColors(currentColor1, currentColor2) + ')\n\n';
                    html += currentHTMLTag + '</a>';
                }
                md += '\n\n';
                html += '</p>';
            }
            md += '####e'
            html += '<h4>e</h4></div>';
            document.getElementById('htmlResult').innerHTML = html;
            document.getElementById('mdResult').innerHTML = md;
        });
        
        button.disabled = true;
    });
} else { 
    alert('Your browser does not support the HTML5 FileReader.');
}