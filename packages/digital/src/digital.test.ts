import { describe, expect, test } from "vitest";
import { convert, measurement, kilo, mega, giga, kibi, mebi, gibi } from "@quantits/core";
import { information, bandwidth } from "./dimensions.js";
import {
  bit,
  bits,
  b,
  trit,
  trits,
  kilobyte,
  megabyte,
  gigabyte,
  terabyte,
  petabyte,
  exabyte,
  kibibyte,
  mebibyte,
  gibibyte,
  tebibyte,
  kilotryte,
  megatryte,
  bps,
} from "./units.js";

describe("digital dimensions", () => {
  test("information dimension exists", () => {
    expect(information.type).toBe("Dimension");
    expect(information.name).toBe("Information");
  });

  test("bandwidth dimension is Information / Time", () => {
    expect(bandwidth.type).toBe("Quantity");
    expect(bandwidth.name).toBe("Bandwidth");
    expect(bandwidth.composition.op).toBe("/");
  });
});

describe("basic digital units", () => {
  test("bit unit exists with aliases", () => {
    expect(bit.name).toBe("Bit");
    expect(bit.type).toBe("Unit");
    expect(bits).toBe(bit);
    expect(b).toBe(bit);
  });

  test("trit unit exists with aliases", () => {
    expect(trit.name).toBe("Trit");
    expect(trit.type).toBe("Unit");
    expect(trits).toBe(trit);
  });
});

describe("byte conversions (decimal prefixes)", () => {
  test("kilobyte = 1000 bytes = 8000 bits", () => {
    expect(convert(kilobyte, bit).numberValue()).toBe(8000);
  });

  test("megabyte = 1,000,000 bytes = 8,000,000 bits", () => {
    expect(convert(megabyte, bit).numberValue()).toBe(8_000_000);
  });

  test("gigabyte = 10^9 bytes = 8 * 10^9 bits", () => {
    expect(convert(gigabyte, bit).numberValue()).toBe(8e9);
  });

  test("terabyte = 10^12 bytes = 8 * 10^12 bits", () => {
    expect(convert(terabyte, bit).numberValue()).toBe(8e12);
  });

  test("petabyte = 10^15 bytes = 8 * 10^15 bits", () => {
    expect(convert(petabyte, bit).numberValue()).toBe(8e15);
  });

  test("exabyte = 10^18 bytes = 8 * 10^18 bits", () => {
    expect(convert(exabyte, bit).numberValue()).toBe(8e18);
  });

  test("gigabyte to megabyte", () => {
    expect(convert(gigabyte, megabyte).numberValue()).toBe(1000);
  });

  test("terabyte to gigabyte", () => {
    expect(convert(terabyte, gigabyte).numberValue()).toBe(1000);
  });
});

describe("byte conversions (binary prefixes)", () => {
  test("kibibyte = 1024 bytes = 8192 bits", () => {
    expect(convert(kibibyte, bit).numberValue()).toBe(8192);
  });

  test("mebibyte = 1024^2 bytes = 1024^2 * 8 bits", () => {
    expect(convert(mebibyte, bit).numberValue()).toBe(1048576 * 8);
  });

  test("gibibyte = 1024^3 bytes", () => {
    expect(convert(gibibyte, bit).numberValue()).toBe(1073741824 * 8);
  });

  test("tebibyte = 1024^4 bytes", () => {
    expect(convert(tebibyte, bit).numberValue()).toBe(1099511627776 * 8);
  });

  test("gibibyte to mebibyte", () => {
    expect(convert(gibibyte, mebibyte).numberValue()).toBe(1024);
  });

  test("tebibyte to gibibyte", () => {
    expect(convert(tebibyte, gibibyte).numberValue()).toBe(1024);
  });
});

describe("binary vs decimal prefix comparison", () => {
  test("1 kibibyte > 1 kilobyte", () => {
    const KiB = convert(kibibyte, bit).numberValue();
    const KB = convert(kilobyte, bit).numberValue();
    expect(KiB).toBeGreaterThan(KB);
    expect(KiB / KB).toBeCloseTo(1.024);
  });

  test("1 mebibyte > 1 megabyte", () => {
    const MiB = convert(mebibyte, bit).numberValue();
    const MB = convert(megabyte, bit).numberValue();
    expect(MiB).toBeGreaterThan(MB);
    expect(MiB / MB).toBeCloseTo(1.048576);
  });

  test("1 gibibyte > 1 gigabyte by ~7.4%", () => {
    const GiB = convert(gibibyte, bit).numberValue();
    const GB = convert(gigabyte, bit).numberValue();
    expect(GiB / GB).toBeCloseTo(1.073741824);
  });

  test("the gap increases with larger prefixes", () => {
    const KiBvsKB = convert(kibibyte, bit).numberValue() / convert(kilobyte, bit).numberValue();
    const MiBvsMB = convert(mebibyte, bit).numberValue() / convert(megabyte, bit).numberValue();
    const GiBvsGB = convert(gibibyte, bit).numberValue() / convert(gigabyte, bit).numberValue();
    
    expect(MiBvsMB).toBeGreaterThan(KiBvsKB);
    expect(GiBvsGB).toBeGreaterThan(MiBvsMB);
  });
});

describe("tryte conversions", () => {
  test("kilotryte to trit", () => {
    // 1 tryte = 6 trits, 1 kilotryte = 1000 trytes = 6000 trits
    expect(convert(kilotryte, trit).numberValue()).toBe(6000);
  });

  test("megatryte to kilotryte", () => {
    expect(convert(megatryte, kilotryte).numberValue()).toBe(1000);
  });
});

describe("bandwidth units", () => {
  test("bps (bits per second) exists", () => {
    expect(bps.name).toBe("Bitrate");
    expect(bps.type).toBe("ComposedUnit");
  });
});

describe("real-world scenarios", () => {
  test("how many bits in a 4.7 GB DVD?", () => {
    const dvdBits = convert(measurement(4.7, gigabyte), bit).numberValue();
    expect(dvdBits).toBe(4.7 * 8e9);
  });

  test("how many bits in a 16 GiB RAM stick?", () => {
    const ramBits = convert(measurement(16, gibibyte), bit).numberValue();
    expect(ramBits).toBe(16 * 1073741824 * 8);
  });

  test("500 GB hard drive in GiB", () => {
    // A "500 GB" hard drive is actually ~465 GiB
    const hdInGiB = convert(measurement(500, gigabyte), gibibyte).numberValue();
    expect(hdInGiB).toBeCloseTo(465.66, 1);
  });

  test("1 TB SSD in TiB", () => {
    // A "1 TB" SSD is actually ~0.909 TiB
    const ssdInTiB = convert(measurement(1, terabyte), tebibyte).numberValue();
    expect(ssdInTiB).toBeCloseTo(0.909, 2);
  });
});

describe("measurements", () => {
  test("can create measurements with digital units", () => {
    const file = measurement(100, megabyte);
    expect(file.n).toBe(100);
    expect(file.u).toBe(megabyte);
  });

  test("convert measurement to different unit", () => {
    const file = measurement(2, gigabyte);
    const inMB = convert(file, megabyte).numberValue();
    expect(inMB).toBe(2000);
  });

  test("convert measurement to bits", () => {
    const data = measurement(1, kilobyte);
    const inBits = convert(data, bit).numberValue();
    expect(inBits).toBe(8000);
  });
});

