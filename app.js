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
    detailContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phoneDetail.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="card-title">ReleaseDate: ${phoneDetail.releaseDate ? phoneDetail.releaseDate : 'ReleaseDate is not found.'}</h2>
      <h3 class="card-title">ChipSet: ${phoneDetail.mainFeatures.chipSet}</h3>
      <h4 class="card-title">Memory: ${phoneDetail.mainFeatures.memory}</h4>
      <h4 class="card-title">Sensors: ${phoneDetail.mainFeatures.sensors}</h4>
      
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