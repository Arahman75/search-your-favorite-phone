const searchPhone = ()=>{
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText)
    loadPhone(searchText);
    document.getElementById('search-field').value = '';
}

const loadPhone =(searchText) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadPhone(data.data));
    
}
loadPhone('iphone');

const displayLoadPhone = (phones) =>{
    const container = document.getElementById('phone-card');
    container.textContent = '';
    phones.forEach(phone =>{
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${phone.brand}</h3>
          <h5 class="card-title">${phone.phone_name}</h5>
          <button onclick="loadPhoneDetail('${phone.slug}')">Phone Details</button>
          
        </div>
        `;
        container.appendChild(div);
    })
    
}

const loadPhoneDetail = (slug)=>{
const url=`https://openapi.programming-hero.com/api/phone/${slug}`;
fetch(url)
.then(res => res.json())
.then(data => displayPhoneDetail(data.data));

    // console.log(url)
}
const displayPhoneDetail =(phoneDetail)=>{
    const detailContainer = document.getElementById('phone-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phoneDetail.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phoneDetail.releaseDate ? phoneDetail.releaseDate : 'ReleaseDate is not found.'}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(div);

console.log(phoneDetail)
}



// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089