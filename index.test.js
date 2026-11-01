
const utils = require('./index');

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    const input = {
      foo: '  foo ',
      bar: 'bar ',
      baz: ' baz',
    };

    const expected = {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
    };

    expect(utils.nesneyiTrimle(input)).toEqual(expected);
  });

  test('[2] orijinal nesneyi değiştirmiyor', () => {
    const input = { isim: '  Ahmet  ' };
    const actual = utils.nesneyiTrimle(input);

    expect(actual).toEqual({ isim: 'Ahmet' });
    expect(input).toEqual({ isim: '  Ahmet  ' });
    expect(actual).not.toBe(input);
  });
});

describe('[Görev 2] verileniTrimle', () => {
  test('[3] verilen propu trimliyor', () => {
    const input = {
      isim: '  jane  ',
      yas: ' 34 ',
    };

    const actual = utils.verileniTrimle(input, 'isim');

    expect(actual.isim).toBe('jane');
  });

  test('[4] diğer proplar trimlenmeden dönüyor', () => {
    const input = {
      isim: '  jane  ',
      yas: ' 34 ',
    };

    const actual = utils.verileniTrimle(input, 'isim');

    expect(actual.yas).toBe(' 34 ');
    expect(input.isim).toBe('  jane  ');
  });
});

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  test('[5] en büyük tamsayıyı döndürüyor', () => {
    const sayilar = [
      { tamsayi: 1 },
      { tamsayi: 3 },
      { tamsayi: 2 },
    ];

    expect(
      utils.enBuyukTamsayiyiBul(sayilar)
    ).toBe(3);
  });
});

describe('[Görev 4] Sayici', () => {
  let sayici;

  beforeEach(() => {
    sayici = new utils.Sayici(3);
  });

  test('[6] ilk çağrıda başlangıç sayısını döndürüyor', () => {
    expect(sayici.asagiSay()).toBe(3);
  });

  test('[7] ikinci çağrıda başlangıç eksi 1 döndürüyor', () => {
    sayici.asagiSay();

    expect(sayici.asagiSay()).toBe(2);
  });

  test('[8] sıfırdan daha aşağı saymıyor', () => {
    expect(sayici.asagiSay()).toBe(3);
    expect(sayici.asagiSay()).toBe(2);
    expect(sayici.asagiSay()).toBe(1);
    expect(sayici.asagiSay()).toBe(0);
    expect(sayici.asagiSay()).toBe(0);
  });
});

describe('[Görev 5] Mevsimler', () => {
  let mevsimler;

  beforeEach(() => {
    mevsimler = new utils.Mevsimler();
  });

  test('[9] ilk çağrıda yaz döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe('yaz');
  });

  test('[10] ikinci çağrıda sonbahar döndürüyor', () => {
    mevsimler.sonraki();

    expect(mevsimler.sonraki()).toBe('sonbahar');
  });

  test('[11] üçüncü çağrıda kış döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();

    expect(mevsimler.sonraki()).toBe('kış');
  });

  test('[12] dördüncü çağrıda ilkbahar döndürüyor', () => {
    for (let i = 0; i < 3; i++) {
      mevsimler.sonraki();
    }

    expect(mevsimler.sonraki()).toBe('ilkbahar');
  });

  test('[13] beşinci çağrıda yaz döndürüyor', () => {
    for (let i = 0; i < 4; i++) {
      mevsimler.sonraki();
    }

    expect(mevsimler.sonraki()).toBe('yaz');
  });

  test('[14] kırkıncı çağrıda ilkbahar döndürüyor', () => {
    let sonuc;

    for (let i = 0; i < 40; i++) {
      sonuc = mevsimler.sonraki();
    }

    expect(sonuc).toBe('ilkbahar');
  });
});

describe('[Görev 6] Araba', () => {
  let focus;

  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30);
  });

  test('[15] sürünce odometer güncelleniyor', () => {
    expect(focus.sur(100)).toBe(100);
    expect(focus.sur(100)).toBe(200);
    expect(focus.odometer).toBe(200);
  });

  test('[16] araba sürmek benzin tüketiyor', () => {
    focus.sur(300);

    expect(focus.depo).toBe(10);
    expect(focus.odometer).toBe(300);
  });

  test('[17] benzin almak sürmeye izin veriyor', () => {
    focus.sur(600);

    expect(focus.sur(100)).toBe(600);

    focus.benzinal(10);

    expect(focus.sur(100)).toBe(700);
  });

  test('[18] dolu depoya benzin eklemek etki etmiyor', () => {
    expect(focus.benzinal(99)).toBe(600);
    expect(focus.depo).toBe(20);
  });
});

describe('[Görev 7] asenkronCiftSayi', () => {
  test('[19] çift sayı verilirse true döndürüyor', async () => {
    const sonuc = await utils.asenkronCiftSayi(2);

    expect(sonuc).toBe(true);
  });

  test('[20] tek sayı verilirse false döndürüyor', async () => {
    const sonuc = await utils.asenkronCiftSayi(3);

    expect(sonuc).toBe(false);
  });
});
