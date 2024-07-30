let material = {
    "materials": [
        {
            "class": "English",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a (for testing)",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a (for testing)",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a (for testing)",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "a (for testing)",
            "title": "Present Perfect and Past Simple",
            "url": "https://docs.google.com/presentation/d/1cvpJ4nQRLtQAmBGCktK11NhsrES4wgaQ/edit?usp=drive_link&ouid=101549332984118855678&rtpof=true&sd=true"
        },
        {
            "class": "Matematika",
            "title": "Bilangan Berpangkat 1",
            "url": "https://drive.google.com/file/d/1gQ4D2FGlaS0NKi5iWc5aG3an5go7gXEJ/view?usp=drive_link"
        },
        {
            "class": "Matematika",
            "title": "Bilangan Berpangkat 2",
            "url": "https://drive.google.com/file/d/1R4T7i4yKKVt-mTP4QSPOd7hItaC0HxT_/view?usp=drive_link"
        },
        {
            "class": "Matematika",
            "title": "Bilangan Berpangkat 3",
            "url": "https://drive.google.com/file/d/1vtupJnskcsALt7d3wjmRfYleWLncGYIn/view?usp=drive_link"
        },
        {
            "class": "Matematika",
            "title": "Bilangan Berpangkat 4",
            "url": "https://drive.google.com/file/d/1DRC2rgZrGjT1SbZdlO6OelZEN-MhqMXp/view?usp=drive_link"
        }
    ]
}


let list_of_subjects = []
let list_of_subjects_raw = []

material['materials'].forEach(element => {
    list_of_subjects_raw.push(element['class'])
})

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

list_of_subjects = list_of_subjects_raw.filter(onlyUnique);

const column_parent = document.getElementsByClassName('columns')

function generateColumns() {
    // console.log(list_of_subjects.length)
    // console.log(list_of_subjects)
    
    list_of_subjects.forEach(element => {
        let column = document.createElement('div')
        column.setAttribute('class', 'column')
        // const column_child = document.createElement('a')
        // column_child.setAttribute('class', 'notification is-link')
        const column_child = document.createElement('a')
        column_child.setAttribute('class', 'box')
        let count = 0
        list_of_subjects_raw.forEach( subject => {
            if (subject == element) {
                count += 1
            }
        })
        // console.log(`${element}: ${count}`)
        column_child.innerHTML = `${element} (${count})`
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
        column_child.setAttribute('class', 'box')
        
        column_child.innerHTML = element['title']
        column_child.setAttribute('href', element['url'])
        column.appendChild(column_child)
        column_parent[0].appendChild(column)
    })
}

function generateBreadcrumb(subject) {
    const breadcrumb = document.getElementById('ul')
    const li = document.createElement('li')
    const a = document.createElement('a')
    li.setAttribute('class', 'is-active')
    a.innerHTML = subject
    li.appendChild(a)
    breadcrumb.appendChild(li)
}

function getDetails() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);

    let filtered_materials = material['materials'].filter((data) => data['class'] == urlParams.get('class'))
    console.log(filtered_materials)
    generateColumnsDetails(filtered_materials)

    document.getElementById('title').innerHTML = `List of materials for ${urlParams.get('class')}`
    generateBreadcrumb(urlParams.get('class'))
}