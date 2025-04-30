export function setTime(time) {  

    const expirationDate = new Date(time);
    const now = new Date();
    let diffMs = expirationDate - now;
    const totalSeconds = Math.floor(diffMs / 1000);

    return totalSeconds ; 

}  