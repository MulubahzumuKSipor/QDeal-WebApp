const sidebar = document.querySelector("#sidebar");

function renderSidebar() {
  const sideBarContent = `
    <div>
          <nav class="nav">
            <ul id="sidenav">
              <li><a class="nav-button" href="../product-page/index.html">Products</a></li>
              <li>
                <a class="nav-button" href="../services/index.html">Services</a>
              </li>
              <li><a class="nav-button" href="#">Connect</a></li>
              <li><a class="nav-button" href="#">Latest Offers</a></li>
            </ul>
          </nav>
          <div class="middle">
            <h3>Support</h3>
            <a href="#">Get Started</a> <br />
            <a href="">About us</a>
          </div>
        </div>
        <div class="sidebar-footer">
          <p class="contact-info">
            Mulubahzumu Kemmeh Sipor<br />
            sipormulubah@outlook.com
          </p>
        </div>`;
  sidebar.innerHTML = sideBarContent;
}

renderSidebar();
