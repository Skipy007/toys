module.exports = { 
    getDate: getDateFunc
};
function getDateFunc() {
    return `our date is -- ${new Date()}`;
}