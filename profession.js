
const arr = [{ id: 1, name: "john", age: 18, profession: "Developer" },
{ id: 2, name: "jack", age: 20, profession: "Developer" },
{ id: 3, name: "karen", age: 19, profession: "Admin" }]

filterButtonHandler()

function filterButtonHandler() {
    const val = document.getElementById('Professions').value
    const filteredArray = val === 'Profession' || val === undefined ? arr : arr.filter(element => element.profession === val)
    const ul = document.createElement('ul');
    filteredArray.map(function (ele) {
        console.log(ele.name);
        const listItem = document.createElement('li')
        listItem.textContent = `${ele.id}. \u00A0\u00A0\u00A0\u00A0 Name-${ele.name}\u00A0\u00A0\u00A0\u00A0 Profession-${ele.profession}\u00A0\u00A0\u00A0\u00A0 Age-${ele.age}`
        console.log(listItem);
        ul.append(listItem);
    })
    document.getElementById('listDiv').innerHTML = ul.innerHTML
}

const userForm = document.getElementById('addUser');
userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = userForm.elements.name.value;
    const profession = userForm.elements.profession.value;
    const age = userForm.elements.age.value;
    arr.push({id:arr.length+1, name,profession,age})
})