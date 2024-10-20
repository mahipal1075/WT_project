// Combined product data from both Collection and Latest Products
const products = [
    // Collection Products
    {
        id: 1,
        title: "Tea or coffee coasters for tableware",
        description: "High-quality eco-friendly coasters made from natural materials...",
        price: "₹ 5,729",
        image: "https://i.etsystatic.com/18038469/r/il/508a20/6169201290/il_794x529.6169201290_dbbx.jpg"
    },
    {
        id: 2,
        title: "Handmade Coconut Bowls",
        description: "Beautifully crafted coconut bowls perfect for eco-conscious kitchens...",
        price: "₹ 1,599",
        image: "https://i.etsystatic.com/49486632/r/il/5533ca/5712008175/il_794x529.5712008175_fdc1.jpg"
    },
    {
        id: 3,
        title: "Reusable Beeswax Food Wraps",
        description: "Eco-friendly reusable wraps made from beeswax to keep food fresh...",
        price: "₹ 1,999",
        image: "https://i.etsystatic.com/19007833/r/il/dd4e58/4403576483/il_794x529.4403576483_t0i0.jpg"
    },
    {
        id: 4,
        title: "Zero Waste Reusable Cotton Face Mask",
        description: "Reusable and eco-friendly face mask for skincare...",
        price: "₹ 1,782",
        image: "https://i.etsystatic.com/28946160/r/il/a4ca3e/3633512369/il_794x529.3633512369_m7ph.jpg"
    },
    {
        id: 5,
        title: "Organic Cotton Tote Bag",
        description: "Durable tote bag made from 100% organic cotton for your daily needs...",
        price: "₹ 799",
        image: "https://i.etsystatic.com/12064465/r/il/f98f12/4132641326/il_794x529.4132641326_rm4h.jpg"
    },
    {
        id: 6,
        title: "Eco-Friendly Water Bottle",
        description: "Stylish water bottle made from recycled stainless steel...",
        price: "₹ 2,499",
        image: "https://i.etsystatic.com/25215180/r/il/5fb274/2591869096/il_794x529.2591869096_5s5d.jpg"
    },
    {
        id: 7,
        title: "Grey Sandstone Sink with Natural Finish",
        description: "Handcrafted sandstone sink for natural interior design...",
        price: "₹ 42,011",
        image: "https://i.etsystatic.com/34084383/r/il/e7f157/6255829666/il_794x529.6255829666_on2y.jpg"
    },
    {
        id: 8,
        title: "Bamboo Toothbrush Set",
        description: "Biodegradable toothbrushes made from sustainable bamboo...",
        price: "₹ 499",
        image: "https://i.etsystatic.com/29190685/r/il/4743fd/4286963157/il_794x529.4286963157_d7xh.jpg"
    },
    {
        id: 9,
        title: "Compostable Coffee Pods",
        description: "Sustainably made compostable coffee pods compatible with various machines...",
        price: "₹ 1,299",
        image: "https://i.etsystatic.com/38371706/r/il/a0abee/4315667301/il_794x529.4315667301_38b0.jpg"
    },
    // Latest Products
    {
        id: 10,
        title: "Reusable Silicone Food Storage Bags",
        description: "A sustainable alternative to single-use plastic bags.",
        price: "₹ 12,000",
        image: "latest_product1.jpg" // Add correct image path
    },
    {
        id: 11,
        title: "Natural Bamboo Toothbrush",
        description: "Eco-friendly toothbrush with biodegradable bamboo handle.",
        price: "₹ 5,000",
        image: "latest_product2.jpg" // Add correct image path
    },
    {
        id: 12,
        title: "Compostable Trash Bags",
        description: "Biodegradable trash bags for eco-conscious living.",
        price: "₹ 10,000",
        image: "latest_product3.jpg" // Add correct image path
    },
    {
        id: 13,
        title: "Organic Cotton Produce Bags",
        description: "Perfect for shopping, made from organic cotton.",
        price: "₹ 8,000",
        image: "latest_product4.jpg" // Add correct image path
    },
    {
        id: 14,
        title: "Bamboo Cutlery Set",
        description: "Portable cutlery set made from sustainable bamboo.",
        price: "₹ 15,000",
        image: "latest_product5.jpg" // Add correct image path
    },
    {
        id: 15,
        title: "Eco-Friendly Beeswax Wraps",
        description: "Reusable food wraps, a sustainable alternative to plastic wrap.",
        price: "₹ 20,000",
        image: "latest_product6.jpg" // Add correct image path
    }
];

// Function to load product details based on the selected product ID
function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("productImage").src = product.image;
        document.getElementById("productTitle").innerText = product.title;
        document.getElementById("productDescription").innerText = product.description;
        document.getElementById("productPrice").innerText = product.price;
    }
}

// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Load the product details when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    loadProductDetails(productId);

    // Now handle image resizing (if needed)
    const productImages = document.querySelectorAll('.product-img');

    const maxHeight = 250; // Set your desired maximum height

    productImages.forEach(function (img) {
        const tempImg = new Image();
        tempImg.src = img.src;

        tempImg.onload = function () {
            const aspectRatio = tempImg.width / tempImg.height;
            if (tempImg.height > maxHeight) {
                img.style.height = maxHeight + "px";
                img.style.width = (maxHeight * aspectRatio) + "px"; // Maintain aspect ratio
            } else {
                img.style.height = tempImg.height + "px"; // No need to resize if it's smaller
                img.style.width = tempImg.width + "px";
            }
            img.style.objectFit = "cover"; // Handle aspect ratio
        };
    });
});