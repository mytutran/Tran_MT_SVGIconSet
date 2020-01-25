(() => {

  const allSVGs = document.querySelectorAll(".svgIMG");

  function callID() {
    console.log(this.id);
  }

  allSVGs.forEach(item => item.addEventListener('click',callID));

})();
