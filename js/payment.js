$(document).ready(function () {
    // let a=(sessionStorage.getItem("selected"));
    let total1 = window.sessionStorage.getItem("total");
    let qty = window.sessionStorage.getItem("qty");
    let a = JSON.parse(window.sessionStorage.getItem("array1"));
    alert(a[0].title);
    $("#place_order").click(function(){
        // alert($(":radio").prop("checked"));
        if($(":radio:checked").prop("checked")==true)
        
        {alert("Order placed succesfully!. Will be deliverd in 3-5 working days");}
        else
        {
            alert("pls select payment option");
        }
    });

    a.forEach(function (e, i) {

        var a = "<tr>" +
            "<td>" + (i + 1) +                                                     //append data in model
            "<td>" + e.title +
            "<td>" + e.description +
            "<td class='qty'>" + e.qty +
            "<td>" + e.rate +
            "<td>" + e.rate * e.qty;

        $("#tbody").append(a);
        $("#ta").html(total1);
        $("#qty").html(qty);

    });
});