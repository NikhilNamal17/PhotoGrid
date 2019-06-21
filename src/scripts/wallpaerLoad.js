const wallpaperExE = require("wallpaper/source/win-wallpaper.exe");
const os = window.require("os");
let wallpaper = window.require("wallpaper");
const path = window.require("path");
const fs = window.require("fs");

let convertToBase64 = img => {
    let canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = window.screen.availHeight;
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};

let setAsBackground = event => {
    console.log("Event hai ye -> " + event.target.src);
    var image = event.target;
    image.setAttribute("crossOrigin", "anonymous");
    image.src = event.target.src;
    let base64Image = convertToBase64(image);
    let picturePath = path.join(os.homedir(), "/Pictures", "bg.jpg");
    console.log(picturePath);
    picturePath = path.normalize(picturePath);
    fs.writeFile(picturePath, base64Image, "base64", err => {
        console.log("Picture path" + picturePath);

        wallpaper.set(picturePath, { scale: "stretch" }).then(() => {
            console.log(path.resolve(picturePath));
            console.log("DOne!");
        });
    });
};

export default {
    convertToBase64,
    setAsBackground
};
