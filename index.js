products = [
    {
        id: 1,
        name: "Random Name",
        Image: "https://i.postimg.cc/8cZHRTF7/pexels-antonio-dillard-4462781.jpg",
        price: "$ 740"
    },
    {
        id: 2,
        name: "Random Name",
        Image: "https://i.postimg.cc/Hs7c4p8F/pexels-erik-mclean-4219175.jpg",
        price: "$ 350"
    },
    {
        id: 3,
        name: "Random Name",
        Image: "https://i.postimg.cc/9Q54LvG0/pexels-hamza-nouasria-12725051.jpg",
        price: "$ 450"
    },
    {
        id: 4,
        name: "Random Name",
        Image: "https://i.postimg.cc/1Xbghd2W/pexels-leonardo-luz-15698296.jpg",
        price: "$ 700"
    },
    {
        id: 5,
        name: "Random Name",
        Image: "https://i.postimg.cc/3JWCM54Z/pexels-ray-piedra-1464625.jpg",
        price: "$ 200"
    },
    {
        id: 6,
        name: "Random Name",
        Image: "https://i.postimg.cc/gjxw7pSX/pexels-ray-piedra-1537671.jpg",
        price: "$ 500"
    },
    
    {
        id: 7,
        name: "Random Name",
        Image: "https://i.postimg.cc/90QPFsxC/pexels-skylar-kang-6046183",
        price: "$ 215.99"
    },
    
    {
        id: 8,
        name: "Random Name",
        Image: "https://i.postimg.cc/1XX6Zwtz/pexels-sneep-crew-12730141.jpg",
        price: "$ 750"
    },
]

let items = document.getElementById('items')
products.forEach((product) => {
    items.innerHTML += `
    <div class="card m-4 p-5" style="width:400px">
    <img src="${product.Image}" class="card-img" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${product.name}</h4>
      <p class="text-black">${product.price}</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>`;
})

{/* <div class= "card m-4">
        <h4 class="display-4">${product.name}</h4>
        <div class="card-body">
            <img src="${product.Image}" class="card-img">
            
            <p class="text-white">${product.price}</p>
        </div>
    </div> */}