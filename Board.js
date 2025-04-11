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
        q: 'blablabla',
        a: false,
      },
      {
        q: 'blablabla',
        a: false,
      },
      {
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
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
        q: 'blablabla',
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
        a: false,
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
        q: 'blablabla',
        a: false,
      },
    ] 

  },



]
