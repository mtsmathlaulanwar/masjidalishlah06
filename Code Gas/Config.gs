/**
 * Masjid v2 - Config.gs
 * Konfigurasi aplikasi dan konstanta
 */

const APP_CONFIG = {
  APP_NAME: 'Sistem Informasi Masjid v2',
  APP_VERSION: '2.0.0',
  JWT_SECRET: 'masjid-v2-secret-key-change-in-production-2026',
  JWT_EXPIRY: 21600, // 6 jam dalam detik
  CACHE_DURATION: 3600, // 1 jam
  ITEMS_PER_PAGE: 9,
  ALLOWED_ORIGINS: ['http://localhost:5173', 'http://localhost:3000', 'https://masjidv2.waavis.com', 'http://localhost:4173'],
};

const DEFAULT_CONFIG = {
  NAMA_MASJID: 'Masjid Al-Ikhlas',
  LOKASI_MASJID: 'Jl. Raya Masjid No. 1, Kota Indah, Indonesia',
  LATITUDE: '-6.8934',
  LONGITUDE: '107.6112',
  IFRAME_PETA: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9741062420476!2d107.60860727573916!3d-6.893700567461797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e650eb4f8499%3A0x5d08d070d6d3c906!2sMasjid%20Salman%20ITB!5e0!3m2!1sid!2sid!4v1775987121309!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  LOGO_URL: '',
  QRIS_URL: '',
  PRIMARY_COLOR: '#388e3c',
  DEMO_MODE: true,
  IS_MASJID: true,
  DRIVE_FOLDER_ID: '',
  SHEET_BERITA_ID: '',
  SHEET_KEUANGAN_ID: '',
  SHEET_INFAQ_ID: '',
  SHEET_RAMADHAN_ID: '',
  SHEET_QURBAN_ID: '',
  SHEET_KEGIATAN_ID: '',
  SHEET_INVENTARIS_ID: '',
};

function getConfig() {
  const props = PropertiesService.getScriptProperties();
  const saved = props.getProperty('APP_CONFIG');
  if (saved) {
    try {
      return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
    } catch (e) { /* fallback */ }
  }
  return { ...DEFAULT_CONFIG };
}

function saveConfig(newConfig) {
  const current = getConfig();
  const merged = { ...current, ...newConfig };
  PropertiesService.getScriptProperties().setProperty('APP_CONFIG', JSON.stringify(merged));
  CacheService.getScriptCache().removeAll(['config_cache', 'logo_data_url', 'qris_data_url']);
  return merged;
}

/**
 * Jalankan fungsi ini langsung dari Apps Script Editor untuk toggle DEMO_MODE.
 * Contoh: enableDemoMode() → aktifkan mode demo (blokir semua operasi tulis)
 *         disableDemoMode() → nonaktifkan mode demo (admin bisa edit data kembali)
 */
function enableDemoMode() {
  const current = getConfig();
  current.DEMO_MODE = true;
  PropertiesService.getScriptProperties().setProperty('APP_CONFIG', JSON.stringify(current));
  Logger.log('✅ DEMO_MODE diaktifkan. Semua operasi tulis diblokir.');
}

function disableDemoMode() {
  const current = getConfig();
  current.DEMO_MODE = false;
  PropertiesService.getScriptProperties().setProperty('APP_CONFIG', JSON.stringify(current));
  Logger.log('✅ DEMO_MODE dinonaktifkan. Admin dapat mengedit data kembali.');
}
