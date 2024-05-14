import { Children } from "react";

const category = [{
        id: 1,
        name: "Men",
    },
    {
        id: 2,
        name: "Women",
    },
    {
        id: 3,
        name: "Kids",
    },
    {
        id: 4,
        name: "Born Baby",
    }
]

const Item = [{
        id: 1,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/4/i/-original-imaghgdyafftb9hp.jpeg?q=70",
        name: "Casual Shirts",
        category: "Men",
        price: 1099,
    },
    {
        id: 2,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/t/y/y/-original-imagg6u22pyjdthz.jpeg?q=70",
        name: "Formal Shirts",
        category: "Men",
        price: 1299,
    },
    {
        id: 3,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/o/c/30-phjn000067-highlander-original-imagvyq29rbhugxw.jpeg?q=70",
        name: "Jeans",
        category: "Men",
        price: 1599,
    },
    {
        id: 4,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/h/c/v/-original-imagq3qnbkggmwpx.jpeg?q=70",
        name: "Formal Trousers",
        category: "Men",
        price: 1299,
    },
    {
        id: 5,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/f/n/k/34-phtr000011-highlander-original-imagvfwhvkg3v3g4.jpeg?q=70",
        name: "Casual Trousers",
        category: "Men",
        price: 999,
    },
    {
        id: 6,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/1/d/x/free-ff1240-pashmina-flutefashion-unstitched-original-imagyjgzqz3cftut.jpeg?q=70",
        name: "Saree",
        category: "Women",
        price: 1299,
    },
    {
        id: 7,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/2/x/i/5xl-premium-kurta-elegance-style-original-imagux42x5hxfrgx.jpeg?q=70",
        name: "Kurta",
        category: "Women",
        price: 1099,
    },
    {
        id: 8,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/d/c/7/free-short-sleeve-dream-zinariya-fab-original-imaghfyyzn2cqm8a.jpeg?q=70",
        name: "Lehenga",
        category: "Women",
        price: 1599,
    },
    {
        id: 9,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/gown/a/0/n/na-xl-full-sleeve-stitched-miss-39-purple-miss-clothing-na-original-imahyajk472mytv4.jpeg?q=70",
        name: "Gown",
        category: "Women",
        price: 1499,
    },
    {
        id: 10,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/b/q/s-swati-suit-klosia-original-imagvzvf3yurxkbe.jpeg?q=70",
        name: "Ethnic Set",
        category: "Women",
        price: 1299,
    },
    {
        id: 11,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/n/1/m/5-6-years-sty-23-24-000530-kidsville-original-imagwdjnvrrmazra.jpeg?q=70",
        name: "Kids T-Shirt",
        category: "Kids",
        price: 1299,
    },
    {
        id: 12,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/j/5/m/11-12-years-digital-multicolor11-12-madhavart-original-imagyt8rwsagh6mm.jpeg?q=70",
        name: "Kids Ethnic Set",
        category: "Kids",
        price: 1599,
    },
    {
        id: 13,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/f/3/m/6-7-years-win-001-zimbar-original-imagmwk8yfbzkutj.jpeg?q=70",
        name: "Kids Shirt",
        category: "Kids",
        price: 1299,
    },
    {
        id: 14,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/n/j/j/2-3-years-mama-s-boy-blue-2-3-years-ombolo-enterprises-original-imahyedhthrkfsjp.jpeg?q=70",
        name: "Baby Combo",
        category: "Born Baby",
        price: 1299,
    },
    {
        id: 15,
        img: "https://rukminim2.flixcart.com/image/612/612/kzhbfrk0/kids-t-shirt/3/y/v/3-6-months-gobs20-2478-beige-babygo-original-imagbh8gjfwgbmkk.jpeg?q=70",
        name: "Baby T-Shirt",
        category: "Born Baby",
        price: 1299,
    },
    {
        id: 16,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/e/l/s/0-3-months-peb9298-bumzee-original-imagycvvhrayyrf8.jpeg?q=70",
        name: "Baby Innerwear",
        category: "Born Baby",
        price: 1399,
    },
]
export { category, Item }