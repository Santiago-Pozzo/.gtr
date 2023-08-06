//import fenderTelecaster from 'E:/Curso programación web NUCBA/MODULO 3 - React/.gtr Proyecto React/src/assets/images/Telecaster.jpg'
//import gibsonLesPaul from '../assets/images/lespaul.webp'
//import fenderJazzBass from '../assets/images/jazzbass.jpg'
//import taylorBaby from '../assets/images/taylorbaby.jpg'
//import alpujarra300Kecm from '../assets/images/alpujarra300Kecm.jpg'
//import washburnTaurusT25 from '../assets/images/washburnTaurusT25.webp'
//import  fenderRumble200 from '../assets/images/fenderRumble200.webp'
//import marshallCode100 from '../assets/images/marshallCode100.jpg'
//import peavey6505Valvular from '../assets/images/peavey.webp'
//import bossDS1 from '../assets/images/bossDS1.jpg'
//import bossTR2 from '../assets/images/bossTR2.jpg'
//import moerPureOctave from '../assets/images/moerPureOctave.jpg'
//import ernieBall4039 from '../assets/images/ernieBallCorrea.webp'
//import flangerFl011 from '../assets/images/flanger-fl-011.jpg'
//import parkerEvolution from '../assets/images/parkerEvolution.webp'


export const products = [
    {
        id: 0,
        cat: "Eléctrica",
        brand: "Fender",
        model: "Telecaster",
        description: "Fender Standard Telecaster de aliso butterscotch blonde con diapasón de arce",
        //img: "fenderTelecaster",
        img: "https://http2.mlstatic.com/D_NQ_NP_955283-MLA31603718111_072019-O.webp",
        price: 950000,
    },

    {
        id: 1,
        cat: "Eléctrica",
        brand: "Gibson",
        model: "Les Paul",
        description: "Gibson Les Paul Standard 50s de caoba vintage sunburst brillante con diapasón de laurel indio",
        //img: gibsonLesPaul,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdfSNtYDuOOgmStK_9vtQvIbe1Wvu7PtyIA&usqp=CAU",
        price: 630000,
    },

    {
        id: 2,
        cat: "Bajo",
        brand: "Fender",
        model: "Jazz Bass",
        description: "Fender Player Jazz Bass Butter. Material del cuerpo: Aliso (Alder)",
        //img: fenderJazzBass,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Fender_Jazz-Bass_1966.jpg/228px-Fender_Jazz-Bass_1966.jpg",
        price: 350000,
    },

    {
        id: 3,
        cat: "Acústica",
        brand: "Taylor",
        model: "Baby",
        description: "Big Baby Taylor para diestros natural ébano barniz",
        //img: taylorBaby,
        img: "https://www.heavenimagenes.com/heavencommerce/5765a4f8-445b-48f8-889e-9378aee05156/images/v2/PARQUER/12155_small.jpg",
        price: 410000,
    },

    {
        id: 4,
        cat: "Acústica",
        brand: "Alpujarra",
        model: "300Kecm",
        description: "Gitarra criolla clásica para diestros natural, tapa de abeto",
        //img: alpujarra300Kecm,
        img: "https://guitarraszagert.com/wp-content/uploads/2023/01/Guitarra-La-Alpujarra-300K-300KINK-perfil.jpg",
        price: 340000,
    },

    {
        id: 5,
        cat: "Bajo",
        brand: "Washburn",
        model: "Taurus T-25",
        description: "Bajo de 5 cuerdas. 24 trastes. Cuerpo de caoba, mastil de Caoba/Maple",
        //img: washburnTaurusT25,
        img: "https://d1aeri3ty3izns.cloudfront.net/media/42/423440/600/preview.jpg",
        price: 190000,
    },

    {
        id: 6,
        cat: "Amplificador",
        brand: "Fender",
        model: "Rumble 200",
        description: "Amplificador Fender Rumble Series 200 Transistor para bajo de 200W color negro/plata 220V",
        //img: fenderRumble200,
        img: "https://solomusica.com.ar/sm2020/3603-large_default/fender-rumble-200.jpg",
        price: 750000,
    },

    {
        id: 7,
        cat: "Amplificador",
        brand: "Marshal",
        model: "Code 100",
        description: "Amplificador de guitarra 100 watts. Bluetooth. USB",
        //img: peavey6505Valvular,
        img: "https://bairesrocks.vteximg.com.br/arquivos/ids/203742/624354-MLA41242223638_032020-F.jpg?v=637313065982730000",
        price: 265000,
    },

    {
        id: 8,
        cat: "Amplificador",
        brand: "Peavey",
        model: "6505 Valvular",
        description: "Amplificador de guitarra valvular. Combo. 60 watts",
        //img: peavey6505Valvular,
        img: "https://http2.mlstatic.com/D_NQ_NP_656142-MLA53338924507_012023-W.jpg",
        price: 270000,
    },

    {
        id: 9,
        cat: "Pedal",
        brand: "Boss",
        model: "DS1",
        description: "Distorsión analógica. Tónos clásicos. Ataque de bordes duros",
        //img: bossDS1,
        img: "https://www.heavenimagenes.com/heavencommerce/b23e72e1-40ba-4adb-9dc3-7ee3d3a63b35/images/v2/BOSS/2010302014256880_01_medium.jpg",
        price: 85000,
    },

    {
        id: 10,
        cat: "Pedal",
        brand: "Boss",
        model: "TR2",
        description: "Pedal de Efecto para Guitarra Tremolo",
        //img: bossTR2,
        img: "https://www.heavenimagenes.com/heavencommerce/c98a269a-2842-4da0-a6e5-e0e155d29966/images/v2/BOSS/1804131804331013_01_medium.jpg",
        price: 75000,
    },

    {
        id: 11,
        cat: "Pedal",
        brand: "Moer",
        model: "Pure Octave",
        description: "Pedal de Efecto Octavador Polifonico.",
        //img: moerPureOctave,
        img: "https://www.heavenimagenes.com/heavencommerce/0c3d234c-03b5-48ac-85a1-10e80752be67/images/v2/MOOER/1705112007015312_01_medium.jpg",
        price: 37000,
    },

    {
        id: 12,
        cat: "Accesorios",
        brand: "Ernie Ball",
        model: "4039",
        description: "Correa de guitarra con porta púas",
        //img: ernieBall4039,
        img: "https://http2.mlstatic.com/D_NQ_NP_653103-MLA31547292758_072019-O.webp",
        price: 15000,
    },

    {
        id: 13,
        cat: "Accesorios",
        brand: "Flanger",
        model: "Fl 011",
        description: "Soporte plegable para todas las tallas de guitarra acústica, guitarra eléctrica, guitarra y bajo",
        //img: flangerFl011,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/pl-stico-guitarra-inteligente-soporte-para-guitarra-el-ctrica-ac-stica-bass-flanger-fl-011-bff3f888adf591743816026814163300-640-0.jpg",
        price: 15000,
    },

    {
        id: 14,
        cat: "Accesorios",
        brand: "Parquer",
        model: "Evolution Funda",
        description: "Funda para guitarra electrica acolchada. Mochila",
        //img: parkerEvolution,
        img: "https://http2.mlstatic.com/D_NQ_NP_906829-MLA31913066571_082019-O.webp",
        price: 47000,
    },
];