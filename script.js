
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBrPijjFlKc3WMbt-H4NG4f1UQy35rwQKU",
  authDomain: "rons-e46a1.firebaseapp.com",
  projectId: "rons-e46a1",
  storageBucket: "rons-e46a1.firebasestorage.app",
  messagingSenderId: "636474528629",
  appId: "1:636474528629:web:64529d6ee45dccf702393c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let pontos = 0;

window.login = function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      document.getElementById('loginBox').style.display = 'none';
      document.getElementById('userPanel').style.display = 'block';
      document.getElementById('username').textContent = email.split('@')[0];
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
}

window.cadastrar = function () {
  const email = document.getElementById('cadEmail').value;
  const senha = document.getElementById('cadSenha').value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      alert("Conta criada! Faça login.");
      mostrarLogin();
    })
    .catch((error) => {
      alert("Erro no cadastro: " + error.message);
    });
}

window.mostrarCadastro = function () {
  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('cadastroBox').style.display = 'block';
}

window.mostrarLogin = function () {
  document.getElementById('cadastroBox').style.display = 'none';
  document.getElementById('loginBox').style.display = 'block';
}

window.ganharPontos = function () {
  pontos += 10;
  document.getElementById('pontos').textContent = pontos;
  alert("Você ganhou 10 pontos!");
}

window.comprarItem = function (custo) {
  if (pontos >= custo) {
    pontos -= custo;
    document.getElementById('pontos').textContent = pontos;
    alert("Item comprado com sucesso!");
  } else {
    alert("Pontos insuficientes.");
  }
}

window.comentar = function () {
  const comentario = document.getElementById('comentario').value;
  if (comentario.trim()) {
    const li = document.createElement('li');
    li.textContent = comentario;
    document.getElementById('comentarios-lista').appendChild(li);
    document.getElementById('comentario').value = '';
  }
}
