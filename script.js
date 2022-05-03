/* <form */
const myForm = document.querySelector("form"); 
/* querySelector =get tag */
 /* const =เปลี่ยนค่าตัวแปรไม่ได้แล้ว */

/* input */
const search = document.querySelector("input");

/* id msg */
const msg = document.querySelector("#msg");

/* id card */
const card = document.querySelector("#card");


/* ดักกับevent */
myForm.addEventListener('submit', (e) => 
{
    e.preventDefault(); /* ป้องกันเว็บrefeshตอนคลิกSearch */
    const locationId = search.value;  /* กดsearch > valueเก็บค่าตัวแปรใน location */
    msg.textContent = "Loading..."
    fetch(`https://finalspaceapi.com/api/v0/location/${locationId}`).then((response) => 
    {
        /* แปลงjson > js */
        response.json().then((data) =>
        {
            /* ถ้าerrorขึ้นdata.error */
            if (data.error)
            {
                msg.textContent = data.error;
            }
            /* ถ้าไม่error */
            else
            {
                msg.textContent = '';
                card.innerHTML = `
                    <div class="card">
                        <img src="${data.img_url}" class="card-img-top" alt="${data.name}>
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">Type: ${data.type} </p>
                            <ul>
                                <li>Inhabitants #1: ${data.inhabitants[0]}</li>
                                <li>Inhabitants #2: ${data.inhabitants[1]}</li>
                            </ul>
                        </div>
                    </div>
                `;
            }
        })
    })
})

