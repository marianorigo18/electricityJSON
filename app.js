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
            {title: 'motores'},
            {title: 'variadores'},
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
    {id:3},
    {id:4},
    {id:5},
]
/*Los titulos de los products tienen que ser igualmente genericos*/
console.log(data2);