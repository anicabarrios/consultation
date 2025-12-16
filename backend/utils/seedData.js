// backend/utils/seedData.js
const Question = require('../models/Question');

// Sample Q&As - mix of answered and pending
const sampleData = [
  // ANSWERED QUESTIONS
  {
    name: 'Petar Petrović',
    email: 'petar@gmail.com',
    question: {
      sr: 'Koji su koraci za osnivanje društva sa ograničenom odgovornošću (DOO) u Srbiji?',
      en: 'What are the steps to establish a limited liability company (LLC) in Serbia?'
    },
    answer: {
      sr: 'Za osnivanje DOO u Srbiji potrebno je: 1) Odabrati jedinstveno poslovno ime i proveriti dostupnost u APR-u; 2) Sačiniti osnivački akt (odluku o osnivanju ili ugovor o osnivanju); 3) Uplatiti minimalni osnivački kapital od 100 dinara; 4) Registrovati firmu u Agenciji za privredne registre (APR); 5) Dobiti PIB i registrovati se za PDV ako je potrebno; 6) Otvoriti poslovni račun u banci. Celokupan postupak može se završiti u roku od 5-7 radnih dana uz odgovarajuću dokumentaciju.',
      en: 'To establish an LLC in Serbia you need to: 1) Choose a unique business name and verify availability with the Business Registers Agency (APR); 2) Draft the founding act (decision or agreement on establishment); 3) Pay the minimum founding capital of 100 dinars; 4) Register the company with APR; 5) Obtain a tax identification number and register for VAT if necessary; 6) Open a business bank account. The entire process can be completed within 5-7 business days with proper documentation.'
    },
    category: {
      sr: 'Korporativno pravo',
      en: 'Corporate Law'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-12-05')
  },
  {
    name: 'Marija Marković',
    email: 'marija@gmail.com',
    question: {
      sr: 'Koja dokumentacija je potrebna za dobijanje bankarskog kredita za pravna lica?',
      en: 'What documentation is required to obtain a bank loan for legal entities?'
    },
    answer: {
      sr: 'Za dobijanje bankarskog kredita pravna lica obično moraju dostaviti: 1) Rešenje o registraciji iz APR-a; 2) Finansijske izveštaje za poslednje 2-3 godine; 3) Poreske prijave i potvrde o izmirenim poreskim obavezama; 4) Biznis plan ili projekciju poslovanja; 5) Dokumentaciju o kolateralu (hipoteka, zaloga); 6) Karton deponovanih potpisa; 7) Odluku nadležnog organa o zaduživanju. Specifični zahtevi mogu varirati u zavisnosti od banke i vrste kredita.',
      en: 'To obtain a bank loan, legal entities typically need to provide: 1) Registration certificate from APR; 2) Financial statements for the last 2-3 years; 3) Tax returns and certificates of settled tax obligations; 4) Business plan or business projection; 5) Collateral documentation (mortgage, pledge); 6) Signature card; 7) Decision of the competent body on borrowing. Specific requirements may vary depending on the bank and type of loan.'
    },
    category: {
      sr: 'Bankarsko i finansijsko pravo',
      en: 'Banking and Financial Law'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-12-01')
  },
  {
    name: 'Jovan Jovanović',
    email: 'jovan@gmail.com',
    question: {
      sr: 'Šta treba da sadrži ugovor o poslovnoj saradnji između dve firme?',
      en: 'What should a business cooperation agreement between two companies contain?'
    },
    answer: {
      sr: 'Ugovor o poslovnoj saradnji treba da sadrži: 1) Preciznu identifikaciju ugovornih strana; 2) Predmet ugovora i obim saradnje; 3) Prava i obaveze svake strane; 4) Finansijske uslove (cene, način plaćanja, rokovi); 5) Trajanje ugovora i uslove za produženje; 6) Klauzule o poverljivosti podataka; 7) Odredbe o raskidu ugovora; 8) Način rešavanja sporova (arbitraža ili sud); 9) Primenjivo pravo; 10) Potpise ovlašćenih lica i pečate. Preporučujemo overu kod javnog beležnika za veću pravnu sigurnost.',
      en: 'A business cooperation agreement should contain: 1) Precise identification of contracting parties; 2) Subject matter and scope of cooperation; 3) Rights and obligations of each party; 4) Financial terms (prices, payment method, deadlines); 5) Contract duration and extension conditions; 6) Confidentiality clauses; 7) Termination provisions; 8) Dispute resolution method (arbitration or court); 9) Applicable law; 10) Signatures of authorized persons and stamps. We recommend notarization for greater legal certainty.'
    },
    category: {
      sr: 'Ugovorno pravo',
      en: 'Contract Law'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-11-28')
  },
  {
    name: 'Jelena Nikolić',
    email: 'jelena@gmail.com',
    question: {
      sr: 'Koja su moja prava kao zaposlenog u slučaju otkaza ugovora o radu?',
      en: 'What are my rights as an employee in case of employment contract termination?'
    },
    answer: {
      sr: 'Prema Zakonu o radu Republike Srbije, zaposleni ima sledeća prava: 1) Pravo na otkazni rok koji zavisi od dužine radnog staža (minimum 8 dana, maksimum 30 dana); 2) Pravo na otpremninu ako je otkaz dat zbog tehnološkog viška (minimum 1/3 plate za svaku godinu rada); 3) Pravo na obrazloženje otkaza u pisanoj formi; 4) Pravo na sudsku zaštitu u roku od 60 dana od dostavljanja rešenja; 5) Pravo na naknadu za neiskorišćeni godišnji odmor. U slučaju nezakonitog otkaza, sud može naložiti vraćanje na rad ili isplatu naknade štete.',
      en: 'According to the Labor Law of the Republic of Serbia, employees have the following rights: 1) Right to a notice period depending on length of service (minimum 8 days, maximum 30 days); 2) Right to severance pay if terminated due to redundancy (minimum 1/3 salary for each year of work); 3) Right to written explanation of termination; 4) Right to judicial protection within 60 days of receiving the decision; 5) Right to compensation for unused annual leave. In case of unlawful termination, the court may order reinstatement or payment of damages.'
    },
    category: {
      sr: 'Radno pravo',
      en: 'Labor Law'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-11-25')
  },
  {
    name: 'Stefan Đorđević',
    email: 'stefan@gmail.com',
    question: {
      sr: 'Kako funkcioniše izvršni postupak za naplatu potraživanja?',
      en: 'How does the enforcement procedure for debt collection work?'
    },
    answer: {
      sr: 'Izvršni postupak za naplatu potraživanja odvija se u nekoliko faza: 1) Podnošenje predloga za izvršenje na osnovu izvršne ili verodostojne isprave; 2) Donošenje rešenja o izvršenju od strane suda; 3) Sprovođenje izvršenja putem javnog izvršitelja (plenidba, prodaja imovine, blokada računa); 4) Namirenje poverioca iz ostvarenih sredstava. Dužnik može uložiti prigovor u roku od 8 dana od prijema rešenja. Troškovi postupka padaju na teret dužnika. Celokupan postupak može trajati od nekoliko nedelja do nekoliko meseci, u zavisnosti od složenosti.',
      en: 'The enforcement procedure for debt collection takes place in several phases: 1) Filing an enforcement motion based on an enforceable or authentic document; 2) Court issuance of an enforcement decision; 3) Enforcement execution through a bailiff (seizure, sale of assets, account freeze); 4) Creditor satisfaction from realized funds. The debtor may file an objection within 8 days of receiving the decision. Procedure costs are borne by the debtor. The entire process can take from several weeks to several months, depending on complexity.'
    },
    category: {
      sr: 'Izvršni postupci',
      en: 'Enforcement Proceedings'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-11-20')
  },
  
  // PENDING QUESTIONS (not answered yet)
  {
    name: 'Ana Anić',
    email: 'ana@gmail.com',
    question: {
      sr: 'Koje su obaveze firme u pogledu sprečavanja pranja novca (AML)?',
      en: 'What are a company\'s obligations regarding anti-money laundering (AML)?'
    },
    answer: { sr: '', en: '' },
    category: { sr: '', en: '' },
    isAnswered: false,
    isPublished: true
  },
  {
    name: 'Milan Milanović',
    email: 'milan@gmail.com',
    question: {
      sr: 'Kako se sprovodi statusna promena spajanja dva privredna društva?',
      en: 'How is a merger of two companies carried out?'
    },
    answer: { sr: '', en: '' },
    category: { sr: '', en: '' },
    isAnswered: false,
    isPublished: true
  }
];

// Export as async function (called by server.js)
const seedDatabase = async () => {
  try {
    await Question.insertMany(sampleData);
    console.log(`✓ Inserted ${sampleData.length} sample questions`);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    throw error;
  }
};

module.exports = seedDatabase;