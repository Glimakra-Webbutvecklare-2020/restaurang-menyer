let selectElementById = (elementId) => {
    return document.getElementById(elementId)
}

let addElements = (dataArray, element) => { // array, HTMLElement
    if (dataArray != undefined && dataArray.length > 0 && element != null) {
        for (let i = 0; i < dataArray.length; i++) {
            let node = document.createElement("li")
            node.appendChild(document.createElement("span").appendChild(document.createTextNode("Calzone")))
            node.appendChild(document.createElement("span").appendChild(document.createTextNode("10kr")))

            element.appendChild(node)
        }
    }
}

(function () {
    addElements(
        [{
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