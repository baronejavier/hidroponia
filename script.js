document.addEventListener('DOMContentLoaded', () => {
    
    const models = [
        {
            id: 1,
            title: "Look Clásico Completo",
            desc: "Elegancia cotidiana con chomba de algodón premium y jean de corte moderno. El conjunto perfecto para el día a día con estilo.",
            img: "img/chomba y jean.png",
            category: "elegante",
            gender: "hombre",
            items: {
                "Chomba": {
                    price: 25000,
                    variants: [
                        { size: "M", colorName: "Rosa", colorHex: "#D2A1B6" },
                        { size: "L", colorName: "Celeste", colorHex: "#99D1DC" },
                        { size: "XL", colorName: "Oliva", colorHex: "#AEAC9C" },
                        { size: "XL", colorName: "Negro", colorHex: "#000000" },
                        { size: "M", colorName: "Negro/Gris", colorGradient: ["#000000", "#808080"] },
                        { size: "L", colorName: "Negro/Blanco", colorGradient: ["#000000", "#FFFFFF"] },
                        { size: "XL", colorName: "Azul/Blanco", colorGradient: ["#000080", "#FFFFFF"] },
                        { size: "XL", colorName: "Gris/Fuccia", colorGradient: ["#808080", "#FF00FF"] },
                        { size: "XL", colorName: "Rojo", colorHex: "#FF0000" },
                        { size: "XXL", colorName: "Pastel", colorHex: "#FADADD" },
                        { size: "XXL", colorName: "Gris/Rojo", colorGradient: ["#808080", "#FF0000"] },
                        { size: "XXL", colorName: "Azul", colorHex: "#000080" },
                        { size: "XXL", colorName: "Negro", colorHex: "#000000" }
                    ]
                },
                "Jean": {
                    price: 35000,
                    variants: [
                        { size: "42", colorName: "Marrón", colorHex: "#8B4513" },
                        { size: "46", colorName: "Negro", colorHex: "#000000" },
                        { size: "50", colorName: "Azul", colorHex: "#000080" },
                        { size: "42", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "54", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "52", colorName: "Azul", colorHex: "#000080" }
                    ]
                }
            }
        },
        {
            id: 13,
            title: "Estilo Mao",
            desc: "Sofisticación minimalista. Camisa mao de corte impecable combinada con un cinto de cuero negro esencial.",
            img: "img/camisa mao.jpg", 
            category: "sofisticado",
            gender: "hombre",
            items: {
                "Camisa Mao": {
                    price: 25000,
                    variants: [
                        { size: "L", colorName: "Azul Marino", colorHex: "#000080" },
                        { size: "L", colorName: "Negro", colorHex: "#000000" }
                    ]
                },
                "Cinto Negro": {
                    price: 10000,
                    variants: [
                        { size: "Único", colorName: "Negro", colorHex: "#000000" }
                    ]
                }
            }
        },
        {
            id: 2,
            title: "Verano Waffle",
            desc: "Textura sofisticada para los días calurosos. Remera waffle de algodón respirable con short jean de corte relajado.",
            img: "img/wafle jean.png",
            category: "fresco",
            gender: "hombre",
            items: {
                "Remera Waffle": {
                    price: 18000,
                    variants: [
                        { size: "XXL", colorName: "Beige claro", colorHex: "#AEBAAE" },
                        { size: "XXL", colorName: "Beige oscuro", colorHex: "#A59D8E" },
                        { size: "XXL", colorName: "Negro", colorHex: "#000000" },
                        { size: "XXL", colorName: "Verde Oliva Oscuro", colorHex: "#556B2F" },
                        { size: "XXL", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "XL", colorName: "Marrón oscuro", colorHex: "#371F29" },
                        { size: "XL", colorName: "Azul", colorHex: "#000080" },
                        { size: "L", colorName: "Beige", colorHex: "#a9a083" },
                        { size: "L", colorName: "Verde oscuro", colorHex: "#0b4231" },
                        { size: "L", colorName: "Rojo", colorHex: "#FF0000" },
                        { size: "L", colorName: "Gris claro", colorHex: "#c8c4b4" },
                        { size: "M", colorName: "Marrón", colorHex: "#8B4513" },
                        { size: "M", colorName: "Azul", colorHex: "#000080" },
                        { size: "M", colorName: "Gris beige", colorHex: "#ced2c8" },
                        { size: "M", colorName: "Marrón rojizo", colorHex: "#6b404c" },
                        { size: "M", colorName: "Marrón grisáceo", colorHex: "#8d7b68" },
                        { size: "M", colorName: "Verde grisáceo", colorHex: "#2d3936" },
                        { size: "M", colorName: "Negro", colorHex: "#000000" },
                        { size: "S", colorName: "Azul", colorHex: "#000080" },
                        { size: "S", colorName: "Rojo", colorHex: "#FF0000" },
                        { size: "S", colorName: "Negro", colorHex: "#000000" }
                    ]
                },
                "Short Jean": {
                    price: 30000,
                    variants: [
                        { size: "40", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "48", colorName: "Negro", colorHex: "#000000" },
                        { size: "44", colorName: "Azul", colorHex: "#000080" },
                        { size: "44", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "46", colorName: "Azul", colorHex: "#000080" }
                    ]
                }
            }
        },
        {
            id: 3,
            title: "Tropical Vibes",
            desc: "Estilo fresco y relajado. Remera hawai y pantalón de vestir para ocasiones casuales.",
            img: "img/hawai short vestir.png",
            category: "tropical",
            gender: "hombre",
            items: {
                "Remera Hawai": {
                    price: 18000,
                    variants: [
                        { size: "XXL", colorName: "Amarillo verdoso", colorHex: "#DADC7D" },
                        { size: "XXL", colorName: "Gris beige", colorHex: "#C2C4B9" },
                        { size: "XXL", colorName: "Negro", colorHex: "#000000" },
                        { size: "XXL", colorName: "Verde menta", colorHex: "#DDEAE0" },
                        { size: "XXL", colorName: "Pastel", colorHex: "#F0EAD6" },
                        { size: "XL", colorName: "Verde Pastel", colorHex: "#C1E1C1" },
                        { size: "XL", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "XL", colorName: "Marrón", colorHex: "#8B4513" },
                        { size: "L", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "L", colorName: "Negro", colorHex: "#000000" },
                        { size: "M", colorName: "Cobre", colorHex: "#B87333" },
                        { size: "M", colorName: "Marrón", colorHex: "#8B4513" },
                        { size: "S", colorName: "Negro", colorHex: "#000000" },
                        { size: "S", colorName: "Beige", colorHex: "#DBD3CA" },
                        { size: "S", colorName: "Celeste", colorHex: "#87CEEB" }
                    ]
                },
                "Pantalón de Vestir": {
                    price: 25000,
                    variants: [
                        { size: "44", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "46", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "48", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "44", colorName: "Azul", colorHex: "#000080" },
                        { size: "46", colorName: "Azul", colorHex: "#000080" }
                    ]
                }
            }
        },
        {
            id: 4,
            title: "Deportivo Total",
            desc: "Rendimiento y estilo. Remera deportiva dry-fit con tecnología de secado rápido y short rústico de alta durabilidad.",
            img: "img/remera deportiva short rustico.png",
            category: "training",
            gender: "hombre",
            items: {
                "Remera Deportiva": {
                    price: 18000,
                    variants: [
                        { size: "XXXL", colorName: "Azul Marino", colorHex: "#000080" },
                        { size: "XXL", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "XXL", colorName: "Gris claro", colorHex: "#DEE1D9" },
                        { size: "XXL", colorName: "Gris oscuro", colorHex: "#555555" },
                        { size: "XL", colorName: "Verde claro", colorHex: "#97DD7A" },
                        { size: "XL", colorName: "Negro", colorHex: "#000000" },
                        { size: "XL", colorName: "Beige", colorHex: "#C2BDB3" },
                        { size: "L", colorName: "Rosa/nude", colorHex: "#DAB3B3" },
                        { size: "L", colorName: "Amarillo", colorHex: "#FFD700" },
                        { size: "M", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "S", colorName: "Amarillo", colorHex: "#FFD700" },
                        { size: "S", colorName: "Azul", colorHex: "#0000FF" }
                    ]
                },
                "Short Rústico": {
                    price: 15000,
                    variants: [
                        { size: "Num 1", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "Num 2", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "Num 2", colorName: "Negro", colorHex: "#000000" },
                        { size: "Num 3", colorName: "Negro", colorHex: "#000000" },
                        { size: "Num 3", colorName: "Pastel", colorHex: "#F0EAD6" },
                        { size: "Num 3", colorName: "Verde Pastel", colorHex: "#C1E1C1" },
                        { size: "Num 5", colorName: "Violeta", colorHex: "#8B008B" },
                        { size: "Talle 40", colorName: "Negro", colorHex: "#000000" },
                        { size: "Talle 42", colorName: "Naranja", colorHex: "#FF8C00" },
                        { size: "Talle 44", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "Talle 46", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "Talle 48", colorName: "Amarillo", colorHex: "#FFD700" }
                    ]
                }
            }
        },
        {
            id: 5,
            title: "Básico Essential",
            desc: "Menos es más. Remera lisa de algodón premium con short waffle texturado. La combinación perfecta.",
            img: "img/remera lisa short wafle.png",
            category: "minimal",
            gender: "hombre",
            items: {
                "Remera Lisa": {
                    price: 18000,
                    variants: [
                        { size: "XL", colorName: "Negro", colorHex: "#000000" },
                        { size: "XL", colorName: "Vino Tinto", colorHex: "#722F37" },
                        { size: "L", colorName: "Amarillo", colorHex: "#FFD700" },
                        { size: "L", colorName: "Rojo", colorHex: "#FF0000" },
                        { size: "M", colorName: "Negro", colorHex: "#000000" },
                        { size: "M", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "M", colorName: "Vino Tinto", colorHex: "#722F37" },
                        { size: "S", colorName: "Azul", colorHex: "#000080" },
                        { size: "S", colorName: "Gris", colorHex: "#808080" },
                        { size: "S", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "S", colorName: "Negro", colorHex: "#000000" }
                    ]
                },
                "Short Waffle": {
                    price: 15000,
                    variants: [
                        { size: "38", colorName: "Azul", colorHex: "#000080" },
                        { size: "40", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "42", colorName: "Pastel", colorHex: "#F0EAD6" },
                        { size: "48", colorName: "Rojo", colorHex: "#FF0000" }
                    ]
                }
            }
        },
        {
            id: 6,
            title: "Urban Street",
            desc: "Estilo callejero con personalidad. Remera estampada de diseño exclusivo con pantalón waffle de corte moderno.",
            img: "img/remera estampada pantalon wafle.png",
            category: "urbano",
            gender: "hombre",
            items: {
                "Remera Estampada": {
                    price: 18000,
                    variants: [
                        { size: "XXL", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "XXL", colorName: "Turquesa", colorHex: "#40E0D0" },
                        { size: "XXL", colorName: "Negro", colorHex: "#000000" },
                        { size: "XL", colorName: "Rojo Vino", colorHex: "#722F37" },
                        { size: "XL", colorName: "Verde Fluor", colorHex: "#7FFF00" },
                        { size: "XL", colorName: "Negro", colorHex: "#000000" },
                        { size: "L", colorName: "Verde Agua", colorHex: "#66CDAA" },
                        { size: "L", colorName: "Amarillo", colorHex: "#FFD700" },
                        { size: "L", colorName: "Mostaza", colorHex: "#FFDB58" },
                        { size: "M", colorName: "Azul Marino", colorHex: "#000080" },
                        { size: "M", colorName: "Negro", colorHex: "#000000" },
                        { size: "S", colorName: "Blanco", colorHex: "#FFFFFF" }
                    ]
                },
                "Pantalón Waffle": {
                    price: 21000,
                    variants: [
                        { size: "L", colorName: "Gris Oscuro", colorHex: "#555555" },
                        { size: "XL", colorName: "Vino Tinto", colorHex: "#722F37" },
                        { size: "XXL", colorName: "Marrón Claro", colorHex: "#D2B48C" }
                    ]
                }
            }
        },
        {
            id: 7,
            title: "Frescura Natural",
            desc: "Máxima comodidad para el verano. Musculosa de algodón suave con pantalón de lino liviano y transpirable.",
            img: "img/musculosa pantalon lino.png",
            category: "lino",
            gender: "hombre",
            items: {
                "Musculosa": {
                    price: 18000,
                    variants: [
                        { size: "S", colorName: "Azul", colorHex: "#000080" },
                        { size: "M", colorName: "Negro", colorHex: "#000000" },
                        { size: "L", colorName: "Vino Tinto", colorHex: "#722F37" },
                        { size: "XL", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "XXL", colorName: "Verde", colorHex: "#228B22" }
                    ]
                },
                "Pantalón Lino": {
                    price: 18000,
                    variants: [
                        { size: "S", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "M", colorName: "Marrón Claro", colorHex: "#D2B48C" },
                        { size: "L", colorName: "Gris", colorHex: "#808080" },
                        { size: "XXL", colorName: "Blanco", colorHex: "#FFFFFF" }
                    ]
                }
            }
        },
        {
            id: 8,
            title: "Vestido Elegante",
            desc: "Sofisticación en cada detalle. Vestido de corte favorecedor, ideal para ocasiones especiales o una salida con estilo.",
            img: "img/vestido.png",
            category: "noche",
            gender: "mujer",
            items: {
                "Vestido Tira Gruesa": {
                    price: 25000,
                    variants: [
                        { size: "3", colorName: "Dorado", colorHex: "#D4AF37" },
                        { size: "3", colorName: "Verde", colorHex: "#2E8B57" },
                        { size: "4", colorName: "Celeste", colorHex: "#87CEEB" }
                    ]
                },
                "Vestido Tira Fina": {
                    price: 25000,
                    variants: [
                        { size: "4", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "5", colorName: "Azul", colorHex: "#0055A4" },
                        { size: "5", colorName: "Azul Marino", colorHex: "#000080" }
                    ]
                }
            }
        },
        {
            id: 9,
            title: "Casual Morley",
            desc: "Suavidad y estilo. Remera Morley de tacto ultrasuave con short rústico de alta durabilidad. Comodidad total.",
            img: "img/remera morley short rustico.png",
            category: "confort",
            gender: "mujer",
            items: {
                "Remera Morley": {
                    price: 17000,
                    variants: [
                        { size: "Único", colorName: "Negro", colorHex: "#000000" },
                        { size: "Único", colorName: "Cobre", colorHex: "#B87333" },
                        { size: "Único", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "Único", colorName: "Blanco", colorHex: "#FFFFFF" }
                    ]
                },
                "Short Rústico": {
                    price: 15000,
                    variants: [
                        { size: "Num 1", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "Num 2", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "Num 2", colorName: "Negro", colorHex: "#000000" },
                        { size: "Num 3", colorName: "Negro", colorHex: "#000000" },
                        { size: "Num 3", colorName: "Pastel", colorHex: "#F0EAD6" },
                        { size: "Num 3", colorName: "Verde Pastel", colorHex: "#C1E1C1" },
                        { size: "Num 5", colorName: "Violeta", colorHex: "#8B008B" },
                        { size: "Talle 40", colorName: "Negro", colorHex: "#000000" },
                        { size: "Talle 42", colorName: "Naranja", colorHex: "#FF8C00" },
                        { size: "Talle 44", colorName: "Celeste", colorHex: "#87CEEB" },
                        { size: "Talle 46", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "Talle 48", colorName: "Amarillo", colorHex: "#FFD700" }
                    ]
                }
            }
        },
        {
            id: 10,
            title: "Coordinado Waffle",
            desc: "Look completo con textura. Remera y short waffle en tonos combinados. Estilo sofisticado y moderno.",
            img: "img/remera wafle pantalon wafle.png",
            category: "coordinado",
            gender: "mujer",
            items: {
                "Remera Waffle": {
                    price: 18000,
                    variants: [
                        { size: "XXL", colorName: "Beige claro", colorHex: "#AEBAAE" },
                        { size: "XXL", colorName: "Beige oscuro", colorHex: "#A59D8E" },
                        { size: "XXL", colorName: "Negro", colorHex: "#000000" },
                        { size: "XXL", colorName: "Verde Oliva Oscuro", colorHex: "#556B2F" },
                        { size: "XXL", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "XL", colorName: "Marrón oscuro", colorHex: "#371F29" },
                        { size: "XL", colorName: "Azul", colorHex: "#000080" },
                        { size: "L", colorName: "Beige", colorHex: "#a9a083" },
                        { size: "L", colorName: "Verde oscuro", colorHex: "#0b4231" },
                        { size: "L", colorName: "Rojo", colorHex: "#FF0000" },
                        { size: "L", colorName: "Gris claro", colorHex: "#c8c4b4" },
                        { size: "M", colorName: "Marrón", colorHex: "#8B4513" },
                        { size: "M", colorName: "Azul", colorHex: "#000080" },
                        { size: "M", colorName: "Gris beige", colorHex: "#ced2c8" },
                        { size: "M", colorName: "Marrón rojizo", colorHex: "#6b404c" },
                        { size: "M", colorName: "Marrón grisáceo", colorHex: "#8d7b68" },
                        { size: "M", colorName: "Verde grisáceo", colorHex: "#2d3936" },
                        { size: "M", colorName: "Negro", colorHex: "#000000" },
                        { size: "S", colorName: "Azul", colorHex: "#000080" },
                        { size: "S", colorName: "Rojo", colorHex: "#FF0000" },
                        { size: "S", colorName: "Negro", colorHex: "#000000" }
                    ]
                },
                "Short Waffle": {
                    price: 15000,
                    variants: [
                        { size: "38", colorName: "Azul", colorHex: "#000080" },
                        { size: "40", colorName: "Verde Oliva", colorHex: "#6B8E23" },
                        { size: "42", colorName: "Pastel", colorHex: "#F0EAD6" },
                        { size: "48", colorName: "Rojo", colorHex: "#FF0000" }
                    ]
                }
            }
        },
        {
            id: 11,
            title: "Baby Tee Verano",
            desc: "Estilo juvenil y fresco. Baby tee ajustada con short de lino liviano. Perfecto para los días calurosos.",
            img: "img/baby tee short lino.png",
            category: "trendy",
            gender: "mujer",
            items: {
                "Baby Tee": {
                    price: 13000,
                    variants: [
                        { size: "Único", colorName: "Rosa Pastel", colorHex: "#FFD1DC" },
                        { size: "Único", colorName: "Azul", colorHex: "#000080" },
                        { size: "Único", colorName: "Amarillo", colorHex: "#FFD700" },
                        { size: "Único", colorName: "Rosa", colorHex: "#FF69B4" },
                        { size: "Único", colorName: "Mostaza", colorHex: "#FFDB58" },
                        { size: "Único", colorName: "Verde Agua", colorHex: "#66CDAA" },
                        { size: "Único", colorName: "Salmón", colorHex: "#FA8072" }
                    ]
                },
                "Short de Lino": {
                    price: 18000,
                    variants: [
                        { size: "S", colorName: "Blanco", colorHex: "#FFFFFF" },
                        { size: "M", colorName: "Marrón Claro", colorHex: "#D2B48C" },
                        { size: "L", colorName: "Gris", colorHex: "#808080" },
                        { size: "XXL", colorName: "Blanco", colorHex: "#FFFFFF" }
                    ]
                }
            }
        },
        {
            id: 12,
            title: "Remerón Oversize",
            desc: "Comodidad y estilo relajado. Remerón de algodón premium de corte amplio. Ideal para un look urbano despreocupado.",
            img: "img/remeron.png",
            category: "oversize",
            gender: "mujer",
            items: {
                "Remerón Oversize": {
                    price: 18000,
                    variants: [
                        { size: "L", colorName: "Verde Fluor", colorHex: "#7FFF00" },
                        { size: "L", colorName: "Azul Marino", colorHex: "#000080" },
                        { size: "L", colorName: "Mostaza", colorHex: "#FFDB58" },
                        { size: "L", colorName: "Amarillo", colorHex: "#FFD700" },
                        { size: "XL", colorName: "Verde Fluor", colorHex: "#7FFF00" },
                        { size: "XL", colorName: "Negro", colorHex: "#000000" }
                    ]
                }
            }
        },
        {
            id: 14,
            title: "Musculosa Verano",
            desc: "Frescura y estilo en una sola prenda. Musculosa de mujer de talle único, ideal para los días calurosos.",
            img: "img/musculosa mujer.jpg",
            category: "fresco",
            gender: "mujer",
            items: {
                "Musculosa": {
                    price: 13000,
                    variants: [
                        { size: "Único", colorName: "Amarillo Mostaza", colorHex: "#FFDB58" },
                        { size: "Único", colorName: "Azul", colorHex: "#000080" },
                        { size: "Único", colorName: "Rosa Pastel", colorHex: "#FFD1DC" },
                        { size: "Único", colorName: "Rosa", colorHex: "#FF69B4" },
                        { size: "Único", colorName: "Verde Agua", colorHex: "#66CDAA" },
                        { size: "Único", colorName: "Verde Pastel", colorHex: "#C1E1C1" }
                    ]
                }
            }
        }
    ];

    const combos = [
    {
        id: 1,
        title: "Combo Waffle + Musculosa",
        description: "Remera Waffle de mujer + Musculosa de mujer. El dúo perfecto para el verano.",
        items: [
            { modelId: 10, itemName: "Remera Waffle", individualPrice: 18000 },
            { modelId: 14, itemName: "Musculosa", individualPrice: 13000 }  // ← CORREGIDO
        ],
        comboPrice: 23000,
        images: ["img/remera wafle pantalon wafle.png", "img/musculosa mujer.jpg"]
    }
];

    const calculateListPrice = (price) => Math.round(price * 1.176);

    const getColorStyle = (variant) => {
        if (variant.colorGradient) {
            return `background: linear-gradient(to right, ${variant.colorGradient[0]} 50%, ${variant.colorGradient[1]} 50%);`;
        }
        return `background-color: ${variant.colorHex};`;
    };

    const container = document.getElementById('product-container');
    const offersContainer = document.getElementById('offers-container');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'todos';
    let currentSearch = '';

    const renderOffers = () => {
        offersContainer.innerHTML = '';
        
        if (combos.length === 0) {
            offersContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #999;">No hay ofertas disponibles por el momento.</p>';
            return;
        }

        combos.forEach(combo => {
            const originalPrice = combo.items.reduce((sum, item) => sum + item.individualPrice, 0);
            const savings = originalPrice - combo.comboPrice;
            const itemsList = combo.items.map(item => `<strong>${item.itemName}</strong>`).join(' + ');

            const collageHtml = combo.images.map(img => `<img src="${img}" alt="${combo.title}">`).join('');

            const card = document.createElement('div');
            card.className = 'offer-card';
            card.innerHTML = `
                <span class="offer-badge">AHORRÁ $${savings.toLocaleString()}</span>
                <div class="offer-collage">${collageHtml}</div>
                <div class="offer-info">
                    <h3 class="offer-title">${combo.title}</h3>
                    <p class="offer-items-list">Incluye: ${itemsList}</p>
                    <div class="offer-prices">
                        <span class="offer-price-original">$${originalPrice.toLocaleString()}</span>
                        <span class="offer-price-combo">$${combo.comboPrice.toLocaleString()}</span>
                        <span class="offer-savings">-${Math.round((savings/originalPrice)*100)}%</span>
                    </div>
                    <button class="btn-view-combo" data-combo-id="${combo.id}">
                        <i class="fas fa-gift"></i> Ver Combo
                    </button>
                </div>
            `;
            offersContainer.appendChild(card);
        });

        document.querySelectorAll('.btn-view-combo').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const comboId = parseInt(e.currentTarget.dataset.comboId);
                openComboModal(comboId);
            });
        });
    };

    const renderProducts = () => {
        container.innerHTML = '';
        
        const filteredModels = models.filter(model => {
            const matchesFilter = currentFilter === 'todos' || model.gender === currentFilter;
            const matchesSearch = currentSearch === '' || 
                model.title.toLowerCase().includes(currentSearch) ||
                model.desc.toLowerCase().includes(currentSearch);
            
            return matchesFilter && matchesSearch;
        });

        if (filteredModels.length === 0) {
            container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #999;">No se encontraron productos.</p>';
            return;
        }

        filteredModels.forEach(model => {
            let tagClass = `tag-${model.category}`;
            let tagName = model.category.charAt(0).toUpperCase() + model.category.slice(1);
            
            const card = document.createElement('div');
            card.className = 'model-card';
            card.innerHTML = `
                <span class="category-tag ${tagClass}">${tagName}</span>
                <img src="${model.img}" alt="${model.title}" class="model-img">
                <div class="model-info">
                    <h3 class="model-title">${model.title}</h3>
                    <p class="model-desc">${model.desc}</p>
                    <button class="btn-view-more" data-model-id="${model.id}">
                        <i class="fas fa-eye"></i> Ver Más
                    </button>
                </div>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll('.btn-view-more').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modelId = parseInt(e.currentTarget.dataset.modelId);
                openProductModal(modelId);
            });
        });
    };

    const productModal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalItems = document.getElementById('modal-items');
    const closeProductModal = document.getElementById('close-product-modal');

    let modalState = {
        modelId: null,
        selectedItem: null,
        selectedSize: null,
        selectedColor: null
    };

    const openProductModal = (modelId) => {
        const model = models.find(m => m.id === modelId);
        if (!model) return;

        modalState = { modelId, selectedItem: null, selectedSize: null, selectedColor: null };
        modalTitle.textContent = model.title;
        modalDesc.textContent = model.desc;

        if (Object.keys(model.items).length === 0) {
            modalItems.innerHTML = '<p class="empty-message">Próximamente...</p>';
        } else {
            const itemNames = Object.keys(model.items);
            let tabsHtml = '<div class="item-tabs">';
            itemNames.forEach((name, i) => {
                tabsHtml += `<button class="item-tab ${i === 0 ? 'active' : ''}" data-item="${name}">${name}</button>`;
            });
            tabsHtml += '</div>';
            
            modalItems.innerHTML = tabsHtml + '<div id="selection-area"></div>';

            modalItems.querySelectorAll('.item-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    modalItems.querySelectorAll('.item-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    modalState.selectedItem = tab.dataset.item;
                    modalState.selectedSize = null;
                    modalState.selectedColor = null;
                    renderSelectionArea();
                });
            });

            modalState.selectedItem = itemNames[0];
            renderSelectionArea();
        }
        productModal.classList.add('active');
    };

    const renderSelectionArea = () => {
        const model = models.find(m => m.id === modalState.modelId);
        const itemData = model.items[modalState.selectedItem];
        const selectionArea = document.getElementById('selection-area');
        const availableSizes = [...new Set(itemData.variants.map(v => v.size))];
        
        let html = `
            <div class="selection-section">
                <div class="selection-label">Talle</div>
                <div class="size-buttons">
                    ${availableSizes.map(size => `
                        <button class="size-btn ${modalState.selectedSize === size ? 'active' : ''}" data-size="${size}">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div id="colors-area"></div>
            <div id="summary-area"></div>
        `;
        selectionArea.innerHTML = html;

        selectionArea.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectionArea.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                modalState.selectedSize = btn.dataset.size;
                modalState.selectedColor = null;
                renderColors();
            });
        });
        renderColors();
    };

    const renderColors = () => {
        const model = models.find(m => m.id === modalState.modelId);
        const itemData = model.items[modalState.selectedItem];
        const colorsArea = document.getElementById('colors-area');
        const summaryArea = document.getElementById('summary-area');

        if (!modalState.selectedSize) {
            colorsArea.innerHTML = '<p class="empty-message">Seleccioná un talle para ver los colores disponibles</p>';
            summaryArea.innerHTML = '';
            return;
        }

        const variantsForSize = itemData.variants.filter(v => v.size === modalState.selectedSize);
        let colorsHtml = `
            <div class="selection-section">
                <div class="selection-label">Color</div>
                <div class="colors-grid">
                    ${variantsForSize.map((variant, i) => `
                        <div class="color-option ${modalState.selectedColor === i ? 'selected' : ''}" data-color-index="${i}">
                            <span class="color-swatch" style="${getColorStyle(variant)}" title="${variant.colorName}"></span>
                            <span class="color-label">${variant.colorName}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        colorsArea.innerHTML = colorsHtml;

        colorsArea.querySelectorAll('.color-option').forEach(opt => {
            opt.addEventListener('click', () => {
                colorsArea.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                modalState.selectedColor = parseInt(opt.dataset.colorIndex);
                renderSummary();
            });
        });
        renderSummary();
    };

    const renderSummary = () => {
        const model = models.find(m => m.id === modalState.modelId);
        const itemData = model.items[modalState.selectedItem];
        const summaryArea = document.getElementById('summary-area');

        if (modalState.selectedColor === null) {
            summaryArea.innerHTML = '';
            return;
        }

        const variant = itemData.variants.filter(v => v.size === modalState.selectedSize)[modalState.selectedColor];
        const listPrice = calculateListPrice(itemData.price);

        summaryArea.innerHTML = `
            <div class="selection-summary">
                <div class="summary-info">
                    <strong>${modalState.selectedItem}</strong> - Talle ${modalState.selectedSize} - ${variant.colorName}
                </div>
                <div class="summary-price">
                    <div class="price-original">$${listPrice.toLocaleString()}</div>
                    <div class="price-discount">$${itemData.price.toLocaleString()}</div>
                </div>
                <button class="btn-add-selection" id="btn-confirm-add">
                    <i class="fas fa-plus"></i> Agregar
                </button>
            </div>
        `;

        document.getElementById('btn-confirm-add').addEventListener('click', () => {
            cart.push({
                modelTitle: model.title,
                item: { name: modalState.selectedItem, price: itemData.price },
                size: modalState.selectedSize,
                color: variant.colorName
            });
            updateCartUI();

            const btn = document.getElementById('btn-confirm-add');
            btn.classList.add('added');
            btn.innerHTML = '<i class="fas fa-check"></i> Agregado';
            
            setTimeout(() => {
                btn.classList.remove('added');
                btn.innerHTML = '<i class="fas fa-plus"></i> Agregar';
                modalState.selectedSize = null;
                modalState.selectedColor = null;
                renderSelectionArea();
            }, 1000);
        });
    };

    closeProductModal.addEventListener('click', () => productModal.classList.remove('active'));
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.classList.remove('active');
    });

    const comboModal = document.getElementById('combo-modal');
    const comboModalTitle = document.getElementById('combo-modal-title');
    const comboModalDesc = document.getElementById('combo-modal-desc');
    const comboItemsArea = document.getElementById('combo-items-area');
    const comboSummaryArea = document.getElementById('combo-summary-area');
    const closeComboModal = document.getElementById('close-combo-modal');

    let comboState = {
        comboId: null,
        selections: {}
    };

    const openComboModal = (comboId) => {
        const combo = combos.find(c => c.id === comboId);
        if (!combo) return;

        comboState = { comboId, selections: {} };
        combo.items.forEach(item => {
            comboState.selections[item.modelId] = {
                itemName: item.itemName,
                selectedSize: null,
                selectedColor: null
            };
        });

        comboModalTitle.textContent = combo.title;
        comboModalDesc.textContent = combo.description;

        renderComboItems();
        renderComboSummary();

        comboModal.classList.add('active');
    };

    const renderComboItems = () => {
        const combo = combos.find(c => c.id === comboState.comboId);
        comboItemsArea.innerHTML = '';

        combo.items.forEach(comboItem => {
            const model = models.find(m => m.id === comboItem.modelId);
            const itemData = model.items[comboItem.itemName];
            const state = comboState.selections[comboItem.modelId];
            const availableSizes = [...new Set(itemData.variants.map(v => v.size))];

            const block = document.createElement('div');
            block.className = 'combo-item-block';
            block.innerHTML = `
                <h4>${comboItem.itemName} <span style="font-weight: 400; color: #999; font-size: 0.85rem;">(Valor individual: $${comboItem.individualPrice.toLocaleString()})</span></h4>
                <div class="selection-section">
                    <div class="selection-label">Talle</div>
                    <div class="size-buttons" data-model-id="${comboItem.modelId}" data-field="size">
                        ${availableSizes.map(size => `
                            <button class="size-btn ${state.selectedSize === size ? 'active' : ''}" data-size="${size}">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="combo-colors-area" data-model-id="${comboItem.modelId}"></div>
            `;
            comboItemsArea.appendChild(block);

            const sizeButtons = block.querySelector('.size-buttons');
            sizeButtons.querySelectorAll('.size-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    sizeButtons.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    state.selectedSize = btn.dataset.size;
                    state.selectedColor = null;
                    renderComboColors(comboItem.modelId);
                    renderComboSummary();
                });
            });

            renderComboColors(comboItem.modelId);
        });
    };

    const renderComboColors = (modelId) => {
        const combo = combos.find(c => c.id === comboState.comboId);
        const comboItem = combo.items.find(i => i.modelId === modelId);
        const model = models.find(m => m.id === modelId);
        const itemData = model.items[comboItem.itemName];
        const state = comboState.selections[modelId];
        const colorsArea = comboItemsArea.querySelector(`.combo-colors-area[data-model-id="${modelId}"]`);

        if (!state.selectedSize) {
            colorsArea.innerHTML = '<p class="empty-message" style="padding: 10px 0;">Seleccioná un talle</p>';
            return;
        }

        const variantsForSize = itemData.variants.filter(v => v.size === state.selectedSize);
        colorsArea.innerHTML = `
            <div class="selection-section">
                <div class="selection-label">Color</div>
                <div class="colors-grid">
                    ${variantsForSize.map((variant, i) => `
                        <div class="color-option ${state.selectedColor === i ? 'selected' : ''}" data-color-index="${i}">
                            <span class="color-swatch" style="${getColorStyle(variant)}" title="${variant.colorName}"></span>
                            <span class="color-label">${variant.colorName}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        colorsArea.querySelectorAll('.color-option').forEach(opt => {
            opt.addEventListener('click', () => {
                colorsArea.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                state.selectedColor = parseInt(opt.dataset.colorIndex);
                renderComboSummary();
            });
        });
    };

    const renderComboSummary = () => {
        const combo = combos.find(c => c.id === comboState.comboId);
        const originalPrice = combo.items.reduce((sum, item) => sum + item.individualPrice, 0);
        const allSelected = combo.items.every(item => {
            const state = comboState.selections[item.modelId];
            return state.selectedSize !== null && state.selectedColor !== null;
        });

        let selectionsText = '';
        if (allSelected) {
            selectionsText = combo.items.map(item => {
                const model = models.find(m => m.id === item.modelId);
                const itemData = model.items[item.itemName];
                const state = comboState.selections[item.modelId];
                const variant = itemData.variants.filter(v => v.size === state.selectedSize)[state.selectedColor];
                return `<div style="font-size: 0.85rem; color: #666; margin-bottom: 4px;">✓ <strong>${item.itemName}</strong>: Talle ${state.selectedSize} - ${variant.colorName}</div>`;
            }).join('');
        }

        comboSummaryArea.innerHTML = `
            <div class="combo-summary">
                ${allSelected ? `<div style="margin-bottom: 12px;">${selectionsText}</div>` : '<p style="font-size: 0.9rem; color: #666; margin-bottom: 12px;">Completá la selección de cada prenda</p>'}
                <div class="combo-summary-prices">
                    <div>
                        <div style="text-decoration: line-through; color: #999; font-size: 0.9rem;">Antes: $${originalPrice.toLocaleString()}</div>
                        <div style="font-weight: 800; color: #ff6b6b; font-size: 1.5rem;">Combo: $${combo.comboPrice.toLocaleString()}</div>
                    </div>
                    <div style="background: #fff3cd; color: #856404; padding: 6px 12px; border-radius: 12px; font-weight: 700;">
                        Ahorrás $${(originalPrice - combo.comboPrice).toLocaleString()}
                    </div>
                </div>
                <button class="btn-add-combo" id="btn-add-combo" ${!allSelected ? 'disabled' : ''}>
                    <i class="fas fa-gift"></i> Agregar Combo al Carrito
                </button>
            </div>
        `;

        if (allSelected) {
            document.getElementById('btn-add-combo').addEventListener('click', () => {
                const combo = combos.find(c => c.id === comboState.comboId);
                const cartItems = combo.items.map(item => {
                    const model = models.find(m => m.id === item.modelId);
                    const itemData = model.items[item.itemName];
                    const state = comboState.selections[item.modelId];
                    const variant = itemData.variants.filter(v => v.size === state.selectedSize)[state.selectedColor];
                    return {
                        modelTitle: model.title,
                        item: { name: item.itemName, price: item.individualPrice },
                        size: state.selectedSize,
                        color: variant.colorName,
                        isCombo: true,
                        comboTitle: combo.title
                    };
                });

                const totalComboPrice = combo.comboPrice;
                const totalIndividualPrice = combo.items.reduce((sum, item) => sum + item.individualPrice, 0);
                const ratio = totalComboPrice / totalIndividualPrice;

                cartItems.forEach(cartItem => {
                    cartItem.item.price = Math.round(cartItem.item.price * ratio);
                    cart.push(cartItem);
                });

                updateCartUI();

                const btn = document.getElementById('btn-add-combo');
                btn.classList.add('added');
                btn.innerHTML = '<i class="fas fa-check"></i> ¡Combo Agregado!';

                setTimeout(() => {
                    comboModal.classList.remove('active');
                }, 1200);
            });
        }
    };

    closeComboModal.addEventListener('click', () => comboModal.classList.remove('active'));
    comboModal.addEventListener('click', (e) => {
        if (e.target === comboModal) comboModal.classList.remove('active');
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts();
        });
    });

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        renderProducts();
    });

    let cart = [];
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const cartShippingEl = document.getElementById('cart-shipping');
    const cartTotalEl = document.getElementById('cart-total');
    const shippingMsgEl = document.getElementById('shipping-msg');
    const sendWhatsapp = document.getElementById('send-whatsapp');

    const updateCartUI = () => {
        cartCount.textContent = cart.length;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Tu consulta está vacía</p>';
            cartSubtotalEl.textContent = '$0';
            cartShippingEl.textContent = '$0';
            cartTotalEl.textContent = '$0';
            shippingMsgEl.innerHTML = '<p><i class="fas fa-truck"></i> Envío: $3.000 | <strong>Gratis</strong> en Posadas y Garupá por compras superiores a $60.000</p>';
            shippingMsgEl.style.background = '#e8f5e9';
            shippingMsgEl.style.color = '#2e7d32';
            return;
        }

        let subtotal = 0;
        cartItemsContainer.innerHTML = cart.map((item, index) => {
            subtotal += item.item.price;
            const comboBadge = item.isCombo ? `<div class="cart-item-details" style="color: #ff6b6b; font-weight: 600;"><i class="fas fa-gift"></i> ${item.comboTitle}</div>` : '';
            return `
                <div class="cart-item ${item.isCombo ? 'combo-item' : ''}">
                    <div class="cart-item-title">${item.modelTitle}</div>
                    ${comboBadge}
                    <div class="cart-item-details"><strong>${item.item.name}</strong></div>
                    <div class="cart-item-details">Talle: ${item.size} | Color: ${item.color}</div>
                    <div class="cart-item-details">Precio: $${item.item.price.toLocaleString()}</div>
                    <button class="cart-item-remove" data-index="${index}">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            `;
        }).join('');

        const shippingCost = subtotal >= 60000 ? 0 : 3000;
        const total = subtotal + shippingCost;

        cartSubtotalEl.textContent = `$${subtotal.toLocaleString()}`;
        cartShippingEl.textContent = shippingCost === 0 ? 'Gratis' : `$${shippingCost.toLocaleString()}`;
        cartTotalEl.textContent = `$${total.toLocaleString()}`;
        
        if (shippingCost === 0) {
            shippingMsgEl.innerHTML = '<p><i class="fas fa-check-circle"></i> ¡Tenés <strong>Envío Gratis</strong>!</p>';
            shippingMsgEl.style.background = '#e8f5e9';
            shippingMsgEl.style.color = '#2e7d32';
        } else {
            const remaining = 60000 - subtotal;
            shippingMsgEl.innerHTML = `<p><i class="fas fa-truck"></i> Envío: $3.000 | Te faltan <strong>$${remaining.toLocaleString()}</strong> para envío gratis</p>`;
            shippingMsgEl.style.background = '#fff3e0';
            shippingMsgEl.style.color = '#e65100';
        }

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                cart.splice(index, 1);
                updateCartUI();
            });
        });
    };

    cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
    closeCart.addEventListener('click', () => cartModal.classList.remove('active'));

    sendWhatsapp.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Tu consulta está vacía');
            return;
        }

        let subtotal = 0;
        let message = '¡Hola! Me interesa consultar disponibilidad de:\n\n';
        cart.forEach((item, i) => {
            subtotal += item.item.price;
            if (item.isCombo) {
                message += `${i + 1}. 🔥 ${item.comboTitle}\n`;
            } else {
                message += `${i + 1}. ${item.modelTitle}\n`;
            }
            message += `   • ${item.item.name}\n`;
            message += `   • Talle: ${item.size}\n`;
            message += `   • Color: ${item.color}\n`;
            message += `   • Precio: $${item.item.price.toLocaleString()}\n\n`;
        });

        const shippingCost = subtotal >= 60000 ? 0 : 3000;
        const total = subtotal + shippingCost;

        message += `💰 Subtotal: $${subtotal.toLocaleString()}\n`;
        message += `🚚 Envío: ${shippingCost === 0 ? 'Gratis' : '$3.000'}\n`;
        message += `✅ Total estimado: $${total.toLocaleString()}`;

        const waLink = `https://wa.me/5493764364659?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank');
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

    renderOffers();
    renderProducts();
    updateCartUI();
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});