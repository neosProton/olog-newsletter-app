addNewsletterButton = document.querySelector('.add-newsletter')
cancelButton = document.querySelector('.add-newsletter-form [type="button"]')
newsletterForm = document.querySelector('.add-newsletter-form')
dateInput = document.querySelector('.add-newsletter-form [type="date"]')

addNewsletterButton.addEventListener('click', function(){
    if (newsletterForm.style.display == "block") {
        newsletterForm.style.display = "none";
      } else {
        dateInput.value = ""
        newsletterForm.style.display = "block";
      }
})

cancelButton.addEventListener('click', function(){
    if (newsletterForm.style.display == "none") {
        newsletterForm.style.display = "block";
      } else {
        dateInput.value = ""
        newsletterForm.style.display = "none";
      }
})