import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form");e.addEventListener("submit",t=>{t.preventDefault();const s=e.elements.email.value.trim(),a=e.elements.message.value.trim();if(s!==""&&a!==""){const l={email:l.get("email"),message:l.get("message")};console.log(l),e.reset()}else alert("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map
