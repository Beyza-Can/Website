
  document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImg = document.querySelector('.main-img img');
    const galeriYazisi = document.getElementById('galeri-yazisi');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function () {
        mainImg.src = thumbnail.src;
        mainImg.alt = thumbnail.alt;
        const index = thumbnail.dataset.index;
        galeriYazisi.textContent = index + "/4"; // Gösterim: 1/4, 2/4, 3/4, 4/4
      });
    });
  });

  // Tüm alt kutucukları seç
var altKutucuklar = document.querySelectorAll('.alt-sol, .alt-orta, .alt-sag');

// Tüm alt kutucuklarına tıklama olayını ekle
altKutucuklar.forEach(function(kutucuk) {
    kutucuk.addEventListener('click', function() {
        // Tüm alt kutucukların arka plan rengini varsayılan renge sıfırla
        altKutucuklar.forEach(function(item) {
            item.style.backgroundColor = '#f0f0f0';
        });

        // Tıklanan kutucuğun arka plan rengini değiştir
        this.style.backgroundColor = '#3c00ff';

        // Tıklanan kutucuğun içeriğini üst kısımdaki yazı kutucuğuna kopyala
        var baslik = this.querySelector('h3').textContent;
        var icerik = this.querySelector('p').textContent;
        document.querySelector('.ust-sag h3').textContent = baslik;
        document.querySelector('.ust-sag p').textContent = icerik;
    });
});

document.getElementById("gonderButton").addEventListener("click", function() {
  alert("Mesajınız başarıyla gönderildi!");
});
document.getElementById("araButton").addEventListener("click", function() {
  alert("Aramanız başarıyla başlatıldı!");
});
document.getElementById("devamButton").addEventListener("click", function() {
  alert("Devamı için yönlendiriliyorsunuz!");
});






    
