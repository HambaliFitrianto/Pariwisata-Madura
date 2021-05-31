data = [
    {
        nama: "jaddih",
        fasilitas: ["toilet", "ibadah", "parkir","resto"],
    },
    {
        nama: "makam",
        fasilitas: ["toilet", "resto", "parkir"],
    },
    {
        nama: "mangrove",
        fasilitas: ["toilet", "ibadah", "parkir","resto"],
    },
    {
        nama: "pantai_siring",
        fasilitas: ["toilet", "ibadah", "parkir","resto"],
    },  
    {
        nama: 'pantai_rongkang',
        fasilitas: ['toilet', 'ibadah', 'parkir', 'resto'],
    },
    {
        nama: 'gunung_geger',
        fasilitas: ['toilet', 'parkir', 'resto'],
    },
    {
        nama: 'taman_paseban',
        fasilitas: ['toilet', 'ibadah', 'parkir'],
    },
    {
        nama: 'air_terjun_kokop',
        fasilitas: ['parkir'],
    },
    {
        nama: 'mercusuar_sembilangan_bangkalan',
        fasilitas: ['toilet', 'ibadah', 'parkir', 'resto'],
    },
    {
        nama: 'museum_cakraningrat',
        fasilitas: ['toilet', 'ibadah', 'parkir'],
    },
  ];

function cari() {
    var facilities = document.getElementsByName("facilities");
    var key = [];
    // ambil kata kuncinya
    for (var i = 0; i < facilities.length; i++) {
        if (facilities[i].checked) {
            key.push(facilities[i].value);
        }
    }
    console.table(key);
    // cari data
    for (var i = 0; i < data.length; i++) {
        found = false;
        counter=0;
        for (var j = 0; j < key.length; j++) {
            for (var k = 0; k < data[i]["fasilitas"].length; k++) {
                if (key[j] == data[i]["fasilitas"][k]) {
                    found = true;
                    if (found) {
                        counter+=1;
                    }  
                }
            }
        }
        // jika ketemu
        if (counter==key.length) {
            document.getElementById(data[i]["nama"]).style.display = "block";
        } else {
            document.getElementById(data[i]["nama"]).style.display = "none";
        }
    }
}
