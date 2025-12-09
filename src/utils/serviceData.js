import { 
  Users, 
  Shield, 
  Building, 
  Briefcase, 
  Home, 
  Scale, 
  FileSignature, 
  Calculator, 
  Clipboard, 
  Gavel, 
  Building2, 
  MessageCircle 
} from 'lucide-react';

export const servicesData = {
  // Serbian Services
  'porodicno-pravo': {
    id: 'porodicno-pravo',
    icon: Users,
    sr: {
      name: 'Porodično pravo',
      subtitle: 'Pravna zaštita porodičnih odnosa',
      description: 'Specijalizovani smo za rešavanje svih pitanja iz oblasti porodičnog prava sa empatijom i profesionalnošću.',
      overview: 'Porodičnim zakonom uređuju se brak i odnosi u braku, odnosi u vanbračnoj zajednici, odnosi deteta i roditelja, usvojenje, hraniteljstvo, starateljstvo, izdržavanje, imovinski odnosi u porodici, zaštita od nasilja u porodici, postupci u vezi sa porodičnim odnosima i lično ime.',
      details: 'Svakodnevno se susrećemo sa velikim brojem slučajeva razvoda braka, starateljstva nad decom, podele bračne imovine, nasilja u porodici i sl. a svaki slučaj iz oblasti porodičnog prava je jedinstven i zahteva individualan pristup.',
      approach: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge u ovoj oblasti na način koji je efikasan i najmanje stresan za učesnike u postupku.',
      services: [
        'Razvod braka',
        'Starateljstvo nad decom',
        'Podela bračne imovine',
        'Zaštita od nasilja u porodici',
        'Usvojenje',
        'Hraniteljstvo',
        'Izdržavanje',
        'Vanbračne zajednice'
      ]
    },
    en: {
      name: 'Family Law',
      subtitle: 'Legal protection of family relationships',
      description: 'We specialize in resolving all family law matters with empathy and professionalism.',
      overview: 'The Family Law regulates marriage and marital relationships, common-law relationships, parent-child relationships, adoption, foster care, guardianship, support, property relations in the family, protection from domestic violence, procedures related to family relationships and personal names.',
      details: 'We encounter a large number of cases daily involving divorce, child custody, division of marital property, domestic violence, etc. Each family law case is unique and requires an individual approach.',
      approach: 'Ilić Lj. Suzana Law Office provides legal services in this area in a way that is efficient and least stressful for the participants in the procedure.',
      services: [
        'Divorce proceedings',
        'Child custody',
        'Division of marital property',
        'Protection from domestic violence',
        'Adoption',
        'Foster care',
        'Support obligations',
        'Common-law relationships'
      ]
    }
  },

  'krivicno-pravo': {
    id: 'krivicno-pravo',
    icon: Shield,
    sr: {
      name: 'Krivično pravo',
      subtitle: 'Profesionalna odbrana u krivičnim postupcima',
      description: 'Pružamo stručnu pravnu odbranu u krivičnim postupcima sa fokusom na specifične oblasti našeg delovanja.',
      overview: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge klijentima u krivičnim postupcima vezanim za krivična dela iz oblasti: Pranja novca i finansiranja terorizma, deviznog i spoljno-trgovinskog poslovanja, krivična dela kod trgovine hartijama od vrednosti.',
      details: 'Naša praksa obuhvata složene ekonomske krivične prestupe koji zahtevaju duboko razumevanje finansijskih propisa i međunarodnog prava. Pružamo sveobuhvatan pristup odbrani koji uključuje detaljnu analizu dokaza i strategiju odbrane.',
      approach: 'Advokatska kancelarija Ilić Lj. Suzana ne pruža pravne usluge povodom drugih krivičnih dela van navedenih oblasti.',
      services: [
        'Pranje novca',
        'Finansiranje terorizma',
        'Devizno poslovanje',
        'Spoljno-trgovinsko poslovanje',
        'Trgovina hartijama od vrednosti',
        'Ekonomski kriminal',
        'Finansijski prestupi',
        'Odbrana u krivičnom postupku'
      ]
    },
    en: {
      name: 'Criminal Law',
      subtitle: 'Professional defense in criminal proceedings',
      description: 'We provide expert legal defense in criminal proceedings with focus on specific areas of our practice.',
      overview: 'Ilić Lj. Suzana Law Office provides legal services to clients in criminal proceedings related to criminal offenses in the areas of: Money laundering and terrorism financing, foreign exchange and foreign trade operations, criminal offenses in securities trading.',
      details: 'Our practice encompasses complex economic criminal offenses that require deep understanding of financial regulations and international law. We provide a comprehensive defense approach that includes detailed evidence analysis and defense strategy.',
      approach: 'Ilić Lj. Suzana Law Office does not provide legal services for other criminal offenses outside the specified areas.',
      services: [
        'Money laundering',
        'Terrorism financing',
        'Foreign exchange operations',
        'Foreign trade operations',
        'Securities trading',
        'Economic crime',
        'Financial offenses',
        'Criminal defense'
      ]
    }
  },

  'korporativno-pravo': {
    id: 'korporativno-pravo',
    icon: Building,
    sr: {
      name: 'Korporativno pravo',
      subtitle: 'Sveobuhvatno pravno savetovanje za preduzeća',
      description: 'Pružamo kompletne usluge korporativnog prava za osnivanje, upravljanje i zaštitu vašeg biznisa.',
      overview: 'Ova pravna oblast obuhvata pravne aspekte poslovanja preduzeća, uključujući osnivanje, upravljanje, organizaciju, zaštitu prava akcionara i osigurava zakonito i efikasno funkcionisanje kompanija, bilo da se radi o malim preduzećima ili velikim korporacijama.',
      details: 'Korporativno pravo reguliše različite pravne aspekte poslovanja, uključujući: osnivanje preduzeća i registraciju pravnih lica, izradu i reviziju statuta i internih pravila kompanija (svih internih politika i procedura a posebno internih pravila koja regulišu upravljanje pojedinim specifičnim rizicima kao: rizici neusklađenog poslovanja, rizici od zloupotrebe preduzeća u svrhe pranja novca i finansiranja terorizma, rizici od nezakonitog prikupljanja i obrade podataka o ličnosti), korporativno upravljanje i odgovornost direktora, postupke spajanja, preuzimanja i reorganizacije kompanija, zaštitu prava akcionara i rešavanje korporativnih sporova, likvidaciju i prestanak rada kompanije.',
      approach: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge za potrebe osnivanja i registracije firme u Srbiji kod Agencije za privredne registre Republike Srbije - pravno savetovanje tokom kompletnog postupka za osnivanje firme, izbor pravne forme, definisanje pretežne delatnosti, a kod privrednog društva i svih ostalih delatnosti.',
      services: [
        'Osnivanje preduzeća i registracija pravnih lica',
        'Izrada i revizija statuta i internih pravila',
        'Korporativno upravljanje i odgovornost direktora',
        'Spajanja, preuzimanja i reorganizacija',
        'Zaštita prava akcionara',
        'Rešavanje korporativnih sporova',
        'Likvidacija i prestanak rada kompanije',
        'Usklađenost sa propisima'
      ]
    },
    en: {
      name: 'Corporate Law',
      subtitle: 'Comprehensive legal counseling for enterprises',
      description: 'We provide complete corporate law services for establishing, managing and protecting your business.',
      overview: 'This legal area covers legal aspects of business operations, including establishment, management, organization, protection of shareholders\' rights and ensures lawful and efficient functioning of companies, whether dealing with small enterprises or large corporations.',
      details: 'Corporate law regulates various legal aspects of business operations, including: company establishment and legal entity registration, drafting and revision of articles of association and internal company rules (all internal policies and procedures, especially internal rules governing management of specific risks such as: non-compliance risks, risks of company misuse for money laundering and terrorism financing, risks of illegal collection and processing of personal data), corporate governance and director responsibility, merger, acquisition and reorganization procedures, protection of shareholders\' rights and resolution of corporate disputes, liquidation and company termination.',
      approach: 'Ilić Lj. Suzana Law Office provides legal services for company establishment and registration in Serbia with the Business Registers Agency of the Republic of Serbia - legal counseling throughout the complete company establishment procedure, choice of legal form, defining primary activities, and for business companies all other activities.',
      services: [
        'Company establishment and legal entity registration',
        'Drafting and revision of articles and internal rules',
        'Corporate governance and director responsibility',
        'Mergers, acquisitions and reorganization',
        'Shareholder rights protection',
        'Corporate dispute resolution',
        'Liquidation and company termination',
        'Regulatory compliance'
      ]
    }
  },

  'radno-pravo': {
    id: 'radno-pravo',
    icon: Briefcase,
    sr: {
      name: 'Radno pravo',
      subtitle: 'Zaštita prava zaposlenih i poslodavaca',
      description: 'Kompletne usluge iz oblasti radnog prava za zaposlene i poslodavce u svim vrstama radnih odnosa.',
      overview: 'Prava, obaveze i odgovornosti iz radnog odnosa uređuju se Zakonom o radu i posebnim zakonom, u skladu sa ratifikovanim međunarodnim konvencijama. Takođe, prava, obaveze i odgovornosti iz radnog odnosa uređuju se i kolektivnim ugovorom i ugovorom o radu, a pravilnikom o radu, odnosno ugovorom o radu samo kada je to određeno ovim zakonom.',
      details: 'Opštim aktom poslodavca i ugovorom o radu mogu da se utvrde veća prava i povoljniji uslovi rada od prava i uslova utvrđenih zakonom ali se tim aktima poslodavca ne mogu utvrditi manja prava i nepovoljniji uslovi rada za zaposlenog od onih koji su propisani zakonom.',
      approach: 'Odredbe Zakona o radu primenjuju se na sve zaposlene koji rade na teritoriji Republike Srbije, kod domaćeg, stranog, fizičkog ili pravnog lica (poslodavac), na zaposlene u državnim organima, organima teritorijalne autonomije i lokalne samouprave, zaposlene u javnim službama, na zaposlene koji su upućeni na rad u inostranstvo od strane poslodavca, kao i na zaposlene strane državljane i lica bez državljanstva koji rade kod poslodavca na teritoriji Republike Srbije. Advokatska kancelarija Ilić Lj. Suzana pruža usluge zastupanja u svim postupcima koji imaju za predmet kršenje odredaba Zakona o radu i dr. propisa iz oblasti radnog prava.',
      services: [
        'Ugovori o radu',
        'Otkaz radnog odnosa',
        'Kolektivni pregovori',
        'Radni sporovi',
        'Bezbednost na radu',
        'Diskriminacija na radu',
        'Sindikalno predstavljanje',
        'Radno vreme i odmori'
      ]
    },
    en: {
      name: 'Labor Law',
      subtitle: 'Protection of employee and employer rights',
      description: 'Complete labor law services for employees and employers in all types of employment relationships.',
      overview: 'Rights, obligations and responsibilities arising from employment relationships are regulated by the Labor Law and special laws, in accordance with ratified international conventions. Also, rights, obligations and responsibilities arising from employment relationships are regulated by collective agreements and employment contracts, and by work regulations, or employment contracts only when determined by this law.',
      details: 'General acts of the employer and employment contracts may determine greater rights and more favorable working conditions than those established by law, but these employer acts cannot establish lesser rights and less favorable working conditions for employees than those prescribed by law.',
      approach: 'The provisions of the Labor Law apply to all employees working on the territory of the Republic of Serbia, with domestic, foreign, natural or legal persons (employer), to employees in state bodies, bodies of territorial autonomy and local self-government, employees in public services, to employees sent to work abroad by the employer, as well as to employed foreign nationals and stateless persons working with employers on the territory of the Republic of Serbia. Ilić Lj. Suzana Law Office provides representation services in all proceedings concerning violations of Labor Law provisions and other regulations in the field of labor law.',
      services: [
        'Employment contracts',
        'Termination of employment',
        'Collective bargaining',
        'Labor disputes',
        'Workplace safety',
        'Workplace discrimination',
        'Union representation',
        'Working time and rest'
      ]
    }
  },

  'nasledno-pravo': {
    id: 'nasledno-pravo',
    icon: Home,
    sr: {
      name: 'Nasledno pravo',
      subtitle: 'Profesionalno rešavanje naslednih pitanja',
      description: 'Sveobuhvatne usluge u oblasti naslednog prava za zakonsko nasleđivanje i zaveštanje.',
      overview: 'Nasleđuje se zaostavština. Zaostavštinu čine sva prava podobna za nasleđivanje koja su ostaviocu pripadala u trenutku smrti. Naslediti može samo ko je živ u trenutku ostaviočeve smrti, kao i dete koje je već začeto u trenutku ostaviočeve smrti ako se živo rodi.',
      details: 'Zaostavštinu ne čine predmeti domaćinstva manje vrednosti koji služe svakodnevnim potrebama ostaviočevih potomaka, njegovog bračnog druga i roditelja, ako su sa ostaviočem živeli u istom domaćinstvu, već oni postaju zajednička svojina ovih lica.',
      approach: 'Advokatska kancelarija Ilić Lj. Suzana pruža sve pravne usluge u postupcima koji imaju za predmet zakonsko nasleđivanje ili zaveštanje (testament).',
      services: [
        'Zakonsko nasleđivanje',
        'Zaveštanje (testament)',
        'Ostavinski postupak',
        'Naslednopravni ugovori',
        'Legalizacija nepokretnosti',
        'Podela nasleđa',
        'Nasledni sporovi',
        'Odbacivanje nasleđa'
      ]
    },
    en: {
      name: 'Inheritance Law',
      subtitle: 'Professional resolution of inheritance matters',
      description: 'Comprehensive inheritance law services for legal inheritance and wills.',
      overview: 'Inheritance consists of the estate. The estate consists of all rights suitable for inheritance that belonged to the testator at the time of death. Only those who are alive at the time of the testator\'s death can inherit, as well as children who are already conceived at the time of the testator\'s death if born alive.',
      details: 'The estate does not consist of household items of lesser value that serve the daily needs of the testator\'s descendants, spouse and parents, if they lived in the same household with the testator, but they become joint property of these persons.',
      approach: 'Ilić Lj. Suzana Law Office provides all legal services in proceedings concerning legal inheritance or wills (testament).',
      services: [
        'Legal inheritance',
        'Wills (testament)',
        'Probate proceedings',
        'Inheritance contracts',
        'Property legalization',
        'Estate division',
        'Inheritance disputes',
        'Inheritance waiver'
      ]
    }
  },

  'prekrsajno-pravo': {
    id: 'prekrsajno-pravo',
    icon: Scale,
    sr: {
      name: 'Prekršajno pravo',
      subtitle: 'Zastupanje u prekršajnim postupcima',
      description: 'Stručna odbrana u prekršajnim postupcima sa fokusom na specifične oblasti privrednog prava.',
      overview: 'Advokatska kancelarija Ilić Lj. Suzana pridaje veliku pažnju prekršajnom pravu i pruža pravne usluge klijentima pravnim licima u prekršajnom postupku, pred prekršajnim sudom ili pred drugim organom u sledećim oblastima prekršaja:',
      details: 'Prekršaji kod deviznog poslovanja, poreski prekršaji, prekršaji u oblasti javnih prihoda, spoljno-trgovinski prekršaji, prekršaji u prometu robe i usluga, carinski prekršaji, prekršaji iz oblasti životne sredine, prekršaji kod trgovanja hartijama od vrednosti.',
      approach: 'Pravne usluge Advokatska kancelarija Ilić Lj. Suzana pruža i odgovornim fizičkim licima iz napred navedenih prekršaja pravnih lica. Advokatska kancelarija Ilić Lj. Suzana ne pruža pravne usluge iz drugih oblasti prekršaja.',
      services: [
        'Prekršaji kod deviznog poslovanja',
        'Poreski prekršaji',
        'Prekršaji u oblasti javnih prihoda',
        'Spoljno-trgovinski prekršaji',
        'Prekršaji u prometu robe i usluga',
        'Carinski prekršaji',
        'Prekršaji iz oblasti životne sredine',
        'Prekršaji kod trgovanja hartijama od vrednosti'
      ]
    },
    en: {
      name: 'Misdemeanor Law',
      subtitle: 'Representation in misdemeanor proceedings',
      description: 'Expert defense in misdemeanor proceedings with focus on specific areas of commercial law.',
      overview: 'Ilić Lj. Suzana Law Office pays great attention to misdemeanor law and provides legal services to legal entity clients in misdemeanor proceedings, before misdemeanor courts or other authorities in the following misdemeanor areas:',
      details: 'Foreign exchange misdemeanors, tax misdemeanors, public revenue misdemeanors, foreign trade misdemeanors, goods and services trade misdemeanors, customs misdemeanors, environmental misdemeanors, and securities trading misdemeanors.',
      approach: 'Ilić Lj. Suzana Law Office also provides legal services to responsible natural persons for the aforementioned legal entity misdemeanors. Ilić Lj. Suzana Law Office does not provide legal services for other areas of misdemeanors.',
      services: [
        'Foreign exchange misdemeanors',
        'Tax misdemeanors',
        'Public revenue misdemeanors',
        'Foreign trade misdemeanors',
        'Goods and services trade misdemeanors',
        'Customs misdemeanors',
        'Environmental misdemeanors',
        'Securities trading misdemeanors'
      ]
    }
  },

  'ugovori': {
    id: 'ugovori',
    icon: FileSignature,
    sr: {
      name: 'Ugovorno pravo',
      subtitle: 'Stručno sastavljanje i analiza ugovora',
      description: 'Kompletne usluge sastavljanja, analize i zastupanja u sporovima iz ugovornog prava.',
      overview: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge sastavljanja svih vrsta ugovora iz poslovne delatnosti klijenata pravnih lica i raznih ugovora klijenata fizičkih lica, na način da su isti precizni i detaljni, da obuhvataju sve što je neophodno za zaštitu interesa klijenata i da osiguravaju primenu načela autonomije volje, savesnosti i poštenja kao i načela ravnopravnosti ugovornih strana.',
      details: 'Kancelarija je specijalizovana za zastupanje klijenata pravnih lica u parničnim, izvršnim i drugim postupcima kao i sačinjavanje svih vrsta ugovora za potrebe poslovanja klijenata pravnih lica kao i klijenata fizičkih lica (ugovor o poklonu, zakupu, doživotnom izdržavanju, ugovor o prometu nepokretnosti...).',
      approach: 'Pružamo usluge zastupanja u sporovima koji za predmet imaju prava i obaveze iz istih ugovora, pred svim nadležnim organima odnosno, u postupku medijacije.',
      services: [
        'Ugovori o kupoprodaji',
        'Ugovori o poslovnoj saradnji',
        'Ugovori o radu i uslugama',
        'Ugovori o zakupu',
        'Ugovori o poklonu',
        'Ugovori o doživotnom izdržavanju',
        'Ugovori o prometu nepokretnosti',
        'Revizija postojećih ugovora'
      ]
    },
    en: {
      name: 'Contract Law',
      subtitle: 'Professional contract drafting and analysis',
      description: 'Complete services for drafting, analysis and representation in contract law disputes.',
      overview: 'Ilić Lj. Suzana Law Office provides legal services for drafting all types of contracts for business activities of legal entity clients and various contracts for individual clients, ensuring they are precise and detailed, covering everything necessary to protect client interests and ensuring application of principles of autonomy of will, good faith and honesty as well as the principle of equality of contracting parties.',
      details: 'The office specializes in representing legal entity clients in litigation, enforcement and other proceedings as well as drafting all types of contracts for business needs of legal entity clients and individual clients (gift contracts, lease agreements, life support contracts, real estate transaction contracts...).',
      approach: 'We provide representation services in disputes concerning rights and obligations arising from the same contracts, before all competent authorities or in mediation procedures.',
      services: [
        'Sales contracts',
        'Business cooperation contracts',
        'Work and service contracts',
        'Lease agreements',
        'Gift contracts',
        'Life support contracts',
        'Real estate transaction contracts',
        'Revision of existing contracts'
      ]
    }
  },

  'naknada-stete': {
    id: 'naknada-stete',
    icon: Calculator,
    sr: {
      name: 'Naknada štete',
      subtitle: 'Profesionalno zastupanje u oblastima obeštećenja',
      description: 'Sveobuhvatne usluge u sporovima za naknadu materijalne i nematerijalne štete.',
      overview: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge u sporovima koji za predmet imaju "štetu", kako materijalnu u formi stvarne štete - umanjenja nečije imovine ili sprečavanja njenog povećanja (izmakla dobit), tako i nematerijalnu štetu kao nanošenje fizičkog ili psihičkog bola ili straha drugom licu.',
      details: 'Materijalna ili imovinska šteta rezultat je povrede nekog imovinskog interesa (uništenje stvari, odnosno onemogućavanje ili otežavanje upotrebe stvari) ali može nastupiti i u slučaju povrede tuđe fizičke ličnosti, ako je ta povreda povukla nesposobnost za rad ili troškove lečenja.',
      approach: 'Nematerijalna šteta ne predstavlja imovinski gubitak - ona nastupa usled pretrpljenih duševnih i fizičkih bolova i straha, za koje sud može dosuditi naknadu nematerijalne štete, u vidu isplate određene svote novca, kada to opravdavaju intenzitet i dužina trajanja bolova i straha, vodeći računa o značaju povređenog dobra i cilju kome služi ta naknada, a cilj naknade jeste, da onaj čije je dobro povređeno, sebi priušti kakvo drugo zadovoljstvo koje će mu omogućiti da doživi neku prijatnost nakon teškog duševnog ili fizičkog bola i straha koji je pretrpeo.',
      services: [
        'Saobraćajne nezgode',
        'Profesionalna greška',
        'Povrede na radu',
        'Medicinski tretman',
        'Stvarna šteta',
        'Izmakla dobit',
        'Nematerijalna šteta',
        'Duševni i fizički bolovi'
      ]
    },
    en: {
      name: 'Damage Compensation',
      subtitle: 'Professional representation in compensation matters',
      description: 'Comprehensive services in disputes for material and non-material damage compensation.',
      overview: 'Ilić Lj. Suzana Law Office provides legal services in disputes concerning "damage", both material damage in the form of actual damage - reduction of someone\'s property or prevention of its increase (lost profit), as well as non-material damage as inflicting physical or mental pain or fear to another person.',
      details: 'Material or property damage results from violation of some property interest (destruction of things, or preventing or hindering the use of things) but can also occur in case of injury to another person\'s physical person, if that injury resulted in inability to work or treatment costs.',
      approach: 'Non-material damage does not represent property loss - it occurs due to suffered mental and physical pain and fear, for which the court may award compensation for non-material damage, in the form of payment of a certain amount of money, when justified by the intensity and duration of pain and fear, taking into account the significance of the injured good and the purpose served by that compensation, and the purpose of compensation is for the one whose good was injured to afford themselves some other satisfaction that will allow them to experience some pleasure after the severe mental or physical pain and fear they suffered.',
      services: [
        'Traffic accidents',
        'Professional errors',
        'Workplace injuries',
        'Medical treatment',
        'Actual damage',
        'Lost profits',
        'Non-material damage',
        'Mental and physical suffering'
      ]
    }
  },

  'upravni-postupak': {
    id: 'upravni-postupak',
    icon: Clipboard,
    sr: {
      name: 'Upravni postupak',
      subtitle: 'Zastupanje u upravnim postupcima',
      description: 'Profesionalne usluge zastupanja pred organima uprave u svim vrstama upravnih postupaka.',
      overview: 'Upravni postupak je skup pravila koja državni organi i organizacije, organi i organizacije pokrajinske autonomije i organi i organizacije jedinica lokalne samouprave, ustanove, javna preduzeća, posebni organi preko kojih se ostvaruje regulatorna funkcija i pravna i fizička lica kojima su poverena javna ovlašćenja, primenjuju kada postupaju u upravnim stvarima.',
      details: 'Upravna stvar jeste pojedinačna situacija u kojoj organ, neposredno primenjujući zakone (prvenstveno Zakon o opštem upravnom postupku), druge propise i opšte akte, pravno ili faktički utiče na položaj stranke tako što donosi upravne akte, garantne akte, zaključuje upravne ugovore, preduzima upravne radnje i pruža javne usluge.',
      approach: 'Zakonom o upravnim sporovima uređuje se predmet upravnog spora, nadležnost za rešavanje upravnih sporova, stranke, pravila postupka, pravna sredstva i izvršenje donetih sudskih presuda. Advokatska kancelarija Ilić Lj. Suzana pruža usluge zastupanja u upravnim sporovima: protiv upravnog akta donetog u drugom stepenu, protiv prvostepenog upravnog akta protiv koga nije dozvoljena žalba u upravnom postupku, kada nadležni organ o zahtevu, odnosno žalbi stranke nije doneo upravni akt (ćutanje uprave), pod uslovima predviđenim zakonom.',
      services: [
        'Upravni akti',
        'Žalbe u upravnom postupku',
        'Ćutanje uprave',
        'Upravni ugovori',
        'Javni pozivi',
        'Dozvole i odobrenja',
        'Inspekcijski postupci',
        'Javne usluge'
      ]
    },
    en: {
      name: 'Administrative Procedure',
      subtitle: 'Representation in administrative procedures',
      description: 'Professional representation services before administrative authorities in all types of administrative procedures.',
      overview: 'Administrative procedure is a set of rules that state bodies and organizations, provincial autonomy bodies and organizations and local self-government unit bodies and organizations, institutions, public enterprises, special bodies through which regulatory function is exercised and legal and natural persons entrusted with public powers, apply when acting in administrative matters.',
      details: 'An administrative matter is an individual situation in which a body, directly applying laws (primarily the General Administrative Procedure Law), other regulations and general acts, legally or factually affects the position of a party by adopting administrative acts, guarantee acts, concluding administrative contracts, undertaking administrative actions and providing public services.',
      approach: 'The Administrative Disputes Law regulates the subject of administrative dispute, jurisdiction for resolving administrative disputes, parties, procedural rules, legal remedies and enforcement of court judgments. Ilić Lj. Suzana Law Office provides representation services in administrative disputes: against administrative acts adopted in the second instance, against first-instance administrative acts against which appeal is not allowed in administrative procedure, when the competent authority has not adopted an administrative act upon request or appeal of a party (administrative silence), under conditions provided by law.',
      services: [
        'Administrative acts',
        'Appeals in administrative procedure',
        'Administrative silence',
        'Administrative contracts',
        'Public calls',
        'Permits and approvals',
        'Inspection procedures',
        'Public services'
      ]
    }
  },

  'upravni-spor': {
    id: 'upravni-spor',
    icon: Gavel,
    sr: {
      name: 'Upravni spor',
      subtitle: 'Sudska zaštita u upravnim sporovima',
      description: 'Stručno zastupanje u upravnim sporovima pred nadležnim sudovima.',
      overview: 'Zakonom o upravnim sporovima uređuje se predmet upravnog spora, nadležnost za rešavanje upravnih sporova, stranke, pravila postupka, pravna sredstva i izvršenje donetih sudskih presuda.',
      details: 'U upravnom sporu sud odlučuje o zakonitosti konačnih upravnih akata, osim onih za koje je predviđena drugačija sudska zaštita. U upravnom sporu sud odlučuje i o zakonitosti konačnih pojedinačnih akata kojima se rešava o pravu, obavezi ili na zakonu zasnovanom interesu, u pogledu kojih u određenom slučaju zakonom nije predviđena drugačija sudska zaštita.',
      approach: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge zastupanja u upravnim sporovima: protiv upravnog akta donetog u drugom stepenu, protiv prvostepenog upravnog akta protiv koga nije dozvoljena žalba u upravnom postupku, kada nadležni organ o zahtevu, odnosno žalbi stranke nije doneo upravni akt (ćutanje uprave), pod uslovima predviđenim zakonom.',
      services: [
        'Tužbe protiv upravnih akata',
        'Ćutanje uprave',
        'Poništavanje upravnih rešenja',
        'Obavezivanje na izdavanje akata',
        'Sporovi zbog nepravilnih odluka',
        'Zakonitost konačnih upravnih akata',
        'Izvršenje sudskih presuda',
        'Žalbe protiv presuda'
      ]
    },
    en: {
      name: 'Administrative Dispute',
      subtitle: 'Court protection in administrative disputes',
      description: 'Expert representation in administrative disputes before competent courts.',
      overview: 'The Administrative Disputes Law regulates the subject of administrative dispute, jurisdiction for resolving administrative disputes, parties, procedural rules, legal remedies and enforcement of court judgments.',
      details: 'In administrative disputes, the court decides on the legality of final administrative acts, except those for which different court protection is provided. In administrative disputes, the court also decides on the legality of final individual acts that resolve rights, obligations or legally based interests, for which in certain cases different court protection is not provided by law.',
      approach: 'Ilić Lj. Suzana Law Office provides representation services in administrative disputes: against administrative acts adopted in the second instance, against first-instance administrative acts against which appeal is not allowed in administrative procedure, when the competent authority has not adopted an administrative act upon request or appeal of a party (administrative silence), under conditions provided by law.',
      services: [
        'Lawsuits against administrative acts',
        'Administrative silence',
        'Annulment of administrative decisions',
        'Obligation to issue acts',
        'Disputes due to improper decisions',
        'Legality of final administrative acts',
        'Enforcement of court decisions',
        'Appeals against judgments'
      ]
    }
  },

  'nekretnine': {
    id: 'nekretnine',
    icon: Building2,
    sr: {
      name: 'Nekretnine',
      subtitle: 'Sveobuhvatne usluge u prometu nekretnina',
      description: 'Kompletan pravni servis za sve transakcije sa nekretninama uz maksimalnu sigurnost i zaštitu.',
      overview: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge svim klijentima kod kupoprodaje nepokretnosti (poslovnog objekta, stana, zemljišta i dr), obzirom da se radi o oblasti koja trpi česte izmene zakonskih i podzakonskih propisa i nosi ogroman rizik.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža sledeće usluge u ovoj oblasti: pribavljanje izvoda iz listova nepokretnosti u Katastru, sastavljanje ugovora o prometu nepokretnosti, sastavljanje ugovora o izgradnji nepokretnosti, dokumentacija u vezi pribavljanja građevinskih, lokacijskih i upotrebnih dozvola, uknjižba prava svojine na nepokretnostima u Katastru nepokretnosti, konstituisanje (upis) hipoteke na nepokretnostima u Katastru nepokretnosti.',
      approach: 'Pružamo proveru dokumentacije pre kupovine nepokretnosti i zastupanje u postupcima pred sudom i drugim državnim organima koji za predmet imaju nepokretnosti.',
      services: [
        'Pribavljanje izvoda iz listova nepokretnosti',
        'Sastavljanje ugovora o prometu nepokretnosti',
        'Sastavljanje ugovora o izgradnji nepokretnosti',
        'Pribavljanje građevinskih dozvola',
        'Pribavljanje lokacijskih dozvola',
        'Pribavljanje upotrebnih dozvola',
        'Uknjižba prava svojine u Katastru',
        'Konstituisanje hipoteke'
      ]
    },
    en: {
      name: 'Real Estate',
      subtitle: 'Comprehensive real estate transaction services',
      description: 'Complete legal service for all real estate transactions with maximum security and protection.',
      overview: 'Ilić Lj. Suzana Law Office provides legal services to all clients in real estate transactions (commercial buildings, apartments, land, etc.), considering this is an area that undergoes frequent changes in legal and regulatory provisions and carries enormous risk.',
      details: 'Ilić Lj. Suzana Law Office provides the following services in this area: obtaining excerpts from real estate records in the Cadastre, drafting real estate transaction contracts, drafting construction contracts, documentation related to obtaining building, location and use permits, registration of ownership rights on real estate in the Real Estate Cadastre, establishing (registering) mortgages on real estate in the Real Estate Cadastre.',
      approach: 'We provide documentation verification before real estate purchase and representation in proceedings before courts and other state authorities concerning real estate.',
      services: [
        'Obtaining real estate record excerpts',
        'Drafting real estate transaction contracts',
        'Drafting construction contracts',
        'Obtaining building permits',
        'Obtaining location permits',
        'Obtaining use permits',
        'Ownership registration in Cadastre',
        'Mortgage establishment'
      ]
    }
  },

  'medijacija': {
    id: 'medijacija',
    icon: MessageCircle,
    sr: {
      name: 'Medijacija',
      subtitle: 'Mirno rešavanje sporova kroz pregovaranje',
      description: 'Efikasno i ekonomično rešavanje sporova kroz postupak medijacije kao alternativu sudskom sporu.',
      overview: 'Postupak mirnog, vansudskog rešavanja spora, u kojem stranke dobrovoljno nastoje da sporni odnos reše putem pregovaranja, uz pomoć medijatora. Medijator na neutralan, nezavistan i nepristrasan način posreduje između strana u sporu, a u cilju nalaženja najpovoljnijeg rešenja za sporni odnos, koji rezultira potpisivanjem sporazuma strana u datom sporu.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge zastupanja u svim postupcima medijacije kao jeftinijeg postupka od sudskog (oslobađanje od plaćanja sudskih taksi ukoliko se parnični postupak okonča medijacijom, do dana zaključenja prvog ročišta za glavnu raspravu).',
      approach: 'Medijacija predstavlja brzu, efikasnu i ekonomičnu alternativu tradicionalnom sudskom postupku, omogućavajući stranama da zadrže kontrolu nad ishodom spora i postignu obostrano prihvatljivo rešenje.',
      services: [
        'Komercijalna medijacija',
        'Porodična medijacija',
        'Radni sporovi medijacija',
        'Građanska medijacija',
        'Međunarodna medijacija',
        'Online medijacija',
        'Pregovaranje sporazuma',
        'Mirno rešavanje sporova'
      ]
    },
    en: {
      name: 'Mediation',
      subtitle: 'Peaceful dispute resolution through negotiation',
      description: 'Efficient and economical dispute resolution through mediation as an alternative to court litigation.',
      overview: 'A procedure of peaceful, out-of-court dispute resolution, in which parties voluntarily attempt to resolve their dispute through negotiation, with the help of a mediator. The mediator mediates between the parties in dispute in a neutral, independent and impartial manner, aiming to find the most favorable solution for the disputed relationship, resulting in the signing of an agreement between the parties in the given dispute.',
      details: 'Ilić Lj. Suzana Law Office provides representation services in all mediation procedures as a cheaper procedure than court proceedings (exemption from court fees if litigation is concluded by mediation, until the day of conclusion of the first hearing for the main hearing).',
      approach: 'Mediation represents a fast, efficient and economical alternative to traditional court proceedings, allowing parties to retain control over the outcome of the dispute and achieve a mutually acceptable solution.',
      services: [
        'Commercial mediation',
        'Family mediation',
        'Labor dispute mediation',
        'Civil mediation',
        'International mediation',
        'Online mediation',
        'Agreement negotiation',
        'Peaceful dispute resolution'
      ]
    }
  },

  // English service URLs (mapped to same data but different URLs)
  'family-law': 'porodicno-pravo',
  'criminal-law': 'krivicno-pravo', 
  'corporate-law': 'korporativno-pravo',
  'labor-law': 'radno-pravo',
  'inheritance-law': 'nasledno-pravo',
  'misdemeanor-law': 'prekrsajno-pravo',
  'contract-law': 'ugovori',
  'damage-compensation': 'naknada-stete',
  'administrative-procedure': 'upravni-postupak',
  'administrative-dispute': 'upravni-spor',
  'real-estate': 'nekretnine',
  'mediation': 'medijacija'
};

// Helper function to get service data by slug
export const getServiceBySlug = (slug, language = 'sr') => {
  // If it's an English slug, get the corresponding Serbian slug
  const actualSlug = typeof servicesData[slug] === 'string' ? servicesData[slug] : slug;
  
  const service = servicesData[actualSlug];
  if (!service) return null;
  
  return {
    ...service,
    content: service[language] || service.sr // Fallback to Serbian if language not found
  };
};

// Helper function to get all services for a given language
export const getAllServices = (language = 'sr') => {
  return Object.keys(servicesData)
    .filter(key => typeof servicesData[key] === 'object') // Filter out string mappings
    .map(slug => ({
      slug,
      name: servicesData[slug][language]?.name || servicesData[slug].sr.name,
      ...servicesData[slug][language] || servicesData[slug].sr
    }));
};

// Helper function to get service slugs for navigation
export const getServiceSlugs = (language = 'sr') => {
  const slugMapping = {
    sr: [
      'porodicno-pravo',
      'krivicno-pravo',
      'korporativno-pravo',
      'radno-pravo',
      'nasledno-pravo',
      'prekrsajno-pravo',
      'ugovori',
      'naknada-stete',
      'upravni-postupak',
      'upravni-spor',
      'nekretnine',
      'medijacija'
    ],
    en: [
      'family-law',
      'criminal-law',
      'corporate-law',
      'labor-law',
      'inheritance-law',
      'misdemeanor-law',
      'contract-law',
      'damage-compensation',
      'administrative-procedure',
      'administrative-dispute',
      'real-estate',
      'mediation'
    ]
  };
  
  return slugMapping[language] || slugMapping.sr;
};