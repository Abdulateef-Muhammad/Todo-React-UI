const generateString = (length)=> {
    let string = [];
    let i = 0;
    while(i < length) {
        string.push(generateChar());
        i++;
    }
    return string.join('');
}

const generateChar = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet.split('');
    let randomIndex = Math.floor(Math.random() * 26 )
    return alphabet[randomIndex];
}

export default generateString;