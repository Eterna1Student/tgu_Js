
// form <====

const form = document.querySelector('.contact-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const msg = formData.get('msg')

    console.log(name, email, msg);
}) 
