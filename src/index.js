import './styles.css';
import '../components/formatPhone';
import '../components/checkValid';

const password = document.querySelector('#password');

password.pattern =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
