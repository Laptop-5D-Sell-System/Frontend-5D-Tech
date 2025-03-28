import { NextApiRequest, NextApiResponse } from 'next';

const products = [
    {
      id: 1,
      name: "Acer Aspire 5",
      category: "Laptop",
      brand: "Acer",
      price: 14500000,
      oldPrice: 15990000,
      discount: 9,
      available: 9,
      quantity: 40,
      cpu: "Intel Core i5-1235U",
      ram: "8GB",
      storage: "512GB SSD",
      screen: "15.6 inch, Full HD",
      gpu: "Intel Iris Xe Graphics",
      battery: "48Wh",
      os: "Windows 11",
      description: "Laptop phổ thông với hiệu năng ổn định, phù hợp cho học tập và văn phòng.",
      image: "/images/laptop.jpeg"
    },
    {
      id: 2,
      name: "Dell XPS 13",
      category: "Laptop",
      brand: "Dell",
      price: 31990000,
      oldPrice: 34990000,
      discount: 9,
      available: 8,
      quantity: 40,
      cpu: "Intel Core i7-1360P",
      ram: "16GB",
      storage: "1TB SSD",
      screen: "13.4 inch, 3.5K OLED",
      gpu: "Intel Iris Xe Graphics",
      battery: "52Wh",
      os: "Windows 11",
      description: "Ultrabook cao cấp với màn hình tuyệt đẹp và hiệu năng mạnh mẽ.",
      image: "/images/laptop.jpeg"
    },
    {
      id: 3,
      name: "HP Spectre x360",
      category: "Laptop",
      brand: "HP",
      price: 33990000,
      oldPrice: 37990000,
      discount: 11,
      available: 12,
      quantity: 40,
      cpu: "Intel Core i7-1355U",
      ram: "16GB",
      storage: "1TB SSD",
      screen: "13.5 inch, 3K2K OLED",
      gpu: "Intel Iris Xe Graphics",
      battery: "66Wh",
      os: "Windows 11",
      description: "Laptop 2-in-1 linh hoạt, thiết kế sang trọng với màn hình cảm ứng sắc nét.",
      image: "/images/laptop.jpeg"
    },
    {
      id: 4,
      name: "MacBook Air M2",
      category: "Laptop",
      brand: "Apple",
      price: 28990000,
      oldPrice: 31990000,
      discount: 9,
      available: 8,
      quantity: 40,
      cpu: "Apple M2",
      ram: "8GB",
      storage: "256GB SSD",
      screen: "13.6 inch, Retina",
      gpu: "Apple GPU 8-core",
      battery: "52.6Wh",
      os: "macOS",
      description: "Laptop mỏng nhẹ với chip M2 mạnh mẽ và thời lượng pin xuất sắc.",
      image: "/images/laptop.jpeg"
    },
    {
      id: 5,
      name: "Lenovo ThinkPad X1 Carbon",
      category: "Laptop",
      brand: "Lenovo",
      price: 35990000,
      oldPrice: 39990000,
      discount: 10,
      available: 8,
      quantity: 40,
      cpu: "Intel Core i7-1360P",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14 inch, WUXGA",
      gpu: "Intel Iris Xe Graphics",
      battery: "57Wh",
      os: "Windows 11",
      description: "Laptop doanh nhân với độ bền cao và bàn phím tiện dụng.",
      image: "/images/laptop.jpeg"
    },
    {
      id: 11,
      name: "Sony WH-1000XM4",
      category: "Tai nghe",
      brand: "Sony",
      price: 7990000,
      oldPrice: 8990000,
      discount: 11,
      available: 15,
      quantity: 50,
      type: "Over-ear",
      connection: "Bluetooth 5.0",
      battery: "30 giờ",
      description: "Tai nghe chống ồn cao cấp với âm thanh chất lượng tuyệt vời.",
      image: "/images/laptop.jpeg"
  },

  // Chuột máy tính
  {
      id: 12,
      name: "Logitech MX Master 3",
      category: "Chuột máy tính",
      brand: "Logitech",
      price: 2990000,
      oldPrice: 3490000,
      discount: 14,
      available: 20,
      quantity: 60,
      connection: "Bluetooth & Wireless USB",
      battery: "70 ngày sử dụng",
      dpi: "4000 DPI",
      description: "Chuột không dây cao cấp dành cho dân văn phòng và lập trình viên.",
      image: "/images/laptop.jpeg"
  },

  // Màn hình
  {
      id: 13,
      name: "Dell UltraSharp U2723QE",
      category: "Màn hình",
      brand: "Dell",
      price: 13990000,
      oldPrice: 14990000,
      discount: 7,
      available: 10,
      quantity: 30,
      size: "27 inch",
      resolution: "4K UHD",
      panel: "IPS",
      refreshRate: "60Hz",
      description: "Màn hình 4K với độ chính xác màu sắc cao, phù hợp cho đồ họa và lập trình.",
      image: "/images/laptop.jpeg"
  },

  // Bàn phím
  {
      id: 14,
      name: "Keychron K6",
      category: "Bàn phím",
      brand: "Keychron",
      price: 2490000,
      oldPrice: 2990000,
      discount: 17,
      available: 25,
      quantity: 70,
      connection: "Bluetooth & USB-C",
      switchType: "Gateron Red",
      backlight: "RGB",
      description: "Bàn phím cơ không dây gọn nhẹ, phù hợp cho làm việc và chơi game.",
      image: "/images/laptop.jpeg"
  },

  // Bộ điều khiển
  {
      id: 15,
      name: "Xbox Wireless Controller",
      category: "Bộ điều khiển",
      brand: "Microsoft",
      price: 1590000,
      oldPrice: 1790000,
      discount: 11,
      available: 18,
      quantity: 50,
      connection: "Bluetooth & USB-C",
      battery: "40 giờ sử dụng",
      description: "Tay cầm chơi game không dây chính hãng Microsoft với độ nhạy cao.",
      image: "/images/laptop.jpeg"
  },

  // Máy ảnh
  {
      id: 16,
      name: "Canon EOS M50 Mark II",
      category: "Máy ảnh",
      brand: "Canon",
      price: 16990000,
      oldPrice: 17990000,
      discount: 6,
      available: 12,
      quantity: 30,
      sensor: "APS-C 24.1MP",
      lens: "EF-M 15-45mm",
      video: "4K UHD",
      description: "Máy ảnh mirrorless nhỏ gọn, phù hợp cho vlog và chụp ảnh du lịch.",
      image: "/images/laptop.jpeg"
  },

  // Dây sạc
  {
      id: 17,
      name: "Anker PowerLine III",
      category: "Dây sạc",
      brand: "Anker",
      price: 399000,
      oldPrice: 499000,
      discount: 20,
      available: 50,
      quantity: 200,
      length: "1.8m",
      connection: "USB-C to Lightning",
      description: "Dây sạc bền bỉ hỗ trợ sạc nhanh cho iPhone và iPad.",
      image: "/images/laptop.jpeg"
  }
];

export async function GET(req: Request) {
    return new Response(JSON.stringify(products), { status: 200 });
}

