// spinner


const toggleSpinner = (displayStyle)=>{
    document.getElementById('spinner').style.display = displayStyle;
   
}

document.getElementById('error-message').style.display = 'none';
const searchPhone = ()=>{
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText)
    toggleSpinner('block');
   
    loadPhone(searchText);
    document.getElementById('search-field').value = '';
    document.getElementById('error-message').style.display = 'none';
}

const loadPhone =(searchText) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadPhone(data.data))
.catch(error => displayError(error));
    
    
}

const displayError = (error) =>{
    
    document.getElementById('error-message').style.display = 'block';
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
          <h3 class="card-title text-center">${phone.brand}</h3>
          <h5 class="card-title text-center">${phone.phone_name}</h5>
          <p class="text-center"><button class="card-button" onclick="loadPhoneDetail('${phone.slug}')">Phone Details</button></p>
          
        </div>
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
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
      <h2 class="card-title text-center">ReleaseDate: ${phoneDetail.releaseDate ? phoneDetail.releaseDate : 'ReleaseDate is not found.'}</h2>
      <h2 class="card-title text-center">MainFeatures</h2>
      <h3 class="card-title text-center">ChipSet: ${phoneDetail.mainFeatures.chipSet}</h3>
      <h4 class="card-title text-center">Memory: ${phoneDetail.mainFeatures.memory}</h4>
      <h4 class="card-title text-center">Sensors: ${phoneDetail.mainFeatures.sensors}</h4>
      
      <h2 class="card-title text-center">Others</h2>
      <h5 class="card-title text-center">Bluetooth: ${phoneDetail.others.Bluetooth}</h5>
      <h5 class="card-title text-center">GPS: ${phoneDetail.others.GPS}</h5>
      <h5 class="card-title text-center">USB: ${phoneDetail.others.USB}</h5>
      <h5 class="card-title text-center">Radio: ${phoneDetail.others.Radio}</h5>
      <h5 class="card-title text-center">WLAN: ${phoneDetail.others.WLAN}</h5>
      
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