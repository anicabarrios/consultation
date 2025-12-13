// scripts/seedData.js
require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');

// Sample Q&As - mix of answered and pending
const sampleData = [
  // ANSWERED QUESTIONS
  {
    name: 'Petar Petrović',
    email: 'petar@example.com',
    question: {
      sr: 'Koji su moji prava kao zaposlenog u slučaju otkaza?',
      en: 'What are my rights as an employee in case of termination?'
    },
    answer: {
      sr: 'Prema Zakonu o radu Republike Srbije, zaposleni ima pravo na otkazni rok koji zavisi od dužine radnog staža. Takođe, imate pravo na otpremninu ukoliko je otkaz izdat bez vaše krivice. Važno je da otkaz bude dat u pisanoj formi sa jasnim obrazloženjem razloga. U slučaju nezakonitog otkaza, zaposleni ima pravo da tuži poslodavca i zahteva vraćanje na posao ili finansijsku naknadu.',
      en: 'According to the Labor Law of the Republic of Serbia, employees have the right to a notice period that depends on the length of service. You also have the right to severance pay if the termination is made without your fault. It is important that the termination is given in written form with clear reasoning. In case of unlawful termination, the employee has the right to sue the employer and request reinstatement or financial compensation.'
    },
    category: {
      sr: 'Radno Pravo',
      en: 'Labor Law'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-12-05')
  },
  {
    name: 'Marija Marković',
    email: 'marija@example.com',
    question: {
      sr: 'Kako mogu da podelim imovinu nakon razvoda braka?',
      en: 'How can I divide property after divorce?'
    },
    answer: {
      sr: 'Podela bračne imovine nakon razvoda braka regulisana je Porodičnim zakonom. Zajednička imovina supružnika deli se po pravilu na jednake delove, osim ako se supružnici drugačije ne dogovore. U obzir se uzima sve što je stečeno za vreme trajanja braka, bez obzira na čije ime je registrovano. Imovina koja je stečena pre braka ili poklonom/nasledstvom ostaje odvojena.',
      en: 'Division of marital property after divorce is regulated by the Family Law. Joint property of spouses is generally divided equally, unless the spouses agree otherwise. Everything acquired during the marriage is taken into account, regardless of whose name it is registered under. Property acquired before marriage or by gift/inheritance remains separate.'
    },
    category: {
      sr: 'Porodično Pravo',
      en: 'Family Law'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-12-01')
  },
  {
    name: 'Jovan Jovanović',
    email: 'jovan@example.com',
    question: {
      sr: 'Šta treba da znam prilikom kupovine nekretnine?',
      en: 'What should I know when buying real estate?'
    },
    answer: {
      sr: 'Pre kupovine nekretnine obavezno proverite pravni status objekta u Katastru nepokretnosti. Važno je da budete sigurni da prodavac ima pravo vlasništva i da nekretnina nije opterećena hipotekom ili drugim teretima. Preporučujemo sastavljanje predugovora koji definiše sve uslove kupoprodaje.',
      en: 'Before buying real estate, make sure to check the legal status of the property in the Real Estate Cadastre. It is important to ensure that the seller has ownership rights and that the property is not encumbered by mortgage or other burdens. We recommend drafting a preliminary agreement that defines all terms of the sale.'
    },
    category: {
      sr: 'Nepokretnosti',
      en: 'Real Estate'
    },
    isAnswered: true,
    isPublished: true,
    answeredAt: new Date('2024-11-28')
  },
  
  // PENDING QUESTIONS (not answered yet)
  {
    name: 'Ana Anić',
    email: 'ana@example.com',
    question: {
      sr: 'Da li mogu da tužim komšiju zbog buke?',
      en: ''
    },
    answer: { sr: '', en: '' },
    category: { sr: '', en: '' },
    isAnswered: false,
    isPublished: true
  },
  {
    name: 'Milan Milanović',
    email: 'milan@example.com',
    question: {
      sr: 'Kako da osnujem firmu u Srbiji?',
      en: ''
    },
    answer: { sr: '', en: '' },
    category: { sr: '', en: '' },
    isAnswered: false,
    isPublished: true
  }
];

async function seedDatabase() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ilic-law-qa';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB\n');

    console.log('📝 Seeding sample Q&As...\n');
    
    let added = 0;
    let skipped = 0;
    
    for (const qa of sampleData) {
      const exists = await Question.findOne({ 
        'question.sr': qa.question.sr 
      });
      
      if (!exists) {
        await Question.create(qa);
        const status = qa.isAnswered ? '✅ Answered' : '⏳ Pending';
        console.log(`   ${status}: ${qa.question.sr.substring(0, 50)}...`);
        added++;
      } else {
        console.log(`   ⚠️  Already exists: ${qa.question.sr.substring(0, 50)}...`);
        skipped++;
      }
    }
    
    const counts = await Question.aggregate([
      {
        $group: {
          _id: '$isAnswered',
          count: { $sum: 1 }
        }
      }
    ]);
    
    const answered = counts.find(c => c._id === true)?.count || 0;
    const pending = counts.find(c => c._id === false)?.count || 0;
    
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🎉 Database seeding completed!                             ║
║                                                              ║
║   📊 This run:                                               ║
║      • Added: ${added}                                              ║
║      • Skipped: ${skipped}                                           ║
║                                                              ║
║   📊 Total in database:                                      ║
║      • Total questions: ${answered + pending}                                   ║
║      • Answered: ${answered}                                          ║
║      • Pending: ${pending}                                           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    `);
    
  } catch (error) {
    console.error('❌ Seeding error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('👋 Database connection closed');
    process.exit(0);
  }
}

seedDatabase();
