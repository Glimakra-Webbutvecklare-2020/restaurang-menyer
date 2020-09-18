let selectElementById = (elementId) => {
    return document.getElementById(elementId)
}

let addElements = (dataArray, element) => { // array, HTMLElement
    if (dataArray != undefined && dataArray.length > 0 && element != null) {
        for (let i = 0; i < dataArray.length; i++) {
            let node = document.createElement("li")

            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            span1.appendChild(document.createTextNode(dataArray[i].title))
            span2.appendChild(document.createTextNode(dataArray[i].price))

            node.appendChild(span1)
            node.appendChild(span2)

            element.appendChild(node)
        }
    }
}

(function () {
    addElements([{
                title: "Hawaii",
                price: "88kr"
            },
            {
                title: "Pepperoni",
                price: "88kr"
            },
            {
                title: "Bombay",
                price: "88kr"
            },
            {
                title: "Mexicana ( Stark )",
                price: "95kr"
            },
            {
                title: "Salami",
                price: "95kr"
            },
            {
                title: "Kebabpizza",
                price: "99kr"
            }
        ], selectElementById("pizza-list"),
    )

    addElements([{
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        }
        ,
        {
            title: "Hamburgare",
            price: "10kr"
        }
        ,
        {
            title: "Hamburgare",
            price: "10kr"
        }
        ,
        {
            title: "Hamburgare",
            price: "11kr"
        }
    ], selectElementById("hamburger-list"))

    addElements([{
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        },
        {
            title: "Hamburgare",
            price: "10kr"
        }
    ], selectElementById("drinks-list"))
}())