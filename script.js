// بيانات الباقات
const packages = [
    { company: "زين", type: "انترنت", name: "باقة يوم", data: "1 جيجا", price: "1500 ج" },
    { company: "زين", type: "انترنت", name: "باقة اسبوع", data: "10 جيجا", price: "8000 ج" },
    { company: "زين", type: "انترنت", name: "باقة شهر", data: "50 جيجا", price: "25000 ج" },
    { company: "زين", type: "مكالمات", name: "دقايق يوم", data: "60 دقيقة", price: "1000 ج" },
    
    { company: "سوداني", type: "انترنت", name: "باقة يوم", data: "1.5 جيجا", price: "1200 ج" },
    { company: "سوداني", type: "انترنت", name: "باقة اسبوع", data: "12 جيجا", price: "7500 ج" },
    { company: "سوداني", type: "انترنت", name: "باقة شهر", data: "60 جيجا", price: "22000 ج" },
    { company: "سوداني", type: "مكالمات", name: "دقايق شهر", data: "500 دقيقة", price: "9000 ج" },

    { company: "ام تي ان", type: "انترنت", name: "باقة يوم", data: "800 ميجا", price: "1300 ج" },
    { company: "ام تي ان", type: "انترنت", name: "باقة اسبوع", data: "8 جيجا", price: "7000 ج" },
    { company: "ام تي ان", type: "انترنت", name: "باقة شهر", data: "40 جيجا", price: "20000 ج" },
    { company: "ام تي ان", type: "مكالمات", name: "دقايق اسبوع", data: "200 دقيقة", price: "3500 ج" },
];

let currentType = 'all';
let currentCompany = 'all';

// دالة العرض الاساسية
function displayPackages() {
    let grid = document.getElementById('packagesGrid');
    if(!grid) return; 

    grid.innerHTML = '';

    let filtered = packages.filter(p => {
        let typeMatch = (currentType === 'all' || p.type === currentType);
        let companyMatch = (currentCompany === 'all' || p.company === currentCompany);
        return typeMatch && companyMatch;
    });

    if(filtered.length === 0){
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; font-size:20px;">مافي باقات بالمواصفات دي</p>';
        return;
    }

    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <div class="company">${p.company}</div>
                <h3>${p.name}</h3>
                <p><b>النوع:</b> ${p.type}</p>
                <p><b>الكمية:</b> ${p.data}</p>
                <div class="price">${p.price}</div>
                <button onclick="alert('اخترت: ${p.name} من ${p.company}')">اشترك الان</button>
            </div>
        `;
    });
}

// دوال الفلترة
function filterType(type) {
    currentType = type;
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    displayPackages();
}

function filterCompany() {
    currentCompany = document.getElementById('companyFilter').value;
    displayPackages();
}

// اهم سطر: شغل العرض اول ما الصفحة تحمل
window.onload = function() {
    displayPackages();
}
