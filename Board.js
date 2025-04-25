let board = [
  {
    name: 'tekstil',
    price: 50, 
    rent: 5,
    owner:0,
    quiz:[ 
      {
        q: 'Er tekstile materialer som bomuld og hør biologisk nedbrydelige?',
        a: true,
      },
      {
        q: 'Kan syntetiske tekstiler som polyester nedbrydes hurtigt i naturen?',
        a: false,
      },
      {
        q: 'Har tekstilers struktur og materiale betydning for rummets akustik?',
        a: true,
      },
    ] 

  },
  {
    name: 'træværksted',
    price: 20, 
    rent: 10,
    owner:0,
    quiz:[ 
      {
        q: 'Er alle typer træ egnede til udendørs konstruktion uden behandling?',
        a: false,
      },
      {
        q: 'Kan træets årer og struktur have betydning for dets styrke og holdbarhed?',
        a: true,
      },
      {
        q: 'Er træ et materiale, man kan save i?',
        a: true,
      },
    ] 

  },
  {
    name: 'svejse lokale',
    price: 30, 
    rent: 8,
    owner:0,
    quiz:[ 
      {
        q: 'Bruger man varme, når man svejser metal sammen?',
        a: true,
      },
      {
        q: 'Er det sikkert at svejse uden beskyttelsesbriller?',
        a: false,
      },
      {
        q: 'Kan man svejse aluminium og stål?',
        a: true,
      },
    ] 

  },
  {
    name: 'laser skære',
    price: 40, 
    rent: 5,
    owner:0,
    quiz:[ 
      {
        q: 'Bruger en laserskærer lys til at skære i materialer?',
        a: true,
      },
      {
        q: 'Kan man uden problemer skære i alle typer plast med en laserskærer?',
        a: false,
      },
      {
        q: 'Skal man bruge beskyttelsesbriller, når man arbejder med visse typer laserskærere?',
        a: true,
      },
    ] 

  },
  {
    name: '3d printer',
    price: 70, 
    rent: 10,
    owner:0,
    quiz:[ 
      {
        q: 'Bruger en 3D-printer plastik til at bygge genstande lag for lag?',
        a: true,
      },
      {
        q: 'Er det muligt at 3D-printe i metal med en almindelig skoleprinter?',
        a: false,
      },
      {
        q: 'Skal man bruge en digital model for at kunne 3D-printe noget?',
        a: true,
      },
    ] 

  },
  {
    name: 'kantine',
    price: 250, 
    rent: 40,
    owner:0,
    quiz:[ 
      {
        q: 'Kan man købe mad og drikkevarer i kantinen?',
        a: true,
      },
      {
        q: 'må man opholde sig i kantinen og lave lektier?',
        a: true,
      },
      {
        q: 'Er kantinen kun åben i pauserne?',
        a: false,
      },
    ] 

  },
  {
    name: 'fest sal',
    price: 150, 
    rent: 40,
    owner:0,
    quiz:[ 
      {
        q: 'Kan man opholde sig i salen hvis man ikke har fået lov af en lærer?',
        a: false,
      },
      {
        q: 'Bliver salen brugt som dansegulv til skolefester?',
        a: true,
      },
      {
        q: 'bliver der holdt fordrag og ligende i salen noglegange?',
        a: true,
      },
    ] 

  },
  {
    name: 'fredags café',
    price: 300, 
    rent: 100,
    owner:0,
    quiz:[ 
      {
        q: 'Er fredags caféen kun åben om fredagen?',
        a: true,
      },
      {
        q: 'Er fredags café åben alle fredag?',
        a: false,
      },
      {
        q: 'Kan man opholde sig i fredags caféen i hverdagene?',
        a: true,
      },
    ] 

  },
  {
    name: 'gården',
    price: 100, 
    rent: 30,
    owner:0,
    quiz:[ 
      {
        q: 'Er gården et udendørs område?',
        a: true,
      },
      {
        q: 'Kan man spille fodbold i gården?',
        a: true,
      },
      {
        q: 'Er gården kun til at sidde i?',
        a: false,
      },
    ] 

  },
  {
    name: 'bordtennis ',
    price: 50, 
    rent: 5,
    owner:0,
    quiz:[ 
      {
        q: 'spiller man til 21 i bordtennis?',
        a: true,
      },
      {
        q: 'skal man være mere end 1 til at spille bordtennis?',
        a: true,
      },
      {
        q: 'må man røre bordet man skyder retur?',
        a: false,
      },
    ] 

  },
  {
    name: 'kemi lokale',
    price: 70, 
    rent: 10,
    owner:0,
    quiz:[ 
      {
        q: 'kan man blande alle kemikalier uden at der sker noget?',
        a: false,
      },
      {
        q: 'Skal man altid smage på kemikalier for at vide hvad de er?',
        a: false,
      },
      {
        q: 'Kan nogle kemiske reaktioner være farlige?',
        a: true,
      },
    ] 

  },
  {
    name: 'fysik lokale',
    price: 60, 
    rent: 10,
    owner:0,
    quiz:[ 
      {
        q: 'Er tyngdekraften den kraft, der trækker os ned mod jorden?',
        a: true,
      },
      {
        q: 'Kan lys rejse hurtigere end lyden?',
        a: true,
      },
      {
        q: 'Er energi og kraft det samme?',
        a: false,
      },
    ] 

  },
  {
    name: 'biologi lokale',
    price: 50, 
    rent: 5,
    owner:0,
    quiz:[ 
      {
        q: 'Har alle levende organismer celler?',
        a: true,
      },
      {
        q: 'Foregår fotosyntese kun i planter?',
        a: true,
      },
      {
        q: 'Er DNA arvematerialet i alle organismer?',
        a: true,
      },
    ] 

  },
  {
    name: 'matematik lokale',
    price: 65, 
    rent: 10,
    owner:0,
    quiz:[ 
      {
        q: 'er pi et uendeligt decimaltal?',
        a: true,
      },
      {
        q: 'gælder Pythagoras sætning for alle trekanter?',
        a: false,
      },
      {
        q: 'Er en funktion en sammenhæng mellem to variable?',
        a: true,
      },
    ] 

  },
  {
    name: 'biografen',
    price: 300, 
    rent: 120,
    owner:0,
    quiz:[ 
      {
        q: 'var stumfilm de første film der blev lavet?',
        a: true,
      },
      {
        q: 'Var inderst inde 2 den mest sete film i de danske biografer i 2024?',
        a: true,
      },
      {
        q: 'Er alle film baseret på bøger?',
        a: false,
      },
    ] 

  },
  {
    name: 'musik lokale',
    price: 200, 
    rent: 75,
    owner:0,
    quiz:[ 
      {
        q: 'Er spotify den mest populære musikstreaming tjeneste?',
        a: true,
      },
      {
        q: 'Er det muligt at spille musik uden instrumenter?',
        a: true,
      },
      {
        q: 'Vandt Kendrick Lamar to Grammys i 2024?',
        a: true,
      },
    ] 

  },
  {
    name: 'greenscreen rum',
    price: 150, 
    rent: 30,
    owner:0,
    quiz:[ 
      {
        q: 'Kan man udskifte en grøn baggrund med en anden video eller et billede i redigeringen?',
        a: true,
      },
      {
        q: 'Er det bedst at have grønt tøj på når man bruger en greenscreen?',
        a: false,
      },
      {
        q: 'Bliver greenscreen-teknologi brugt i både film og tv-produktioner?',
        a: true,
      },
    ] 

  },
  {
    name: 'printer rum',
    price: 100, 
    rent: 20,
    owner:0,
    quiz:[ 
      {
        q: 'skal en printer have blæk eller toner for at kunne printe?',
        a: true,
      },
      {
        q: 'Er det kun muligt at printe i sort/hvid?',
        a: false,
      },
      {
        q: 'Kan man printe trådløst fra en computer eller mobil?',
        a: true,
      },
    ] 

  },
  {
    name: 'kontoret',
    price: 1000, 
    rent: 500,
    owner:0,
    quiz:[ 
      {
        q: 'Har kontoret en glemmekasse?',
        a: true,
      },
      {
        q: 'Er kontoret altid bemandet i skoletiden?',
        a: true,
      },
      {
        q: 'Kan man gå ned på kontoret for at snakke med rektor eller vice rektor?',
        a: true,
      },
  
    ] 

  },
  {
    name: 'forum station',
    price: 1000, 
    rent: 500,
    owner:0,
    quiz:[ 
      {
        q: 'Kan man tage metroen fra forum station?',
        a: true,
      },
      {
        q: 'Kan man tage bussen til forum station?',
        a: true,
      },
      {
        q: 'Er forum station en del af M3 og M4 metroen?',
        a: false,
      },
    ] 

  },
  {
    name: 'rema 1000',
    price: 600, 
    rent: 300,
    owner:0,
    quiz:[ 
      {
        q: 'Koster en 1,5 liter ice tea 5 kr i rema 1000?',
        a: true,
      },
      {
        q: 'Kan man få mange forskellige slags chips i rema 1000?',
        a: true,
      },
      {
        q: 'kan man få mange forskellige frokostretter i rema 1000?',
        a: true,
      },
    ] 

  },
  {
    name: 'netto',
    price: 750, 
    rent: 350,
    owner:0,
    quiz:[ 
      {
        q: 'Er der to forskellige nettoer som ligger tæt på skolen?',
        a: true,
      },
      {
        q: 'Kan man få det samme i netto som man kan i rema 1000?',
        a: false,
      },
      {
        q: 'Er nettos bakeoff kinda goated?',
        a: true,
      },
    ] 

  },
  {
    name: 'blågårds plads',
    price: 1500, 
    rent: 900,
    owner:0,
    quiz:[ 
      {
        q: 'Kan man få god og billig kebab på blågårdspladsen?',
        a: true,
      },
      {
        q: 'Kan man få mange forskellige slags mad på blågårdspladsen?',
        a: true,
      },
      {
        q: 'Er der kun en restaurant på blågårdspladsen?',
        a: false,
      },
    ] 

  },



]
