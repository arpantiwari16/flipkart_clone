var data1 = [
    {
        src: 'tshirt/t4.webp',
        title: "levi's",
        description: "men polo t-shirt",
        amount: "₹650",
        price: "1300",
        discount: "50%",
        inventory: "only 4 left",
        size: "s,m,l,xxl"
    },
    {
        src: 'tshirt/t5.webp',
        title: "duke",
        description: " t-shirt",
        amount: "₹400",
        price: "800",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    },
    {
        src: 'tshirt/t6.webp',
        title: "U.S. POLO ASSN.",
        description: "large t-shirt",
        amount: "₹1000",
        price: "2000",
        discount: "50%",
        inventory: "only 6 left",
        size: "s,m"
    },
    {
        src: 'tshirt/t7.webp',
        title: "puma",
        description: "men t-shirt",
        amount: "₹900",
        price: "1800",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    },
    {
        src: 'tshirt/t6.webp',
        title: "Allen Solly",
        description: "Men Striped Polo Neck Cotton Blend White T-Shirt",
        amount: "₹1000",
        price: "2000",
        discount: "50%",
        inventory: "only 6 left",
        size: "s,m"
    },
    {
        src: 'tshirt/t7.webp',
        title: "jack & jones",
        description: "black t-shirt",
        amount: "₹650",
        price: "1300",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    },
    {
        src: 'tshirt/t9.webp',
        title: "lee",
        description: "white t-shirt",
        amount: "₹1000",
        price: "2000",
        discount: "50%",
        inventory: "only 6 left",
        size: "s,m"
    },
    {
        src: 'tshirt/t0.webp',
        title: "wrogn",
        description: "blue t-shirt",
        amount: "₹650",
        price: "1300",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    }
];

$(document).ready(function () {

    ///////////////////append in display table 

    for (var i = 0; i < data1.length; i++) {
        let amount = data1[i].price * .75;
        let discount = "25%";
        var card =
            '<div class="col-md-3 grid">' +
            '<div class="card border-0">' +
            '<img class="img"  src="' + data1[i].src + '" alt="t-shirt img">' +
            '<div class="card-body">' +
            '<h5 class="card-title title1">' + data1[i].title + '</h5>' +
            '<p class="card-text description">' + data1[i].description + '<img class="imgcard" src="tshirt/fassured.png" style="width: 60px; height:20px;" alt="">' + '</p>' +
            '<span class="amount">' + amount + '</span>' +
            '<del id="price" class="text-secondary price">' + data1[i].price + '</del>' +
            ' <span class="text-success discount">' + discount + '</span>' +
            '<br><span class="text-success inventory"><b>' + data1[i].inventory + '</b></span>' +
            '<br><span class="size">Size: ' + data1[i].size + "</span>" +
            '<br><input type="button" value="add to cart" class="b1 btn btn-primary"><br>' +
            '</div></div></div>';

        $("#card").append(card);
    }




    //////////////////
    let title, description, rate, amount, badge, img;                        //declaration
    let sno = 0;
    let qty = 0;
    let ta = 0;
    let tq = 0;
    let arr = [];



    $(".b1").unbind('click').click(function () {


        qty = 1;
        title = $(this).parent(".card-body").children().eq(0).text();
        description = $(this).parent(".card-body").children().eq(1).text();
        rate = $(this).parent(".card-body").children().eq(2).text();
        amount = qty * rate;

        // amountarray.push(amount);


        var xindex = arr.findIndex(v => v.title == title);   //checks for repeat
        // alert(xindex);
        if (xindex < 0) {
            let selected = {
                title: title,
                description: description,
                qty: qty,
                rate: rate,
                amount: amount
            };
            arr.push(selected);

        }
        else {
            arr[xindex].qty++;
        }

        //console.log(arr);

        badge = parseInt($("#badge").text());
        //console.log("badge :- " + badge);
        badge += 1;
        $("#badge").text(badge);


        arr1 = JSON.stringify(arr);
        window.sessionStorage.setItem("array1", arr1);
        console.log(arr1);

    });

    $("#placeorder").click(function () {

        window.open("html/address.html", "_self");
    })


    ///////////

    $('#myModal').on('shown.bs.modal', function () {                //model entry
        // alert("*");
        $("#tbody").text("");
        ta = 0;
        arr.forEach(function (e, i) {

            var a = "<tr>" +
                "<td>" + (i + 1) +                                                     //append data in model
                "<td>" + e.title +
                "<td>" + e.description +
                "<td class='qty'>" + e.qty +
                "<td>" + e.rate +
                "<td>" + e.rate * e.qty;

            $("#tbody").append(a);
            ta += e.rate * e.qty;


        });

        $("#ta").text(ta);
        $("#tq").text(badge);
        window.sessionStorage.setItem("total", ta);
        window.sessionStorage.setItem("qty", badge);


        // $('#myInput').trigger('focus')
    })


});