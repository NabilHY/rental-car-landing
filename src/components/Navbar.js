const navBarComponent = () => {
    const navbarStyling = [
        'navbar', 'navbar-expand-lg', 'navbar-light', 'bg-secondary', 'p-4', 'navbar', 'navbar-dark', 'bg-primary', 'gap-3',
      ];
      const navbar = document.createElement('nav');
    navbarStyling.forEach((style) => {
        navbar.classList.add(style);
      });
      navbar.innerHTML = `
      <a class="navbar-brand" href="#">Gear Rentals</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Available Cars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Fleet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us </a>
        </li>
      </ul>
      <button type="button" class="btn btn-dark pt-2 pb-2 pr" >Login</button>
    </div>
      `;
    return navbar;
}

export default navBarComponent;