const formData = {
    email: "",
    message: ""
}

const form = document.querySelector('.feedback-form');
const localKey = "feedback-form-state";
const textarea = form.elements.message;
const input = form.elements.email;

const savedSettings = localStorage.getItem(localKey);
const parsedSettings = JSON.parse(savedSettings);

if (parsedSettings) {
  input.value = parsedSettings.email ?? "";
  textarea.value = parsedSettings.message ?? "";
  
  formData.email = parsedSettings.email;
  formData.message = parsedSettings.message;
}


form.addEventListener("input", event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(localKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
    
  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
    }
    
  console.log(formData);
  localStorage.removeItem(localKey);  
  formData.email = "";
  formData.message = "";
  form.reset();
});

