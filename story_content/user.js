function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bcGgN0pmuX":
        Script1();
        break;
  }
}

function Script1()
{
  // Cek apakah musik sudah jalan? Kalau belum, baru nyalakan.
if (window.bgm === undefined) {
    // Panggil file musiknya
    window.bgm = new Audio('Opening.mp3'); 
    
    // Settingan wajib
    window.bgm.loop = true;  // Biar muter terus
    window.bgm.volume = 0.2; // Volume 20% (Biar gak berisik)
    
    // Mainkan!
    window.bgm.play().catch(function(error) {
        console.log("Menunggu interaksi user buat play musik...");
    });
}
}

