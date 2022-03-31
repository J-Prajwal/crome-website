var TvList=[

    {imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1636971596/Croma%20Assets/Entertainment/Television/Images/240639_estn7h.png/mxw_2048,f_auto",
     itemName: "Hisen A4G 80cm(32 Inch) Ready LED ...",
     itemPrice: "Rs 14,990.00",
     strikedOffPrice: "Rs 24,990.00"     
},
{
    
    imgUrl: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1645530534/Croma%20Assets/Entertainment/Television/Images/248621_uvifqr.png/mxw_2048,f_auto",
    itemName:"OnePlus Y1S Edge 80cm (32 ) HD Ready LE..",
     itemPrice:"Rs 16,99.00",
    strikedOffPrice: "19,999.00"
},
{
    imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1644998802/Croma%20Assets/Entertainment/Television/Images/248623_gkcmf6.png/mxw_2048,f_auto",
    itemName:"iFFACON F65A Series 79.97cm (32Inch) HD...",
    itemPrice: "Rs 12,490",
    strikedOffPrice:"Rs 28,990.00"
},

{
    imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639037755/Croma%20Assets/Entertainment/Television/Images/246056_a89my8.png/mxw_2048,f_auto",
    itemName:"Kodak 7XPRO Series 80cm (32 Inch) HD Ready Flat...",
    itemPrice: "Rs13,499.00",
    strikedOffPrice:" Rs18,999.00"
},


];

var TvList2=[
    {
        imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445941/Croma%20Assets/Entertainment/Television/Images/246264_s6ynox.png/mxw_2048,f_auto",
        itemName:"iFFALCON F52 180cm (43 Inch) Full HD LED...",
        itemPrice: "RS 25,990.00",
        strikedOffPrice:"Rs 45,990.00"
    },
    {
        imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606068457/Croma%20Assets/Entertainment/Television/Images/9005322698782.png/mxw_2048,f_auto",
        itemName:"TCL P615 108cm (43 Inch) 4K Ultra HD LED Androi...",
        itemPrice:"Rs 27,990.00",
        strikedOffPrice : "Rs 40,000",
    },
    {
        imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641280540/Croma%20Assets/Entertainment/Television/Images/246765_oyrgx0.png/mxw_2048,f_auto",
        itemName:"Akai 108 cm (43 Inch) Full HD Smart LED TV (Framele...)",
        itemPrice:"Rs24,999.00",
        strikedOffPrice:"$35,990 .00" 
    },
    {
        
        imgUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1646137501/Croma%20Assets/Entertainment/Television/Images/231502_jvrbme.png/mxw_2048,f_auto",
        itemName:"Croma Fire TV 108 cm (43 Inch) Full HD Smart LED TV (Framele...)",
        itemPrice:"Rs27,999.00",
        strikedOffPrice:"$40,990 .00" 
       
    },
];





var cartData = JSON.parse(localStorage.getItem("cart")) || [];
TvList.map(function (elem) {
    var box = document.createElement("div");
     
    var img = document.createElement("img");
    img.src = elem.imgUrl;
    img.setAttribute("class","img")

    var name = document.createElement("h5");
    name.textContent = elem.itemName;

    var box2=document.createElement("div");
    box2.setAttribute("class","box2");

    var price = document.createElement("h5");
    price.innerText = elem.itemPrice;
    price.setAttribute("class","pr")

    var sop=document.createElement("p")
    sop.innerText=elem.strikedOffPrice
    sop.setAttribute("class","line")

    var btn = document.createElement("button");
    btn.setAttribute("class","btn")
    btn.innerText = "कार्ट में जोड़े";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box2.append(price,sop);
    box.append(img, name, box2, btn);



    document.querySelector("#container10").append(box);
  });

  TvList2.map(function (elem) {
    var box = document.createElement("div");
     
    var img = document.createElement("img");
    img.src = elem.imgUrl;
    img.setAttribute("class","img")

    var name = document.createElement("h5");
    name.textContent = elem.itemName;

    var box2=document.createElement("div");
    box2.setAttribute("class","box2");

    var price = document.createElement("h5");
    price.innerText = elem.itemPrice;
    price.setAttribute("class","pr")

    var sop=document.createElement("p")
    sop.innerText=elem.strikedOffPrice
    sop.setAttribute("class","line")

    var btn = document.createElement("button");
    btn.setAttribute("class","btn")
    btn.innerText = "कार्ट में जोड़े";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box2.append(price,sop);
    box.append(img, name, box2, btn);



    document.querySelector("#container11").append(box);
  });
  function addToCart(elem){
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("आपका आइटम कार्ट में जोड़ा गया |");
  }


