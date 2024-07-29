let material = {
    "materials": [
        {
            "class": "English",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
    ]
}
let list_of_subjects = []

material['materials'].forEach(element => {
    list_of_subjects.push(element['class'])
})

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

list_of_subjects = list_of_subjects.filter(onlyUnique);

const column_parent = document.getElementsByClassName('columns')

function generateColumns(data) {
    // console.log(list_of_subjects.length)
    // console.log(list_of_subjects)
    
    data.forEach(element => {
        let column = document.createElement('div')
        column.setAttribute('class', 'column is-narrow')
        // const column_child = document.createElement('a')
        // column_child.setAttribute('class', 'notification is-link')
        const column_child = document.createElement('a')
        column_child.setAttribute('class', 'button')
        column_child.innerHTML = element
        column_child.setAttribute('href', `details.html?class=${element}`)
        column.appendChild(column_child)
        column_parent[0].appendChild(column)
    })
}

function generateColumnsDetails(data) {
    // console.log(list_of_subjects.length)
    // console.log(list_of_subjects)
    
    data.forEach(element => {
        let column = document.createElement('div')
        column.setAttribute('class', 'column')
        // const column_child = document.createElement('a')
        // column_child.setAttribute('class', 'notification is-link')
        const column_child = document.createElement('a')
        column_child.setAttribute('class', 'button')
        
        column_child.innerHTML = element['title']
        column_child.setAttribute('href', element['url'])
        column.appendChild(column_child)
        column_parent[0].appendChild(column)
    })
}

function getDetails() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);

    let filtered_materials = material['materials'].filter((data) => data['class'] == urlParams.get('class'))
    console.log(filtered_materials)
    generateColumnsDetails(filtered_materials)

    document.getElementById('title').innerHTML = urlParams.get('class')
}