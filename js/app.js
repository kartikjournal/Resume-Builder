function run(){
    about = document.getElementById('about').value
    const inputField = document.getElementById("inputfield"); 
    hide = document.getElementById('info')
    hide.classList.toggle('hide')
    output = document.getElementById('output-container')
    output.innerHTML = `
    <div class="output-info">
            <img src="./img/ex.jpeg" alt="">
            <h1>Name</h1>
            <p>${inputField["name"].value}</p>
            <h3>Email</h3>
            <a href="/">${inputField["email"].value}</a>
            <h3>Phone No.</h3>
            <p>${inputField["number"].value}</p>
        </div>
        <div class="output-role">
        <h2>Role</h2>
        <p>${inputField["role"].value}</p>
        <h2>Skills</h2>
        <p>${inputField["skills"].value}</p>
        <h2>About</h2>
        <p>${about}</p>
        <button onclick="print()" class="print">Print</button>
    </div>
    `
}