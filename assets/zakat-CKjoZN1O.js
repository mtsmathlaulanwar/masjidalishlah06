import{p as s,f as a}from"./index-DWj9LPsn.js";var E="Kalkulator Zakat",p=85,v=15e5,g=2.5,x=15e3;function H(){return`
    <div class="section-block position-relative overflow-hidden" style="background: linear-gradient(135deg, rgba(var(--bs-primary-rgb), 0.03) 0%, rgba(var(--bs-success-rgb), 0.05) 100%);">
      <!-- Decorative background elements -->
      <div class="position-absolute top-0 start-0 translate-middle" style="width: 300px; height: 300px; background: radial-gradient(circle, rgba(var(--bs-primary-rgb),0.1) 0%, transparent 70%); border-radius: 50%;"></div>
      <div class="position-absolute bottom-0 end-0 translate-middle-y" style="width: 400px; height: 400px; background: radial-gradient(circle, rgba(var(--bs-success-rgb),0.08) 0%, transparent 70%); border-radius: 50%;"></div>

      <div class="container position-relative z-1" style="max-width:850px">
        <div class="section-header text-center mb-5">
          <div class="section-badge bg-white shadow-sm border text-primary"><i class="bi bi-calculator"></i> Kalkulator Zakat</div>
          <h2 class="section-title fw-bold mt-3">Hitung Zakat Anda</h2>
          <p class="section-subtitle text-muted">Tunaikan kewajiban berzakat dengan perhitungan bersih, rasional, dan akurat secara syariat.</p>
        </div>

        <!-- Tab Nav -->
        <ul class="nav nav-pills justify-content-center mb-4 flex-wrap gap-2" id="zakatTab" style="background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); padding: 10px; border-radius: 50px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
          <li class="nav-item"><a class="nav-link active rounded-pill px-4" data-bs-toggle="pill" href="#tabMaal"><i class="bi bi-cash-stack me-2"></i>Zakat Maal</a></li>
          <li class="nav-item"><a class="nav-link rounded-pill px-4" data-bs-toggle="pill" href="#tabPenghasilan"><i class="bi bi-wallet2 me-2"></i>Zakat Penghasilan</a></li>
          <li class="nav-item"><a class="nav-link rounded-pill px-4" data-bs-toggle="pill" href="#tabFitrah"><i class="bi bi-basket me-2"></i>Zakat Fitrah</a></li>
        </ul>

        <div class="tab-content mt-4">
          <!-- ZAKAT MAAL -->
          <div class="tab-pane fade show active" id="tabMaal">
            <div class="card border-0 shadow-lg" style="border-radius: 20px; background: #ffffff;">
              <div class="card-header bg-transparent border-0 pt-4 pb-0 px-4">
                <div class="d-flex align-items-center">
                  <div class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                    <i class="bi bi-cash-stack fs-5"></i>
                  </div>
                  <div>
                    <h5 class="fw-bold mb-0 text-dark">Zakat Maal (Harta)</h5>
                    <p class="small text-muted mb-0">Zakat atas harta yang dimiliki selama 1 tahun.</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 pt-4">
                <div class="alert alert-info border-0 bg-info bg-opacity-10 text-info-emphasis d-flex align-items-center mb-4" style="border-radius: 12px;">
                  <i class="bi bi-info-circle-fill fs-4 me-3"></i>
                  <div>Wajib jika total harta bersih mencapai atau lebih dari nisab (setara <strong>${p}g emas</strong>).</div>
                </div>
                
                <div class="row g-4 mb-4">
                  <div class="col-md-6">
                    <label class="form-label fw-bold text-dark small mb-1">Harga Emas per Gram (Rp)</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted">Rp</span>
                      <input type="text" id="maalHargaEmas" class="form-control border-0 format-rupiah" value="${v.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold text-dark small mb-1">Nisab (Batas Wajib Zakat)</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted">Rp</span>
                      <input type="text" id="maalNisab" class="form-control border-0 bg-light fw-bold text-primary" readonly>
                    </div>
                  </div>
                </div>

                <h6 class="fw-bold mb-3 text-dark border-bottom pb-2">Komponen Harta</h6>
                <div class="row g-3 mb-4">
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small text-dark"><i class="bi bi-plus-circle-fill text-success me-2"></i>Uang Tunai & Tabungan</label>
                    <input type="text" id="maalTabungan" class="form-control form-control-lg bg-light border-0 format-rupiah" placeholder="0" style="border-radius: 10px;">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small text-dark"><i class="bi bi-plus-circle-fill text-success me-2"></i>Emas & Perak (Nilai Rp)</label>
                    <input type="text" id="maalEmas" class="form-control form-control-lg bg-light border-0 format-rupiah" placeholder="0" style="border-radius: 10px;">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small text-dark"><i class="bi bi-plus-circle-fill text-success me-2"></i>Saham & Investasi</label>
                    <input type="text" id="maalSaham" class="form-control form-control-lg bg-light border-0 format-rupiah" placeholder="0" style="border-radius: 10px;">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small text-dark"><i class="bi bi-plus-circle-fill text-success me-2"></i>Piutang (Bisa Ditagih)</label>
                    <input type="text" id="maalPiutang" class="form-control form-control-lg bg-light border-0 format-rupiah" placeholder="0" style="border-radius: 10px;">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small text-dark"><i class="bi bi-plus-circle-fill text-success me-2"></i>Aset Dagang (Stok)</label>
                    <input type="text" id="maalDagang" class="form-control form-control-lg bg-light border-0 format-rupiah" placeholder="0" style="border-radius: 10px;">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small text-dark"><i class="bi bi-dash-circle-fill text-danger me-2"></i>Hutang Jatuh Tempo</label>
                    <input type="text" id="maalHutang" class="form-control form-control-lg bg-light border-0 text-danger border-start border-danger border-3 format-rupiah" placeholder="0" style="border-radius: 10px;">
                  </div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-primary btn-lg fw-bold shadow-sm" id="btnHitungMaal" style="border-radius: 12px; padding: 14px;"><i class="bi bi-calculator me-2"></i> Hitung Zakat Maal</button>
                </div>
                <div id="resultMaal" class="mt-4" style="display:none"></div>
              </div>
            </div>
          </div>

          <!-- ZAKAT PENGHASILAN -->
          <div class="tab-pane fade" id="tabPenghasilan">
            <div class="card border-0 shadow-lg" style="border-radius: 20px; background: #ffffff;">
              <div class="card-header bg-transparent border-0 pt-4 pb-0 px-4">
                <div class="d-flex align-items-center">
                  <div class="icon-square bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                    <i class="bi bi-wallet2 fs-5"></i>
                  </div>
                  <div>
                    <h5 class="fw-bold mb-0 text-dark">Zakat Penghasilan</h5>
                    <p class="small text-muted mb-0">Zakat 2.5% dari penghasilan kotor bulanan jika setahun &ge; nisab.</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 pt-4">
                <div class="row g-4 mb-4">
                  <div class="col-md-6">
                    <label class="form-label fw-semibold text-dark small mb-1">Gaji / Penghasilan per Bulan</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted">Rp</span>
                      <input type="text" id="gajiPerBulan" class="form-control border-0 bg-white format-rupiah" placeholder="0">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-semibold text-dark small mb-1">Penghasilan Lain per Bulan</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted">Rp</span>
                      <input type="text" id="penghasilanLain" class="form-control border-0 bg-white format-rupiah" placeholder="0">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label class="form-label fw-semibold text-dark small mb-1">Harga Emas per Gram (Acuan Nisab)</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted">Rp</span>
                      <input type="text" id="pengHargaEmas" class="form-control border-0 bg-white format-rupiah" value="${v.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}">
                    </div>
                  </div>
                </div>
                
                <div class="d-grid gap-2">
                  <button class="btn btn-success btn-lg fw-bold shadow-sm" id="btnHitungPenghasilan" style="border-radius: 12px; padding: 14px;"><i class="bi bi-calculator me-2"></i> Hitung Zakat Penghasilan</button>
                </div>
                <div id="resultPenghasilan" class="mt-4" style="display:none"></div>
              </div>
            </div>
          </div>

          <!-- ZAKAT FITRAH -->
          <div class="tab-pane fade" id="tabFitrah">
            <div class="card border-0 shadow-lg" style="border-radius: 20px; background: #ffffff;">
              <div class="card-header bg-transparent border-0 pt-4 pb-0 px-4">
                <div class="d-flex align-items-center">
                  <div class="icon-square bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                    <i class="bi bi-basket fs-5"></i>
                  </div>
                  <div>
                    <h5 class="fw-bold mb-0 text-dark">Zakat Fitrah</h5>
                    <p class="small text-muted mb-0">Wajib untuk setiap muslim menjelang Idul Fitri.</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 pt-4">
                <div class="alert alert-warning border-0 bg-warning bg-opacity-10 text-dark d-flex align-items-center mb-4" style="border-radius: 12px;">
                  <i class="bi bi-info-circle-fill text-warning fs-4 me-3"></i>
                  <div>Besaran standar fidyah dan zakat fitrah adalah setara <strong>${g} kg beras</strong> per jiwa.</div>
                </div>

                <div class="row g-4 mb-4">
                  <div class="col-md-4">
                    <label class="form-label fw-semibold text-dark small mb-1">Jumlah Keluarga</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted"><i class="bi bi-people"></i></span>
                      <input type="number" id="fitrahJiwa" class="form-control border-0 bg-white" value="1" min="1">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label fw-semibold text-dark small mb-1">Harga Beras per Kg</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <span class="input-group-text bg-light border-0 text-muted">Rp</span>
                      <input type="text" id="fitrahHargaBeras" class="form-control border-0 bg-white format-rupiah" value="${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label fw-semibold text-dark small mb-1">Standar (kg/jiwa)</label>
                    <div class="input-group input-group-lg shadow-sm" style="border-radius: 10px; overflow: hidden;">
                      <input type="text" id="fitrahKg" class="form-control border-0 bg-light fw-bold text-center" value="${g}" readonly>
                      <span class="input-group-text bg-light border-0 text-muted">kg</span>
                    </div>
                  </div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-warning text-dark btn-lg fw-bold shadow-sm" id="btnHitungFitrah" style="border-radius: 12px; padding: 14px;"><i class="bi bi-calculator me-2"></i> Hitung Zakat Fitrah</button>
                </div>
                <div id="resultFitrah" class="mt-4" style="display:none"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Donasi -->
        <div class="text-center mt-5 mb-3">
          <div class="p-4 rounded-4 shadow-sm" style="background: linear-gradient(90deg, #1A2E35 0%, #2A4858 100%);">
            <h5 class="text-white fw-bold mb-2">Salurkan Zakat Anda</h5>
            <p class="text-light text-opacity-75 small mb-4">Tunaikan zakat Anda dengan mudah dan aman melalui QRIS atau transfer bank resmi masjid kami.</p>
            <a href="/donasi" class="btn btn-light btn-lg px-5 fw-bold" style="border-radius: 50px;"><i class="bi bi-qr-code me-2"></i>Bayar Zakat Sekarang</a>
          </div>
        </div>
      </div>
    </div>
  `}function A(){h(),document.getElementById("maalHargaEmas").addEventListener("input",h),document.getElementById("btnHitungMaal").addEventListener("click",y),document.getElementById("btnHitungPenghasilan").addEventListener("click",k),document.getElementById("btnHitungFitrah").addEventListener("click",w)}function h(){var t=s(document.getElementById("maalHargaEmas").value),l=t*p;document.getElementById("maalNisab").value=a(l)}function c(t,l){return'<div class="alert '+(l?"alert-success":"alert-warning")+' border-0" style="border-radius:12px">'+t+"</div>"}function y(){var t=s(document.getElementById("maalHargaEmas").value),l=t*p,i=s(document.getElementById("maalTabungan").value),r=s(document.getElementById("maalEmas").value),e=s(document.getElementById("maalSaham").value),d=s(document.getElementById("maalPiutang").value),n=s(document.getElementById("maalDagang").value),o=s(document.getElementById("maalHutang").value),b=i+r+e+d+n,m=b-o,u=document.getElementById("resultMaal");if(u.style.display="block",m<l)u.innerHTML=c('<h6 class="fw-bold mb-2"><i class="bi bi-info-circle me-2"></i>Belum Wajib Zakat</h6><p class="mb-1 small">Total Harta: <strong>'+a(b)+'</strong></p><p class="mb-1 small">Hutang: <strong>'+a(o)+'</strong></p><p class="mb-1 small">Harta Bersih: <strong>'+a(m)+'</strong></p><p class="mb-0 small">Nisab: <strong>'+a(l)+"</strong> (belum mencapai nisab)</p>",!1);else{var f=Math.round(m*.025);u.innerHTML=c('<h6 class="fw-bold mb-2"><i class="bi bi-check-circle me-2"></i>Wajib Zakat Maal</h6><p class="mb-1 small">Total Harta: <strong>'+a(b)+'</strong></p><p class="mb-1 small">Hutang: <strong>'+a(o)+'</strong></p><p class="mb-1 small">Harta Bersih: <strong>'+a(m)+'</strong></p><p class="mb-1 small">Nisab: <strong>'+a(l)+'</strong></p><hr class="my-2"><p class="mb-0"><strong style="font-size:1.1rem;color:var(--primary)">Zakat Maal: '+a(f)+"</strong> <small>(2.5%)</small></p>",!0)}}function k(){var t=s(document.getElementById("gajiPerBulan").value),l=s(document.getElementById("penghasilanLain").value),i=s(document.getElementById("pengHargaEmas").value),r=i*p,e=t+l,d=e*12,n=document.getElementById("resultPenghasilan");if(n.style.display="block",d<r)n.innerHTML=c('<h6 class="fw-bold mb-2"><i class="bi bi-info-circle me-2"></i>Belum Wajib Zakat Penghasilan</h6><p class="mb-1 small">Penghasilan/bulan: <strong>'+a(e)+'</strong></p><p class="mb-1 small">Penghasilan/tahun: <strong>'+a(d)+'</strong></p><p class="mb-0 small">Nisab: <strong>'+a(r)+"</strong> (belum mencapai nisab)</p>",!1);else{var o=Math.round(e*.025),b=Math.round(d*.025);n.innerHTML=c('<h6 class="fw-bold mb-2"><i class="bi bi-check-circle me-2"></i>Wajib Zakat Penghasilan</h6><p class="mb-1 small">Penghasilan/bulan: <strong>'+a(e)+'</strong></p><p class="mb-1 small">Penghasilan/tahun: <strong>'+a(d)+'</strong></p><p class="mb-1 small">Nisab: <strong>'+a(r)+'</strong></p><hr class="my-2"><p class="mb-1"><strong style="font-size:1.1rem;color:var(--primary)">Zakat/bulan: '+a(o)+'</strong></p><p class="mb-0"><strong style="font-size:1.1rem;color:var(--primary)">Zakat/tahun: '+a(b)+"</strong></p>",!0)}}function w(){var t=parseInt(document.getElementById("fitrahJiwa").value)||1,l=s(document.getElementById("fitrahHargaBeras").value),i=t*g,r=Math.round(i*l),e=document.getElementById("resultFitrah");e.style.display="block",e.innerHTML=c('<h6 class="fw-bold mb-2"><i class="bi bi-check-circle me-2"></i>Zakat Fitrah</h6><p class="mb-1 small">Jumlah jiwa: <strong>'+t+' orang</strong></p><p class="mb-1 small">Beras per jiwa: <strong>'+g+' kg</strong></p><p class="mb-1 small">Total beras: <strong>'+i+' kg</strong></p><p class="mb-1 small">Harga beras/kg: <strong>'+a(l)+'</strong></p><hr class="my-2"><p class="mb-0"><strong style="font-size:1.1rem;color:var(--primary)">Total Zakat Fitrah: '+a(r)+'</strong></p><p class="small text-muted mt-1 mb-0">Atau setara '+i+" kg beras</p>",!0)}export{A as init,E as pageTitle,H as render};
