import { describe, expect, test } from "vitest";
import { dimension, unit, conversionUnit } from "./types.js";
import {
  sum,
  subtract,
  equal,
  basicConv,
  kilo,
  mega,
  giga,
  tera,
  peta,
  exa,
  zetta,
  yotta,
  deci,
  centi,
  mili,
  micro,
  nano,
  pico,
  femto,
  atto,
  zepto,
  yocto,
  kibi,
  mebi,
  gibi,
  tebi,
  pebi,
  exbi,
  zebi,
  yobi,
  sixty,
  conv,
} from "./helpers.js";
import { convert } from "./convert.js";

describe("conversion operations", () => {
  const length = dimension("Length");
  const meter = unit("Meter", length);

  describe("sum", () => {
    test("creates addition conversion", () => {
      const s = sum(meter, 10);
      expect(s.u).toBe(meter);
      expect(s.op).toBe("+");
      expect(s.n).toBe(10);
    });
  });

  describe("subtract", () => {
    test("creates subtraction conversion", () => {
      const s = subtract(meter, 5);
      expect(s.u).toBe(meter);
      expect(s.op).toBe("-");
      expect(s.n).toBe(5);
    });
  });

  describe("equal", () => {
    test("creates multiplication conversion", () => {
      const e = equal(1000, meter);
      expect(e.u).toBe(meter);
      expect(e.op).toBe("*");
      expect(e.n).toBe(1000);
    });
  });
});

describe("metric prefixes (SI)", () => {
  const length = dimension("Length");
  const meter = unit("Meter", length);

  test("kilo - 10^3", () => {
    const km = kilo(meter);
    expect(km.name).toBe("Kilometer");
    expect(km.type).toBe("ConversionUnit");
    expect(convert(km, meter).numberValue()).toBe(1000);
  });

  test("mega - 10^6", () => {
    const Mm = mega(meter);
    expect(Mm.name).toBe("Megameter");
    expect(convert(Mm, meter).numberValue()).toBe(1e6);
  });

  test("giga - 10^9", () => {
    const Gm = giga(meter);
    expect(Gm.name).toBe("Gigameter");
    expect(convert(Gm, meter).numberValue()).toBe(1e9);
  });

  test("tera - 10^12", () => {
    const Tm = tera(meter);
    expect(Tm.name).toBe("Terameter");
    expect(convert(Tm, meter).numberValue()).toBe(1e12);
  });

  test("peta - 10^15", () => {
    const Pm = peta(meter);
    expect(Pm.name).toBe("Petameter");
    expect(convert(Pm, meter).numberValue()).toBe(1e15);
  });

  test("exa - 10^18", () => {
    const Em = exa(meter);
    expect(Em.name).toBe("Exameter");
    expect(convert(Em, meter).numberValue()).toBe(1e18);
  });

  test("zetta - 10^21", () => {
    const Zm = zetta(meter);
    expect(Zm.name).toBe("Zettameter");
    expect(convert(Zm, meter).numberValue()).toBe(1e21);
  });

  test("yotta - 10^24", () => {
    const Ym = yotta(meter);
    expect(Ym.name).toBe("Yottameter");
    expect(convert(Ym, meter).numberValue()).toBe(1e24);
  });

  test("deci - 10^-1", () => {
    const dm = deci(meter);
    expect(dm.name).toBe("Decimeter");
    expect(convert(dm, meter).numberValue()).toBeCloseTo(0.1);
  });

  test("centi - 10^-2", () => {
    const cm = centi(meter);
    expect(cm.name).toBe("Centimeter");
    expect(convert(cm, meter).numberValue()).toBeCloseTo(0.01);
  });

  test("mili - 10^-3", () => {
    const mm = mili(meter);
    expect(mm.name).toBe("Milimeter");
    expect(convert(mm, meter).numberValue()).toBeCloseTo(0.001);
  });

  test("micro - 10^-6", () => {
    const um = micro(meter);
    expect(um.name).toBe("Micrometer");
    expect(convert(um, meter).numberValue()).toBeCloseTo(1e-6);
  });

  test("nano - 10^-9", () => {
    const nm = nano(meter);
    expect(nm.name).toBe("Nanometer");
    expect(convert(nm, meter).numberValue()).toBeCloseTo(1e-9);
  });

  test("pico - 10^-12", () => {
    const pm = pico(meter);
    expect(pm.name).toBe("Picometer");
    expect(convert(pm, meter).numberValue()).toBeCloseTo(1e-12);
  });

  test("femto - 10^-15", () => {
    const fm = femto(meter);
    expect(fm.name).toBe("Femtometer");
    expect(convert(fm, meter).numberValue()).toBeCloseTo(1e-15);
  });

  test("atto - 10^-18", () => {
    const am = atto(meter);
    expect(am.name).toBe("Attometer");
    expect(convert(am, meter).numberValue()).toBeCloseTo(1e-18);
  });

  test("zepto - 10^-21", () => {
    const zm = zepto(meter);
    expect(zm.name).toBe("Zeptometer");
    expect(convert(zm, meter).numberValue()).toBeCloseTo(1e-21);
  });

  test("yocto - 10^-24", () => {
    const ym = yocto(meter);
    expect(ym.name).toBe("Yoctometer");
    expect(convert(ym, meter).numberValue()).toBeCloseTo(1e-24);
  });
});

describe("binary prefixes (IEC)", () => {
  const info = dimension("Information");
  const byte = unit("Byte", info);

  test("kibi - 2^10 (1024)", () => {
    const KiB = kibi(byte);
    expect(KiB.name).toBe("Kibibyte");
    expect(convert(KiB, byte).numberValue()).toBe(1024);
  });

  test("mebi - 2^20", () => {
    const MiB = mebi(byte);
    expect(MiB.name).toBe("Mebibyte");
    expect(convert(MiB, byte).numberValue()).toBe(1048576);
  });

  test("gibi - 2^30", () => {
    const GiB = gibi(byte);
    expect(GiB.name).toBe("Gibibyte");
    expect(convert(GiB, byte).numberValue()).toBe(1073741824);
  });

  test("tebi - 2^40", () => {
    const TiB = tebi(byte);
    expect(TiB.name).toBe("Tebibyte");
    expect(convert(TiB, byte).numberValue()).toBe(1099511627776);
  });

  test("pebi - 2^50", () => {
    const PiB = pebi(byte);
    expect(PiB.name).toBe("Pebibyte");
    expect(convert(PiB, byte).numberValue()).toBe(1125899906842624);
  });

  test("exbi - 2^60", () => {
    const EiB = exbi(byte);
    expect(EiB.name).toBe("Exbibyte");
    // Note: JavaScript number precision limit
    expect(convert(EiB, byte).numberValue()).toBeCloseTo(1152921504606847000, -3);
  });

  test("binary vs decimal: KiB vs KB", () => {
    const KiB = kibi(byte);
    const KB = kilo(byte);
    
    // 1 KiB = 1024 bytes, 1 KB = 1000 bytes
    expect(convert(KiB, byte).numberValue()).toBe(1024);
    expect(convert(KB, byte).numberValue()).toBe(1000);
    
    // KiB is 2.4% larger than KB
    const ratio = convert(KiB, byte).numberValue() / convert(KB, byte).numberValue();
    expect(ratio).toBeCloseTo(1.024);
  });

  test("binary vs decimal: GiB vs GB", () => {
    const GiB = gibi(byte);
    const GB = giga(byte);
    
    // 1 GiB = 1073741824 bytes, 1 GB = 1000000000 bytes
    expect(convert(GiB, byte).numberValue()).toBe(1073741824);
    expect(convert(GB, byte).numberValue()).toBe(1e9);
    
    // GiB is ~7.4% larger than GB
    const ratio = convert(GiB, byte).numberValue() / convert(GB, byte).numberValue();
    expect(ratio).toBeCloseTo(1.073741824);
  });
});

describe("sixty helper", () => {
  const time = dimension("Time");
  const second = unit("Second", time);

  test("creates 60x multiplication", () => {
    const minute = sixty(second, "Minute");
    expect(minute.name).toBe("Minute");
    expect(convert(minute, second).numberValue()).toBe(60);
  });

  test("can be chained", () => {
    const minute = sixty(second, "Minute");
    const hour = sixty(minute, "Hour");
    
    expect(convert(hour, minute).numberValue()).toBe(60);
    expect(convert(hour, second).numberValue()).toBe(3600);
  });
});

describe("conv - unified multi-step conversion", () => {
  const temp = dimension("Temperature");
  const kelvin = unit("Kelvin", temp);

  test("two-step conversion", () => {
    // Celsius = Kelvin - 273.15 (or Kelvin = Celsius + 273.15)
    const celsius = conv(
      "Celsius",
      kelvin,
      ["+", 273.15] as const
    );
    
    expect(celsius.name).toBe("Celsius");
    expect(celsius.type).toBe("ConversionUnit");
  });

  test("four-step conversion (Fahrenheit)", () => {
    // Fahrenheit to Kelvin: (F - 32) * 5 / 9 + 273.15
    const fahrenheit = conv(
      "Fahrenheit",
      kelvin,
      ["-", 32] as const,
      ["*", 5] as const,
      ["/", 9] as const,
      ["+", 273.15] as const
    );
    
    expect(fahrenheit.name).toBe("Fahrenheit");
    
    // 32°F = 0°C = 273.15K
    const result = convert(
      { type: "Measurement" as const, n: 32, u: fahrenheit },
      kelvin
    );
    expect(result.numberValue()).toBeCloseTo(273.15);
    
    // 212°F = 100°C = 373.15K
    const boiling = convert(
      { type: "Measurement" as const, n: 212, u: fahrenheit },
      kelvin
    );
    expect(boiling.numberValue()).toBeCloseTo(373.15);
  });

  test("three-step conversion", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    
    // A weird unit: (meter * 2 + 10) / 5
    const weirdUnit = conv(
      "WeirdUnit",
      meter,
      ["*", 2] as const,
      ["+", 10] as const,
      ["/", 5] as const
    );
    
    expect(weirdUnit.name).toBe("WeirdUnit");
    expect(weirdUnit.type).toBe("ConversionUnit");
  });
});

describe("prefix chaining", () => {
  const length = dimension("Length");
  const meter = unit("Meter", length);

  test("kilo(kilo(x)) = mega(x)", () => {
    const megameter = mega(meter);
    const kilometerOfKilometer = kilo(kilo(meter));
    
    expect(convert(megameter, meter).numberValue()).toBe(
      convert(kilometerOfKilometer, meter).numberValue()
    );
  });

  test("mili(kilo(x)) = x", () => {
    const miliKilometer = mili(kilo(meter));
    expect(convert(miliKilometer, meter).numberValue()).toBe(1);
  });

  test("micro(mega(x)) = x", () => {
    const microMegameter = micro(mega(meter));
    expect(convert(microMegameter, meter).numberValue()).toBe(1);
  });
});

describe("basicConv", () => {
  const length = dimension("Length");
  const meter = unit("Meter", length);

  test("creates conversion with custom prefix", () => {
    const doubleUnit = basicConv(meter, "Double", 2);
    expect(doubleUnit.name).toBe("Doublemeter");
    expect(convert(doubleUnit, meter).numberValue()).toBe(2);
  });

  test("name is lowercase of unit name", () => {
    const halfUnit = basicConv(meter, "Half", 0.5);
    expect(halfUnit.name).toBe("Halfmeter");
  });
});

