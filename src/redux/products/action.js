import { SET_PRODUCTS } from "./actionType"

const products = [
    {
        id: 1,
        name: "Samsung Galaxy S20",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
        price: 300,
    },

    {
        id: 2,
        name: "iPhone 12",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
        price: 500,
    },

    {
        id: 3,
        name: "Redmi Note 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/d47212d16f630a841fef57d23d268f946c6e1ee3_1656409777.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 600,
    },

    {
        id: 4,
        name: "iPhone 13 Pro Max",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700,
    },
];

export const getProducts = () => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}