function _(id){
 return document.getElementById(id)
}

_("signup-form").addEventListener("submit",validate)


function validate(event){
    event.preventDefault()
    var formData= new FormData(event.target)
    var name = formData.get("Name")
    var email = formData.get("mail-id")
    var address= formData.get("Address")
    var city= formData.get("City")
    var  state= formData.get("State")
    var phone = formData.get("phone")
    var postalCode = formData.get("postCode")
    submit({
        name,
        email,
        address,
        city,
        state,
        phone,
        postalCode
    });
    
}



// 

function submit(data){
    fetch("http://192.168.1.39:5000/organization/register",{
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(data),
    })
    .then((response)=> response.json())
    .then((result) =>{ 
        for(var j = 0; j < document.getElementsByClassName("error-message").length; j++){
            document.getElementsByClassName("error-message")[j].innerHTML = "";
        }
        if(!result.status){
            for(let i = 0; i < result.data.length; i++){
                _(result.data[i].path+"-error").innerHTML = result.data[i].message;
            }
        }
        else{
            console.log("Success");
        }
        
    // window.location.href = "./user.html?id=" + result.id;
    // })
    // .catch((err) => {
    // console.log(err);
    // });
    
    })
    
}

    
   