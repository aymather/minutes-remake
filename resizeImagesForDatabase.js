const fs = require('fs');
const sharp = require('sharp');
const imgdir = require('./config/keys').imgdir;

module.exports = function resizeImagesForDatabase(img_small, img_medium, img_large, imgname){

    sharp(`${imgdir}${imgname}`)
        .resize({
            width: 30,
            height: 30
        })
        .toBuffer()
        .then(data => {
            fs.writeFileSync(img_small, data);
        })
        .catch(err => {
            console.log(err);
        })

    sharp(`${imgdir}${imgname}`)
        .resize({
            width: 90,
            height: 90
        })
        .toBuffer()
        .then(data => {
            fs.writeFileSync(img_medium, data);
        })
        .catch(err => {
            console.log(err);
        })

    sharp(`${imgdir}${imgname}`)
        .resize({
            width: 120,
            height: 150
        })
        .toBuffer()
        .then(data => {
            fs.writeFileSync(img_large, data);
        })
        .catch(err => {
            console.log(err);
        })

    }