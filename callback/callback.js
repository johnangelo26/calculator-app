function getData(name, delay, cb1) {
    setTimeout(() => {
    cb1(name);
    }, delay);
};

const gettingData = (name) => {
    console.log("Hello, " + name + " your data has been fetched successfully!");
};

getData("John", 2000, gettingData);

function manipulateData(name, delay, cb1) {
    setTimeout(() => {
    cb1(name);
    }, delay);
};

const manipulatingData = (name) => {
    console.log("Hello, " + name + " your data has been sorted!");
};

manipulateData("John", 2000, gettingData);