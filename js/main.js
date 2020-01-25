(() => {

  const allSVGs = document.querySelectorAll(".svgIMG");

  function toggleSelection() {
    this.classList.toggle("selected");
    console.log(this.id);
  }

  allSVGs.forEach(item => item.addEventListener('click',toggleSelection));
})()
