
let konten_el = document.getElementById("konten-holder");
let jumlah_all = 13
   
for (let index = 0; index < jumlah_all; index++) {
    if(index >= 0 && index <=2){
      konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Rumah</p>
              <p class="text-center">Portofolio Pindahan Rumah ke-${index+1}</p>
                      </div>
                  </div>
       </div>
      `
    }else if (index > 2 && index <=6){
        konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Kantor</p>
              <p class="text-center">Portofolio Pindahan Kantor ke-${index-2}</p>
                      </div>
                  </div>
        </div>
      `
    }else if(index > 6 && index <= 13){
        konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Luar Kota</p>
              <p class="text-center">Portofolio Pindahan Luar Kota ke-${index-6}</p>
                      </div>
                  </div>
        </div>
        `

    }  
}
function show_rumah() {
  console.log("kesini");
  let jumlah_rumah = 3;
  konten_el.innerHTML = "";
  for (let index = 0; index < jumlah_rumah; index++) {
    konten_el.innerHTML += `
      <div class="col-4 p-2">
        <div class="card border-2" style="width: 25rem;">
            <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
            <div class="card-body text-center">
            <p class="h4">Pindahan Rumah</p>
            <p class="text-center">Portofolio Pindahan Rumah ke-${index+1}</p>
                    </div>
                </div>
     </div>
    `
  }
    
}

function show_kantor() {
    console.log("kesini");
    let jumlah_kantor = 4;
    konten_el.innerHTML = "";
    for (let index = 0; index < jumlah_kantor; index++) {
      konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Kantor</p>
              <p class="text-center">Portofolio Pindahan Kantor ke-${index+1}</p>
                      </div>
                  </div>
       </div>
      `
    }
      
  }

  function show_keluarkota() {
    console.log("kesini");
    let jumlah_lk = 6;
    konten_el.innerHTML = "";
    for (let index = 0; index < jumlah_lk; index++) {
      konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan ke Luar Kota</p>
              <p class="text-center">Portofolio Pindahan Luar Kota ke-${index+1}</p>
                      </div>
                  </div>
       </div>
      `
    }
      
  }

  function show_all() {
    let jumlah_all = 13
    for (let index = 0; index < jumlah_all; index++) {
    if(index >= 0 && index <=2){
      konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Rumah</p>
              <p class="text-center">Portofolio Pindahan Rumah ke-${index+1}</p>
                      </div>
                  </div>
       </div>
      `
    }else if (index > 2 && index <=6){
        konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Kantor</p>
              <p class="text-center">Portofolio Pindahan Kantor ke-${index-2}</p>
                      </div>
                  </div>
        </div>
      `
    }else if(index > 6 && index <= 13){
        konten_el.innerHTML += `
        <div class="col-4 p-2">
          <div class="card border-2" style="width: 25rem;">
              <img src="./images/luarkota.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
              <p class="h4">Pindahan Luar Kota</p>
              <p class="text-center">Portofolio Pindahan Luar Kota ke-${index-6}</p>
                      </div>
                  </div>
        </div>
        `

    }  
    }
}
      
  
  
