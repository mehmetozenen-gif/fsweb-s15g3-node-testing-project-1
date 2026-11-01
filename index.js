
/**
 * GÖREV 1
 * Nesnenin tüm string özelliklerini trimler.
 * Orijinal nesneyi değiştirmez.
 */
function nesneyiTrimle(obj) {
  const sonuc = {};

  for (const key of Object.keys(obj)) {
    sonuc[key] = obj[key].trim();
  }

  return sonuc;
}

/**
 * GÖREV 2
 * Yalnızca belirtilen özelliği trimler.
 */
function verileniTrimle(obj, prop) {
  return {
    ...obj,
    [prop]: obj[prop].trim(),
  };
}

/**
 * GÖREV 3
 * Nesnelerin içindeki en büyük tamsayi değerini bulur.
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  if (tamsayilar.length === 0) {
    return undefined;
  }

  return Math.max(
    ...tamsayilar.map(item => item.tamsayi)
  );
}

/**
 * GÖREV 4
 * Sıfıra kadar geri sayan sayaç.
 */
function Sayici(ilkSayi) {
  this.sayi = Math.max(0, ilkSayi);

  this.asagiSay = () => {
    const mevcut = this.sayi;

    if (this.sayi > 0) {
      this.sayi--;
    }

    return mevcut;
  };
}

/**
 * GÖREV 5
 * Sırayla mevsimleri döndürür.
 */
function Mevsimler() {
  this.mevsimler = [
    'yaz',
    'sonbahar',
    'kış',
    'ilkbahar',
  ];

  this.index = 0;

  this.sonraki = () => {
    const mevsim = this.mevsimler[this.index];

    this.index =
      (this.index + 1) % this.mevsimler.length;

    return mevsim;
  };
}

/**
 * GÖREV 6
 * Araba nesnesi.
 *
 * isim: Arabanın adı
 * depoBenzin: Depo kapasitesi (litre)
 * kml: Litre başına gidilebilecek kilometre
 */
function Araba(isim, depoBenzin, kml) {
  this.isim = isim;
  this.depoBenzin = depoBenzin;
  this.kml = kml;

  this.odometer = 0;
  this.depo = depoBenzin;

  /**
   * Arabayı belirtilen mesafe kadar sür.
   * Benzin yetmiyorsa yalnızca mümkün olan yolu gider.
   */
  this.sur = (gidilecekyol) => {
    const mesafe = Number(gidilecekyol);

    if (!Number.isFinite(mesafe) || mesafe <= 0) {
      return this.odometer;
    }

    if (this.depo <= 0 || this.kml <= 0) {
      return this.odometer;
    }

    const maksimumMesafe = this.depo * this.kml;
    const gidilenMesafe = Math.min(
      mesafe,
      maksimumMesafe
    );

    this.odometer += gidilenMesafe;
    this.depo = Math.max(
      0,
      this.depo - gidilenMesafe / this.kml
    );

    return this.odometer;
  };

  /**
   * Depoya benzin ekle.
   * Kapasitenin üstüne çıkmaz.
   * Eklenen benzinle gidilebilecek toplam mesafeyi döndürür.
   */
  this.benzinal = (litre) => {
    const miktar = Number(litre);

    if (Number.isFinite(miktar) && miktar > 0) {
      this.depo = Math.min(
        this.depoBenzin,
        this.depo + miktar
      );
    }

    return this.depo * this.kml;
  };
}

/**
 * GÖREV 7
 * Sayının çift olup olmadığını Promise ile döndürür.
 */
function asenkronCiftSayi(sayi) {
  return Promise.resolve(sayi % 2 === 0);
}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
