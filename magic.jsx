// JavaScript for Photoshop

var doc = app.activeDocument; // get the currently active document

// Convert to CMYK
doc.changeMode(ChangeMode.CMYK);

// Change resolution to 300 dpi
doc.resizeImage(undefined, undefined, 300, ResampleMethod.BICUBIC);

// Add .25 inches to width and height
var bleed = UnitValue("0.25 in");
doc.resizeCanvas(doc.width + bleed, doc.height + bleed, AnchorPosition.MIDDLECENTER);

// Flatten the image
doc.flatten();

// Apply the "magic1" action
app.doAction('magic1', 'Default Actions');

