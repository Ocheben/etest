const toggleDropdown = () => {
    const x = document.getElementById("mobile-nav");
    if (x.className === "res-nav") {
      x.className += " responsive";
    } else {
      x.className = "res-nav";
    }
  }