function run(){
    const inputField = document.querySelector(".inputField"); 
    hide = document.getElementById('hide').classList.toggle('hide')
    output = document.getElementById('solve')
    about = document.getElementById('about').value
    academic = document.getElementById('academic').value
    project = document.getElementById('project').value
    output.innerHTML = `
    <div class="output-container" id="output-container">
    <div class="output-left">
            <h1>NAME</h1>
            <p>${inputField["name"].value}</p>
            <h1>ABOUT</h1>
            <p>${about}</p>
            <h1>SKILLS</h1>
            <p>${inputField["skills"].value}</p>
            <h1>FUN FACT</h1>
            <p>${inputField["fact"].value}</p>
            <h1>GITHUB</h1>
            <a href="${inputField["giturl"].value}">
                Github
            </a>
        </div>
        <div class="output-right">
            <h1>WORK EXPEIENCE</h1>
            <p>${inputField["work"].value}</p>
            <h1>ACADEMIC</h1>
            <p>${academic}
                </p>
                <h1>PROJECT</h1>
                <p>${project}</p>
                    <h1>LINKEDIN</h1>
                    <a href="${inputField["linkurl"].value}">LINKEDIN</a>
        </div>
        <div class='printbtn'>
        <button onclick='print()'>Print</button>
        </div>
        </div>
    `
}