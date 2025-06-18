const pets = [
  {
    name: 'בובי',
    age: 'שנתיים',
    type: 'כלב',
    image: 'https://static.wixstatic.com/media/f5533d_3365d18253a14c25b5859550d0be9a83~mv2.jpg/v1/fill/w_520,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f5533d_3365d18253a14c25b5859550d0be9a83~mv2.jpg',
    description: 'חברותי, מסתדר עם ילדים, מחכה לבית חם 🐾'
  },
  {
    name: 'לונה',
    age: '3',
    type: 'חתולה',
    image: 'https://www.haderacats.org.il/wp-content/uploads/2019/02/FB_IMG_1550191328471-resized.jpg',
    description: 'רגועה ואוהבת להתכרבל. מתאימה לבית שקט.'
  },
  {
    name: 'רקסי',
    age: '1',
    type: 'כלב',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPGDiySlsWn48J1h6E8ZsPy1TbFrMKAuDtVFn-H=s1360-w1360-h1020-rw',
    description: 'אנרגטי, אוהב לרוץ ולשחק, צריך טיולים יומיים.'
  },
  {
    name: 'מיקה',
    age: '4',
    type: 'חתולה',
    image: 'https://shelterdiary.org/wp-content/uploads/2021/12/IMG_20220328_102654_small-1024x756.jpg',
    description: 'עצמאית, חכמה ומעט ביישנית, אוהבת לשבת ליד החלון.'
  },
  {
    name: 'צ׳ארלי',
    age: '5',
    type: 'כלב',
    image: 'https://www.firststation.co.il/wp-content/uploads/2022/04/%D7%99%D7%95%D7%9D-%D7%90%D7%99%D7%9E%D7%95%D7%A5-%D7%9B%D7%9C%D7%91%D7%99%D7%9D-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%95%D7%A8-%D7%94%D7%A8%D7%A9%D7%A7%D7%95%D7%91%D7%99%D7%A5.jpg',
    description: 'כלב נאמן ורגוע, מסתדר מצוין עם חתולים.'
  },
  {
    name: 'נוגה',
    age: '2',
    type: 'חתולה',
    image: 'https://images1.ynet.co.il/PicServer5/2020/05/28/9998433/99984170100099980645no.jpg',
    description: 'מתוקה וסקרנית, אוהבת לשחק עם חבלים וצעצועים.'
  },
  {
    name: 'רוקי',
    age: '3',
    type: 'כלב',
    image: 'https://zrokli.co.il/wp-content/uploads/2018/11/46519542_1893838587351424_8598196927961497600_o.jpg',
    description: 'חברתי ופעיל, זקוק לטיולים יומיים ואימון.'
  },
  {
    name: 'טופי',
    age: '6',
    type: 'חתולה',
    image: 'https://uploads.homeless.co.il/Carrousel_Images/400/55.jpeg',
    description: 'חתולה מתוקה ורגועה, אוהבת לישון במקומות חמים.'
  },
  {
    name: 'בלו',
    age: '1',
    type: 'כלב',
    image: 'https://tivon4animals.co.il/wp-content/uploads/2025/01/%D7%92%D7%95%D7%A8%D7%99%D7%9D-2-e1738140079586-400x400.jpeg',
    description: 'צעיר ואנרגטי, זקוק להרבה תשומת לב ואהבה.'
  },
  {
    name: 'פינקי',
    age: '3',
    type: 'חתולה',
    image: 'https://isracats.org.il/wp-content/uploads/2023/12/%D7%A1%D7%95%D7%A4%D7%99-2-768x432.jpg',
    description: 'חתולה שובבה ואוהבת חיבוקים, מחפשת בית חם.'
  }
];

let currentIndex = 0;

function updatePet() {
  const img = document.getElementById('petImage');
  const info = document.getElementById('petInfo');
  const pet = pets[currentIndex];
  img.src = pet.image;
  img.alt = `תמונה של ${pet.type} בשם ${pet.name}`;
  info.innerHTML = `
    <strong>שם:</strong> ${pet.name}<br/>
    <strong>גיל:</strong> ${pet.age}<br/>
    <strong>סוג:</strong> ${pet.type}<br/>
    <strong>עליי:</strong> ${pet.description}
  `;
}

function nextPet() {
  currentIndex = (currentIndex + 1) % pets.length;
  updatePet();
}

function prevPet() {
  currentIndex = (currentIndex - 1 + pets.length) % pets.length;
  updatePet();
}

window.onload = updatePet;
