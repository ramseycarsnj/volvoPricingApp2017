$(document).ready(function() {
const accessoriesArray = [
  '17&#8243; Pallene Silver Wheels',
  '18&#8243; Skadi Wheels',
  '18&#8243; 5-Spoke Sparkling Silver Wheels',
  '18&#8243; 10-Spoke Turbine Silver Bright Wheels',
  '18&#8243; Tuscan Diamond Cut - Glossy Black Wheels',
  '18&#8243; Neso Diamond Cut Wheels',
  '18&#8243; Leda Diamond Cut - Gloss Black Wheels',
  '19&#8243; Bor Matte Black Finish Wheels',
  '19&#8243; Ixion Wheels',
  '19&#8243; Portia Diamond Cut - Black Wheels',
  '19&#8243; 6-Double Spoke Tech Black Matte - Diamond Cut Wheels',
  '19&#8243; 5-Triple Spoke Tech Matte Black Diamond Cut Wheels',
  '19&#8243; 10-Spoke Turbine Silver Bright Wheels',
  '19&#8243; 10-Spoke Silver Diamond Cut Wheels',
  '20&#8243; Titania Wheels',
  '20&#8243; Avior Wheels',
  '20&#8243; 5-Double Spoke Matte Tech Black Wheels',
  '20&#8243; 5-Spoke Tech Matte Tech Grey Diamond Cut Wheels',
  '20&#8243; 8-Spoke Silver Diamond Cut Wheels',
  '20&#8243; 10-Spoke Tinted Silver Diamond Cut Wheels',
  '20&#8243; 10-Spoke Tech Grey Diamond Cut Wheels',
  '21&#8243; 8-Spoke Diamond Cut Silver Wheels',
  '21&#8243; 10-Spoke Turbine Polished Wheels',
  '22&#8243; 6-Spoke Matte Black Diamond Wheels Wheels',
  '22&#8243; 5-Double Spoke Diamond Cut - Matte Black Wheels',
  '22&#8243; 6-Double Spoke Matte Black Diamond Cut Wheels',
  'Off-Black Textile - T-Tec Seats',
  'Soft Beige Comfort Leather Seats',
  'Off-Black Comfort Leather Seats',
  'Off-Black Sport Leather Seats',
  'Soft Beige Sport Leather Seats',
  'Beechwood Sport Leather Seats',
  'Soft Beige - Off-Black  Sport Leather Seats',
  'Beechwood  Brown - Off-Black Sport Leather Seats',
  'Blonde - Off-Black Sport Leather Seats',
  'Charcoal Leather in Charcoal Seats',
  'Amber Leather in Charcoal Seats',
  'Blonde Leather in Blonde - Charcoal Seats',
  'Charcoal Leatherette in Charcoal Seats',
  'Charcoal Perforated Fine Nappa Leather in Charcoal Seats',
  'Blonde Perforated Fine Nappa Leather in Charcoal Seats',
  'Charcoal Perforated Nappa Leather in Charcoal Seats',
  'Amber Perforated Nappa Leather in Charcoal Seats',
  'Blonde Perforated Nappa Leather in Blonde -  Charcoal Seats',
  'Charcoal Nuback &amp; Nappa Leather in Charcoal Seats',
  'R-Design Sport Leather -  Perforated Leather Seats',
  'Split Dual End Tailpipes w - Rear Diffuser',
  'Rear Spoiler',
  'Decor Spoiler Front Bumper',
  'Diffuser',
  'Integrated Running Boards',
  'Side Scuff Plates',
  'Rugged Styling Kt  with Running Boards',
  'Urban Styling Kit with Running Boards',
  'Rugged Styling Kit with Side Scuff Plates',
  'Urban Styling Kit with Side Scuff Plates',
  'Front &amp; Rear Skid Plate Kit',
  'Running Boards',
  'Milled Aluminum Inlays',
  'Metal Mesh Aluminium Inlays',
  'Metal Mesh Decor Inlays',
  'Aluminum Inlays',
  'Iron Ore Aluminum Inlays',
  'R-Design Aluminum Inlays',
  'Carbon Fiber Inlays',
  'Piano Black Inlays',
  'Urbane Wood Inlays',
  'Dark Walnut Wood Inlays',
  'Linear Walnut Wood Inlays',
  'Dark Flame Birch Wood Inlays',
  '3-Spoke Leather Steering Wheel w - Decor Inlay',
  'Leather Steering Wheel w - Decor Inlay',
  'Leather &amp; Flame Birch Wood Steering Wheel',
  'R-Design 3-Spoke Steering Wheel',
  'Illuminated Gearshift Knob',
  'Leather Gearshift Knob',
  'Leather Gaiter Gearshift Knob',
  'R-Design Perforated Gearshift Knob',
  'Crystal Gearshift Knob or Orrefors',
  'Eyeglass Holder',
  'Tempa Spare',
  'Park Assist Camera',
  'Black Headliner',
  'Premium Air Suspension',
  '4-corner Air Suspension',
  'Polestar Performance Software',
  'Heated Front Seats',
  'Keyless Drive',
  'Active Dual Xenon Headlights',
  'Rear Seat Entertainment System',
  'Sport Pedals',
  'Sensus Navigation',
  'Graphical Head-Up Display (HUD)',
  'Dual Two-Stage Child Booster Seats',
  'Integrated, Center Booster Cushion, 2nd Row',
  'Child Booster Cushion and Backrest',
  'Charcoal Headliner',
  'Leather Upgrade on Dash Board &amp; Front - Rear Door Panels',
  'Trailer Hitch',
  'Steel Grille',
  'iPad Holder',
  'Red Key',
  'Sunshades. Luggage Compartment Area',
  'Sunshade',
  'Dirt Cover Load Compartment, Full Coverage',
  'Luggage Net',
  'Luggage Compartment Mat, Plastic',
  'Luggage Compartment Mat, Reversible',
  'Rubber Floor Mats',
  'Luggage Net',
  'Net Pocket Kit',
  'Roof Box, Designed by Volvo Cars',
  'Roof Box, Expanding',
  'Roof Box, Sport Time - Glossy Black',
  'Bike Carrier, Frame- Mounted Aluminum',
  'Ski Holder, Sliding',
  'Canoe - Kayak Carrier',
  'Child Seat Kick Guard',
  'Comfort Upholstery and Head Support',
  'Child Booster Cushion and Backrest',
  'Dog Harness',
  'Mudflaps, Front',
  'Mudflaps, Rear',
  'Rear Seat Guard',
  'Bumper Cover',
  'Illuminated Tailgate Scuff Plate',
  'Illuminated Sill Molding',
  'Load Bars'
];

const packagesArray = [
  'Dynamic Platinum Package',
  'T5 Momentum Plus Package',
  'Vision Package',
  'Preferred Option Package',
  'Advanced Package',
  'Climate Package',
  'Climate Package w - Child Booster Seats',
  'Climate Package with Graphical Head-up Display',
  'Convenience Package',
  'Technology Package',
  'BLIS Package',
  'Park Assist Pilot w - BLIS',
  'Sport Package',
  'Navigation  -  Harman Kardon Package',
  '19&#8243; Sport Package',
  'Luxury Package',
  'Bowers &amp; Wilkins Sound'
];

    // List of Volvo Colors Available
    const iceWhite = 'Ice White';
    const crystalWhitePearl = 'Crystal White Pearl';
    const brightSilverMetallic = 'Bright Silver Metallic';
    const electricSilverWhite = 'Electric Silver White';
    const osmiumGreyMetallic = 'Osmium Grey Metallic';
    const savileGreyMetallic = 'Savile Grey Metallic';
    const musselBlueMetallic = 'Mussel Blue Metallic';
    const magicBlueMetallic = 'Magic Blue Metallic';
    const powerBlueMetallic = 'power Blue Metallic';
    const burstingBlueMetallic = 'Bursting Blue Metallic';
    const blackStone = 'Black Stone';
    const onyxBlackMetallic = 'Onyx Black Metallic';
    const passionRed = 'Passion Red';
    const flamencoRedMetallic = 'Flamenco Red Metallic';
    const luminousSandMetallic = 'Luminous Sand Metallic';
    const twilightBronzeMetallic = 'Twilight Bronze Metallic';
    const richJavaMetallic = 'Rich Java Metallic';

    const brochureArray = [
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm',
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60+Cross+Country/Sedan.htm',
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm',
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm',
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm',
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm',
      'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
    ];


    // Vehicles Array -------------------------------------------------------------------------
    const volvoVehicleArray = ['S60','S60 Cross Country','S90','V60','V60 Cross Country','V90','V90 Cross Country','XC60','XC90'];

    const volvoS60Trim = ['T5 Dynamic FWD','T5 Dynamic AWD','T5 Inscription FWD','T5 Inscription AWD','T5 Inscription Platinum FWD','T5 Inscription Platinum AWD','R-Design'];
    const volvoS60CrossCountryTrim = ['T5 AWD'];
    const volvoS90Trim = ['T5 Inscription FWD','T6 Inscription AWD','T5 Momentum FWD','T6 Momentum AWD'];
    const volvoV60Trim = ['T5 FWD','T5 AWD','T5 Dynamic FWD','T5 Dynamic AWD','T5 Premier FWD','T5 Premier AWD','T5 Platinum FWD','T5 Platinum AWD','T6 R-Design AWD'];
    const volvoV60CrossCountryTrim = ['T5 AWD','Platinum'];
    const volvoV90Trim = ['T6 AWD'];
    const volvoV90CrossCountryTrim = ['T6 AWD'];
    const volvoXC60Trim = ['T5 Dynamic FWD','T5 Dynamic AWD','T6 Dynamic AWD','T5 Inscription FWD','T5 Inscription AWD','T6 Inscription AWD','T6 R-Design AWD'];
    const volvoXC90Trim = ['T5 Momentum FWD','T5 Momentum AWD','T6 Momentum AWD','T6 Inscription AWD','T8 Inscription','T5 R-Design FWD','T5 R-Design AWD','T6 R-Design AWD','T8 R-Design', 'T8 Excellence'];



    const S60T5DynamicFWD = [
      [electricSilverWhite,'S60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Fwd/electricSilverWhite.jpg',brochureArray[0]],
      [iceWhite,'S60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Fwd/iceWhite.jpg',brochureArray[0]],
      [onyxBlackMetallic,'S60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Fwd/onyxBlackMetallic.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[0]],
      [passionRed,'S60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Fwd/passionRed.jpg',brochureArray[0]]
    ];
    const S60T5DynamicAWD = [
      [electricSilverWhite,'S60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Awd/electricSilverWhite.jpg',brochureArray[0]],
      [iceWhite,'S60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Awd/iceWhite.jpg',brochureArray[0]],
      [onyxBlackMetallic,'S60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Awd/onyxBlackMetallic.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Awd/osmiumGreyMetallic.jpg',brochureArray[0]],
      [passionRed,'S60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/dynamic/t5Awd/passionRed.jpg',brochureArray[0]]
    ];
    const S60T5InscriptionFWD = [
      [brightSilverMetallic,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/brightSilverMetallic.jpg',brochureArray[0]],
      [crystalWhitePearl,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/crystalWhitePearl.jpg',brochureArray[0]],
      [flamencoRedMetallic,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/flamencoRedMetallic.jpg',brochureArray[0]],
      [iceWhite,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/iceWhite.jpg',brochureArray[0]],
      [luminousSandMetallic,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/luminousSandMetallic.jpg',brochureArray[0]],
      [musselBlueMetallic,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/musselBlueMetallic.jpg',brochureArray[0]],
      [onyxBlackMetallic,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/onyxBlackMetallic.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5Inscription/osmiumGreyMetallic.jpg',brochureArray[0]]
    ];
    const S60T5InscriptionAWD = [
      [brightSilverMetallic,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/brightSilverMetallic.jpg',brochureArray[0]],
      [crystalWhitePearl,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/crystalWhitePearl.jpg',brochureArray[0]],
      [flamencoRedMetallic,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/flamencoRedMetallic.jpg',brochureArray[0]],
      [iceWhite,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/iceWhite.jpg',brochureArray[0]],
      [luminousSandMetallic,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/luminousSandMetallic.jpg',brochureArray[0]],
      [musselBlueMetallic,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/musselBlueMetallic.jpg',brochureArray[0]],
      [onyxBlackMetallic,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/onyxBlackMetallic.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscription/t5InscriptionAwd/osmiumGreyMetallic.jpg',brochureArray[0]]
    ];
    const S60T5InscriptionPlatinumFWD = [
      [brightSilverMetallic,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/brightSilverMetallic.jpg',brochureArray[0]],
      [crystalWhitePearl,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/crystalWhitePearl.jpg',brochureArray[0]],
      [flamencoRedMetallic,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/flamencoRedMetallic.jpg',brochureArray[0]],
      [iceWhite,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/iceWhite.jpg',brochureArray[0]],
      [luminousSandMetallic,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/luminousSandMetallic.jpg',brochureArray[0]],
      [musselBlueMetallic,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/musselBlueMetallic.jpg',brochureArray[0]],
      [onyxBlackMetallic,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/onyxBlackMetallic.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 T5 Inscription Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5Inscription/osmiumGreyMetallic.jpg',brochureArray[0]]
    ];
    const S60T5InscriptionPlatinumAWD = [
      [brightSilverMetallic,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/brightSilverMetallic.jpg',brochureArray[0]],
      [crystalWhitePearl,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/crystalWhitePearl.jpg',brochureArray[0]],
      [flamencoRedMetallic,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/flamencoRedMetallic.jpg',brochureArray[0]],
      [iceWhite,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/iceWhite.jpg',brochureArray[0]],
      [luminousSandMetallic,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/luminousSandMetallic.jpg',brochureArray[0]],
      [musselBlueMetallic,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/musselBlueMetallic.jpg',brochureArray[0]],
      [onyxBlackMetallic,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/onyxBlackMetallic.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 T5 Inscription Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/inscriptionPlatinum/t5InscriptionAwd/osmiumGreyMetallic.jpg',brochureArray[0]]
    ];
    const S60RDesign = [
      [crystalWhitePearl,'S60 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/rdesign/crystalWhitePearl.jpg',brochureArray[0]],
      [osmiumGreyMetallic,'S60 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/rdesign/osmiumGreyMetallic.jpg',brochureArray[0]],
      [passionRed,'S60 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60/rdesign/passionRed.jpg',brochureArray[0]]
    ];

    const S60CrossCountryT5AWD = [
      [osmiumGreyMetallic,'S60 Cross Country ','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S60CrossCountry/t5Awd/osmiumGreyMetallic.jpg',brochureArray[1]]
    ];

    const S90T5InscriptionFWD = [
      [blackStone,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/blackStone.jpg',brochureArray[2]],
      [brightSilverMetallic,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/brightSilverMetallic.jpg',brochureArray[2]],
      [crystalWhitePearl,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/crystalWhitePearl.jpg',brochureArray[2]],
      [iceWhite,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/iceWhite.jpg',brochureArray[2]],
      [luminousSandMetallic,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/luminousSandMetallic.jpg',brochureArray[2]],
      [magicBlueMetallic,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/magicBlueMetallic.jpg',brochureArray[2]],
      [musselBlueMetallic,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/musselBlueMetallic.jpg',brochureArray[2]],
      [onyxBlackMetallic,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/onyxBlackMetallic.jpg',brochureArray[2]],
      [osmiumGreyMetallic,'S90 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[2]]
    ];
    const S90T6InscriptionAWD = [
      [blackStone,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/blackStone.jpg',brochureArray[2]],
      [brightSilverMetallic,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/brightSilverMetallic.jpg',brochureArray[2]],
      [crystalWhitePearl,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/crystalWhitePearl.jpg',brochureArray[2]],
      [iceWhite,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/iceWhite.jpg',brochureArray[2]],
      [luminousSandMetallic,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/luminousSandMetallic.jpg',brochureArray[2]],
      [magicBlueMetallic,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/magicBlueMetallic.jpg',brochureArray[2]],
      [musselBlueMetallic,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/musselBlueMetallic.jpg',brochureArray[2]],
      [onyxBlackMetallic,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/onyxBlackMetallic.jpg',brochureArray[2]],
      [osmiumGreyMetallic,'S90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/inscription/t6Awd/osmiumGreyMetallic.jpg',brochureArray[2]]
    ];
    const S90T5MomentumFWD = [
      [blackStone,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/blackStone.jpg',brochureArray[2]],
      [brightSilverMetallic,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/brightSilverMetallic.jpg',brochureArray[2]],
      [crystalWhitePearl,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/crystalWhitePearl.jpg',brochureArray[2]],
      [iceWhite,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/iceWhite.jpg',brochureArray[2]],
      [luminousSandMetallic,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/luminousSandMetallic.jpg',brochureArray[2]],
      [magicBlueMetallic,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/magicBlueMetallic.jpg',brochureArray[2]],
      [musselBlueMetallic,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/musselBlueMetallic.jpg',brochureArray[2]],
      [onyxBlackMetallic,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/onyxBlackMetallic.jpg',brochureArray[2]],
      [osmiumGreyMetallic,'S90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[2]]
    ];
    const S90T6MomentumAWD = [
      [blackStone,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/blackStone.jpg',brochureArray[2]],
      [brightSilverMetallic,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/brightSilverMetallic.jpg',brochureArray[2]],
      [crystalWhitePearl,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/crystalWhitePearl.jpg',brochureArray[2]],
      [iceWhite,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/iceWhite.jpg',brochureArray[2]],
      [luminousSandMetallic,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/luminousSandMetallic.jpg',brochureArray[2]],
      [magicBlueMetallic,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/magicBlueMetallic.jpg',brochureArray[2]],
      [musselBlueMetallic,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/musselBlueMetallic.jpg',brochureArray[2]],
      [onyxBlackMetallic,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/onyxBlackMetallic.jpg',brochureArray[2]],
      [osmiumGreyMetallic,'S90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/S90/momentum/t6Awd/osmiumGreyMetallic.jpg',brochureArray[2]]
    ];

    const V60T5FWD = [
      [blackStone,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/blackStone.jpg',brochureArray[3]],
      [brightSilverMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/brightSilverMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/crystalWhitePearl.jpg',brochureArray[3]],
      [flamencoRedMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/flamencoRedMetallic.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/iceWhite.jpg',brochureArray[3]],
      [luminousSandMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/luminousSandMetallic.jpg',brochureArray[3]],
      [magicBlueMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/magicBlueMetallic.jpg',brochureArray[3]],
      [musselBlueMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/musselBlueMetallic.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[3]]
    ];
    const V60T5AWD = [
      [blackStone,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/blackStone.jpg',brochureArray[3]],
      [brightSilverMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/brightSilverMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/crystalWhitePearl.jpg',brochureArray[3]],
      [flamencoRedMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/flamencoRedMetallic.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/iceWhite.jpg',brochureArray[3]],
      [luminousSandMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/luminousSandMetallic.jpg',brochureArray[3]],
      [magicBlueMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/magicBlueMetallic.jpg',brochureArray[3]],
      [musselBlueMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/musselBlueMetallic.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/t5/t5Awd/osmiumGreyMetallic.jpg',brochureArray[3]]
    ];
    const V60T5DynamicFWD = [
      [electricSilverWhite,'V60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Fwd/electricSilverWhite.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Fwd/iceWhite.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Fwd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[3]],
      [passionRed,'V60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Fwd/passionRed.jpg',brochureArray[3]]
    ];
    const V60T5DynamicAWD = [
      [electricSilverWhite,'V60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Awd/electricSilverWhite.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Awd/iceWhite.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Awd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Awd/osmiumGreyMetallic.jpg',brochureArray[3]],
      [passionRed,'V60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/dynamic/t5Awd/passionRed.jpg',brochureArray[3]]
    ];
    const V60PlatinumT5FWD = [
      [blackStone,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/blackStone.jpg',brochureArray[3]],
      [brightSilverMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/brightSilverMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/crystalWhitePearl.jpg',brochureArray[3]],
      [flamencoRedMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/flamencoRedMetallic.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/iceWhite.jpg',brochureArray[3]],
      [luminousSandMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/luminousSandMetallic.jpg',brochureArray[3]],
      [magicBlueMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/magicBlueMetallic.jpg',brochureArray[3]],
      [musselBlueMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/musselBlueMetallic.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[3]]
    ];
    const V60PlatinumT5AWD = [
      [blackStone,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/blackStone.jpg',brochureArray[3]],
      [brightSilverMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/brightSilverMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/crystalWhitePearl.jpg',brochureArray[3]],
      [flamencoRedMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/flamencoRedMetallic.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/iceWhite.jpg',brochureArray[3]],
      [luminousSandMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/luminousSandMetallic.jpg',brochureArray[3]],
      [magicBlueMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/magicBlueMetallic.jpg',brochureArray[3]],
      [musselBlueMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/musselBlueMetallic.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 Platinum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/platinum/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[3]]
    ];
    const V60T5PremierFWD = [
      [blackStone,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/blackStone.jpg',brochureArray[3]],
      [brightSilverMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/brightSilverMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/crystalWhitePearl.jpg',brochureArray[3]],
      [flamencoRedMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/flamencoRedMetallic.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/iceWhite.jpg',brochureArray[3]],
      [luminousSandMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/luminousSandMetallic.jpg',brochureArray[3]],
      [magicBlueMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/magicBlueMetallic.jpg',brochureArray[3]],
      [musselBlueMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/musselBlueMetallic.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 Premier FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[3]]
    ];
    const V60T5PremierAWD = [
      [blackStone,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/blackStone.jpg',brochureArray[3]],
      [brightSilverMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/brightSilverMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/crystalWhitePearl.jpg',brochureArray[3]],
      [flamencoRedMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/flamencoRedMetallic.jpg',brochureArray[3]],
      [iceWhite,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/iceWhite.jpg',brochureArray[3]],
      [luminousSandMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/luminousSandMetallic.jpg',brochureArray[3]],
      [magicBlueMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/magicBlueMetallic.jpg',brochureArray[3]],
      [musselBlueMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/musselBlueMetallic.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T5 Premier AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/premier/t5Awd/osmiumGreyMetallic.jpg',brochureArray[3]]
    ];
    const V60T6RDesignAWD = [
      [burstingBlueMetallic,'V60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/rdesign/t6Awd/burstingBlueMetallic.jpg',brochureArray[3]],
      [crystalWhitePearl,'V60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/rdesign/t6Awd/crystalWhitePearl.jpg',brochureArray[3]],
      [onyxBlackMetallic,'V60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/rdesign/t6Awd/onyxBlackMetallic.jpg',brochureArray[3]],
      [osmiumGreyMetallic,'V60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/rdesign/t6Awd/osmiumGreyMetallic.jpg',brochureArray[3]],
      [passionRed,'V60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60/rdesign/t6Awd/passionRed.jpg',brochureArray[3]]
    ];

    const V60CrossCountryT5AWD = [
      [blackStone,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/blackStone.jpg',brochureArray[4]],
      [brightSilverMetallic,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/brightSilverMetallic.jpg',brochureArray[4]],
      [crystalWhitePearl,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/crystalWhitePearl.jpg',brochureArray[4]],
      [iceWhite,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/iceWhite.jpg',brochureArray[4]],
      [musselBlueMetallic,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/musselBlueMetallic.jpg',brochureArray[4]],
      [onyxBlackMetallic,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/onyxBlackMetallic.jpg',brochureArray[4]],
      [osmiumGreyMetallic,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/osmiumGreyMetallic.jpg',brochureArray[4]],
      [passionRed,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/passionRed.jpg',brochureArray[4]],
      [richJavaMetallic,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/richJavaMetallic.jpg',brochureArray[4]],
      [twilightBronzeMetallic,'V60 Cross Country T5 AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/twilightBronzeMetallic.jpg',brochureArray[4]]
    ];
    const V60CrossCountryPlatinum = [
      [blackStone,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/blackStone.jpg',brochureArray[4]],
      [brightSilverMetallic,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/brightSilverMetallic.jpg',brochureArray[4]],
      [crystalWhitePearl,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/crystalWhitePearl.jpg',brochureArray[4]],
      [iceWhite,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/iceWhite.jpg',brochureArray[4]],
      [musselBlueMetallic,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/musselBlueMetallic.jpg',brochureArray[4]],
      [onyxBlackMetallic,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/onyxBlackMetallic.jpg',brochureArray[4]],
      [osmiumGreyMetallic,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/t5Awd/osmiumGreyMetallic.jpg',brochureArray[4]],
      [passionRed,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/passionRed.jpg',brochureArray[4]],
      [richJavaMetallic,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/richJavaMetallic.jpg',brochureArray[4]],
      [twilightBronzeMetallic,'V60 Cross Country T5 Platinum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/V60CrossCountry/platinum/twilightBronzeMetallic.jpg',brochureArray[4]]
    ];

    const XC60T5DynamicFWD = [
      [blackStone,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/blackStone.jpg',brochureArray[5]],
      [brightSilverMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/brightSilverMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/crystalWhitePearl.jpg',brochureArray[5]],
      [flamencoRedMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/flamencoRedMetallic.jpg',brochureArray[5]],
      [iceWhite,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/iceWhite.jpg',brochureArray[5]],
      [luminousSandMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/luminousSandMetallic.jpg',brochureArray[5]],
      [magicBlueMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/magicBlueMetallic.jpg',brochureArray[5]],
      [musselBlueMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/musselBlueMetallic.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [powerBlueMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/powerBlueMetallic.jpg',brochureArray[5]],
      [richJavaMetallic,'XC60 T5 Dynamic FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Fwd/richJavaMetallic.jpg',brochureArray[5]]
    ];
    const XC60T5DynamicAWD = [
      [blackStone,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/blackStone.jpg',brochureArray[5]],
      [brightSilverMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/brightSilverMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/crystalWhitePearl.jpg',brochureArray[5]],
      [flamencoRedMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/flamencoRedMetallic.jpg',brochureArray[5]],
      [iceWhite,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/iceWhite.jpg',brochureArray[5]],
      [luminousSandMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/luminousSandMetallic.jpg',brochureArray[5]],
      [magicBlueMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/magicBlueMetallic.jpg',brochureArray[5]],
      [musselBlueMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/musselBlueMetallic.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [powerBlueMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/powerBlueMetallic.jpg',brochureArray[5]],
      [richJavaMetallic,'XC60 T5 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t5Awd/richJavaMetallic.jpg',brochureArray[5]]
    ];
    const XC60T6DynamicAWD = [
      [blackStone,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/blackStone.jpg',brochureArray[5]],
      [brightSilverMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/brightSilverMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/crystalWhitePearl.jpg',brochureArray[5]],
      [flamencoRedMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/flamencoRedMetallic.jpg',brochureArray[5]],
      [iceWhite,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/iceWhite.jpg',brochureArray[5]],
      [luminousSandMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/luminousSandMetallic.jpg',brochureArray[5]],
      [magicBlueMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/magicBlueMetallic.jpg',brochureArray[5]],
      [musselBlueMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/musselBlueMetallic.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [powerBlueMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/powerBlueMetallic.jpg',brochureArray[5]],
      [richJavaMetallic,'XC60 T6 Dynamic AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/dynamic/t6Awd/richJavaMetallic.jpg',brochureArray[5]]
    ];
    const XC60T5InscriptionFWD = [
      [blackStone,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/blackStone.jpg',brochureArray[5]],
      [brightSilverMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/brightSilverMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/crystalWhitePearl.jpg',brochureArray[5]],
      [flamencoRedMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/flamencoRedMetallic.jpg',brochureArray[5]],
      [iceWhite,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/iceWhite.jpg',brochureArray[5]],
      [luminousSandMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/luminousSandMetallic.jpg',brochureArray[5]],
      [magicBlueMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/magicBlueMetallic.jpg',brochureArray[5]],
      [musselBlueMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/musselBlueMetallic.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [powerBlueMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/powerBlueMetallic.jpg',brochureArray[5]],
      [richJavaMetallic,'XC60 T5 Inscription FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Fwd/richJavaMetallic.jpg',brochureArray[5]]
    ];
    const XC60T5InscriptionAWD = [
      [blackStone,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/blackStone.jpg',brochureArray[5]],
      [brightSilverMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/brightSilverMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/crystalWhitePearl.jpg',brochureArray[5]],
      [flamencoRedMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/flamencoRedMetallic.jpg',brochureArray[5]],
      [iceWhite,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/iceWhite.jpg',brochureArray[5]],
      [luminousSandMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/luminousSandMetallic.jpg',brochureArray[5]],
      [magicBlueMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/magicBlueMetallic.jpg',brochureArray[5]],
      [musselBlueMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/musselBlueMetallic.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [powerBlueMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/powerBlueMetallic.jpg',brochureArray[5]],
      [richJavaMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t5Awd/richJavaMetallic.jpg',brochureArray[5]]
    ];
    const XC60T6InscriptionAWD = [
      [blackStone,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/blackStone.jpg',brochureArray[5]],
      [brightSilverMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/brightSilverMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/crystalWhitePearl.jpg',brochureArray[5]],
      [flamencoRedMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/flamencoRedMetallic.jpg',brochureArray[5]],
      [iceWhite,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/iceWhite.jpg',brochureArray[5]],
      [luminousSandMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/luminousSandMetallic.jpg',brochureArray[5]],
      [magicBlueMetallic,'XC60 T5 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/magicBlueMetallic.jpg',brochureArray[5]],
      [musselBlueMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/musselBlueMetallic.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [powerBlueMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/powerBlueMetallic.jpg',brochureArray[5]],
      [richJavaMetallic,'XC60 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/inscription/t6Awd/richJavaMetallic.jpg',brochureArray[5]]
    ];
    const xc60T6RDesignAWD = [
      [burstingBlueMetallic,'XC60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/t6Awd/burstingBlueMetallic.jpg',brochureArray[5]],
      [crystalWhitePearl,'XC60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/t6Awd/crystalWhitePearl.jpg',brochureArray[5]],
      [electricSilverWhite,'XC60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/t6Awd/electricSilverWhite.jpg',brochureArray[5]],
      [onyxBlackMetallic,'XC60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/t6Awd/onyxBlackMetallic.jpg',brochureArray[5]],
      [osmiumGreyMetallic,'XC60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/t6Awd/osmiumGreyMetallic.jpg',brochureArray[5]],
      [passionRed,'XC60 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC60/t6Awd/passionRed.jpg',brochureArray[5]]
    ];

    const XC90T5MomentumFWD = [
      [brightSilverMetallic,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/brightSilverMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/crystalWhitePearl.jpg',brochureArray[6]],
      [iceWhite,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/iceWhite.jpg',brochureArray[6]],
      [magicBlueMetallic,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/magicBlueMetallic.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [savileGreyMetallic,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/savileGreyMetallic.jpg',brochureArray[6]],
      [twilightBronzeMetallic,'XC90 T5 Momentum FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Fwd/twilightBronzeMetallic.jpg',brochureArray[6]]
    ];
    const XC90T5MomentumAWD = [
      [brightSilverMetallic,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/brightSilverMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/crystalWhitePearl.jpg',brochureArray[6]],
      [iceWhite,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/iceWhite.jpg',brochureArray[6]],
      [magicBlueMetallic,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/magicBlueMetallic.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [savileGreyMetallic,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/savileGreyMetallic.jpg',brochureArray[6]],
      [twilightBronzeMetallic,'XC90 T5 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t5Awd/twilightBronzeMetallic.jpg',brochureArray[6]]
    ];
    const XC90T6MomentumAWD = [
      [brightSilverMetallic,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/brightSilverMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/crystalWhitePearl.jpg',brochureArray[6]],
      [iceWhite,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/iceWhite.jpg',brochureArray[6]],
      [magicBlueMetallic,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/magicBlueMetallic.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [savileGreyMetallic,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/savileGreyMetallic.jpg',brochureArray[6]],
      [twilightBronzeMetallic,'XC90 T6 Momentum AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/momentum/t6Awd/twilightBronzeMetallic.jpg',brochureArray[6]]
    ];
    const XC90T6InscriptionAWD = [
      [brightSilverMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/brightSilverMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/crystalWhitePearl.jpg',brochureArray[6]],
      [iceWhite,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/iceWhite.jpg',brochureArray[6]],
      [luminousSandMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/luminousSandMetallic.jpg',brochureArray[6]],
      [magicBlueMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/magicBlueMetallic.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [savileGreyMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/savileGreyMetallic.jpg',brochureArray[6]],
      [twilightBronzeMetallic,'XC90 T6 Inscription AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t6Awd/twilightBronzeMetallic.jpg',brochureArray[6]]
    ];
    const XC90T8Inscription = [
      [brightSilverMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/brightSilverMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/crystalWhitePearl.jpg',brochureArray[6]],
      [iceWhite,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/iceWhite.jpg',brochureArray[6]],
      [luminousSandMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/luminousSandMetallic.jpg',brochureArray[6]],
      [magicBlueMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/magicBlueMetallic.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/osmiumGreyMetallic.jpg',brochureArray[6]],
      [savileGreyMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/savileGreyMetallic.jpg',brochureArray[6]],
      [twilightBronzeMetallic,'XC90 T8 Inscription','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/XC90/inscription/t8/twilightBronzeMetallic.jpg',brochureArray[6]]
    ];
    const XC90T5RDesignFWD = [
      [burstingBlueMetallic,'XC90 T5 R-Design FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Fwd/burstingBlueMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T5 R-Design FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Fwd/crystalWhitePearl.jpg',brochureArray[6]],
      [electricSilverWhite,'XC90 T5 R-Design FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Fwd/electricSilverWhite.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T5 R-Design FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Fwd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T5 R-Design FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Fwd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [passionRed,'XC90 T5 R-Design FWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Fwd/passionRed.jpg',brochureArray[6]]
    ];
    const XC90T5RDesignAWD = [
      [burstingBlueMetallic,'XC90 T5 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Awd/burstingBlueMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T5 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Awd/crystalWhitePearl.jpg',brochureArray[6]],
      [electricSilverWhite,'XC90 T5 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Awd/electricSilverWhite.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T5 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Awd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T5 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Awd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [passionRed,'XC90 T5 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t5Awd/passionRed.jpg',brochureArray[6]]
    ];
    const XC90T6RDesignAWD = [
      [burstingBlueMetallic,'XC90 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t6Awd/burstingBlueMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t6Awd/crystalWhitePearl.jpg',brochureArray[6]],
      [electricSilverWhite,'XC90 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t6Awd/electricSilverWhite.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t6Awd/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t6Awd/osmiumGreyMetallic.jpg',brochureArray[6]],
      [passionRed,'XC90 T6 R-Design AWD','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t6Awd/passionRed.jpg',brochureArray[6]]
    ];
    const XC90T8RDesign = [
      [burstingBlueMetallic,'XC90 T8 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t8/burstingBlueMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T8 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t8/crystalWhitePearl.jpg',brochureArray[6]],
      [electricSilverWhite,'XC90 T8 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t8/electricSilverWhite.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T8 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t8/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T8 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t8/osmiumGreyMetallic.jpg',brochureArray[6]],
      [passionRed,'XC90 T8 R-Design','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/rdesign/t8/passionRed.jpg',brochureArray[6]]
    ];
    const XC90T8Excellence = [
      [burstingBlueMetallic,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/burstingBlueMetallic.jpg',brochureArray[6]],
      [crystalWhitePearl,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/crystalWhitePearl.jpg',brochureArray[6]],
      [electricSilverWhite,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/electricSilverWhite.jpg',brochureArray[6]],
      [iceWhite,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/iceWhite.jpg',brochureArray[6]],
      [luminousSandMetallic,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/luminousSandMetallic.jpg',brochureArray[6]],
      [magicBlueMetallic,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/magicBlueMetallic.jpg',brochureArray[6]],
      [onyxBlackMetallic,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/onyxBlackMetallic.jpg',brochureArray[6]],
      [osmiumGreyMetallic,'XC90 T8 Excellence','http://ramseycarsnj.github.io/volvoPricingApp2017/inc/excellence/t8/osmiumGreyMetallic.jpg',brochureArray[6]]
    ];

    // Vehicle select functionality. Allows users to navigate through vehicle menu. Model -> Trim -> Color.
    const fullReset = function() {
      // Defaults to Vehicle List
      $('.colorSelectButton').hide();
      $('.vehicleSelectButton').hide();
      $('.trimSelectButton').hide();
      document.querySelector('#vehicleMenuHeader').innerHTML = `2017 Vehicles`;
      for (let i = 0; i < volvoVehicleArray.length; i++) {
        document.querySelector('#vehicleSelection').innerHTML +=
        `<a href="#" class="vehicleSelectButton" id="${volvoVehicleArray[i].replace(/\s+/g, "")}">${volvoVehicleArray[i]}</a>`
      }
      // Displays trims for selected vehicle
      $('.vehicleSelectButton').click(function(e) {
        console.log(this.id);
        e.preventDefault();
        let selectedVehicle = this.id;
        let trimArraySelector = 'volvo' + selectedVehicle + 'Trim';
        $('.vehicleSelectButton').hide();
        $('.trimSelectButton').hide();
        document.querySelector('#vehicleMenuHeader').innerHTML = `2017 ${selectedVehicle} Trims`;
        for (let i = 0; i < eval(trimArraySelector).length; i++) {
            document.querySelector('#vehicleSelection').innerHTML +=
            `<a href="#" class="trimSelectButton" id="${selectedVehicle + eval(trimArraySelector)[i].replace(/\s+/g, "")}">${selectedVehicle + ' ' + eval(trimArraySelector)[i]}</a>`
        }
        // Displays colors for selected vehicle trim
        $('.trimSelectButton').click(function(e) {
          e.preventDefault();
          $('.vehicleSelectButton').hide();
          $('.trimSelectButton').hide();
          let selectedTrim = this.innerHTML;
          document.querySelector('#vehicleMenuHeader').innerHTML = `${selectedTrim} Colors`;
          let colorArraySelect = selectedTrim.replace(/-|\.|\s+/g, '');
          console.log(colorArraySelect);

          for (let i = 0; i < eval(colorArraySelect).length; i++) {
              document.querySelector('#vehicleSelection').innerHTML +=
              `<a href="#" class="colorSelectButton" id="${eval(colorArraySelect)[i][0].replace(/\s+/, "")}" data-image="${eval(colorArraySelect)[i][2].replace(/\s+/, "")}" data-brochure="${eval(colorArraySelect)[i][3].replace(/\s+/, "")}">${eval(colorArraySelect)[i][0]}</a>`
          }
          // Embeds selected vehicle information, image, brochure link
          $('.colorSelectButton').click(function(e) {
            e.preventDefault();
            let selectedColor = this.dataset.image;
            document.querySelector('#imgPreview').innerHTML = `<img src="${selectedColor}" style="width: 325px;padding: 0;margin: 0;border: 0;">`
            document.querySelector('#vehiclePreview').innerHTML = selectedTrim;
            document.querySelector('#vehicleRef1').innerHTML = selectedTrim;
            document.querySelector('#vehicleRef2').innerHTML = selectedVehicle;
            document.querySelector('#brochureLink').href = this.dataset.brochure;

          });

        });
      });
    }
    // Builds vehicle select menu on click. Defaults to model selection.
    fullReset();
    // Reset button will default to model selection on click
    $('#reset').click(function() {
      fullReset();
    });

    const orCheck = function() {
      if (document.getElementById('vehicleFinPrice').value !== '' && document.getElementById('leasePrice').value !== '') {
        document.querySelector('#orDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #000000;font-size: 18px;">or</h4>`;
      } else {
        document.querySelector('#orDisplay').innerHTML = '';
      }

    }

    // Transmission selection radio buttons rewrite contents of transmission display h5
    $('.transmissionSelect').click(function(){
      document.querySelector('#transmissionDisplay').innerHTML = `<strong>Transmission:</strong> ${this.value}`;
    });
    // Writes input vehicle finance price to template
    $('#customerName').on('input',function(e){
    document.querySelector('#customerNameDisplay').innerHTML = this.value;
   });
    // Writes input vehicle finance price to template
    $('#vehicleFinPrice').on('input',function(e){
      if (document.getElementById('vehicleFinPrice').value !== '') {
        document.querySelector('#finPrice').innerHTML = `<h1 style="text-align: right;margin: 0;border: 0;padding: 0 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 700;color: #000000;" id="">$${this.value}</h1>`;

      } else {
          document.querySelector('#finPrice').innerHTML = '';
        }
        orCheck();
   });
   // Writes input vehicle price expiration to template
     // Defaults to and of current month
       var ld = Date.today().clearTime().moveToLastDayOfMonth();
       var lastday = ld.toString("MM/dd/yyyy");
       console.log(lastday);
       document.querySelector('#availableUntilDisplay').innerHTML = lastday;
    // Overwrites default to user input
   $('#priceGoodUntil').on('input',function(e){
   if (document.getElementById('priceGoodUntil').value !== "") {
     document.querySelector('#availableUntilDisplay').innerHTML = this.value;
   } else {
     document.querySelector('#availableUntilDisplay').innerHTML = lastday;
   }
  });


  // Writes input vehicle price expiration to template
  $('#leasePrice').on('input',function(e){
    if (document.getElementById('leasePrice').value !== '') {
      document.querySelector('#leasePriceDisplay').innerHTML = `<h1 style="text-align: right;margin: 0;border: 0;padding: 0 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 700;color: #000000;" id="">$${this.value}/mo</h1>`;

    } else {
        document.querySelector('#leasePriceDisplay').innerHTML = '';
      }
      orCheck();
  });
  // Writes input vehicle price expiration to template
  $('#term').on('input',function(e){
    if (document.getElementById('term').value !== '') {
      document.querySelector('#termDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #000000;font-size: 18px;">for ${this.value} months</h4>`;
    } else {
        document.querySelector('#termDisplay').innerHTML = '';
      }
  });


  // Writes input vehicle price expiration to template
  $('#moneyDown').on('input',function(e){
    if (document.getElementById('moneyDown').value !== '') {
      document.querySelector('#moneyDownDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #000000;font-size: 18px;">$${this.value} down</h4>`;
    } else {
      document.querySelector('#moneyDownDisplay').innerHTML = '';
    }
  });
  // Writes input vehicle price expiration to template
  $('#mileage').on('input',function(e){
    if (document.getElementById('mileage').value !== '') {
      document.querySelector('#mileageDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #000000;font-size: 14px;">${this.value} miles per year</h4>`;
    } else {
        document.querySelector('#mileageDisplay').innerHTML = '';
      }
  });



  for (let i = 0; i < accessoriesArray.length; i++) {
    document.querySelector('#accessories').innerHTML +=
    `<input type="checkbox" name="${accessoriesArray[i]}" class="accessoryOptionSelect" value="${accessoriesArray[i]}" id="${accessoriesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}"><label for="${accessoriesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}">${accessoriesArray[i]}</label>`;
  }

  for (let i = 0; i < packagesArray.length; i++) {
    document.querySelector('#packages').innerHTML +=
    `<input type="checkbox" name="${packagesArray[i]}" class="packageOptionSelect" value="${packagesArray[i]}" id="${packagesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}">
      <label for="${packagesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}" id="${packagesArray[i]}">${packagesArray[i]}</label>`;
  }

  // Accessories display works via on click (adds and removes options)
  $(function() {
    $('.accessoryOptionSelect').click(function() {

        let tempID = this.value.replace(/-|\&amp;|\&|\.|\s+/g, '');
        if (this.checked === true) {
          // Writes The Accessory Value of Checked item to Page
          console.log(this.value);
          $('#accessoriesDisplay').append(`<li id="accessory${tempID}" style="color: #000000;text-align:left;margin: 0 0 0 30px;font-size:14px;">${this.value}</li>`);
        } else {
          // Removes Selected Accessory Item from page
            $('#accessory' + tempID).remove();
        }
        if (document.getElementById('accessoriesDisplay').innerHTML.replace(/-|\&amp;|\&|\.|\s+/g, '') === '') {
          document.querySelector('#accessoriesDisplayHeading').innerHTML = '';
        } else {
          document.querySelector('#accessoriesDisplayHeading').innerHTML = `<h3 style="text-align:left;color:#000000;font-size:16px">Accessories:</h3>`;
        }
    });
  });


  $('.sectionStyle').hide();
  $('#generalSection').show();

  $('.navLink').click(function(e) {
    e.preventDefault();
    $('.sectionStyle').hide();
    $('#' + this.dataset.section).show();
  });
  // Package display works via on click (adds and removes options)
  $(function() {
    $('.packageOptionSelect').click(function() {
      $('#packagesFiller').html(``);
        let tempID = this.value.replace(/-|\&amp;|\&|\.|\s+/g, '');
        if (this.checked === true) {
          // Writes The Accessory Value of Checked item to Page

          console.log(tempID);
          $('#packagesDisplay').append(`<span id="packagesDisplay${tempID}">${this.value}<br></span>`);
        } else {
          // Removes Selected Accessory Item from page
            $('#packagesDisplay' + tempID).remove();
        }
        if (document.getElementById('packagesDisplay').innerHTML === '') {
          document.querySelector('#packagesDisplayHeading').innerHTML = '';
        } else {
          document.querySelector('#packagesDisplayHeading').innerHTML = `<strong>With:</strong><br>`;
        }
    });
  });
  let templateContent = document.getElementById('pricePreview');
  document.querySelector('#templateCopy').innerHTML(`
    this is ${templateContent} just a test
    `);



});
