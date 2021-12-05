<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAbuxaZzdaHEDd-AyEs-1Q3ZHKGbfm69ZQ",
    authDomain: "corona-testing-6f50a.firebaseapp.com",
    databaseURL: "https://corona-testing-6f50a-default-rtdb.firebaseio.com",
    projectId: "corona-testing-6f50a",
    storageBucket: "corona-testing-6f50a.appspot.com",
    messagingSenderId: "733146758640",
    appId: "1:733146758640:web:be5b7686e852067afff135",
    measurementId: "G-7BB3TF83BK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>