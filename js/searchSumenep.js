data = [
    {
        nama: "gili_Labak",
        fasilitas: ["toilet","ibadah", "penginapan","parkir","resto"],
    },
    {
        nama: "pantai_Sembilan",
        fasilitas: ["toilet","ibadah", "penginapan","parkir","resto"],
    },
    {
        nama: "masjid_Agung",
        fasilitas: ["toilet", "ibadah","parkir","resto"],
    },
    {
        nama: "bukit_Tinggi",
        fasilitas: ["toilet", "parkir", "resto"],
    },
    {
        nama: 'daramista',
        fasilitas: ['toilet', 'parkir', 'resto', 'ibadah'],
    },
    {
        nama: 'gili_genting',
        fasilitas: ['toilet', 'penginapan', 'resto'],
    },
    {
        nama: 'gili_iyang',
        fasilitas: ['penginapan', 'resto', 'main'],
    },
    {
        nama: 'bukit_kapur',
        fasilitas: ['toilet', 'parkir', 'resto'],
    },
    {
        nama: 'keraton_sumenep',
        fasilitas: ['toilet'],
    },
    {
        nama: 'pantai_lombang',
        fasilitas: ['toilet', 'parkir', 'resto', 'ibadah'],
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
