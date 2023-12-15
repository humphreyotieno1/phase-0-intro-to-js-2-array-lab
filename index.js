const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat (name) {
    cats.unshift('Bob');
}

function destructivelyRemoveFirstCat (name) {
    cats.shift();
}

function destructivelyRemoveLastCat (name) {
    cats.pop();
}

function appendCat(name) {
    //let newCats = cats.slice();
    //newCats.push('Broom');
    return [...cats, 'Broom'];
}

function prependCat (name) {
    let x = [...cats];
    x.unshift('Arnold');
    return x;
   // newCats.unshift('Arnold');
   // return newCats;
}

function removeFirstCat (name) {
    return cats.slice(1);
}

function removeLastCat (name) {
    return cats.slice(0, cats.length - 1);
}