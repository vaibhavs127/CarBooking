var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function a() {
    if (this.readyState == 4 && this.status == 200) {
       let response=JSON.parse(xhttp.responseText);
       let car=response.car;
      let output='';
      for(let i=0; i<car.length; i++)
      {
        output += `<li class="cars">
                    <div class="container">
                        <div class="row">
                            <img class="car-img col"  src="${car[i].image}">
                            <h3 class="car-title col">${car[i].name}</h3>
                            <h5 class="car-description col" style="color:blue">${car[i].Seater}</h5>
                            <h5 class="car-description col">${car[i].color}</h5>
                            <span class="car-rent col"><b>${car[i].rent1}</b></span>
                         </div>
                      </div>
                      <button class="btn btn-dark" style="margin-top:12px; width:200px;" onclick="book()"" >Book</button>
                      <button onclick="dbtn(${i})" class="btn btn-light"style="margin-top:12px; margin-left:40px; width:200px;" id="id1">Details</button>
                    </li>
                `;
      }
      document.getElementById('car').innerHTML=output;
  

    }
};
xhttp.open("GET", "cars.json", true);
xhttp.send();


var form=document.getElementById('id1');
form.addEventListener('click',book);

function book(e)
{  
$('#car').hide();
$('#details').hide();
$('#form-book').show();

let output2='';
output2+=`
<img src="https://lh3.googleusercontent.com/proxy/duo9o73r_9c1CZKxlT0cUQ5NBXnm1TiOrSvujcU_qjCqiG2GFM1iqIt8GJL702HhKduCJVZS-CZQVhxUaVLyrgMRnFrOzPA" class="rounded float-left">
  <h2 class="h2"><b> Booking Details</b></h2>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style="margin-top:10px;">Your Name:</label>
      <input type="text" id="fname" class="form-control" id="inputEmail4" placeholder="Full Name" style="margin-top:30px;">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style="margin-top:10px;">Contact Number:</label>
      <input type="text" id="phone" class="form-control" id="inputPassword4" placeholder="+91xxxxxxxxxx" style="margin-top:30px;" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style="margin-top:10px;">Issue Date:</label>
      <input type="date" id="idate" class="form-control" id="inputEmail4" style="margin-top:30px;" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style="margin-top:10px;">Return Date:</label>
      <input type="date" id="rdate" class="form-control" id="inputPassword4" style="margin-top:30px;" required>
    </div>
  </div>
  <div>
    <form>
        <button onclick="popup()" class="btn btn-dark" style="margin-left:10px; margin-top:45px; width:200px;">Book Car</button> 
        <button onclick="ret()" class="btn btn-light" style="margin-left:10px; margin-top:45px; width:200px;" >Return</button>

    </form>
        
  </div>
  </form>
`;
  

  document.getElementById('form-book').innerHTML=output2;

}

function popup(e) {
  var name=$('#fname').val();
  var phone=$('#phone').val();
  var idate=$('#idate').val();
  var rdate=$('#rdate').val();
  if(name=='' || phone=='' || idate=='' || rdate=='')
  {
    swal({
        title: "Error",
        text: "Please Fill All Data",
        icon: "warning",
        button: "OK",
});
  }
  else
  {
    swal({
        title: "Good job!",
        text: "Car Booking Successful!!!",
        icon: "success",
        button: "Ok",
        });

  }
}



    function dbtn(vari){
      console.log('vari', vari)
      $('#car').hide();
              $('#details').show();
      
        $.ajax({
          url: "cars.json",
          method: "GET",
          dataType: "json",
          
            success: (function(carr){
            let output3 = "";
            let car = carr.car;
            
            
                console.log(car);
                //const art = 
              output3 +=`
              
                <div class="container">
                  <div class="row">
                    <img class="car-img " style="width:190px;" src="${car[vari].image}">

                    <h1 class="car-title col">${car[vari].name}</h1>

                    <h4 class="car-description col">${car[vari].rent1}</h4>

                    <span class="car-rent col"><b>${car[vari].cartype}</b></span>

                    <p class="car-description col">${car[vari].discription}</p>

                    <p class="car-description col">${car[vari].booking}</p>
                    <button class="btn btn-dark " style="width:150px; height:50px;" onclick="book()" >Book</button>
                </div>
                </div>
                <button onclick="ret()" class="btn btn-light" style="margin-left:1080px; margin-top:-3%; width:200px;">Return</button>

                <hr>
              
                `;
      
            if(output3 !== ""){
              $('#car').hide();
              $('#form-book').hide();
              $('#details').show();
              document.getElementById("details").innerHTML=output3;  

            }
            else{
                $("#details").html("<h1>No car</h1>");
            } 
          })   
        }); 
    }


function ret() {
  window.location="index.html"
}
