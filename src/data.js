import img1 from './img/icture-1.jpg';
import img2 from './img/icture-2.png';
import img3 from './img/icture-3.jpg';
import img4 from './img/icture-4.jpg';
import img5 from './img/icture-5.jpg';
import img6 from './img/icture-6.jpg';
import img7 from './img/icture-7.jpg';
import img8 from './img/icture-8.jpg';

export const data = [
  {
    id: 1,
    title: "SP-1 | სამზარეულო | თურქული",
    img: img1,
    category: "Kitchen",
    price: 1250.00,
    description: "მაღალი ხარისხის სამზარეულო მარმარილოს ეფექტით.",
    details: {
      material: "თურქული პრიალა",
      producer: "Zatara",
      dimensions: { general: "1.80 მ" },
      colors: ["პრიალა ყავისფერი", "მარმარილოსფერი"],
    },
  },
  {
    id: 2,
    title: "მაგიდა ლითონის ფეხებით",
    img: img2,
    category: "Tables",
    price: 199.00,
    description: "ლითონის ფეხებით მაგიდა, ზომა: 70x120 სმ.",
    details: {
      material: "ლამინირებული მდფ",
      producer: "Zatara",
      dimensions: { general: "70x120 სმ" },
      colors: ["თეთრი", "მუქი მუხა"],
    },
  },
  {
    id: 3,
    title: "გასაშლელი მაგიდა typ 92 EVORA",
    img: img3,
    category: "Tables",
    price: 500.00,
    description: "გასაშლელი მაგიდა მწვანე და მუხისფერი კომბინაციით.",
    details: {
      material: "მდფ/მეტალი",
      producer: "Zatara",
      dimensions: { general: "220×90; 220×100" },
      colors: ["მწვანე", "მუხისფერი"],
    },
  },
  {
    id: 4,
    title: "MDF სამზარეულო მაღალი ხარისხის",
    img: img4,
    category: "Kitchen",
    price: 1250.00,
    description: "მაღალი ხარისხის MDF სამზარეულო პრიალა ზედაპირით.",
    details: {
      material: "თურქული პრიალა",
      producer: "zatara",
      dimensions: { general: "1.80 მ" },
      colors: ["პრიალა ყავისფერი"],
    },
  },
  {
    id: 5,
    title: "MDF სამზარეულო მაღალი ხარისხის",
    img: img5,
    category: "Wardboards",
    price: 1250.00,
    description: "პრაქტიკული და გამძლე სამზარეულო მუქ ფერებში.",
    details: {
      material: "თურქული პრიალა",
      producer: "zatara",
      dimensions: { general: "1.80 მ" },
      colors: ["პრიალა ყავისფერი"],
    },
  },
  {
    id: 6,
    title: "SP-1 | სამზარეულო | Selsa Mobilya",
    img: img6,
    category: "Kitchen",
    price: 2000,
    description: "თანამედროვე L-ფორმის სამზარეულო კონტრასტული ფერებით და პრაქტიკული დიზაინით.",
    details: {
      material: "ლამინირებული MDF / ხის ეფექტით და თეთრი პრიალა",
      producer: "Selsa Mobilya",
      dimensions: {
        general: "260x90; 220x100"
      },
      colors: [
        "მუქი ხისფერი (მუხის ეფექტით)",
        "თეთრი",
        "ღია ნაცრისფერი (კედლის ფილა)"
      ],
      features: [
        "ჩაშენებული ღუმელი და გაზქურა",
        "ჩაშენებული ნიჟარა",
        "ზედა და ქვედა კარადები უამრავი საცავის სივრცით",
        "შუშის კარებიანი კარადები",
        "ინტეგრირებული სარეცხი მანქანა",
        "თანამედროვე შავი სახელურები"
      ]
    }
  },
  {
    id: 7,
    title: "SP-2 | გარდერობი | Aristo სტილი",
    img: img7,
    category: "Wardboards",
    price: 1350,
    description: "თანამედროვე დიზაინის, კომპაქტური და ფუნქციური გარდერობი სარკეებით, რომელიც იდეალურია სადარბაზოსთვის ან საძინებლისთვის.",
    details: {
      material: "ლამინირებული MDF / ხის, პრიალა და სარკის ზედაპირი",
      producer: "Aristo (სტილით, ან მსგავსი მწარმოებელი)",
      dimensions: {
        general: "260x160;"
      },
      colors: [
        "ნათელი ხისფერი (კედლის ეფექტი)",
        "ღია ნაცრისფერი/კრემისფერი",
        "მუქი ნაცრისფერი/ანტრაციტი",
        "სარკისფერი"
      ],
      features: [
        "მოცურებადი კარები",
        "დიდი სარკის ზედაპირი",
        "ღია თაროები დეკორაციისთვის ან წიგნებისთვის",
        "ინტეგრირებული განათება (ჭერზე)",
        "თანამედროვე მინიმალისტური დიზაინი",
        "კომბინირებული მასალები: ხე, მეთი და პრიალა ზედაპირები"
      ]
    }
  },
  {
    id: 8,
    title: "TV კედელი / მედია სისტემა",
    img: img8,
    category: "Wardboards",
    price: 1100,
    description: "თანამედროვე და მრავალფუნქციური TV კედელი ინტეგრირებული სათავსოებით და დეკორატიული ელემენტებით.",
    details: {
      material: "ლამინირებული MDF / პრიალა თეთრი და მუქი ხისფერი (ვენგე)",
      producer: "უცნობი",
      dimensions: {
        general: "200x160"
      },
      colors: [
        "თეთრი (პრიალა)",
        "მუქი ხისფერი (ვენგე/კაკალი)",
        "გამჭვირვალე მინა"
      ],
      features: [
        "ჩაშენებული ადგილი ტელევიზორისთვის (ვერტიკალური ფიცრებით გაფორმებული ზურგი)",
        "ზედა დაკიდული კარადები",
        "ქვედა უჯრები და კარადები",
        "ვერტიკალური ვიტრინები მინის კარებით",
        "თანამედროვე შავი სახელურები",
        "კომბინირებული სათავსოები - დახურული და ღია (ვიტრინები)"
      ]
    }
  }
];