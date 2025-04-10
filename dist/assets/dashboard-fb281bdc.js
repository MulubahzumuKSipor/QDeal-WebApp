import"./styles-fdcb2ba5.js";const d=[{name:"iPhone 14 Pro",image:"/iphone-14-pro.png"},{name:"iPhone 14 Gold",image:"/iphone-14-gold.png"},{name:"iPhone 11",image:"/iphone-11.png"}];let t=1;function a(){const e=document.getElementById("app");e.innerHTML=`
      <div class="dashboard">
        <aside class="sidebar">
          <div>
            <h1 class="logo">QuickDeals</h1>
            <nav class="nav">
              <button class="nav-button">Products</button>
              <button class="nav-button">Services</button>
              <button class="nav-button">Connect</button>
              <button class="nav-button">Latest Offers</button>
            </nav>
          </div>
          <div class="sidebar-footer">
            <div>Get Started</div>
            <div>About us</div>
            <div class="contact-info">
              Mulubahzumu Kemmeh Sipor<br />
              sipormulubah@outlook.com
            </div>
          </div>
        </aside>
  
        <main class="main-content">
          <div class="header">
            <h2>Welcome Mr. Darwin</h2>
            <div class="avatar"></div>
          </div>
  
          <div class="filters">
            <select><option>All Products</option></select>
            <select><option>Price Range: 1000USD - 10000USD</option></select>
            <select><option>Category: Technology</option></select>
          </div>
  
          <div class="stats">
            <div class="stat-card">Active Users<br /><strong>27/80</strong></div>
            <div class="stat-card">Products Bought<br /><strong>3,298</strong></div>
            <div class="stat-card">Last Session Length<br /><strong>2m 34s</strong></div>
            <div class="stat-card">Sales Rate Gain<br /><strong>+34%</strong></div>
          </div>
  
          <div class="interest-cards">
            <div class="interest-card">
              <h3>Most Interested</h3>
              <div>Covid Protocols <div class="bar green" style="width:95%"></div></div>
              <div>Cyber Security Basics <div class="bar green" style="width:92%"></div></div>
              <div>Social Media Policies <div class="bar green" style="width:89%"></div></div>
            </div>
  
            <div class="interest-card">
              <h3>Least Interested</h3>
              <div>Food Safety <div class="bar red" style="width:74%"></div></div>
              <div>Compliance Basics Procedures <div class="bar red" style="width:52%"></div></div>
              <div>Company Networking <div class="bar red" style="width:36%"></div></div>
            </div>
          </div>
  
          <div class="product-list" id="product-list"></div>
  
          <div class="pagination">
            <button id="prev">&lt;</button>
            <span id="page-num">${t}</span>
            <button id="next">&gt;</button>
          </div>
        </main>
      </div>
    `,n(),o()}function n(){const e=document.getElementById("product-list");e.innerHTML="",d.forEach(s=>{const i=document.createElement("div");i.className="product-card",i.innerHTML=`
        <button class="like-button">&hearts;</button>
        <img src="${s.image}" alt="${s.name}" class="product-image" />
        <h4>${s.name}</h4>
      `,e.appendChild(i)})}function o(){document.getElementById("prev").addEventListener("click",()=>{t>1&&(t--,document.getElementById("page-num").textContent=t,n())}),document.getElementById("next").addEventListener("click",()=>{t++,document.getElementById("page-num").textContent=t,n()})}a();
