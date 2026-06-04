const fs = require('fs');

const htmlPath = './index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

// The reviews array
const reviews = [
  { name: "ariana delarosa", text: "I had an amazing experience with Logan at Don of Detail. They did an outstanding job on my car and went above and beyond with their attention to detail. The interior looks spotless, and my car honestly looks better than when I first got it.\n\nThey were professional, friendly, and took the time to make sure everything was done right. You can tell they genuinely care about their work and take pride in delivering high-quality results. Communication was great throughout the process, and the service was absolutely worth it.\n\nI highly recommend Logan with Don of Detail to anyone looking for a reliable and top-quality car detail. I'll definitely be coming back again!" },
  { name: "Andrew R.", text: "Logan knocked it out of the park with the detail and ceramic job on my triple black metallic F350. Looks better today than the day I brought it home from the dealer! I highly recommend Don of Detail's services for your vehicles." },
  { name: "Thomas Mesloh", text: "Logan is very professional and knowledgeable. He does things right and is very particular with making things look the very best. There are a lot of mobile detailers out there, but he knows a lot more particulars and proper material maintenance that comes with a professional detail and not just a standard cleaning. He makes sure things are done right the first time!" },
  { name: "Lisa G.", text: "Been using them since my last vehicle. Always amazing results. Love how convenient it is coming to my work. Very responsive with scheduling, which makes it easy to work around my busy life." },
  { name: "Clay Eagleton", text: "Truly a 5-star experience. My 5th wheel was in pretty bad shape, and Logan made it shine like new. The communication was great, the attention to detail was great, and the care for his work and my property was great. They should be your first call!" },
  { name: "Alex C.", text: "Logan went above and beyond on my truck. Even with the mountain of yellow lab hair in my back seat that I could never get out no matter how hard I tried, he took the time to get all of it out and get it looking brand new." },
  { name: "Eric King", text: "Don was very professional, and the quality of his work is impressive.\n\nMy truck interior was dirty from everyday use and working in construction, and they somehow managed to make the interior look and feel brand new again." },
  { name: "Quinn T.", text: "Logan was super friendly, knowledgeable, punctual, and thorough. I've booked Don of Detail for family members as gifts and for myself. I would highly recommend to anyone and everyone." },
  { name: "SELF_CREATION KREW", text: "Had a few cars done by Logan and couldn't be happier with the results! Highly recommend." },
  { name: "Debbie E.", text: "Great communication and great service. They did an exceptional job with the interior, especially with all the dog hair. Would recommend to anyone." },
  { name: "Tyler West", text: "Knowledgeable, professional, and did an excellent job! Logan made sure my priority areas were addressed and provided recommendations for any issues or items he identified. I wouldn't hesitate to call again. Highly recommended for all your detail needs!" },
  { name: "Ryan Fernandez", text: "Logan detailed my '88 Honda dirt bike, removing all the engine grease, vinyl seat stains, and paint oxidation. It looks 10x better and will be easier to maintain now that the hard work is done. Scheduling online was really simple. Logan was very responsive and answered my questions via text. He even shared tips about how to maintain my bike myself. I couldn't have asked for a better experience. Thank you, Don of Detail!" },
  { name: "Gigi McDuck", text: "This was my first time getting my motorcycle detailed by Logan. He did an amazing job! I had dust caked on my bike from it being stored away for the winter season, and it was sparkly new by the time he was done—absolute perfection. He also noticed I needed new tires and was so kind to let me know of the dangers it can cause while on two wheels. He truly takes the time to go over every detail. I will definitely be recommending Don of Detail to my friends and family. Professional, diligent, and friendly. I know exactly who I'll be calling the next time my bike needs a beautiful pick-me-up. Thanks, Don of Detail!" },
  { name: "courtney williams", text: "I cannot recommend Logan and his wife enough. They went above and beyond on my recent project. Their team was professional, attentive, and took the time to understand my specific goals. Their expertise and attention to detail resulted in a finished product that exceeded my expectations. They truly go the extra mile to ensure customer satisfaction. I'll be using them again for all my future needs!" },
  { name: "Anahi Bagan", text: "Logan from Don of Detail was great from beginning to end. Scheduling was a breeze, and he arrived on time. He was very pleasant and professional. Logan definitely has an eye for detail, and I highly recommend his services." },
  { name: "Emily Barnes", text: "I cannot say enough good things about Don of Detail. He took great care of our truck and made it shine like new. He went above and beyond, focusing on every detail inside and out." },
  { name: "Dennis Beeghly", text: "Logan and his wife are true professionals in detailing in every sense of the word! They are punctual, thorough, and do an incredibly beautiful job in their detail work. Our Toyota Venza never looked so beautiful when they were done. We also had him do a ceramic coat finish as well! We would highly recommend them!" },
  { name: "Jake Rooney", text: "Logan and his wife were absolutely terrific! They showed up early, and were professional and friendly. They had my 2001 Ford looking like it just rolled off the showroom floor!\n\nI really cannot recommend them enough to anyone looking for an amazing detail." },
  { name: "Charles Walker", text: "I had these guys do a deep cleaning and detail of a truck I bought that had been smoked in for many years. They did an excellent job and got into every nook and cranny. I highly recommend them." }
];

const reviewSchema = reviews.map(r => ({
  "@type": "Review",
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "author": { "@type": "Person", "name": r.name },
  "reviewBody": r.text
}));

// We need to parse the JSON-LD to update it
const scriptRegex = /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g;
let newHtml = html;
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  try {
    const data = JSON.parse(match[1]);
    if (data["@type"] === "AutomotiveBusiness" || data["@type"] === "LocalBusiness") {
      data.review = reviewSchema;
      // Also update reviewCount to 80 if not already
      if (!data.aggregateRating) {
        data.aggregateRating = {
          "@type": "AggregateRating",
          "ratingValue": 5,
          "reviewCount": 80,
          "bestRating": 5
        };
      }
      
      const newScript = `<script type="application/ld+json">\n    ${JSON.stringify(data, null, 2).replace(/\n/g, '\n    ')}\n  </script>`;
      newHtml = newHtml.replace(match[0], newScript);
    }
  } catch (e) {
    // Ignore invalid JSON or other scripts
  }
}

fs.writeFileSync(htmlPath, newHtml);
console.log("Updated index.html structured data");
