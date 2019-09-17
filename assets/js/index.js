const toggleDropdown = () => {
    const x = document.getElementById("mobile-nav");
    const header = document.getElementById("banner")
    if (x.className === "res-nav") {
      x.className += " responsive";
      header.className += " responsive";
    } else {
      x.className = "res-nav";
      header.className = "banner"
    }
  }