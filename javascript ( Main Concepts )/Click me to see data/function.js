let classData = [
{
    name: 'Ram',
    id: '12A',
    marks: 56,
    class: 12,
},
{
    name: 'Ramesh',
    id: '12B',
    marks: 67,
    class: 12,
},
{
    name: 'Hari',
    id: '12C',
    marks: 78,
    class: 12,
},
{
    name: 'John',
    id: '12D',
    marks: 45,
    class: 12,
},
{
    name: 'Mohammad',
    id: '12E',
    marks: 57,
    class: 11,
},
];


function displayfun() {
    let details = document.getElementById("content")

function display() {
    let loading = `<span> Loading... </span>`
    details.innerHTML = loading;

    var promise = new Promise((res, rej) => {
        setTimeout(() => {
            let studentdetails = ``
            let classname=''
            classData.forEach(ele => {
                if (ele['marks'] < 60) {
                    classname = 'less60'
                }
                if (ele['marks'] >= 60) {
                    classname = 'greater60'
                }
                studentdetails = studentdetails + `<div class="default" id=${classname}>
                <span>Name : ${ele['name']}</span>
                <span>id : ${ele['id']}</span>
                <span>marks : ${ele['marks']}</span>
                <span>class : ${ele['class']}</span>
                </div>`
            })
            res(studentdetails)
        }, 3000)
    })
    return promise
}
display().then((data) => {
    details.innerHTML=data
})
}


