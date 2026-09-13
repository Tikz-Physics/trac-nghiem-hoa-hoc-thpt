// Service Worker: Trắc Nghiệm Hoá Học THPT (Offline-First PWA)
const CACHE_NAME = 'hoa-thpt-cache-v1';

// 1. Core Shell URLs to cache immediately on install
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./dau-truong-hoa-hoc.html",
  "./buzzer.html",
  "./arena_questions_data.js",
  "./lesson_titles.json",
  "./lesson_metadata.json",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./lop10/",
  "./lop10/index.html",
  "./lop11/",
  "./lop11/index.html",
  "./lop12/",
  "./lop12/index.html"
];

// 2. All 78 lesson standalone pages to cache in the background
const ALL_LESSON_ASSETS = [
  "./lop10/Bai_01_Thanh_Phan_Cua_Nguyen_Tu.html",
  "./lop10/Bai_02_Nguyen_To_Hoa_Hoc.html",
  "./lop10/Bai_03_Cau_Truc_Lop_Vo_Electron.html",
  "./lop10/Bai_04_On_Tap_Chuong_1.html",
  "./lop10/Bai_05_Cau_Tao_Bang_Tuan_Hoan.html",
  "./lop10/Bai_06_Xu_Huong_Bien_Doi_Tinh_Chat.html",
  "./lop10/Bai_07_Dinh_Luat_Tuan_Hoan_Y_Nghia.html",
  "./lop10/Bai_08_On_Tap_Chuong_2.html",
  "./lop10/Bai_09_Quy_Tac_Octet.html",
  "./lop10/Bai_10_Lien_Ket_Ion.html",
  "./lop10/Bai_11_Lien_Ket_Cong_Hoa_Tri.html",
  "./lop10/Bai_12_Lien_Ket_Hydrogen_Van_Der_Waals.html",
  "./lop10/Bai_13_On_Tap_Chuong_3.html",
  "./lop10/Bai_14_Phan_Ung_Oxi_Hoa_Khu.html",
  "./lop10/Bai_15_Phan_Ung_Oxi_Hoa_Khu_Thuc_Tien.html",
  "./lop10/Bai_16_On_Tap_Chuong_4.html",
  "./lop10/Bai_17_Bien_Thien_Enthalpy.html",
  "./lop10/Bai_18_On_Tap_Chuong_5.html",
  "./lop10/Bai_19_Toc_Do_Phan_Ung.html",
  "./lop10/Bai_20_Yeu_To_Anh_Huong_Toc_Do.html",
  "./lop10/Bai_21_On_Tap_Chuong_6.html",
  "./lop10/Bai_22_Nhom_Halogen.html",
  "./lop10/Bai_23_Hydrogen_Halide_Hop_Chat.html",
  "./lop11/Bai_01_Khai_Niem_Ve_Can_Bang_Hoa_Hoc.html",
  "./lop11/Bai_02_Can_Bang_Trong_Dung_Dich_Nuoc.html",
  "./lop11/Bai_03_On_Tap_Chuong_1.html",
  "./lop11/Bai_04_Nitrogen.html",
  "./lop11/Bai_05_Ammonia_Va_Muoi_Ammonium.html",
  "./lop11/Bai_06_Mot_So_Hop_Chat_Cua_Nitrogen_Voi_Oxygen.html",
  "./lop11/Bai_07_Sulfur_Va_Sulfur_Dioxide.html",
  "./lop11/Bai_08_Sulfuric_Acid_Va_Muoi_Sulfate.html",
  "./lop11/Bai_09_On_Tap_Chuong_2.html",
  "./lop11/Bai_10_Hop_Chat_Huu_Co_Va_Hoa_Hoc_Huu_Co.html",
  "./lop11/Bai_11_Phuong_Phap_Tach_Biet_Va_Tinh_Che.html",
  "./lop11/Bai_12_Cong_Thuc_Phan_Tu_Hop_Chat_Huu_Co.html",
  "./lop11/Bai_13_Cau_Tao_Hoa_Hoc_Hop_Chat_Huu_Co.html",
  "./lop11/Bai_14_On_Tap_Chuong_3.html",
  "./lop11/Bai_15_Alkane.html",
  "./lop11/Bai_16_Hydrocarbon_Khong_No.html",
  "./lop11/Bai_17_Arene.html",
  "./lop11/Bai_18_On_Tap_Chuong_4.html",
  "./lop11/Bai_19_Dan_Xuat_Halogen.html",
  "./lop11/Bai_20_Alcohol.html",
  "./lop11/Bai_21_Phenol.html",
  "./lop11/Bai_22_On_Tap_Chuong_5.html",
  "./lop11/Bai_23_Hop_Chat_Carbonyl.html",
  "./lop11/Bai_24_Carboxylic_Acid.html",
  "./lop11/Bai_25_On_Tap_Chuong_6.html",
  "./lop12/Bai_01_Ester_Lipid.html",
  "./lop12/Bai_02_Xa_Phong_Va_Chat_Giat_Rua.html",
  "./lop12/Bai_03_On_Tap_Chuong_1.html",
  "./lop12/Bai_04_Gioi_Thieu_Carbohydrate_Glucose_Fructose.html",
  "./lop12/Bai_05_Saccharose_Va_Maltose.html",
  "./lop12/Bai_06_Tinh_Bot_Va_Cellulose.html",
  "./lop12/Bai_07_On_Tap_Chuong_2.html",
  "./lop12/Bai_08_Amine.html",
  "./lop12/Bai_09_Amino_Acid_Va_Peptide.html",
  "./lop12/Bai_10_Protein_Va_Enzyme.html",
  "./lop12/Bai_11_On_Tap_Chuong_3.html",
  "./lop12/Bai_12_Dai_Cuong_Ve_Polymer.html",
  "./lop12/Bai_13_Vat_Lieu_Polymer.html",
  "./lop12/Bai_14_On_Tap_Chuong_4.html",
  "./lop12/Bai_15_The_Dien_Cuc_Va_Nguon_Dien_Hoa_Hoc.html",
  "./lop12/Bai_16_Dien_Phan.html",
  "./lop12/Bai_17_On_Tap_Chuong_5.html",
  "./lop12/Bai_18_Cau_Tao_Va_Lien_Ket_Trong_Tinh_The_Kim_Loai.html",
  "./lop12/Bai_19_Tinh_Chat_Vat_Li_Va_Hoa_Hoc_Cua_Kim_Loai.html",
  "./lop12/Bai_20_Kim_Loai_Trong_Tu_Nhien_Va_Phuong_Phap_Tach_Kim_Loai.html",
  "./lop12/Bai_21_Hop_Kim.html",
  "./lop12/Bai_22_Su_An_Mon_Kim_Loai.html",
  "./lop12/Bai_23_On_Tap_Chuong_6.html",
  "./lop12/Bai_24_Nguyen_To_Nhom_IA.html",
  "./lop12/Bai_25_Nguyen_To_Nhom_IIA.html",
  "./lop12/Bai_26_On_Tap_Chuong_7.html",
  "./lop12/Bai_27_Dai_Cuong_Ve_Kim_Loai_Chuyen_Tiep_Day_Thu_Nhat.html",
  "./lop12/Bai_28_So_Luoc_Ve_Phuc_Chat.html",
  "./lop12/Bai_29_Mot_So_Tinh_Chat_Va_Ung_Dung_Cua_Phuc_Chat.html",
  "./lop12/Bai_30_On_Tap_Chuong_8.html"
];

// Combine all assets
const PRECACHE_ASSETS = [...CORE_ASSETS, ...ALL_LESSON_ASSETS];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS).then(() => {
        return Promise.allSettled(
          ALL_LESSON_ASSETS.map(url => cache.add(url).catch(() => {}))
        );
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
      event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return resp;
        }))
      );
    }
    return;
  }

  // 1. Navigation requests (HTML pages): Try network FIRST so updates show immediately
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // If network completely offline, serve from cache!
        return caches.match(event.request).then(cached => {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }

  // 2. Static assets (images, scripts): Stale-while-revalidate
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
      const networkFetch = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || networkFetch;
    })
  );
});
