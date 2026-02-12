// Database Kamus Wilayah (Untuk Dropdown Bertingkat)
const dataKecamatan = {
    "Palembang": [
        "Ilir Timur I", "Ilir Timur II", "Ilir Barat I", "Ilir Barat II", 
        "Sako", "Sukamaju", "Sematang Borang", "Kertapati", "Plaju", 
        "Seberang Ulu I", "Seberang Ulu II", "Bukit Kecil", "Gandus", 
        "Alang-Alang Lebar", "Kalidoni", "Kemuning", "Sukarami"
    ],
    "Ogan Ilir": [
        "Indralaya", "Indralaya Utara", "Indralaya Selatan", "Tanjung Raja", 
        "Tanjung Batu", "Pemulutan", "Muara Kuang", "Rantau Alai", 
        "Lubuk Keliat", "Kandis", "Payaraman", "Rambang Kuang", 
        "Rantau Panjang", "Sungai Pinang"
    ],
    "Banyuasin": [
        "Banyuasin I", "Banyuasin II", "Banyuasin III", 
        "Talang Kelapa", "Rambutan", "Mariana"
    ],
    "Musi Banyuasin": [
        "Babat Supat", "Babat Toman", "Batang Hari Leko", "Bayung Lencir", 
        "Jirak Jaya", "Keluang", "Lais", "Lalan", "Lawang Wetan", 
        "Plakat Tinggi", "Sanga Desa", "Sekayu", "Sungai Keruh", 
        "Sungai Lilin", "Tungkal Jaya"
    ],
    "OKI": [
        "Kayu Agung", "Kota Kayu Agung", "Lempuing", "Mesuji", "Tulung Selapan"
    ]
};

// Database Fasilitas Kesehatan
const databaseFaskes = [
    // --- KOTA PALEMBANG ---
    {
        "nama": "RS Umum Pusat Dr. Mohammad Hoesin",
        "kota": "Palembang",
        "kec": "Ilir Timur I",
        "jenis": "Rumah Sakit",
        "alamat": "Jl. Jend. Sudirman No.KM.3,5",
        "lat": -2.9662490897792555,
        "lng": 104.75020094264771
    },
    {
        "nama": "RS RK Charitas",
        "kota": "Palembang",
        "kec": "Ilir Timur I",
        "jenis": "Rumah Sakit",
        "alamat": "Jl. Jend. Sudirman No.1054",
        "lat": -2.976,
        "lng": 104.753
    },
    
    { nama: "RS Siloam Sriwijaya", kota: "Palembang", kec: "Ilir Barat I", jenis: "Rumah Sakit", lat: -2.991, lng: 104.739, alamat: "Jl. POM IX, Lorok Pakjo" },
    { nama: "RSUD Palembang BARI", kota: "Palembang", kec: "Seberang Ulu I", jenis: "Rumah Sakit", lat: -3.018, lng: 104.761, alamat: "Jl. Panca Usaha No.1" },
    { nama: "RS Muhammadiyah Palembang", kota: "Palembang", kec: "Seberang Ulu II", jenis: "Rumah Sakit", lat: -3.001, lng: 104.774, alamat: "Jl. KH. Ahmad Dahlan" },
    { nama: "Puskesmas Merdeka", kota: "Palembang", kec: "Bukit Kecil", jenis: "Puskesmas", lat: -2.990, lng: 104.750, alamat: "Jl. Merdeka No.66" },
    { nama: "RS Bhayangkara Palembang", kota: "Palembang", kec: "Sako", jenis: "Rumah Sakit", lat: -2.951, lng: 104.731, alamat: "Jl. Jend. Sudirman No.4" },
    { nama: "RS Hermina Palembang", kota: "Palembang", kec: "Ilir Timur II", jenis: "Rumah Sakit", lat: -2.943, lng: 104.762, alamat: "Jl. Basuki Rahmat No.897" },
    { nama: "Puskesmas Alang-Alang Lebar", kota: "Palembang", kec: "Alang-Alang Lebar", jenis: "Puskesmas", lat: -2.925, lng: 104.698, alamat: "Jl. Kol. H. Burlian" },
    { nama: "RSIA Rika Amelia", kota: "Palembang", kec: "Alang-Alang Lebar", jenis: "Rumah Sakit", lat: -2.91392, lng: 104.69557, alamat: "Jl. Sultan M. Badaruddin II No.18" },
    { nama: "RS Myria", kota: "Palembang", kec: "Alang-Alang Lebar", jenis: "Rumah Sakit", lat: -2.935, lng: 104.715, alamat: "Jl. Kol. H. Burlian No.228" },

    // --- KABUPATEN OGAN ILIR ---
    { nama: "RSUD Ogan Ilir", kota: "Ogan Ilir", kec: "Indralaya", jenis: "Rumah Sakit", lat: -3.232, lng: 104.648, alamat: "KPT Tanjung Senai, Indralaya" },
    { nama: "Puskesmas Indralaya", kota: "Ogan Ilir", kec: "Indralaya", jenis: "Puskesmas", lat: -3.218, lng: 104.652, alamat: "Jl. Lintas Timur Sumatera" },
    { nama: "Puskesmas Tanjung Raja", kota: "Ogan Ilir", kec: "Tanjung Raja", jenis: "Puskesmas", lat: -3.342, lng: 104.771, alamat: "Jl. Raya Tanjung Raja" },
    { nama: "Puskesmas Pemulutan", kota: "Ogan Ilir", kec: "Pemulutan", jenis: "Puskesmas", lat: -3.105, lng: 104.778, alamat: "Jl. Raya Pemulutan" },

    // --- KABUPATEN BANYUASIN ---
    { nama: "RSUD Banyuasin", kota: "Banyuasin", kec: "Banyuasin III", jenis: "Rumah Sakit", lat: -2.885, lng: 104.375, alamat: "Jl. Raya Palembang-Betung KM 42" },
    { nama: "RS Pratama Makarti Jaya", kota: "Banyuasin", kec: "Banyuasin II", jenis: "Rumah Sakit", lat: -2.421, lng: 104.885, alamat: "Makarti Jaya" },
    { nama: "Puskesmas Talang Kelapa", kota: "Banyuasin", kec: "Talang Kelapa", jenis: "Puskesmas", lat: -2.912, lng: 104.685, alamat: "Jl. Palembang-Betung KM 14" },
    { nama: "RSUD Sukajadi", kota: "Banyuasin", kec: "Talang Kelapa", jenis: "Rumah Sakit", lat: -2.91375, lng: 104.67248, alamat: "Jl. Palembang-Betung KM 14" },

     // --- KABUPATEN MUSI BANYUASIN (CONTOH) ---
    { nama: "RSUD Sekayu", kota: "Musi Banyuasin", kec: "Sekayu", jenis: "Rumah Sakit", lat: -2.853, lng: 103.886, alamat: "Jl. Bupati Oesman No.31" },
    { nama: "Puskesmas Sungai Lilin", kota: "Musi Banyuasin", kec: "Sungai Lilin", jenis: "Puskesmas", lat: -2.441, lng: 104.093, alamat: "Jl. Palembang-Jambi" },

    // --- KABUPATEN OKI ---
    { nama: "RSUD Kayu Agung", kota: "OKI", kec: "Kayu Agung", jenis: "Rumah Sakit", lat: -3.391, lng: 104.832, alamat: "Jl. Lintas Timur Sumatera, Kayu Agung" },
    { nama: "Puskesmas Lempuing", kota: "OKI", kec: "Lempuing", jenis: "Puskesmas", lat: -3.795, lng: 104.855, alamat: "Tugumulyo, OKI" }

];
