const paymentCartEl = document.forms.paymentCart;
formData();

async function formData() {
  if (!paymentCartEl) {
    console.warn('JS cannot run!!!');
    return;
  }

  paymentCartEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(paymentCartEl);
    const data = Object.fromEntries(formData);

    window.localStorage.setItem('Payment cart details', JSON.stringify(data));

    sendDataToAPI(data);

    async function sendDataToAPI(data) {
      try {
        const res = await fetch('', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const json = await res.json();

        return json;
      } catch (error) {
        console.error(error?.message);
      }
      return 'Success';
    }
    paymentCartEl.reset();
    window.location = '/success.html';
  });
}
