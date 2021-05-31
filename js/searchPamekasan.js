data = [
    {
        nama: "api",
        fasilitas: ["toilet", "ibadah", "penginapan"],
    },
    {
        nama: "Goa_Blaban",
        fasilitas: ["toilet", "resto", "penginapan"],
    },
    {
        nama: "pantai_Jumiang",
        fasilitas: ["main"],
    },
    {
        nama: "bukit_Cinta",
        fasilitas: ["toilet", "parkir", "penginapan"],
    },
    {
        nama: 'pantai_talang_siring',
        fasilitas: ['resto', 'parkir', 'main'],
    },
    {
        nama: 'bukit_brukoh',
        fasilitas: ['resto', 'parkir'],
    },
    {
        nama: 'pumcak_ratu',
        fasilitas: ['resto', 'parkir', 'main'],
    },
    {
        nama: 'pantai_mangrove_lembung',
        fasilitas: ['resto', 'parkir'],
    },
    {
        nama: 'vihara_avalokitesvara',
        fasilitas: ['toilet', 'parkir', 'ibadah'],
    },
    {
        nama: 'pantai_batu_kerbuy',
        fasilitas: ['resto', 'parkir'],
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
