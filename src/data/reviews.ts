export interface Review {
  name: string;
  loc: string;
  text: string;
}

export const reviews: Review[] = [
  { name: "Andrew R.", loc: "Reno, NV", text: "Logan knocked it out of the park with the detail and ceramic job on my triple black metallic F350. Looks better today than the day I brought it home from the dealer! I highly recommend Don of Detail's services for your vehicles." },
  { name: "Thomas Mesloh", loc: "Reno, NV", text: "Logan is very professional and knowledgeable. He does things right and is very particular with making things look the very best. There are a lot of mobile detailers out there, but he knows a lot more particulars and proper material maintenance that comes with a professional detail and not just a standard cleaning. He makes sure things are done right the first time!" },
  { name: "Clay Eagleton", loc: "Reno, NV", text: "Truly a 5-star experience. My 5th wheel was in pretty bad shape, and Logan made it shine like new. The communication was great, the attention to detail was great, and the care for his work and my property was great. They should be your first call!" },
  { name: "ariana delarosa", loc: "Reno, NV", text: "I had an amazing experience with Logan at Don of Detail. They did an outstanding job on my car and went above and beyond with their attention to detail. The interior looks spotless, and my car honestly looks better than when I first got it.\n\nThey were professional, friendly, and took the time to make sure everything was done right. You can tell they genuinely care about their work and take pride in delivering high-quality results. Communication was great throughout the process, and the service was absolutely worth it.\n\nI highly recommend Logan with Don of Detail to anyone looking for a reliable and top-quality car detail. I'll definitely be coming back again!" },
  { name: "Dennis Beeghly", loc: "Reno, NV", text: "Logan and his wife are true professionals in detailing in every sense of the word! They are punctual, thorough, and do an incredibly beautiful job in their detail work. Our Toyota Venza never looked so beautiful when they were done. We also had him do a ceramic coat finish as well! We would highly recommend them!" },
  { name: "Charles Walker", loc: "Reno, NV", text: "I had these guys do a deep cleaning and detail of a truck I bought that had been smoked in for many years. They did an excellent job and got into every nook and cranny. I highly recommend them." },
];

export const formatName = (name: string) => {
  if (name === "SELF_CREATION KREW") return "S. Krew";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();

  const firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  const lastPart = parts[parts.length - 1];
  const lastInitial = lastPart.endsWith('.') ? lastPart.toUpperCase() : lastPart.charAt(0).toUpperCase() + '.';

  return `${firstName} ${lastInitial}`;
};
