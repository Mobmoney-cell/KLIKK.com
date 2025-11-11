// Finxpire products
const products = [
  {
    id: 'amm',
    title: 'AMM Course',
    description: 'Learn Affiliate Marketing Mastery (AMM) and boost your online income.',
    img: 'amm-logo.png',
    affiliate: 'https://finxpire.com/product/amm?af_id=Rml2Ri9SeVZZVFNrMCsrNnBYT3JaUT09-MjI2NjAtMjI='
  },
  {
    id: 'amazonkdp',
    title: 'Amazon KDP Mastery',
    description: 'Start your Amazon KDP journey and publish your first book successfully.',
    img: 'download (1).jpg',
    affiliate: 'https://finxpire.com/product/amazonkdp?af_id=NGhVN0QwN2w1UmJ2VHB4Q1dvU0t5QT09-MjI2NjAtMjE='
  },
  {
    id: 'passive income',
    title: 'passive income blueprint',
    description: 'Learn how to earn online effortlessly with Passive Income Blueprint.',
    img: '1.png',
    affiliate: 'https://finxpire.com/product/pibwak?af_id=ZzFsVFN0Ymx4ZlNBcmNJMmJEdkh1dz09-MjI2NjAtMjM='    
  },
  {
     id: 'Stellar Publishing',
    title: 'Stellar Publishing Guide',
    description: 'Turn your ideas into income with Stellar Publishing Guide.',
    img: 'download (2).jpg',
    affiliate: 'https://finxpire.com/product/spg?af_id=bldsV0pLcUxIVXgwUitkR3lYcm9WUT09-MjI2NjAtMjQ='
  },
   {
     id: 'Digital Product Creation',
    title: 'Digital Product Creation Blueprint',
    description: 'Learn how to create and sell digital products that make money 24/7.',
    img: '2.jpg',
    affiliate: 'https://finxpire.com/product/dpcb?af_id=TW1YQ2poMzhkbVFYTGdJZ1lmWDQwQT09-MjI2NjAtMjU='
  },
   {
     id: 'Naija To Canada Japa System',
    title: 'The Naija To Canada Japa System',
    description: 'Your step-by-step guide to relocating from Nigeria to Canada legally and easily.',
    img: '3.png',
    affiliate: 'https://finxpire.com/product/canadajapa?af_id=dTZ2RUdITHI0VEZ3UVVrWEkrMEpaZz09-MjI2NjAtMjY='
  },
  {
     id: 'Master Amazon KDP in 7days for Smartphone',
    title: 'Master Amazon KDP in 7days for Smartphone',
    description: 'Publish your first book and start earning — no laptop needed.',
    img: '4.jpg',
    affiliate: 'https://finxpire.com/product/maks?af_id=bDB5S0xCZG9tMkFvaGE1WUphd2JDUT09-MjI2NjAtMjk='
  },
   {
     id: 'The Canada Japa Work Permit Handbook',
    title: 'The Canada Japa Work Permit Handbook',
    description: 'Work and live in Canada — get the proven Japa guide.',
    img: '5.png',
    affiliate: 'https://finxpire.com/product/canp?af_id=K2puNFpZeEZWZVdRRVVRbDRnVDJFUT09-MjI2NjAtMzI='
  },
   {
     id: 'Amazon KDP Income Generator For Smartphone and Laptop',
    title: 'Amazon KDP Income Generator For Smartphone and Laptop',
    description: 'Amazon KDP Income Generator For Smartphone and Laptop',
    img: '6.jpg',
    affiliate: 'https://finxpire.com/product/kdpig?af_id=Z21kbjVKZ1dkTGYzZTZxYzhib093dz09-MjI2NjAtMzM='
  },
  {
     id: 'Mayor PayPal Mastery',
    title: 'Mayor PayPal Mastery',
    description: 'Your step-by-step guide to unlocking PayPal in Nigeria.',
    img: '7.jpg',
    affiliate: 'https://finxpire.com/product/mpm?af_id=dWtnVFZyUlZSejlTRDZxSUp1cWhCUT09-MjI2NjAtMzQ='
  },
  {
     id: 'Kobo Writing Life For Smartphone',
    title: 'Kobo Writing Life For Smartphone',
    description: 'Learn how to write, publish, and earn on Kobo — no laptop needed.',
    img: '8.png',
    affiliate: 'https://finxpire.com/product/kobo?af_id=QXlRdHJFZ2FBVjhiRkwvQWtETWEzUT09-MjI2NjAtMzU='
  },
   {
     id: 'Automated Amazon KDP',
    title: 'Automated Amazon KDP',
    description: 'Discover how to automate your KDP publishing and profits.',
    img: '9.jpg',
    affiliate: 'https://finxpire.com/product/automatedkdp/?af_id=RlQwa3g2dzB4WlFLTWxBbGxZUlpwZz09-MjI2NjAtMzc='
  },
  {
     id: 'Profitable Facebook And Instagram Ads & Marketing Guide',
    title: 'Profitable Facebook And Instagram Ads & Marketing Guide',
    description: 'Learn how to run ads that attract buyers and make real profits.',
    img: '10.jpg',
    affiliate: 'https://finxpire.com/product/pfamg?af_id=THFabFdqU1ljWWYwTmh4R3BkV0hndz09-MjI2NjAtMzg='
  },
   {
     id: 'Organic Traffic ATM Blueprint',
    title: 'Organic Traffic ATM Blueprint',
    description: 'Your blueprint to getting free, targeted website visitors.',
    img: '11.png',
    affiliate: 'https://finxpire.com/product/otatm?af_id=M1FoZXM4LzRUSTZqMDdhNDh5VkNCZz09-MjI2NjAtMzk='
  },
  {
     id: 'BECOME A CCTV EXPERT IN 30 DAYS',
    title: 'BECOME A CCTV EXPERT IN 30 DAYS',
    description: 'Become a certified CCTV expert fast and start earning.',
    img: '12.jpg',
    affiliate: 'http://finxpire.com/product/bace?af_id=SGF2VXY5TVp4K3pGemZQaGJtdVg4dz09-MjI2NjAtMzY='
  },
  {
     id: 'CPA Dollar Academy',
    title: 'CPA Dollar Academy',
    description: 'Learn to make money online with CPA marketing strategies.',
    img: '13.jpg',
    affiliate: 'https://finxpire.com/product/cda?af_id=MHJkUEs2ZjVCNVdnNEJzWkwyN2liUT09-MjI2NjAtNDA='
  },
    {
     id: 'THE UPWORK MASTERMIND PROGRAM',
    title: 'THE UPWORK MASTERMIND PROGRAM',
    description: 'From beginner to pro — dominate Upwork with proven strategies.',
    img: '14.jpg',
    affiliate: 'http://finxpire.com/product/tump?af_id=bmkwRkxkVGlRUUYwVmxXbjdaWUlXZz09-MjI2NjAtNDM='
  },
   {
     id: 'Ghostwriting Income Generator',
    title: 'Ghostwriting Income Generator',
    description: 'Turn your writing skills into a steady income stream.',
    img: '15.jpg',
    affiliate: 'https://finxpire.com/product/gig?af_id=UDhkUjd5ck9kdEh4TlJaYzRUc3hrZz09-MjI2NjAtNDU='
  },
  {
     id: 'Strategize Your Japa Dream',
    title: 'Strategize Your Japa Dream',
    description: 'Plan your move abroad and achieve your Japa goals fast.',
    img: '16.png',
    affiliate: 'https://finxpire.com/product/syjd?af_id=RnA4eVBRbTdvdG4yQ0Jud0tnclhXZz09-MjI2NjAtNDg='
  },
    {
     id: 'Strategize Your Japa Dream',
    title: 'Strategize Your Japa Dream',
    description: 'Plan your Japa move the smart way!',
    img: '16.png',
    affiliate: 'https://finxpire.com/product/syjd?af_id=V05pVlhSR1BQRVFHVkNGb1hjRVQrUT09-MjI2NjAtNTA='
  }
];

// Render products
const productsGrid = document.getElementById('productsGrid');

function renderProducts() {
  productsGrid.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.affiliate}" target="_blank" class="btn">GET</a>
    </div>
  `).join('');
}

renderProducts();
