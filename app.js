function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_t0rocza
// service_wsu2lst
// RutE2DXx82lX79ZpG

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    //   Loading state
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_wsu2lst",
      "template_t0rocza",
      event.target,
      "RutE2DXx82lX79ZpG"
    );

    //   Success State
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert(
      "An error has occured. Please try again later or contact me at safimian.07@gmail.com"
    );
  }
}
