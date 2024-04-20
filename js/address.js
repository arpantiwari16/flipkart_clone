$(document).ready(function(){
    $("#save").click(function(){
    //    alert("delivery address updated");
       let fname,lname,pin,locality,addr,city,state,c1,c2;
       fname=$("#fname").val();
       lname=$("#lname").val();
       pin=$("#pin").val();
       locality=$("#locality").val();
       addr=$("#addr").val();
       city=$("#city").val();
       state=$("#state").val();
       c1=$("#contact").val();
       c2=$("#contact_alt").val();
       window.localStorage.setItem("name",fname);
       window.localStorage.setItem("lname",lname);
       window.localStorage.setItem("pin",pin);
       window.localStorage.setItem("locality",locality);
       window.localStorage.setItem("addr",addr);
       window.localStorage.setItem("city",city);
       window.localStorage.setItem("state",state);
       window.localStorage.setItem("c1",c1);
       window.localStorage.setItem("c2",c2);
    });
    let name=window.localStorage.getItem("name")
    let lname=window.localStorage.getItem("lname")
    let pin=window.localStorage.getItem("pin")
    let locality=window.localStorage.getItem("locality")
    let addr=window.localStorage.getItem("addr")
    let city=window.localStorage.getItem("city")
    let state=window.localStorage.getItem("state")
    let c1=window.localStorage.getItem("c1")
    let c2=window.localStorage.getItem("c2")
    $("#fname").val(name);
    $("#lname").val(lname);
    $("#pin").val(pin);
    $("#locality").val(locality);
    $("#addr").val(addr);
    $("#city").val(city);
    $("#state").val(state);
    $("#contact").val(c1);
    $("#contact_alt").val(c2);
    
});