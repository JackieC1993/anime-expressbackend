const db = require("../db/dbConfig");

const getAllAnimes = async () => {
    try {
        const animes = await db.any("SELECT * FROM animes"); // return an array
        return animes     
    } catch (error) {
        return error;
    }
};

const getOneAnime = async (animeId) => {
    try {
        const anime = await db.one("SELECT * FROM animes WHERE id=$1", animeId)
        return anime 
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllAnimes,
    getOneAnime
}