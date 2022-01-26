var podaci=[];

function input(){
    var person={
        name:document.getElementById("name").value,
        email:document.getElementById("e-mail").value,
        msg:document.getElementById("poruka").value,
    }
    podaci.push(person);
    console.log(podaci);
}