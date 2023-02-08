const cookie = {
    name: "Chocolate chip",
    isGlutenFree: false,
    eatCookie: function () {
        console.log("I am eating an " + this.name + " cookie");
    }
};
cookie.name = "Oreo";
//console.log(cookie);
cookie.eatCookie();

class Cookie { 
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("I am eating a " + this.name);
    }
}
const myCookie = new Cookie("kurabie", true);

//console.log(myCookie);
myCookie.eatCookie();