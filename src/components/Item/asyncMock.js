const products = [
  {
    id: "1",
    image: "/productImg/octoFinisimo.webp",
    name: "Reloj Bvlgari Octo Finisimo Automatico Acero",
    brand:"Bvlgari",
    categoryId: "masculino",
    material: "Acero",
    description: "Acero Inoxidable",
    price: "53178400",
    size:"Mediano (36mm – 40mm)",
    stock: "5"
  },
  {
    id: "2",
    image:"/productImg/serpenti.webp",
    name: "Reloj Bvlgari Serpenti Oro Amarillo y Diamantes Cuarzo",
    brand:"Bvlgari",
    categoryId: "femenino",
    material: "Oro amarillo",
    description: "Oro Amarillo",
    price: "125549600",
    size:"Pequeño (menos 36mm)",
    stock: "2"
  },
  {
    id: "3",
    image:"/productImg/cronoCuir.webp",
    name: "Reloj Frederique Constant Classics Quartz Cronógrafo Cuero",
    brand:"Frederique Constant",
    categoryId: "masculino",
    material: "Acero Inoxidable",
    description: "Acero Inoxidable",
    price: "4179000",
    size:"Mediano (36mm – 40mm)crono",
    stock: "15"
  },
  {
    id: "4",
    image:"/productImg/ladiesMoonphase.webp",
    name: "Reloj Frederique Constant Slimline Ladies Moonphase Diamantes Acero",
    brand:"Frederique Constant",
    categoryId: "femenino",
    material: "PVD, Oro Amarillo, Acero Inoxidable",
    description: "PVD, Oro Amarillo, Acero Inoxidable",
    price: "5359200",
    size:"Pequeño (menos 36mm)",
    stock: "1"
  },
  {
    id: "5",
    image:"/productImg/gucciGTimeless.webp",
    name: "Reloj Gucci G-Timeless Cuarzo Cuero",
    brand:"Gucci",
    categoryId: "femenino",
    material: "Acero Inoxidable",
    description: "Acero Inoxidable",
    price: "5034250",
    size:"Mediano (36mm – 40mm)",
    stock: "0"
  },
  {
    id: "6",
    image:"/productImg/guessLatex.webp",
    name: "Reloj Guess Cuarzo Latex",
    brand:"Guess",
    categoryId: "masculino",
    material: "PVD, Acero Inoxidable",
    description: "PVD, Acero Inoxidable",
    price: "850000",
    size:"Grande (más 40mm)",
    stock: "10"
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === productId));
    }, 200);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.categoryId === categoryId));
    }, 200);
  });
};
