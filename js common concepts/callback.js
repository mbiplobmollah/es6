function ghotok (patri,name){
    patri(name);
}

const patri = function(name){
console.log('okay ami paici',name);
}
const patri2 = function(name){
console.log('okay ami paici patri 2',name);
}
const patri3 = function(name){
console.log('okay ami paici patri 3',name);
}
ghotok(patri,'hero alom');
ghotok(patri2,'masud');
ghotok(patri3,'abid');