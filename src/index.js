import './styles.css';
import '../components/formatPhone';

const pass = document.getElementById('password');
const passCheck = document.getElementById('pw_check');
const passNoValid = document.querySelector('.requirements');

passCheck.addEventListener('change', setValidation);
pass.addEventListener('change', setValidation);

function setValid() {
  passNoValid.style.visibility = 'hidden';
  pass.style.border = '1px solid grey';
  passCheck.style.border = '1px solid grey';
}

function setInvalid() {
  passNoValid.style.visibility = 'visible';
  pass.style.border = '1px solid red';
  passCheck.style.border = '1px solid red';
}

function setValidation() {
  pass.value !== passCheck.value && passCheck.value ? setInvalid() : setValid();
}

function demo() {
  pass.value = 'testdemocase';
  passCheck.value = 'demo';
  setValidation();
}

demo();
