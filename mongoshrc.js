// .mongoshrc.js

// customize prompt
var prompt=function() {
    return db.getName() + " $ ";
}

// command shortcuts
c = function() {
    return db.getCollectionNames();
}
