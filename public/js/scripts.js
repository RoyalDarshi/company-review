let htmRate=0;
document.addEventListener("DOMContentLoaded", function () {
    const ratingInputs = document.querySelectorAll('.rating input');

    ratingInputs.forEach(input => {
        input.addEventListener('change', (event) => {
            htmRate=event.target.value;
        });
    });
});
async function createRating(e) {
    e.preventDefault();
    const name=document.getElementById("companyName");
    const pros=document.getElementById("pros");
    const cons=document.getElementById("cons");
    const data={name:name.value,pros:pros.value,cons:cons.value,rating:htmRate};
    await axios.post("http://localhost:3000/add-rating",data);
    name.value="";
    pros.value="";
    cons.value="";
    document.getElementById("star0").checked=true;
}
async function getRating(){
    const search=document.getElementById("searchInput");
<<<<<<< HEAD
    await axios.post("http://localhost:3000/get-rating",{name: search.value}).then(res=>{
=======
    await axios.get(`http://localhost:3000/get-rating/${search.value}`).then(res=>{
>>>>>>> 77dcd5b (changes get rating method type)
        createRatingRow(res.data,search.value);
    })
}

function createRatingRow(data,compName){

    const reviewContainer=document.getElementById("reviewsContainer");
    reviewContainer.innerHTML="";
    if(!data){
        const p=document.createElement("h1");
        p.innerText="No data available!";
        p.className="text-center";
        reviewContainer.appendChild(p);
        return;
    }
    const companyName=document.createElement("h1");
    companyName.className="text-center"
    companyName.innerText="Company Name: "+data.company.name;
    const rate=document.createElement("h1");
    rate.className="yellow text-center"
    reviewContainer.appendChild(companyName);
    reviewContainer.appendChild(rate)
    let totalRating=0;
    for (const review of data.rating) {
        const div=document.createElement("div");
        totalRating+=review.rating;
        div.innerHTML= `<div class="card mt-2">
          <div class="card-body">            
            <p class="card-text"><strong>Pros: </strong>${review.pros}</p>
            <p class="card-text"><strong>Cons: </strong>${review.cons}</p>
            <p class="card-text"><strong>Rating: </strong>${review.rating}</p>
          </div>
        </div>`
        reviewContainer.appendChild(div);
    }
    rate.innerText=totalRating/data.rating.length+"";
}