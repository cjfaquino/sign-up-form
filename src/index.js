import './styles.css';
import '../components/formatPhone';
import '../components/checkValid';

const password = document.querySelector('#password');
const phone = document.querySelector('#phone');

phone.minLength = 14;

password.pattern =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
