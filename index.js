// function superBowlWin(record) {
//     let gameWin = record.year;
//     if (record.result === "W") {
//         return gameWin.find();
//     } else {
//         return undefined;
//     }
// }




const superbowlWin = (record) => {
    // iterate over the record
    const firstWin = record.find(season => {
        // for each object (element) return the first instance where they key of results equals "W"
        return season.result === "W"

        // need to return a BOOLEAN
    })
    console.log(firstWin)
    return !!firstWin ? firstWin.year : firstWin
}