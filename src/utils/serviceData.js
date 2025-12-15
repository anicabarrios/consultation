import { 
  Shield, 
  Building, 
  Briefcase, 
  Scale, 
  FileSignature, 
  Calculator, 
  Clipboard, 
  Gavel,
  Landmark,
  CreditCard,
  FileText,
  ShieldCheck
} from 'lucide-react';

export const servicesData = {
  // Građansko i obligaciono pravo
  'gradjansko-obligaciono-pravo': {
    id: 'gradjansko-obligaciono-pravo',
    icon: Scale,
    sr: {
      name: 'Građansko i obligaciono pravo',
      subtitle: 'Zaštita prava i pravnih interesa u građanskopravnim odnosima',
      description: 'Pružamo sveobuhvatne pravne usluge iz oblasti građanskog i obligacionog prava za fizička i pravna lica.',
      overview: 'Građansko pravo predstavlja granu prava koja reguliše imovinske i lične odnose između pravnih subjekata. Obligaciono pravo, kao njegov sastavni deo, uređuje pravne odnose nastale na osnovu ugovora, prouzrokovanja štete i drugih pravnih činjenica.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge koje obuhvataju: zastupanje u građanskim parnicama, sastavljanje ugovora svih vrsta, rešavanje imovinskih sporova, zaštitu prava svojine, naknadu štete, tumačenje i primenu obligacionih odnosa.',
      approach: 'Pristupamo svakom predmetu sa posebnom pažnjom i posvećenošću, težeći ka optimalnom rešenju za klijenta uz poštovanje zakonskih propisa i etičkih normi pravne profesije.',
      services: [
        'Zastupanje u građanskim parnicama',
        'Sastavljanje ugovora',
        'Rešavanje imovinskih sporova',
        'Zaštita prava svojine',
        'Naknada štete',
        'Obligacioni odnosi',
        'Sticanje bez osnova',
        'Poslovodstvo bez naloga'
      ]
    },
    en: {
      name: 'Civil and Obligation Law',
      subtitle: 'Protection of rights and legal interests in civil law relations',
      description: 'We provide comprehensive legal services in the field of civil and obligation law for individuals and legal entities.',
      overview: 'Civil law is a branch of law that regulates property and personal relations between legal subjects. Obligation law, as an integral part, governs legal relations arising from contracts, causing damage, and other legal facts.',
      details: 'Ilić Lj. Suzana Law Office provides legal services including: representation in civil litigation, drafting of all types of contracts, resolution of property disputes, protection of property rights, damage compensation, interpretation and application of obligational relations.',
      approach: 'We approach each case with special attention and dedication, striving for the optimal solution for the client while respecting legal regulations and ethical norms of the legal profession.',
      services: [
        'Representation in civil litigation',
        'Contract drafting',
        'Property dispute resolution',
        'Property rights protection',
        'Damage compensation',
        'Obligational relations',
        'Unjust enrichment',
        'Negotiorum gestio'
      ]
    }
  },

  // Krivično pravo
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

  // Privredno pravo i statusne promene privrednih društava
  'privredno-pravo': {
    id: 'privredno-pravo',
    icon: Landmark,
    sr: {
      name: 'Privredno pravo',
      subtitle: 'Pravna podrška privrednim subjektima i statusne promene',
      description: 'Pružamo kompletne pravne usluge iz oblasti privrednog prava uključujući statusne promene privrednih društava.',
      overview: 'Privredno pravo reguliše pravne odnose između privrednih subjekata. Naša kancelarija pruža usluge pravnog savetovanja i zastupanja u svim aspektima privrednog poslovanja, uključujući statusne promene kao što su spajanje, podela, pripajanje i odvajanje privrednih društava.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge: pravnog savetovanja pri statusnim promenama, izrade potrebne dokumentacije, zastupanja pred Agencijom za privredne registre, due diligence postupaka, pregovaranja i sastavljanja ugovora o statusnim promenama.',
      approach: 'Pristupamo statusnim promenama sa posebnom pažnjom na zaštitu interesa klijenta i minimiziranje pravnih rizika povezanih sa transformacijom privrednog društva.',
      services: [
        'Spajanje privrednih društava',
        'Podela privrednih društava',
        'Pripajanje',
        'Odvajanje uz osnivanje',
        'Odvajanje uz pripajanje',
        'Promena pravne forme',
        'Due diligence',
        'Pravno savetovanje'
      ]
    },
    en: {
      name: 'Commercial Law',
      subtitle: 'Legal support for business entities and status changes',
      description: 'We provide complete legal services in commercial law including corporate status changes.',
      overview: 'Commercial law regulates legal relations between business entities. Our office provides legal advice and representation in all aspects of commercial operations, including status changes such as mergers, divisions, acquisitions, and spin-offs of companies.',
      details: 'Ilić Lj. Suzana Law Office provides services: legal advice on status changes, preparation of required documentation, representation before the Business Registers Agency, due diligence procedures, negotiation and drafting of status change agreements.',
      approach: 'We approach status changes with special attention to protecting client interests and minimizing legal risks associated with company transformation.',
      services: [
        'Company mergers',
        'Company divisions',
        'Acquisitions',
        'Spin-off with establishment',
        'Spin-off with acquisition',
        'Legal form change',
        'Due diligence',
        'Legal consulting'
      ]
    }
  },

  // Korporativno pravo
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

  // Radno pravo
  'radno-pravo': {
    id: 'radno-pravo',
    icon: Briefcase,
    sr: {
      name: 'Radno pravo',
      subtitle: 'Zaštita prava zaposlenih i poslodavaca',
      description: 'Pružamo pravnu podršku u svim pitanjima vezanim za radne odnose, kako za zaposlene tako i za poslodavce.',
      overview: 'Radno pravo reguliše odnose između zaposlenih i poslodavaca. Naša kancelarija pruža usluge savetovanja i zastupanja u svim pitanjima vezanim za zasnivanje, trajanje i prestanak radnog odnosa.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža pravne usluge koje obuhvataju: sastavljanje ugovora o radu, pravilnika o radu i drugih internih akata, savetovanje pri zasnivanju i prestanku radnog odnosa, zastupanje u radnim sporovima, zaštitu prava zaposlenih, savetovanje poslodavaca u vezi sa radnopravnim pitanjima.',
      approach: 'Težimo ka pronalaženju optimalnih rešenja koja štite interese naših klijenata uz poštovanje zakonskih propisa iz oblasti radnog prava.',
      services: [
        'Sastavljanje ugovora o radu',
        'Izrada pravilnika o radu',
        'Prestanak radnog odnosa',
        'Zastupanje u radnim sporovima',
        'Zaštita prava zaposlenih',
        'Savetovanje poslodavaca',
        'Kolektivno pregovaranje',
        'Disciplinski postupci'
      ]
    },
    en: {
      name: 'Labor Law',
      subtitle: 'Protection of employee and employer rights',
      description: 'We provide legal support in all matters related to employment relationships, for both employees and employers.',
      overview: 'Labor law regulates relations between employees and employers. Our office provides advisory and representation services in all matters related to establishment, duration and termination of employment.',
      details: 'Ilić Lj. Suzana Law Office provides legal services including: drafting employment contracts, work regulations and other internal documents, advice on establishment and termination of employment, representation in labor disputes, protection of employee rights, advising employers on labor law matters.',
      approach: 'We strive to find optimal solutions that protect our clients\' interests while respecting labor law regulations.',
      services: [
        'Drafting employment contracts',
        'Preparation of work regulations',
        'Employment termination',
        'Representation in labor disputes',
        'Employee rights protection',
        'Employer consulting',
        'Collective bargaining',
        'Disciplinary procedures'
      ]
    }
  },

  // Bankarsko i finansijsko pravo
  'bankarsko-finansijsko-pravo': {
    id: 'bankarsko-finansijsko-pravo',
    icon: CreditCard,
    sr: {
      name: 'Bankarsko i finansijsko pravo',
      subtitle: 'Pravna podrška u bankarskom i finansijskom sektoru',
      description: 'Pružamo specijalizovane pravne usluge iz oblasti bankarskog i finansijskog prava.',
      overview: 'Bankarsko i finansijsko pravo obuhvata pravne norme koje regulišu poslovanje banaka, finansijskih institucija i tržišta kapitala. Naša kancelarija pruža pravnu podršku klijentima u ovoj složenoj i dinamičnoj oblasti.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge: pravnog savetovanja u bankarskim poslovima, sastavljanja i analize ugovora o kreditu, zastupanja u sporovima sa bankama i finansijskim institucijama, savetovanja u vezi sa hartijama od vrednosti, usklađenosti poslovanja sa regulativom finansijskog sektora.',
      approach: 'Kombinujemo duboko poznavanje finansijske regulative sa praktičnim iskustvom u cilju pružanja efikasnih pravnih rešenja našim klijentima.',
      services: [
        'Kreditni poslovi',
        'Ugovori o kreditu',
        'Sporovi sa bankama',
        'Hartije od vrednosti',
        'Finansijska regulativa',
        'Investicioni fondovi',
        'Platni promet',
        'Devizno poslovanje'
      ]
    },
    en: {
      name: 'Banking and Financial Law',
      subtitle: 'Legal support in banking and financial sector',
      description: 'We provide specialized legal services in banking and financial law.',
      overview: 'Banking and financial law encompasses legal norms regulating the operations of banks, financial institutions, and capital markets. Our office provides legal support to clients in this complex and dynamic field.',
      details: 'Ilić Lj. Suzana Law Office provides services: legal advice in banking operations, drafting and analysis of loan agreements, representation in disputes with banks and financial institutions, advice on securities, compliance with financial sector regulations.',
      approach: 'We combine deep knowledge of financial regulations with practical experience to provide efficient legal solutions to our clients.',
      services: [
        'Credit operations',
        'Loan agreements',
        'Banking disputes',
        'Securities',
        'Financial regulations',
        'Investment funds',
        'Payment transactions',
        'Foreign exchange operations'
      ]
    }
  },

  // Izvršni postupci
  'izvrsni-postupci': {
    id: 'izvrsni-postupci',
    icon: FileText,
    sr: {
      name: 'Izvršni postupci',
      subtitle: 'Efikasno sprovođenje i zaštita prava',
      description: 'Pružamo pravne usluge u izvršnim postupcima za efikasnu realizaciju i zaštitu prava.',
      overview: 'Izvršni postupak služi za prinudno ostvarivanje novčanih i nenovčanih potraživanja na osnovu izvršne ili verodostojne isprave.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža potpunu pravnu podršku u svim fazama izvršnog postupka, sa ciljem efikasne i zakonite zaštite prava stranaka.',
      approach: 'Pristupamo svakom predmetu sa ciljem postizanja najboljeg mogućeg rezultata za klijenta uz minimalne troškove i vreme.',
      services: [
        'Pokretanje izvršnog postupka',
        'Zastupanja poverilaca u postupku prinudne naplate potraživanja',
        'Zastupanja dužnika u izvršnom postupku',
        'Sastavljanja predloga za izvršenje',
        'Sastavljanja prigovora, žalbi i drugih pravnih podnesaka u izvršnom postupku',
        'Pravne podrške u postupcima sprovođenja izvršenja pred izvršiteljima i sudovima',
        'Praćenje i analiza toka izvršnog postupka i preduzimanje odgovarajućih pravnih radnji radi ubrzanja postupka',
        'Savetovanje i zastupanje u postupcima obustave, odlaganja ili protivizvršenja'
        
      ]
    },
    en: {
      name: 'Enforcement Proceedings',
      subtitle: 'Efficient enforcement and protection of rights',
      description: 'We provide legal services in enforcement proceedings for efficient realization and protection of rights.',
      overview: 'Enforcement proceedings serve for compulsory realization of monetary and non-monetary claims based on enforceable or authentic documents. Our office provides comprehensive legal support in all phases of enforcement proceedings.',
      details: 'Ilić Lj. Suzana Law Office provides complete legal support in all phases of enforcement proceedings, with the goal of efficient and lawful protection of parties\' rights.',
      approach: 'We approach each case with the goal of achieving the best possible outcome for the client with minimal costs and time.',
      services: [
        'Initiation of enforcement proceedings',
        'Creditor representation in debt collection',
        'Debtor representation',
        'Drafting enforcement motions',
        'Drafting objections and appeals',
        'Support in enforcement before bailiffs and courts',
        'Monitoring and analysis of proceedings',
        'Suspension and counter-enforcement'
      ]
    }
  },

  // Ugovorno pravo
  'ugovorno-pravo': {
    id: 'ugovorno-pravo',
    icon: FileSignature,
    sr: {
      name: 'Ugovorno pravo',
      subtitle: 'Izrada i analiza ugovora svih vrsta',
      description: 'Pružamo kompletne usluge izrade, analize i pregovaranja ugovora za fizička i pravna lica.',
      overview: 'Ugovorno pravo reguliše stvaranje, izvršenje i prestanak ugovornih odnosa. Naša kancelarija pruža sveobuhvatne usluge koje obezbeđuju pravnu sigurnost u poslovnim i privatnim transakcijama.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge: izrade i revizije ugovora svih vrsta (ugovori o prodaji, zakupu, delu, posredovanju, franšizi, distribuciji), pregovaranja ugovornih odredbi, analize postojećih ugovora, savetovanja u slučaju povrede ugovora.',
      approach: 'Težimo ka izradi preciznih i sveobuhvatnih ugovora koji štite interese naših klijenata i minimiziraju potencijalne rizike.',
      services: [
        'Izrada ugovora',
        'Revizija ugovora',
        'Pregovaranje',
        'Ugovori o prodaji',
        'Ugovori o zakupu',
        'Ugovori o franšizi',
        'Ugovori o delu',
        'Analiza ugovora'
      ]
    },
    en: {
      name: 'Contract Law',
      subtitle: 'Drafting and analysis of all types of contracts',
      description: 'We provide complete contract drafting, analysis and negotiation services for individuals and legal entities.',
      overview: 'Contract law regulates the creation, performance, and termination of contractual relations. Our office provides comprehensive services ensuring legal certainty in business and private transactions.',
      details: 'Ilić Lj. Suzana Law Office provides services: drafting and revision of all types of contracts (sales, lease, work, agency, franchise, distribution agreements), negotiating contract terms, analysis of existing contracts, advice in case of contract breach.',
      approach: 'We strive to create precise and comprehensive contracts that protect our clients\' interests and minimize potential risks.',
      services: [
        'Contract drafting',
        'Contract revision',
        'Negotiation',
        'Sales agreements',
        'Lease agreements',
        'Franchise agreements',
        'Work agreements',
        'Contract analysis'
      ]
    }
  },

  // Naknada štete
  'naknada-stete': {
    id: 'naknada-stete',
    icon: Calculator,
    sr: {
      name: 'Naknada štete',
      subtitle: 'Ostvarivanje prava na naknadu pretrpljene štete',
      description: 'Zastupamo klijente u postupcima za naknadu materijalne i nematerijalne štete.',
      overview: 'Pravo na naknadu štete predstavlja temeljno pravo svakog lica koje je pretrpelo štetu. Naša kancelarija pruža sveobuhvatnu pravnu podršku u ostvarivanju ovog prava.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge zastupanja u postupcima naknade štete prouzrokovane: saobraćajnim nezgodama, povredama na radu, lekarskim greškama, neispunjenjem ugovornih obaveza, povredom časti i ugleda.',
      approach: 'Pristupamo svakom predmetu sa posebnom pažnjom, temelino procenjujući osnovanost zahteva i visinu naknade.',
      services: [
        'Saobraćajne nezgode',
        'Povrede na radu',
        'Lekarske greške',
        'Materijalna šteta',
        'Nematerijalna šteta',
        'Ugovorna šteta',
        'Povreda ugleda',
        'Osiguranje'
      ]
    },
    en: {
      name: 'Damage Compensation',
      subtitle: 'Exercising the right to compensation for damages suffered',
      description: 'We represent clients in proceedings for material and non-material damage compensation.',
      overview: 'The right to damage compensation is a fundamental right of every person who has suffered damage. Our office provides comprehensive legal support in exercising this right.',
      details: 'Ilić Lj. Suzana Law Office provides representation services in damage compensation proceedings caused by: traffic accidents, workplace injuries, medical errors, breach of contractual obligations, defamation.',
      approach: 'We approach each case with special attention, thoroughly assessing the validity of claims and the amount of compensation.',
      services: [
        'Traffic accidents',
        'Workplace injuries',
        'Medical malpractice',
        'Material damage',
        'Non-material damage',
        'Contractual damage',
        'Defamation',
        'Insurance'
      ]
    }
  },

  // Upravni postupak
  'upravni-postupak': {
    id: 'upravni-postupak',
    icon: Clipboard,
    sr: {
      name: 'Upravni postupak',
      subtitle: 'Zastupanje pred državnim organima',
      description: 'Pružamo pravnu pomoć i zastupanje u svim vrstama upravnih postupaka pred državnim organima.',
      overview: 'Upravni postupak je skup pravila po kojima državni organi postupaju i donose pojedinačne akte. Naša kancelarija pruža sveobuhvatnu pravnu podršku u ovoj oblasti.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge: podnošenja zahteva i žalbi u upravnom postupku, zastupanja pred upravnim organima, izrade pravnih sredstava, savetovanja u vezi sa pravima i obavezama u upravnom postupku.',
      approach: 'Pristupamo upravnim postupcima sa temeljnim poznavanjem propisa i dugogodišnjim iskustvom u radu sa državnim organima.',
      services: [
        'Podnošenje zahteva',
        'Izrada žalbi',
        'Zastupanje pred organima',
        'Građevinske dozvole',
        'Urbanističke dozvole',
        'Poreske stvari',
        'Carinski postupci',
        'Inspekcijski postupci'
      ]
    },
    en: {
      name: 'Administrative Procedure',
      subtitle: 'Representation before government authorities',
      description: 'We provide legal assistance and representation in all types of administrative procedures before government authorities.',
      overview: 'Administrative procedure is a set of rules according to which government authorities act and issue individual acts. Our office provides comprehensive legal support in this area.',
      details: 'Ilić Lj. Suzana Law Office provides services: filing applications and appeals in administrative procedures, representation before administrative authorities, drafting legal remedies, advice regarding rights and obligations in administrative procedures.',
      approach: 'We approach administrative procedures with thorough knowledge of regulations and years of experience working with government authorities.',
      services: [
        'Filing applications',
        'Drafting appeals',
        'Representation before authorities',
        'Building permits',
        'Urban planning permits',
        'Tax matters',
        'Customs procedures',
        'Inspection procedures'
      ]
    }
  },

  // Upravni spor
  'upravni-spor': {
    id: 'upravni-spor',
    icon: Gavel,
    sr: {
      name: 'Upravni spor',
      subtitle: 'Sudska zaštita u upravnim stvarima',
      description: 'Pružamo zastupanje u upravnim sporovima pred Upravnim sudom radi zaštite prava povređenih upravnim aktima.',
      overview: 'Upravni spor predstavlja sudski postupak u kojem se kontroliše zakonitost pojedinačnih akata državnih organa. Naša kancelarija pruža stručnu pravnu pomoć u ovoj oblasti.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge: podnošenja tužbi Upravnom sudu, zastupanja u upravnom sporu, izrade pravnih sredstava, savetovanja o mogućnostima pobijanja upravnih akata.',
      approach: 'Pristupamo upravnim sporovima sa dubinom poznavanja upravnog prava i sudske prakse Upravnog suda.',
      services: [
        'Podnošenje tužbi',
        'Zastupanje pred sudom',
        'Pobijanje upravnih akata',
        'Vanredna pravna sredstva',
        'Poništaj rešenja',
        'Vraćanje na ponovno odlučivanje',
        'Pravna analiza',
        'Savetovanje'
      ]
    },
    en: {
      name: 'Administrative Dispute',
      subtitle: 'Judicial protection in administrative matters',
      description: 'We provide representation in administrative disputes before the Administrative Court to protect rights violated by administrative acts.',
      overview: 'Administrative dispute is a judicial procedure in which the legality of individual acts of government authorities is controlled. Our office provides expert legal assistance in this area.',
      details: 'Ilić Lj. Suzana Law Office provides services: filing lawsuits with the Administrative Court, representation in administrative disputes, drafting legal remedies, advice on possibilities for challenging administrative acts.',
      approach: 'We approach administrative disputes with deep knowledge of administrative law and Administrative Court case law.',
      services: [
        'Filing lawsuits',
        'Court representation',
        'Challenging administrative acts',
        'Extraordinary legal remedies',
        'Annulment of decisions',
        'Remanding for reconsideration',
        'Legal analysis',
        'Consulting'
      ]
    }
  },

  // Usklađenost poslovanja (Compliance)
  'uskladjenost-poslovanja': {
    id: 'uskladjenost-poslovanja',
    icon: ShieldCheck,
    sr: {
      name: 'Usklađenost poslovanja',
      subtitle: 'Compliance - Usklađenost sa zakonskim i regulatornim zahtevima',
      description: 'Pružamo sveobuhvatne usluge usklađenosti poslovanja sa zakonskim i regulatornim zahtevima.',
      overview: 'Usklađenost poslovanja (compliance) podrazumeva sistem mera i postupaka kojima se obezbeđuje da organizacija posluje u skladu sa primenjivim zakonima, propisima, internim pravilima i etičkim standardima.',
      details: 'Advokatska kancelarija Ilić Lj. Suzana pruža usluge: izrade internih akata usklađenosti, procene rizika od neusklađenog poslovanja, implementacije sistema za sprečavanje pranja novca i finansiranja terorizma (AML/CFT), usklađenosti sa propisima o zaštiti podataka o ličnosti (GDPR), izrade kodeksa poslovnog ponašanja i etičkih standarda.',
      approach: 'Pristupamo usklađenosti kao kontinuiranom procesu koji zahteva stalno praćenje propisa i prilagođavanje internih procedura.',
      services: [
        'Izrada compliance programa',
        'Procena rizika',
        'AML/CFT usklađenost',
        'Zaštita podataka (GDPR)',
        'Interni akti',
        'Kodeks ponašanja',
        'Due diligence',
        'Obuka zaposlenih'
      ]
    },
    en: {
      name: 'Business Compliance',
      subtitle: 'Compliance with legal and regulatory requirements',
      description: 'We provide comprehensive business compliance services with legal and regulatory requirements.',
      overview: 'Business compliance encompasses a system of measures and procedures ensuring that an organization operates in accordance with applicable laws, regulations, internal rules, and ethical standards.',
      details: 'Ilić Lj. Suzana Law Office provides services: drafting internal compliance documents, risk assessment of non-compliant operations, implementation of anti-money laundering and counter-terrorism financing systems (AML/CFT), compliance with personal data protection regulations (GDPR), drafting codes of business conduct and ethical standards.',
      approach: 'We approach compliance as a continuous process requiring constant monitoring of regulations and adaptation of internal procedures.',
      services: [
        'Compliance program development',
        'Risk assessment',
        'AML/CFT compliance',
        'Data protection (GDPR)',
        'Internal documents',
        'Code of conduct',
        'Due diligence',
        'Employee training'
      ]
    }
  },

  // English service URLs (mapped to Serbian data)
  'civil-obligation-law': 'gradjansko-obligaciono-pravo',
  'criminal-law': 'krivicno-pravo',
  'commercial-law': 'privredno-pravo',
  'corporate-law': 'korporativno-pravo',
  'labor-law': 'radno-pravo',
  'banking-financial-law': 'bankarsko-finansijsko-pravo',
  'enforcement-proceedings': 'izvrsni-postupci',
  'contract-law': 'ugovorno-pravo',
  'damage-compensation': 'naknada-stete',
  'administrative-procedure': 'upravni-postupak',
  'administrative-dispute': 'upravni-spor',
  'business-compliance': 'uskladjenost-poslovanja'
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
      'gradjansko-obligaciono-pravo',
      'krivicno-pravo',
      'privredno-pravo',
      'korporativno-pravo',
      'radno-pravo',
      'bankarsko-finansijsko-pravo',
      'izvrsni-postupci',
      'ugovorno-pravo',
      'naknada-stete',
      'upravni-postupak',
      'upravni-spor',
      'uskladjenost-poslovanja'
    ],
    en: [
      'civil-obligation-law',
      'criminal-law',
      'commercial-law',
      'corporate-law',
      'labor-law',
      'banking-financial-law',
      'enforcement-proceedings',
      'contract-law',
      'damage-compensation',
      'administrative-procedure',
      'administrative-dispute',
      'business-compliance'
    ]
  };
  
  return slugMapping[language] || slugMapping.sr;
};