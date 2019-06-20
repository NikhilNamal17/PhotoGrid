import wallpaperExE from "wallpaper/lib/win-wallpaper.exe";
import os from "os";
import wallpaper from "wallpaper";
import fs from "fs";
import path from "path";

var self = this;

let convertToBase64 = img => {
    let canvas = document.createElement("canvas");
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/jpg");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};

let setAsBackground = event => {
    var img = event.target;
    img.setAttribute("crossOrigin", "anonymous");
    img.src = event.target.url;
    let base64Image = convertToBase64(img);
    let picturePath = path.join(os.homedir(), "/Pictures", "background.jpg");
    picturePath = path.normalize(picturePath);
    fs.writeFile(picturePath, base64Image, "base64", err => {
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
