// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)   
    }

    return fetch('http://localhost:3000/users', configObj)
        .then(r => r.json())
        .then(data => document.querySelector('body').textContent = data["id"] )
        .catch(error => document.querySelector('body').textContent = error.message)
}
