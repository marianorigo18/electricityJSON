const data2 = [
    {
        id:1,
        title: 'industria',
        categorias: [
            {
                title: 'contactores',
                categorias: [
                    {
                        title: 'corriente',
                        variantes: ["10A", "12A", "18A", "22A", "25A", "32A", "35A", "40A", "50A"]
                    },
                    {
                        title: 'tension bobina',
                        variantes: ["12V", "24V", "110V", "220V", "380V"]
                    },
                    {
                        title: 'marcas',
                        variantes: ["montero", "schneider", "chint", "abb"]
                    }
                ]
            },
            {
                title: 'motores',
                categorias: [
                    {
                        title: 'tension',
                        variantes: ["220v", "380v"]
                    },
                    {
                        title: "HP",
                        variantes: ["1HP", "2H", "3HP", "5HP", "7,5HP", "10HP", "15HP"]
                    },
                    {
                        title: 'marca',
                        variantes: ['cerwning', 'motorarg']
                    }
                ]
            },
            {
                title: 'variadores',
                categorias: [
                    {
                    }
                ]
            },
            {title: 'relevos'},
            {title: 'arranque suave'},
            {title: 'termicas'},
            {title: 'diferenciales'},
        ]
    },
    {
        id:2,
        title: 'iluminacion',
        categorias: [
            {title: 'lamparas'},
            {title: 'faroles'},
            {title: 'bidireccionales'},
            {title: 'plafones'},
            {title: 'colgantes'},
        ]
    },
]
/*Los titulos de los products tienen que ser igualmente genericos*/
console.log(data2);