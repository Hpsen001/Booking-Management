import React from "react";

const packages = [
  {
    id: 1,
    name: "ทริปเกาะสมุย",
    price: 5000,
    duration: "2024-11-30 17:00 - 2024-12-04 17:00",
    image: "https://www.takemetour.com/amazing-thailand-go-local/wp-content/uploads/2018/04/06-Koh-Nang-Yuan-Surat-Thani.jpg",
  },
  {
    id: 2,
    name: "ทริปเชียงใหม่",
    price: 3000,
    duration: "2024-12-09 17:00 - 2024-12-11 17:00",
    image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/02/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-1145-x-550-px-17-1.png",
  },
  {
    id: 3,
    name: "ทริปภูเก็ต",
    price: 5000,
    duration: "2024-11-30 17:00 - 2024-12-04 17:00",
    image: "https://www.treehouse-villas.com/wp-content/uploads/2024/01/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9A%E0%B8%84%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%81-2024.webp",
  },
  {
    id: 4,
    name: "ทริปกรุงเทพ",
    price: 5000,
    duration: "2024-11-30 17:00 - 2024-12-04 17:00",
    image: "https://www.agoda.com/wp-content/uploads/2019/10/Wat-Arun-Bangkok-sightseeing.jpg",
  },
  {
    id: 5,
    name: "ทริปเชียงราย",
    price: 3000,
    duration: "2024-12-09 17:00 - 2024-12-11 17:00",
    image: "https://chiangrai.treasury.go.th/web-upload/29x15952c04158bbac3e28e144ab0edb37c/m_banner/871/file_a55ef5613098a9f1f4b60f8ac950ac0b.jpg",
  },
  {
    id: 6,
    name: "ทริปพัทยา",
    price: 5000,
    duration: "2024-11-30 17:00 - 2024-12-04 17:00",
    image: "https://media.thairath.co.th/image/EtWjrCuhJCAxj0uKp1V27X7eLxv50ljrq8EmxtgCQ6dnkwe9vA1.png",
  },
  {
    id: 7,
    name: "ทริปขอยแก่น",
    price: 3000,
    duration: "2024-12-09 17:00 - 2024-12-11 17:00",
    image: "https://ik.imagekit.io/tvlk/blog/2022/01/%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%8702.jpg?tr=dpr-2,w-675",
  },
  {
    id: 8,
    name: "ทริปหัวหิน",
    price: 5000,
    duration: "2024-11-30 17:00 - 2024-12-04 17:00",
    image: "https://www.therockhuahin.com/wp-content/uploads/2024/03/36.-Top-Seacret-Beach-Cafe.webp",
  },
];

const PackagePreview = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Package Preview</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "250px",
              padding: "10px",
            }}
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{pkg.name}</h3>
            <p>Price: {pkg.price} THB</p>
            <p>Duration: {pkg.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePreview;
