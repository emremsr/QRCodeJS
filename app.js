const wrapper = document.querySelector(".wrapper");
generateBttn = wrapper.querySelector(".form button");
qrInput = wrapper.querySelector(".form input");
qrImg = wrapper.querySelector(".qr-code img");

generateBttn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrValue;
    wrapper.classList.add("active");

});