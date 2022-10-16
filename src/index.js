import './styles.css';
import '../components/formatPhone';
import '../components/checkValid';

const password = document.querySelector('#password');
const firstN = document.querySelector('#firstName');
const lastN = document.querySelector('#lastName');

firstN.pattern = "/^[a-z ,.'-]+$/i";
lastN.pattern = "/^[a-z ,.'-]+$/i";

password.pattern =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
