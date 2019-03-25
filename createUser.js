const User = require('./config/models');
const resizeImagesForDatabase = require('./resizeImagesForDatabase');
const imgdir = require('./config/keys').imgdir;

module.exports = function initUser(obj){
    const person = new User({
        firstname: obj.firstname,
        lastname: obj.lastname,
        username: obj.username,
        permissions: obj.permissions,
        bio: obj.bio,
        facebook_url: obj.facebook_url,
        twitter_url: obj.twitter_url,
        instagram_url: obj.instagram_url,
        linkedin_url: obj.linkedin_url,
        
    })

    const img_small = `${imgdir}${person.firstname.toLowerCase()}_small_${person._id}.jpg`;
    const img_medium = `${imgdir}${person.firstname.toLowerCase()}_medium_${person._id}.jpg`;
    const img_large = `${imgdir}${person.firstname.toLowerCase()}_large_${person._id}.jpg`;

    resizeImagesForDatabase(img_small, img_medium, img_large, imgname);

    person.images = {
        small: img_small,
        medium: img_medium,
        large: img_large
    }
}

console.log(person);