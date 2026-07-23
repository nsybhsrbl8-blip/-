const packages = [
    {company: "زين", type: "انترنت", name: "باقة يوم", price: 500, data: "1 جيجا", duration: "يوم"},
    {company: "زين", type: "انترنت", name: "باقة اسبوع", price: 2000, data: "5 جيجا", duration: "7 ايام"},
    {company: "زين", type: "انترنت", name: "باقة شهر", price: 8000, data: "15 جيجا", duration: "30 يوم"},
    {company: "زين", type: "مكالمات", name: "مكالمات شهر", price: 3000, data: "500 دقيقة", duration: "30 يوم"},
    
    {company: "سوداني", type: "انترنت", name: "باقة يوم", price: 400, data: "800 ميجا", duration: "يوم"},
    {company: "سوداني", type: "انترنت", name: "باقة اسبوع", price: 1800, data: "4 جيجا", duration: "7 ايام"},
    {company: "سوداني", type: "انترنت", name: "باقة شهر", price: 7500, data: "12 جيجا", duration: "30 يوم"},
    {company: "سوداني", type: "مكالمات", name: "مكالمات شهر", price: 2500, data: "400 دقيقة", duration: "30 يوم"},
    
    {company: "ام تي ان", type: "انترنت", name: "باقة يوم", price: 550, data: "1.2 جيجا", duration: "يوم"},
    {company: "ام تي ان", type: "انترنت", name: "باقة شهر", price: 8500, data: "20 جيجا", duration: "30 يوم"},
];

let currentType = 'all';
let currentCompany = 'all';

function displayPackages() {
    const grid = document.getElementById('packagesGrid');
    grid.innerHTML = '';
    
    const filtered = packages.filter(p => {
        return (currentType === 'all' || p.type === currentType) &&
               (currentCompany === 'all' || p.company === currentCompany);
    });
    
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <div class="company">${p.company} - ${p.type}</div>
                <h3>${p.name}</h3>
                <div class="price">${p.price} جنيه</div>
                <p><b>البيانات:</b> ${p.data}</p>
                <p><b>المدة:</b> ${p.duration}</p>
            </div>
        `;
    });
}

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

// اول ما الصفحة تفتح
displayPackages();
