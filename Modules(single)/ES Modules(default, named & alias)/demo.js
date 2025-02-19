const add= (a, b) => {
    return a + b;
};

const product= (a, b) => {
    return a * b;
}

const difference= (a, b) => {
    return a - b;
}

const pi= 3.14;

// export default add; {default export: can be used for only one function}

//exporting above function and variable at once
export {add, product, difference, pi};
