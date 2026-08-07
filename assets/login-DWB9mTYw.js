import{a as c,g as b,s as m,b as u}from"./index-DWj9LPsn.js";var g="Login";function f(){return`
  <div style="background:linear-gradient(135deg,#e8f5e9 0%,#c8e6c9 50%,#a5d6a7 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',system-ui,sans-serif">
    <div style="background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.1);padding:40px;max-width:420px;width:100%">
      <div class="text-center mb-4">
        <img class="brand-logo-img mb-2 d-none" style="width: 48px; height: 48px; object-fit: cover; border-radius: 50%;">
        <i class="bi bi-building brand-icon" style="font-size:3rem;color:#388e3c"></i>
        <h4 class="fw-bold mt-2 brand-text" style="color:#2e7d32">Sistem Informasi Masjid</h4>
        <p class="text-muted small">Admin Panel</p>
      </div>
      <div class="mb-3">
        <label class="form-label small fw-bold">Username</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-person"></i></span>
          <input type="text" id="username" class="form-control" placeholder="Masukkan username" autofocus>
        </div>
      </div>
      <div class="mb-4">
        <label class="form-label small fw-bold">Password</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-lock"></i></span>
          <input type="password" id="password" class="form-control" placeholder="Masukkan password">
          <button class="btn btn-outline-secondary" type="button" id="btnTogglePassword">
            <i class="bi bi-eye" id="iconTogglePassword"></i>
          </button>
        </div>
      </div>
      <button class="btn w-100" id="btnLogin" style="background:#388e3c;border-color:#388e3c;color:#fff;font-weight:700;padding:12px;border-radius:10px">
        <i class="bi bi-box-arrow-in-right me-2"></i>Login
      </button>
      <div class="text-center mt-3">
        <a href="/" class="small text-muted text-decoration-none">
          <i class="bi bi-arrow-left me-1"></i>Kembali ke Website
        </a>
      </div>
      <div id="loginError" class="alert alert-danger small py-2 mt-3" style="display:none"></div>
    </div>
  </div>`}function y(){document.body.classList.remove("admin-body");var i=document.getElementById("btnLogin"),o=document.getElementById("username"),n=document.getElementById("password"),d=document.getElementById("btnTogglePassword"),a=document.getElementById("iconTogglePassword");d&&n&&d.addEventListener("click",function(){n.type==="password"?(n.type="text",a.classList.remove("bi-eye"),a.classList.add("bi-eye-slash")):(n.type="password",a.classList.remove("bi-eye-slash"),a.classList.add("bi-eye"))}),c("getPublicConfig").then(function(e){if(e.NAMA_MASJID&&(document.querySelector(".brand-text").textContent=e.NAMA_MASJID),e.LOGO_URL){var t=b(e.LOGO_URL);document.querySelector(".brand-icon").style.display="none";var s=document.querySelector(".brand-logo-img");s.src=t,s.referrerPolicy="no-referrer",s.classList.remove("d-none")}}).catch(function(){});function r(){var e=o.value.trim(),t=n.value.trim();if(!e||!t){l("Username dan password wajib diisi.");return}i.disabled=!0,i.innerHTML='<span class="spinner-border spinner-border-sm me-2"></span>Memproses...',c("login",{},{username:e,password:t}).then(function(s){m(s.token),u(s.user||{username:e,nama:e,role:"admin"}),navigate("/admin/dashboard")}).catch(function(s){l(s.message||"Login gagal"),i.disabled=!1,i.innerHTML='<i class="bi bi-box-arrow-in-right me-2"></i>Login'})}function l(e){var t=document.getElementById("loginError");t.textContent=e,t.style.display="block"}i.addEventListener("click",r),n.addEventListener("keypress",function(e){e.key==="Enter"&&r()}),o.addEventListener("keypress",function(e){e.key==="Enter"&&r()})}export{y as init,g as pageTitle,f as render};
