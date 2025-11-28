const RAW_GAME_DATA = `Word/Phrase	Fun Opposite	Good word	Good Opposite	Don't Like	Difficulty	Helper 1	Helper 2	Helper 3	Category
Air conditioner	Ground-Heater	TRUE	TRUE	FALSE		Heater	Furnace	Sweat	Household
Air filter	Ground-Adder	TRUE	TRUE	FALSE		Polluter	Clogger	Dirt	Household
Slow Poke	Fast Pinch	TRUE	TRUE	FALSE		Speedster	Rusher	Flash	Personality
Airfare	Ground free	TRUE	TRUE	FALSE		Walk-free	Stay-paid	Ground-cost	Travel
Airplane	Train	TRUE	TRUE	FALSE		Submarine	Train	Car	Travel
Airplane wing	Ground-Mountain Stub	TRUE	TRUE	FALSE		Submarine-fin	Train-wheel	Car-door	Travel
Airplane wing	Train Stub	TRUE	TRUE	FALSE		Submarine-fin	Train-wheel	Car-door	Travel
Airport	Ground Sea	TRUE	TRUE	FALSE		Station	Port	Stop	Travel
Airport lounge	Ground - Sea - Pit	TRUE	TRUE	FALSE		Station-bench	Street-corner	Bus-stop	Travel
Window seat	Aisle Stand-	TRUE	TRUE	FALSE		Aisle-stand	Middle-floor	Roof-lay	Travel
Kidney	Adult-Elbow	TRUE	FALSE	FALSE		Lung	Heart	Skin	Body
Babysitting	Adult-standing	TRUE	TRUE	FALSE		Adult-ignoring	Elder-leaving	Self-care	Jobs
Backpack	Front-Loose	TRUE	TRUE	FALSE		Briefcase	Purse	Pocket	Items
Bacon	Cook-off → Freeze-off	TRUE	TRUE	FALSE		Lettuce	Tomato	Tofu	Food
Softball	Rock-Cube	TRUE	TRUE	FALSE		Hard-rock	Baseball	Brick	Sports
Baggage claim	Freedom lose	TRUE	FALSE	FALSE		Luggage-drop	Bag-lose	Case-toss	Travel
Banana split	Potato join	TRUE	TRUE	FALSE		Apple-whole	Grape-join	Melon-fix	Food
Basketball	Shelf-Cube	TRUE	TRUE	FALSE		Football	Golfball	Puck	Sports
Basketball hoop	Shelf-Cube Net	TRUE	TRUE	FALSE		Soccer-goal	Golf-hole	Hockey-net	Sports
Bassoon	Treble-Later	TRUE	TRUE	FALSE		Flute	Piccolo	Whistle	Music
Beachball	Mountain-cube	TRUE	TRUE	FALSE		Snow-brick	Dirt-clod	Rock	Fun
Bedroom	Awake-hall	TRUE	FALSE	FALSE		Kitchen	Office	Garage	House
Bicycle	Uni-line	TRUE	TRUE	FALSE		Car	Truck	Bus	Transport
Bicycle rack	Uni-line Loose	FALSE	FALSE	FALSE		Car-garage	Truck-stop	Bus-depot	Transport
Birthday cake	Funeral-Sour-Dough	TRUE	TRUE	FALSE		Funeral-pie	Wedding-soup	Divorce-bread	Food
Birthday candle	Funeral smoke	TRUE	TRUE	FALSE		Funeral-dark	Wedding-light	Party-bulb	Items
Black tea	White Coffee	TRUE	TRUE	FALSE		White-coffee	Green-juice	Red-soda	Drink
Blueberry	Orange-Melon	TRUE	TRUE	FALSE		Red-cherry	Yellow-lemon	Orange	Food
Bookmark	Movie Erase	TRUE	TRUE	FALSE		Page-ripper	Book-burner	Text-eraser	Items
Bookworm	Movie-walk	TRUE	TRUE	FALSE		Movie-star	TV-addict	Game-player	Personality
Breakfast	Fix-slow	TRUE	TRUE	FALSE		Dinner	Supper	Lunch	Food
Bubble gum	Pop Tooth	TRUE	TRUE	FALSE		Hard-candy	Chocolate	Mints	Candy
Bullet train	Snail Airplane	TRUE	TRUE	FALSE		Snail-cart	Turtle-walk	Slug-crawl	Transport
Cabin crew	Cave ignore	FALSE	FALSE	FALSE		Cockpit-solo	Ground-staff	Passenger	Travel
Cabin lights	Cave darks	FALSE	FALSE	FALSE		Cargo-darks	Street-lamps	Sun-shine	Travel
Caboose	Front-Airplane	FALSE	FALSE	FALSE		Engine	Locomotive	Front	Transport
Calculator	Guess sooner	TRUE	FALSE	FALSE		Guesser	Estimator	Dreamer	Tools
Candlestick	Darkness-ball	FALSE	FALSE	FALSE		Light-bulb	Flashlight	Sun	Items
Candy apple	Vegetable Onion	FALSE	FALSE	FALSE		Sour-grape	Salty-nut	Bitter-lemon	Food
Candy bar	Veggie-Rope	TRUE	TRUE	FALSE		Veggie-stick	Fruit-slice	Meat-slab	Food
Candy cane	Veggie-Umbrella	TRUE	TRUE	FALSE		Sour-stick	Salty-pretzel	Bitter-root	Food
Capture the flag	Lose the Secret	TRUE	TRUE	FALSE		Drop-ball	Lose-game	Give-up	Games
Car horn	Truck Whisperer	TRUE	TRUE	FALSE		Bike-bell	Train-whistle	Ship-blast	Car
Car keys	Truck Locks	TRUE	TRUE	FALSE		House-lock	Bike-chain	Safe-combo	Car
Car seat	Truck Stand	TRUE	TRUE	FALSE		Bench	Stool	Chair	Car
Car wash	Truck Dirty	TRUE	TRUE	FALSE		Dirt-road	Mud-pit	Dust-storm	Car
Carpool	Truck-Drain	TRUE	TRUE	FALSE		Solo-drive	Walk-alone	Bike-single	Car
Carrot cake	Steak bread	FALSE	FALSE	FALSE		Meat-loaf	Fish-pie	Steak	Food
Carry-on	Drop-Off	TRUE	TRUE	FALSE		Check-in	Leave-behind	Drop-off	Travel
Drop Off	Carry On	TRUE	TRUE	FALSE		Pick-up	Carry-on	Take-away	Travel
Caterpillar	Dog-and-shaft	TRUE	TRUE	FALSE		Butterfly	Moth	Worm	Animals
Ceiling Fan	Floor Hater	TRUE	TRUE	FALSE		Floor-heater	Wall-light	Table-lamp	House
Cereal bowl	Steak plate	FALSE	FALSE	FALSE		Soup-plate	Salad-dish	Dinner-tray	Food
Chai latte	Bitter fall	FALSE	FALSE	TRUE		Black-coffee	Green-tea	Water	Drink
Chalk dust	Ink mud	FALSE	FALSE	FALSE		Ink-blot	Paint-spill	Marker-stain	School
Chalk eraser	Ink maker	FALSE	FALSE	FALSE		Pen-cap	Pencil-tip	Marker-lid	School
Chalkboard	Ink-wall	FALSE	FALSE	FALSE		Whiteboard	Smartboard	Paper	School
Checked bag	Missing box	FALSE	FALSE	FALSE		Carry-on	Purse	Backpack	Travel
Cheerleader	Boo Follower	TRUE	TRUE	FALSE		Booer	Heckler	Critic	Sports
Cheese stick	Veggie rope	FALSE	FALSE	FALSE		Meat-ball	Bread-loaf	Fruit-cup	Food
Cheeseburger	Broccoli-salad	FALSE	FALSE	FALSE		Hamburger	Hotdog	Taco	Food
Cheesecake	Veggies-flat	FALSE	FALSE	FALSE		Pie	Tart	Brownie	Food
Cherry tart	Broccoli bland	FALSE	FALSE	FALSE		Apple-pie	Lemon-bar	Choco-cake	Food
Chicken nuggets	Tofu/Brave Boulders	TRUE	TRUE	FALSE	3	Beef-steak	Pork-chop	Fish-filet	Food
Chocolate	Vanilla	TRUE	TRUE	FALSE	1	Vanilla	Strawberry	Mint	Food
Chocolate bar	Vanilla Rope	TRUE	TRUE	FALSE	2	Vanilla-cone	Fruit-roll	Nut-bar	Food
Circus tent	Office mansion	TRUE	TRUE	FALSE	3	Office-block	House-brick	Shop-glass	Fun
Clarinet	Chaos rock	FALSE	FALSE	TRUE		Trumpet	Drum	Guitar	Music
Cloudburst	Sunshine-seal	TRUE	TRUE	FALSE	3	Sun-drought	Wind-dry	Sand-storm	Weather
Clown	Businessman	FALSE	FALSE	FALSE		Mime	Actor	Lawyer	Fun
Clutch	Slip	FALSE	FALSE	FALSE		Release	Drop	Let-go	Car
Coconut	Fireleaf	FALSE	FALSE	FALSE		Peanut	Walnut	Almond	Food
Coffee	Sleep-Solid	FALSE	FALSE	FALSE		Tea	Water	Juice	Drink
Coffee pot	Tea-Cup	TRUE	TRUE	FALSE	1	Tea-kettle	Juice-jug	Water-pitcher	Drink
Colored pencils	Plain Pens	TRUE	TRUE	FALSE	2	Black-pens	White-chalk	Grey-lead	Art
Compass	Go-Fail	TRUE	TRUE	FALSE	3	Map	GPS	Star	Tools
Compass tool	Chaos rock	FALSE	FALSE	FALSE		Ruler	Protractor	Scale	Tools
Conductor	Passenger	TRUE	TRUE	FALSE		Passenger	Driver	Pilot	Transport
Control tower	Chaos pit	TRUE	TRUE	FALSE		Ground-crew	Runway	Gate	Travel
Cookie jar	Broccoli-Dropbox	FALSE	FALSE	FALSE		Fruit-bowl	Veggie-bin	Bread-box	Food
Hand in the Cookie Jar	Foot out the Bake DropBox	TRUE	TRUE	FALSE		Foot-in-mouth	Head-in-sand	Eye-on-ball	Idioms
Copilot	SoloRider	TRUE	TRUE	FALSE		Pilot	Passenger	Steward	Travel
Corn dog	wheat cat	TRUE	FALSE	FALSE		Hot-dog	Burger	Pizza	Food
Cornbread	Waterstone	FALSE	FALSE	FALSE		Wheat-toast	Rye-bun	White-slice	Food
Cotton candy	Steel veggie	TRUE	TRUE	FALSE		Rock-candy	Hard-tack	Jaw-breaker	Candy
Cotton candy	Iron veggie	FALSE	FALSE	FALSE		Rock-candy	Hard-tack	Jaw-breaker	Candy
Cotton gloves	Iron Socks	FALSE	FALSE	FALSE		Wool-socks	Leather-boots	Rubber-shoes	Clothing
Crayons	Rock cubes	FALSE	FALSE	FALSE		Markers	Paints	Pencils	Art
Crosswalk	Stay run	TRUE	TRUE	FALSE		Jay-walk	Run-across	Stay-put	City
Cup noodles	Plate-rice	FALSE	FALSE	FALSE		Plate-pasta	Bowl-rice	Dish-stew	Food
Cupcake	Strained-Sourdough	TRUE	TRUE	FALSE		Muffin	Donut	Scone	Food
Cupcake sprinkles	Salad crumbs	FALSE	FALSE	FALSE		Choco-chips	Nuts	Raisins	Food
Cupholder	Plate-dropper	TRUE	TRUE	FALSE		Plate-rack	Dish-drain	Bowl-stack	Car
Departure time	Arrival void	TRUE	TRUE	FALSE		Arrival-date	Stay-length	Return-trip	Travel
Graduation Diploma	Failure Saying	TRUE	TRUE	FALSE		Birth-cert	Death-warrant	Marriage-license	Life
Dirty Mind	Clean body	TRUE	TRUE	FALSE		Clean-slate	Pure-heart	Blank-page	Personality
Dishwasher	Plate-dirty	FALSE	FALSE	FALSE		Sink	Sponge	Towel	House
Dodgeball	Hitcube	TRUE	TRUE	FALSE		Catch	Tag	Hide	Sports
Donuts	Don'tShells	TRUE	TRUE	FALSE		Bagels	Croissants	Rolls	Food
Door knob	Window-smooth	FALSE	FALSE	FALSE		Window-latch	Gate-hook	Wall-switch	House
Doorbell	Wall-Silence	TRUE	TRUE	FALSE		Knocker	Peephole	Mat	House
Dumbbell	Smart-silencer	FALSE	FALSE	FALSE		Barbell	Weight	Machine	Gym
Dr Pepper	Nurse-salt	TRUE	TRUE	FALSE		Mr-Pibb	Coke	Pepsi	Drink
Dragonfly	Pull-off-fall	TRUE	TRUE	FALSE		Butterfly	Bee	Fly	Animals
Driveway	Sit hall	TRUE	FALSE	FALSE		Parkway	Highway	Street	House
Dryer	Wetter	TRUE	TRUE	FALSE		Washer	Line	Rack	House
Economy seat	Luxury Stand	TRUE	TRUE	FALSE		First-class	Business	Pilot	Travel
Eggroll	SpermRock	TRUE	TRUE	FALSE		Spring-roll	Dumpling	Bun	Food
Emergency exit	Everyday wall	FALSE	FALSE	FALSE		Main-entrance	Front-door	Side-gate	Safety
Energy bar	Sleep Rope	TRUE	TRUE	FALSE		Sleep-pill	Calm-tea	Relax-mat	Food
Energy drink	Sleep sip	TRUE	TRUE	FALSE		Water	Milk	Juice	Drink
Eraser	Marker	TRUE	TRUE	FALSE		Pen	Marker	Chalk	School
Field trip	Hill Stay	TRUE	TRUE	FALSE		Home-stay	Class-work	Desk-job	School
Final boarding	First Leaving	TRUE	TRUE	FALSE		First-call	Pre-board	Check-in	Travel
Fire eater	Water Spewer	TRUE	TRUE	FALSE		Water-drinker	Ice-chewer	Air-breather	Fun
Fire hose	water board	TRUE	TRUE	FALSE		Garden-hose	Straw	Pipe	Safety
Firefighter	Water-pacifist	TRUE	TRUE	FALSE		Arsonist	Police	Doctor	Jobs
Firetruck	Waterbike or watercar	TRUE	TRUE	FALSE		Police-car	Ambulance	Taxi	City
Fireworks	Water Plays	TRUE	TRUE	FALSE		Sparklers	Flares	Lights	Fun
First class	Last free-play	TRUE	TRUE	FALSE		Economy	Coach	Cargo	Travel
Flashlight	Slow-dark	TRUE	TRUE	FALSE		Candle	Lamp	Sun	Tools
Flight/Fly	Fall	TRUE	TRUE	FALSE		Drive	Walk	Swim	Travel
Flight attendant	Fall Ignorer	TRUE	TRUE	FALSE		Pilot	Passenger	Guard	Travel
Flight number	Fall Letter	TRUE	TRUE	FALSE		Seat-number	Gate-code	Bag-tag	Travel
Football	Hand-cube	TRUE	TRUE	FALSE		Soccer	Rugby	Tennis	Sports
Fortune Cookie	Misery Cracker	TRUE	TRUE	FALSE		Fact-file	News-paper	Text-book	Food
Four square	Against Circle	TRUE	TRUE	FALSE		Hop-scotch	Tag	Hide	Games
Freeze tag	Burn/melt miss	TRUE	FALSE	FALSE		Melt-down	Burn-up	Thaw-out	Games
French fries	English Boils	TRUE	TRUE	FALSE		Baked-potato	Mashed	Boiled	Food
French horn	English Silencer	TRUE	TRUE	FALSE		English-flute	German-drum	Spanish-guitar	Music
Fried rice	Frozen bread	FALSE	FALSE	FALSE		Steamed	Boiled	Raw	Food
Fudge	Bitterdust	FALSE	FALSE	FALSE		Toffee	Caramel	Nougat	Candy
Fuel gauge	Exhaust Guesser	FALSE	TRUE	FALSE		Speedometer	Thermometer	Clock	Car
Funnel cake	Desert bread	FALSE	FALSE	FALSE		Pancake	Waffle	Crepe	Food
Garage door	Garden wall	FALSE	FALSE	FALSE		Front-gate	Back-door	Side-entry	House
Garden hose	Desert-stick	FALSE	FALSE	FALSE		Fire-hose	Straw	Pipe	Garden
Gas pedal	Brake stone	FALSE	FALSE	FALSE		Brake	Clutch	Wheel	Car
Gas pump	Brake deflator	TRUE	TRUE	FALSE		Charger	Plug	Socket	Car
Gas station	Liquid motion	TRUE	TRUE	FALSE		Rest-stop	Diner	Motel	Travel
Gear shift	Neutral stay	TRUE	TRUE	FALSE	4	Steering	Brake	Pedal	Car
Gingerbread	Spicy-rock	FALSE	FALSE	FALSE		Shortbread	Sugar-cookie	Oatmeal	Food
Glovebox	SockBall	TRUE	TRUE	FALSE		Trunk	Hood	Roof	Car
Glue stick	Break dust	FALSE	FALSE	FALSE		Tape	Staple	Clip	School
Goldfish	Bronze-bird	TRUE	TRUE	FALSE		Shark	Whale	Tuna	Animals
Graduation cap	Dropout shoes	TRUE	TRUE	FALSE		Party-hat	Helmet	Crown	School
Green beans	Red rocks	FALSE	FALSE	FALSE		Carrots	Peas	Corn	Food
Green tea	Red Coffee	TRUE	TRUE	FALSE		Black-coffee	Red-wine	White-milk	Drink
Grizzly bear	Timid-secret	TRUE	TRUE	FALSE		Teddy	Panda	Polar	Animals
Gym shoes	Couch gloves	TRUE	TRUE	FALSE		Dress-shoes	Boots	Sandals	Clothing
Hall pass	Room Fail	TRUE	TRUE	FALSE		Detention	Suspension	Expulsion	School
Hamburger	Serious-hotdog	TRUE	TRUE	FALSE		Hotdog	Pizza	Taco	Food
Haunted house	Holy Prison	TRUE	TRUE	FALSE		Fun-house	Doll-house	Tree-house	Fun
Headlight	Tail-dark	TRUE	TRUE	FALSE		Taillight	Brake-light	Turn-signal	Car
Headphones	Foot-speakers	TRUE	TRUE	FALSE		Speakers	Radio	Stereo	Tech
Herbal tea	Root Coffee	TRUE	TRUE	FALSE		Soda	Beer	Wine	Drink
Hide and seek	Show not stay	TRUE	TRUE	FALSE		Tag	Chase	Race	Games
Highlighter	Low-darker	TRUE	TRUE	FALSE		Pen	Pencil	Marker	School
Highway	Low-walk	FALSE	FALSE	FALSE		Street	Road	Lane	Travel
Highway exit	ParkingLot Entrance	TRUE	TRUE	FALSE		Entrance	Ramp	Lane	Travel
History book	Future Movie	TRUE	TRUE	FALSE		Sci-fi	Fantasy	Comic	School
Homework	PrisonPlay	TRUE	TRUE	FALSE		Classwork	Test	Quiz	School
Honeycomb	BitterBrush	TRUE	TRUE	FALSE		Beehive	Nest	Web	Nature
Hopscotch	Crawlstone	FALSE	FALSE	FALSE		Jump-rope	Ball	Bat	Games
Hot chocolate	Cold vanilla	TRUE	TRUE	FALSE		Iced-tea	Lemonade	Water	Drink
Hot cocoa	Cold dust	FALSE	FALSE	FALSE		Cold-milk	Juice	Soda	Drink
Hot fudge	Cold rocks	FALSE	FALSE	FALSE		Whipped-cream	Sprinkles	Cherry	Food
Hot sauce	Cold sugar	FALSE	FALSE	FALSE		Ketchup	Mustard	Mayo	Food
Hot tea	Cold Coffee	TRUE	TRUE	FALSE		Iced-coffee	Slushie	Shake	Drink
Hotdog	Cold-cat	TRUE	TRUE	FALSE		Burger	Pizza	Taco	Food
Hotel	Shack	FALSE	FALSE	FALSE		Motel	Inn	Hostel	Travel
Hubcap	Hollow stick	FALSE	FALSE	FALSE		Tire	Rim	Wheel	Car
Ice cream	You-Whisper	TRUE	TRUE	FALSE		Yogurt	Sorbet	Gelato	Food
Ice cream cone	Fire soup cup	FALSE	FALSE	FALSE		Cup	Bowl	Dish	Food
Ice cream sundae	Fire night monday	FALSE	FALSE	FALSE		Banana-split	Cone	Shake	Food
Ice cube	Lava Orb	TRUE	TRUE	FALSE		Water	Steam	Vapor	Science
Ice skate	Lava Walk	TRUE	TRUE	FALSE		Roller	Blade	Wheel	Sports
Ice water	Lava Fire	TRUE	TRUE	FALSE		Hot-tea	Warm-milk	Boiling	Drink
Iceberg	Lava-pyramid 	TRUE	TRUE	FALSE		Glacier	Snow	Frost	Nature
Iced tea	Lava Coffee	TRUE	TRUE	FALSE		Hot-coffee	Warm-cider	Soup	Drink
Insure	Out-doubt	TRUE	TRUE	FALSE		Risk	Gamble	Bet	Money
Jam jar	Rock sack	FALSE	FALSE	FALSE		Pickle-jar	Can	Box	Food
Jellyfish	Peanutbutter-bird	TRUE	TRUE	FALSE		Starfish	Crab	Lobster	Animals
Juggler	Dropper	TRUE	TRUE	FALSE		Clown	Acrobat	Mime	Fun
Jump rope	Sit chain	FALSE	FALSE	FALSE		Hula-hoop	Ball	Bat	Games
Jumper cables	Laying bars/ropes	TRUE	TRUE	FALSE		Tow-rope	Chain	Strap	Car
Ketchup	Throw-down	TRUE	TRUE	FALSE		Mustard	Mayo	Relish	Food
Keyboard	Lock-edge	FALSE	FALSE	FALSE		Mouse	Screen	Monitor	Tech
Kite string	Rock-chain	FALSE	FALSE	FALSE		Fishing-line	Thread	Yarn	Fun
Kiwi fruit	Desert rock	FALSE	FALSE	FALSE		Apple	Orange	Banana	Food
Ladybug	Youngman/gentleman -giant 	TRUE	TRUE	FALSE		Beetle	Ant	Fly	Animals
Landing gear	Takeoff neutral	TRUE	TRUE	FALSE		Wings	Tail	Nose	Travel
Laptop	Floor-bottom	TRUE	TRUE	FALSE		Desktop	Tablet	Phone	Tech
Lawn mower	Jungle-grower	TRUE	TRUE	FALSE		Rake	Shovel	Hoe	Garden
Layover	Stand-under	TRUE	TRUE	FALSE		Direct	Non-stop	Through	Travel
Lemon drop	Sweet rise	TRUE	TRUE	FALSE		Gum-drop	Mint	Chew	Candy
Lemonade	Sweet-hurt	TRUE	TRUE	FALSE		Limeade	Punch	Soda	Drink
Lemonade stand	Sweet-hurt sit	TRUE	TRUE	FALSE		Store	Shop	Mart	Fun
License	Ban	FALSE	FALSE	FALSE		Permit	Card	ID	Legal
License plate	Ban Bowl	TRUE	TRUE	FALSE		Bumper	Sticker	Decal	Car
Life vest	Death speedo	TRUE	TRUE	FALSE		Float	Ring	Buoy	Safety
Lighthouse	Dark-tent	TRUE	TRUE	FALSE		Beacon	Lamp	Torch	Sea
Locker	Opener	TRUE	TRUE	FALSE		Closet	Shelf	Box	School
Locomotive	Still-neutral	TRUE	TRUE	FALSE		Car	Caboose	Train	Transport
Lollipop	Ground push	FALSE	FALSE	FALSE		Sucker	Pop	Candy	Candy
Lost luggage	Found backpack	FALSE	FALSE	FALSE		Found	Claimed	Safe	Travel
Luggage cart	Empty bench	FALSE	FALSE	FALSE		Trolley	Wagon	Barrow	Travel
Luggage rack	Empty pit	FALSE	FALSE	FALSE		Shelf	Bin	Hook	Travel
Lunchbox	Dinner plate	FALSE	FALSE	FALSE		Bag	Tray	Plate	School
Magic show	Logic hide	TRUE	TRUE	FALSE		Play	Movie	Concert	Fun
Magician	Revealer	FALSE	FALSE	FALSE		Wizard	Witch	Sorcerer	Fun
Mailbox	Voice-cloud	FALSE	FALSE	FALSE		Inbox	Outbox	Slot	House
Mapquest	Lost-answer	FALSE	FALSE	FALSE		Google	Apple	Waze	Tech
Marshmallow	Stone-spicy	FALSE	FALSE	FALSE		Chocolate	Graham	Cracker	Food
Mashed potatoes	Clumped Bananas	TRUE	TRUE	FALSE		Fries	Chips	Baked	Food
Math problem	Art answer	TRUE	TRUE	FALSE		Word-search	Crossword	Puzzle	School
Mayonnaise	Sanddark	FALSE	FALSE	FALSE		Mustard	Ketchup	Relish	Food
Meatballs	Veggie squares	TRUE	TRUE	FALSE		Sausage	Patty	Link	Food
Merry-go-round	Serious-stop-square	TRUE	TRUE	FALSE		Slide	Swing	Seesaw	Fun
Metro card	Desert slip	FALSE	FALSE	FALSE		Token	Ticket	Pass	Travel
Microwave	Macro-Flat	FALSE	FALSE	FALSE		Oven	Stove	Grill	Kitchen
Milk carton	Fire jar	FALSE	FALSE	FALSE		Jug	Bottle	Bag	Drink
Milkshake	Juice-still	TRUE	TRUE	FALSE		Malt	Float	Smoothie	Drink
Mindset	Body-Scatter	TRUE	TRUE	FALSE		Mood	Attitude	Vibe	Psych
Mindful	Body-empty 	FALSE	FALSE	FALSE		Aware	Alert	Awake	Psych
Minecraft	Yours-demolish	TRUE	TRUE	FALSE		Roblox	Fortnite	Mario	Games
Mineral water	Cloud dust	FALSE	FALSE	FALSE		Tap	Spring	Well	Drink
Mocha	Bright dust	FALSE	FALSE	FALSE		Latte	Cappuccino	Espresso	Drink
Monkey bars	Human floor	FALSE	FALSE	FALSE		Slide	Swing	Ladder	Fun
Moonlight	SunDark	TRUE	TRUE	FALSE		Sunlight	Starlight	Lamplight	Nature
Motel	Mansion	FALSE	FALSE	FALSE		Hotel	Inn	Lodge	Travel
Muffins	Stones	FALSE	FALSE	FALSE		Scones	Biscuits	Rolls	Food
Muffler	Shouter	TRUE	TRUE	FALSE		Scarf	Shawl	Wrap	Clothing
Music class	Silence pit	FALSE	FALSE	FALSE		Art	Gym	Math	School
Newspaper	Old-rock	TRUE	TRUE	FALSE		Magazine	Journal	Paper	Media
Newsstand	Old pit	TRUE	TRUE	FALSE		Kiosk	Booth	Stall	City
Nightstand	Daywalk	TRUE	TRUE	FALSE		Dresser	Bureau	Chest	Furniture
Notebook	Song-Movie	TRUE	TRUE	FALSE		Journal	Diary	Pad	School
Notebook paper	Forget rock	FALSE	FALSE	FALSE		Graph	Lined	Blank	School
Oboe	Dust hole	FALSE	FALSE	FALSE		Clarinet	Flute	Sax	Music
Ocean Floor	Land Ceiling	TRUE	TRUE	FALSE		Sea-bed	Sand	Reef	Nature
Odometer	Nowhere-stick	FALSE	FALSE	FALSE		Speedometer	Gauge	Dial	Car
Orange juice	Blue Milk	TRUE	TRUE	FALSE		Apple	Grape	Cranberry	Drink
Orchestra	Silence hall	FALSE	FALSE	FALSE		Band	Choir	Group	Music
Overhead bin	Underfoot pit	TRUE	TRUE	FALSE		Under-seat	Closet	Rack	Travel
Overpass	Underfail	TRUE	TRUE	FALSE		Underpass	Bridge	Tunnel	City
Oxygen mask	Carbon stone	FALSE	FALSE	FALSE		Gas-mask	Face-mask	Shield	Safety
Pancake syrup	Veggie dust	FALSE	FALSE	FALSE		Honey	Jam	Butter	Food
Pancakes	Night-craters	FALSE	FALSE	FALSE		Waffles	Toast	Eggs	Food
Paper stack	Digital void	FALSE	FALSE	FALSE		Pile	Heap	Mound	Office
Paperclip	Rock-rope	FALSE	FALSE	FALSE		Staple	Pin	Tack	Office
Parking brake	Rolling go	FALSE	FALSE	FALSE		Gas	Clutch	Gear	Car
Parking lot	Flying meadow	FALSE	FALSE	FALSE		Garage	Space	Spot	City
Passenger train	Pilot plane	FALSE	FALSE	FALSE		Freight	Cargo	Coal	Transport
Passport	Fail-sail	FALSE	FALSE	FALSE		Visa	ID	Card	Travel
Peanut butter	Jelly	FALSE	FALSE	FALSE		Jelly	Honey	Nutella	Food
Pencil case	Ink jar	FALSE	FALSE	FALSE		Box	Bag	Pouch	School
Pencil sharpener	Crayon duller	FALSE	FALSE	FALSE		Knife	Blade	Cutter	School
Petting zoo	Poking/Roughing habitat	TRUE	TRUE	FALSE		Farm	Barn	Stable	Fun
Pilot	Passenger	TRUE	TRUE	FALSE		Driver	Captain	Chief	Jobs
Playbill	Workbonus 	TRUE	TRUE	FALSE		Program	Guide	Menu	Theater
Playground	Work-air	TRUE	TRUE	FALSE		Park	Field	Yard	Fun
jungle gym	desert couch	TRUE	TRUE	FALSE		Slide	Swing	Sand	Fun
Playground kickball	Couch chess	FALSE	FALSE	FALSE		Soccer	Baseball	Tag	Games
Playground slide	Work-stepper	FALSE	FALSE	FALSE		Swing	Seesaw	Bars	Fun
Playground swing	Office-still	FALSE	FALSE	FALSE		Slide	Bars	Sand	Fun
Polar bear	Equator-keep/ cat	TRUE	TRUE	FALSE		Penguin	Seal	Walrus	Animals
Policeman	Thief-kid	FALSE	FALSE	FALSE		Fireman	Doctor	Nurse	Jobs
Pony ride	Couch stone	FALSE	FALSE	FALSE		Horse	Camel	Elephant	Fun
Popcorn	Still-wheat	FALSE	FALSE	FALSE		Chips	Pretzels	Nuts	Snack
Popsicle	Melt-hot	FALSE	FALSE	FALSE		Cone	Cup	Bar	Food
Potato chips	Sky fruit	FALSE	FALSE	FALSE		Corn	Tortilla	Pita	Snack
Principal	Student minor	FALSE	FALSE	FALSE		Teacher	Coach	Nurse	School
Prize counter	Lose wall	FALSE	FALSE	FALSE		Ticket	Token	Coin	Fun
Program guide	Forget void	FALSE	FALSE	FALSE		Menu	List	Chart	Media
Protein bar	Fat rope	FALSE	FALSE	FALSE		Shake	Powder	Drink	Food
Protein shake	Fat-steady	TRUE	TRUE	FALSE		Smoothie	Juice	Milk	Drink
Pumpkin pie	Broccoli-bread	FALSE	FALSE	FALSE		Apple	Pecan	Cherry	Food
Puppet show	Human stand	FALSE	FALSE	FALSE		Play	Movie	Act	Fun
Quiz paper	Dance stone	FALSE	FALSE	FALSE		Test	Exam	Study	School
Radio	Quiet hole	FALSE	FALSE	FALSE		TV	Phone	Web	Media
Railroad	Skyfree	FALSE	FALSE	FALSE		Track	Line	Path	Transport
Railroad bridge	Water pit	FALSE	FALSE	FALSE		Tunnel	Crossing	Switch	Transport
Railroad crossing	Free sky	FALSE	FALSE	FALSE		Signal	Gate	Light	Transport
Rainbow	Shadow-monochrome	FALSE	FALSE	FALSE		Cloud	Rain	Sun	Weather
Raindrop	Sun-lift	FALSE	FALSE	FALSE		Snowflake	Hail	Sleet	Weather
Rainstorm	Sunrest	FALSE	FALSE	FALSE		Snowstorm	Wind	Hail	Weather
Ramen bowl	Steak plate	FALSE	FALSE	FALSE		Soup	Noodle	Broth	Food
Reading glasses	Ignoring darks	FALSE	FALSE	FALSE		Sun-glasses	Goggles	Monocle	Items
Rearview mirror	Forward blur	FALSE	FALSE	FALSE		Side-mirror	Windshield	Window	Car
Recess	Meeting	FALSE	FALSE	FALSE		Break	Lunch	Play	School
Red Rover	Blue Sitter	FALSE	FALSE	FALSE		Tag	Hide	Seek	Games
Refrigerator	Heat-spreader	FALSE	FALSE	FALSE		Freezer	Cooler	Box	Kitchen
Rest stop	Work go	FALSE	FALSE	FALSE		Exit	Area	Park	Travel
Ringmaster	Crowd minor	FALSE	FALSE	FALSE		Clown	Acrobat	Tamer	Fun
Road trip	Couch nap	FALSE	FALSE	FALSE		Flight	Cruise	Train	Travel
Roller coaster	Walker plain	FALSE	FALSE	FALSE		Ride	Track	Car	Fun
Roller rink	Walker-square	FALSE	FALSE	FALSE		Ice-rink	Park	Hall	Fun
Roller skates	Crawler-shoes	FALSE	FALSE	FALSE		Blades	Shoes	Boots	Fun
Rollercoaster	Stationary-agitator	TRUE	TRUE	FALSE		Ferris-wheel	Carousel	Ride	Fun
Root beer	Leaf wine	TRUE	TRUE	FALSE		Cola	Soda	Pop	Drink
Ruler	Rebel	FALSE	FALSE	FALSE		Tape	Stick	Yard	School
Runway	Stopground	FALSE	FALSE	FALSE		Taxiway	Apron	Gate	Travel
Runway lights	Alley darks	FALSE	FALSE	FALSE		Beacons	Lamps	Spots	Travel
Sandbox	Glass tower	FALSE	FALSE	FALSE		Pit	Box	Pile	Fun
Sandwich	Glass-saint	TRUE	TRUE	FALSE		Burger	Sub	Wrap	Food
Sandwich bag	Plate-open	FALSE	FALSE	FALSE		Box	Wrap	Foil	Kitchen
School bell	Silent wall	FALSE	FALSE	FALSE		Alarm	Ring	Buzz	School
School bus	Work-car	FALSE	FALSE	FALSE		Van	Car	Taxi	School
School bus stop	Work car go	FALSE	FALSE	FALSE		Corner	Shelter	Sign	School
School desk	Play couch	FALSE	FALSE	FALSE		Chair	Table	Bench	School
Science lab	Myth cave	TRUE	TRUE	FALSE		Room	Class	Hall	School
Scissors	Joiners	FALSE	FALSE	FALSE		Shears	Cutter	Knife	Tools
Seat belt	Stand loose	TRUE	TRUE	FALSE		Strap	Buckle	Lock	Safety
Break time	Fix Eternity	TRUE	TRUE	FALSE		Work	Class	Job	Work
Seatbelt sign	Loose stay	FALSE	FALSE	FALSE		Light	Signal	Bell	Travel
Security check	Chaos gift	FALSE	FALSE	FALSE		Gate	Line	Scan	Travel
See-saw	Don’t-look stay	FALSE	FALSE	FALSE		Swing	Slide	Bars	Fun
Shoestring	Bare-chain	FALSE	FALSE	FALSE		Lace	Tie	Knot	Clothing
Sidewalk	Center-float	FALSE	FALSE	FALSE		Road	Path	Walk	City
Skateboard	Crawl-floor	FALSE	FALSE	FALSE		Bike	Scooter	Skates	Fun
Sleeper car	Awake rock	FALSE	FALSE	FALSE		Coach	Seat	Bed	Transport
Slide	Climb	FALSE	FALSE	FALSE		Swing	Climb	Jump	Fun
Soulmate	Body-enemy	FALSE	FALSE	FALSE		Partner	Friend	Love	Life
Smartwatch	Dumb-ignore	TRUE	TRUE	FALSE		Phone	Tablet	Band	Tech
Smoothie	Roughie	TRUE	TRUE	FALSE		Shake	Juice	Blend	Drink
Snack pack	Meal dump	FALSE	FALSE	FALSE		Box	Bag	Cup	Food
Snack time	Work freeze	FALSE	FALSE	FALSE		Lunch	Dinner	Meal	Food
Snowball	Cinders-Cube	TRUE	TRUE	FALSE		Ice	Flake	Drift	Winter
Snowball	Heat-square	FALSE	FALSE	FALSE		Ice	Flake	Drift	Winter
Snowfall	Cinders-Rise	TRUE	TRUE	FALSE		Rain	Hail	Sleet	Winter
Snowflake	Cinders-clump	TRUE	TRUE	FALSE		Crystal	Ice	Drop	Winter
Snowman	Cinders-Ghost	TRUE	TRUE	FALSE		Frosty	Ice	Cold	Winter
Snowman	Heatghost	FALSE	FALSE	FALSE		Frosty	Ice	Cold	Winter
Snowstorm	Cinders-Calm	TRUE	TRUE	FALSE		Blizzard	Squall	Gale	Winter
Snowstorm	Heatbreeze	FALSE	FALSE	FALSE		Blizzard	Squall	Gale	Winter
Soda pop	Still drop	FALSE	FALSE	FALSE		Coke	Pepsi	Sprite	Drink
Spaghetti	Short cubes	FALSE	FALSE	FALSE		Pasta	Noodle	Mac	Food
Spare tire	Missing cube	FALSE	FALSE	FALSE		Wheel	Rim	Jack	Car
Sparkling water	Dull ground	FALSE	FALSE	FALSE		Still	Flat	Tap	Drink
Speedometer	Slowguess	FALSE	FALSE	FALSE		Tach	Gauge	Dial	Car
Spiral notebook	Flat rock	FALSE	FALSE	FALSE		Pad	Book	Binder	School
Sports drink	Nap dry	FALSE	FALSE	FALSE		Water	Soda	Juice	Drink
Sports jersey	Office suit	FALSE	FALSE	FALSE		Shirt	Top	Vest	Clothing
Spotlight	Shadowdark	FALSE	FALSE	FALSE		Flood	Beam	Ray	Theater
Stage lights	Cave darks	FALSE	FALSE	FALSE		Spots	Floods	Beams	Theater
Stapler	Scatterer	FALSE	FALSE	FALSE		Tape	Glue	Clip	Office
Starfish	Planet-bird	TRUE	TRUE	FALSE		Shell	Crab	Fish	Sea
Station clock	Forget dark	FALSE	FALSE	FALSE		Watch	Time	Dial	Transport
Station master	Student minor	FALSE	FALSE	FALSE		Guard	Chief	Boss	Transport
Steam engine	Fog silence	FALSE	FALSE	FALSE		Diesel	Electric	Coal	Transport
Steering wheel	Crawling stick	FALSE	FALSE	FALSE		Helm	Tiller	Stick	Car
Stir fry	Shake Freeze	TRUE	TRUE	FALSE		Wok	Pan	Dish	Food
Stop sign	Go shadow	FALSE	FALSE	FALSE		Yield	Go	Slow	City
Stopwatch	Go-ignore	TRUE	TRUE	FALSE		Timer	Clock	Watch	Sports
Strawberry	Brickmelon	TRUE	TRUE	FALSE		Berry	Fruit	Red	Food
Street sign	Alley blank	FALSE	FALSE	FALSE		Post	Pole	Mark	City
Streetlight	Sidewalk-dark	FALSE	FALSE	FALSE		Lamp	Post	Bulb	City
Strongman	Weakboy	TRUE	TRUE	FALSE		Lifter	Builder	Gym	Circus
Study hall	Party field	FALSE	FALSE	FALSE		Library	Room	Class	School
Subway	above-	TRUE	TRUE	FALSE		Metro	Tube	Train	Transport
Suitcase	Pajamabox	FALSE	FALSE	FALSE		Bag	Case	Trunk	Travel
Suitcase wheels	Couch roots	FALSE	FALSE	FALSE		Handle	Zip	Lock	Travel
Sunglasses	MoonSands	TRUE	TRUE	FALSE		Shades	Specs	Lens	Items
Sunlight	Moon-dark	TRUE	TRUE	FALSE		Moon	Star	Lamp	Nature
Sunrise	Moon-set	TRUE	TRUE	FALSE		Sunset	Dawn	Dusk	Nature
Sunroof	Moonfloor	FALSE	FALSE	FALSE		Moonroof	Top	Window	Car
Sunset	Moon-rise	TRUE	TRUE	FALSE		Sunrise	Dusk	Dawn	Nature
Sushi roll	Burger cube	FALSE	FALSE	FALSE		Sashimi	Nigiri	Maki	Food
Sweet tea	Sour coffee 	TRUE	TRUE	FALSE	2	Unsweet	Green	Black	Drink
Swimming goggles	Dry-blinders	FALSE	FALSE	FALSE		Mask	Fins	Snorkel	Sports
Swimming pool	Drought-hill	FALSE	FALSE	FALSE		Lake	Pond	Sea	Fun
Swing set	Still sit	FALSE	FALSE	FALSE		Slide	Bars	Sand	Fun
Sword swallower	Pillow hugger	FALSE	FALSE	FALSE		Eater	Breather	Walker	Circus
T-shirt	Coffee-pants	TRUE	TRUE	FALSE		Shirt	Top	Tee	Clothing
Tag game	Ignore still	FALSE	FALSE	FALSE		Chase	Race	Run	Games
Taillights	Head darks	TRUE	TRUE	FALSE		Headlights	Brakes	Signals	Car
Tea kettle	Ice jar	FALSE	FALSE	FALSE		Pot	Jug	Urn	Kitchen
Teacher’s pet	Student’s Monster 	TRUE	TRUE	FALSE		Favorite	Star	Best	School
Teapot	CoffeeCup	TRUE	TRUE	FALSE		Cup	Mug	Saucer	Kitchen
Tennis court	Pickleball-grass	FALSE	FALSE	FALSE		Net	Line	Ball	Sports
Textbook	PictureMovie	TRUE	TRUE	FALSE		Reader	Guide	Manual	School
Ticket agent	Chaos fan	FALSE	FALSE	FALSE		Seller	Broker	Dealer	Travel
Ticket booth	Free hole	FALSE	FALSE	FALSE		Window	Counter	Desk	Travel
Ticket machine	Freedom wall	FALSE	FALSE	FALSE		Kiosk	Vendor	Box	Travel
Ticket ride	Ground sit	FALSE	FALSE	FALSE		Pass	Stub	Slip	Fun
Ticket stub	Whole slip	FALSE	FALSE	FALSE		Receipt	Check	Bill	Fun
Tightrope walker	Loose floor sitter	FALSE	FALSE	FALSE		Acrobat	Clown	Mime	Circus
Timetable	Chaos blank	FALSE	FALSE	FALSE		Schedule	Plan	Chart	Transport
Timpani	Flat still	FALSE	FALSE	FALSE		Drum	Kettle	Bass	Music
Tire tread	Smooth slip	FALSE	FALSE	FALSE		Grip	Pattern	Mark	Car
Toast	Freeze	FALSE	FALSE	FALSE		Bread	Slice	Crust	Food
Toll booth	Free hole	FALSE	FALSE	FALSE		Gate	Lane	Stop	Travel
Toll road	Free grass	FALSE	FALSE	FALSE		Freeway	Highway	Pike	Travel
Tooth fairy	Gum-troll	FALSE	FALSE	FALSE		Santa	Bunny	Elf	Myth
Toothbrush	Gum-Ruffler	TRUE	TRUE	FALSE		Paste	Floss	Pick	Health
Toothpaste	Tongue-dirt	FALSE	FALSE	FALSE		Brush	Rinse	Wash	Health
Tow truck	Push bike	FALSE	FALSE	FALSE		Wrecker	Hauler	Puller	Car
Track switch	Straight stay	FALSE	FALSE	FALSE		Lever	Point	Rail	Transport
Traffic jam	Empty flow/peanutbutter	FALSE	FALSE	FALSE		Gridlock	Stop	Wait	City
Traffic light	Empty dark	FALSE	FALSE	FALSE		Signal	Lamp	Stop	City
Trail bar	Couch square	FALSE	FALSE	FALSE		Mix	Nut	Fruit	Food
Trail mix	Couch single	FALSE	FALSE	FALSE		Nuts	Raisins	Choco	Food
Train car	Couch walk	FALSE	FALSE	FALSE		Coach	Wagon	Box	Transport
Train depot	Couch pit	FALSE	FALSE	FALSE		Station	Yard	Stop	Transport
Train seat	Walk stand	FALSE	FALSE	FALSE		Bench	Chair	Stool	Transport
Train station	Plane meadow	FALSE	FALSE	FALSE		Platform	Track	Rail	Transport
Train tracks	Air gaps	FALSE	FALSE	FALSE		Rails	Ties	Bed	Transport
Train tunnel	Sky hill	FALSE	FALSE	FALSE		Tube	Hole	Pass	Transport
Train whistle	Silent rock	FALSE	FALSE	FALSE		Horn	Bell	Blast	Transport
Train yard	Couch meadow	FALSE	FALSE	FALSE		Depot	Shop	Shed	Transport
Trapeze artist	Couch crawler	FALSE	FALSE	FALSE		Flyer	Catcher	Swinger	Circus
Travel visa	Couch ban	FALSE	FALSE	FALSE		Passport	Permit	Stamp	Travel
Tray table	Floor stick	FALSE	FALSE	FALSE		Seat	Back	Pocket	Travel
Treehouse	Root basement	FALSE	FALSE	FALSE		Fort	Club	Hut	Fun
Trombone	Silence stick	FALSE	FALSE	FALSE		Trumpet	Tuba	Horn	Music
Trumpet	Whisper	FALSE	FALSE	FALSE		Bugle	Cornet	Horn	Music
Trunk	Branch	FALSE	FALSE	FALSE		Chest	Box	Case	Storage
Tunnel	Sky	FALSE	FALSE	FALSE		Cave	Mine	Hole	Transport
Turbulence	Stillness	FALSE	FALSE	FALSE		Bump	Shake	Jolt	Travel
Turkey dinner	Salad-snack	FALSE	FALSE	FALSE		Ham	Roast	Feast	Food
Turn signal	Straight silence	FALSE	FALSE	FALSE		Blinker	Light	Indicate	Car
Turnstile	Wideopen	FALSE	FALSE	FALSE		Gate	Door	Bar	City
Umbrella	Sun-puller	FALSE	FALSE	FALSE		Rain	Coat	Boot	Weather
Vacuum	Blower	TRUE	TRUE	FALSE		Cleaner	Sweep	Dust	House
Vacuum cleaner	Dust-dirty	FALSE	FALSE	FALSE		Broom	Mop	Rag	House
Vending machine	Starving box	FALSE	FALSE	FALSE		Snack	Soda	Candy	Food
Violin	Drum	FALSE	FALSE	FALSE		Fiddle	Cello	Bass	Music
Waiting	Acting	TRUE	TRUE	FALSE		Line	Queue	Hold	Life
Waiting room	Acting Hall	TRUE	TRUE	FALSE		Lobby	Hall	Area	Health
Washing machine	Drying Human	TRUE	TRUE	FALSE	3	Dryer	Tub	Basin	House
Watchout	Ignore-in	TRUE	TRUE	FALSE		Look	See	Head	Safety
Water bottle	Fire-basket	FALSE	FALSE	FALSE		Jug	Flask	Cup	Drink
Water bottle	Fire jug	FALSE	FALSE	FALSE		Jug	Flask	Cup	Drink
Water jug	Fire box	FALSE	FALSE	FALSE		Pitcher	Ewer	Urn	Drink
Waterfall	Fire-rise	FALSE	FALSE	FALSE		Cascade	Falls	Drop	Nature
Watermelon	Fire-Berry	TRUE	TRUE	FALSE		Melon	Fruit	Seed	Food
Waterfall	Fire-Fly	TRUE	TRUE	FALSE		Cascade	Falls	Drop	Nature
Water heater	Fire Cooler	TRUE	TRUE	FALSE		Tank	Boiler	Pump	House
Water Skiing	Fire-Tumbling	TRUE	TRUE	FALSE		Wake	Board	Boat	Sports
Water Slide	Fire Climb	TRUE	TRUE	FALSE		Pool	Park	Splash	Fun
Watercolor	Fire Scribble	TRUE	TRUE	FALSE		Paint	Brush	Art	Art
Watch party	Blind Bummer	TRUE	TRUE	FALSE		Group	View	Show	Fun`;

class Game {
    constructor() {
        this.score = 0;
        this.timeLeft = 120; // 2 minutes
        this.timerInterval = null;
        this.currentCardIndex = 0;
        this.isPlaying = false;
        // this.currentPoints = 3; // This will be initialized in loadCard
        this.freeCluesRemaining = 10; // Initial value, will be reset in startGame
        this.gameLog = []; // Array of { question, answer, result }
        this.cards = []; // Will hold the shuffled cards for the current game
        this.allCards = []; // Will hold all parsed cards
        this.currentHintState = ""; // Current state of the hint (e.g., "A _ _ _")

        // DOM Elements
        this.scoreEl = document.getElementById('score');
        this.timerEl = document.getElementById('timer');
        this.startScreen = document.getElementById('start-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('end-screen');
        this.finalScoreEl = document.getElementById('final-score');

        this.questionTextEl = document.getElementById('question-text');
        this.helperTextEl = document.getElementById('helper-text');
        this.hintTextEl = document.getElementById('hint-text');
        this.pointsBadgeEl = document.getElementById('potential-points');
        this.cluesBadgeEl = document.getElementById('clues-remaining');

        // this.initialControls = document.getElementById('initial-controls'); // Removed
        this.inputArea = document.getElementById('input-area');
        this.answerInput = document.getElementById('answer-input');

        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.passBtn = document.getElementById('pass-btn');

        this.buyLetterBtn = document.getElementById('buy-letter-btn');
        this.buyHelperBtn = document.getElementById('buy-helper-btn');
        this.freeClueBtn = document.getElementById('free-clue-btn');
        // this.hintBtn = document.getElementById('hint-btn'); // Removed
        // this.answerBtn = document.getElementById('answer-btn'); // Removed

        this.gameLogEl = document.getElementById('game-log');
        // this.revealAnswerBtn = document.getElementById('reveal-answer-btn'); // Removed

        this.selectedTime = 120; // Default time
        this.initListeners();
        this.loadData(); // Load data when the game initializes
    }

    async loadData() {
        try {
            // Disable start button and show loading state
            this.startBtn.disabled = true;
            this.startBtn.textContent = "Loading Data...";

            // Use embedded data
            this.parseData(RAW_GAME_DATA);

            this.startBtn.disabled = false;
            this.startBtn.textContent = "Start Game";
        } catch (error) {
            console.error("Failed to load data:", error);
            this.startBtn.textContent = "Error Loading Data";
            this.startBtn.disabled = true;
            alert("Failed to load game data. Please check the console for details.");
        }
    }

    parseData(text) {
        const lines = text.split('\n');
        const parsedCards = [];

        // Skip header (index 0)
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const parts = line.split('\t');
            if (parts.length < 2) continue;

            const word = parts[0].trim();
            const opposite = parts[1].trim();

            // New Columns: Helper 1 (6), Helper 2 (7), Helper 3 (8), Category (9)
            // Note: raw_data.txt indices might vary if empty columns are dropped by split? 
            // split('\t') preserves empty strings.

            let helpers = [];
            if (parts.length > 6 && parts[6].trim()) helpers.push(parts[6].trim());
            if (parts.length > 7 && parts[7].trim()) helpers.push(parts[7].trim());
            if (parts.length > 8 && parts[8].trim()) helpers.push(parts[8].trim());

            const category = parts.length > 9 ? parts[9].trim() : "General";

            if (!word || !opposite) continue;

            // Filter: Good Word (idx 2) AND Good Opposite (idx 3) must be TRUE
            const goodWord = parts.length > 2 && parts[2].trim().toUpperCase() === "TRUE";
            const goodOpposite = parts.length > 3 && parts[3].trim().toUpperCase() === "TRUE";

            if (goodWord && goodOpposite) {
                parsedCards.push({
                    question: opposite,
                    answer: word,
                    helpers: helpers.join(', '), // Join for display
                    category: category
                });
            }
        }

        this.allCards = parsedCards;
        console.log(`Loaded ${this.allCards.length} cards.`);
    }

    initListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.startGame());

        // Time Selection Listeners
        const timeBtns = document.querySelectorAll('.time-btn');
        timeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active state
                timeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Update selected time
                this.selectedTime = parseInt(e.target.dataset.time);
            });
        });

        this.buyLetterBtn.addEventListener('click', () => this.buyLetterHint());
        this.buyHelperBtn.addEventListener('click', () => this.buyHelperHint());
        this.freeClueBtn.addEventListener('click', () => this.useFreeClue());

        this.submitBtn.addEventListener('click', () => this.checkAnswer());
        // Removed auto-focus to prevent mobile keyboard popup
        // this.answerInput.addEventListener('keypress', (e) => {
        //     if (e.key === 'Enter') this.checkAnswer();
        // });

        this.passBtn.addEventListener('click', () => this.passCard());

        // Physical Keyboard Listener
        document.addEventListener('keydown', (e) => this.handlePhysicalKey(e));

        // this.revealAnswerBtn.addEventListener('click', () => {
        //     const card = this.cards[this.currentCardIndex];
        //     alert(`The answer was: ${card.answer}`);
        //     this.revealAnswerBtn.classList.add('hidden');
        // });
    }

    startGame() {
        if (this.allCards.length === 0) return;

        this.score = 0;
        this.timeLeft = this.selectedTime; // Use selected time
        this.cards = [...this.allCards];
        this.cards.sort(() => Math.random() - 0.5); // Shuffle cards from allCards
        this.currentCardIndex = 0;
        this.isPlaying = true;
        this.freeCluesRemaining = 10; // Reset free clues for a new game
        this.gameLog = [];

        // Stats tracking
        this.freeCluesUsed = 0;
        this.lettersBought = 0;
        this.helpersBought = 0;

        this.updateUI();

        this.startScreen.classList.add('hidden'); // Changed from remove('active') to add('hidden') to match original logic
        this.endScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');

        this.startTimer();
        this.loadCard();
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const totalTime = this.selectedTime; // Use selected time
        const circle = document.querySelector('.timer-ring-progress');

        let circumference = 283;
        if (circle && circle.r && circle.r.baseVal) {
            const radius = circle.r.baseVal.value;
            circumference = radius * 2 * Math.PI;
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = 0;
        }

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateUI();

            // Update circular progress
            if (circle) {
                const offset = circumference - (this.timeLeft / totalTime) * circumference;
                circle.style.strokeDashoffset = offset;
            }

            // Flashing effects on Card
            const cardEl = document.getElementById('current-card');
            if (this.timeLeft <= 5) {
                cardEl.classList.remove('warning');
                cardEl.classList.add('danger');
            } else if (this.timeLeft <= 10) {
                cardEl.classList.remove('danger');
                cardEl.classList.add('warning');
            } else {
                cardEl.classList.remove('warning', 'danger');
            }

            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    loadCard() {
        if (this.currentCardIndex >= this.cards.length) {
            this.endGame();
            return;
        }

        this.cardResolved = false; // Reset flag
        const card = this.cards[this.currentCardIndex];
        this.currentPoints = 3;

        const cardEl = document.getElementById('current-card');
        cardEl.classList.remove('slide-out');
        cardEl.classList.add('slide-in');

        setTimeout(() => cardEl.classList.remove('slide-in'), 600);

        this.questionTextEl.textContent = card.question;

        // Update Category
        const categoryBadge = document.getElementById('category-badge');
        if (categoryBadge) categoryBadge.textContent = card.category || "General";

        // Reset Helper Text
        this.helperTextEl.textContent = "";
        this.helperTextEl.classList.add('hidden');

        // Initialize hint state (all underscores)
        this.currentHintState = card.answer.split('').map(char => char === ' ' ? ' ' : '_').join('');
        this.updateHintDisplay();
        this.hintTextEl.classList.remove('hidden'); // Always show hints now

        this.pointsBadgeEl.textContent = `Pts: +${this.currentPoints}`;

        this.answerInput.value = '';
        // Removed auto-focus to prevent mobile keyboard popup

        // Update Buttons
        this.freeClueBtn.disabled = this.freeCluesRemaining <= 0;
        this.freeClueBtn.style.opacity = this.freeCluesRemaining <= 0 ? 0.5 : 1;

        // Disable helper button if no helpers
        if (!card.helpers) {
            this.buyHelperBtn.disabled = true;
            this.buyHelperBtn.style.opacity = 0.5;
        } else {
            this.buyHelperBtn.disabled = false;
            this.buyHelperBtn.style.opacity = 1;
        }
    }

    checkAnswer() {
        if (this.cardResolved) return; // Prevent multiple submissions
        const input = this.answerInput.value.trim().toLowerCase();
        const card = this.cards[this.currentCardIndex];
        const correctAnswer = card.answer.toLowerCase();

        // Get flash duration from input, default to 800ms
        const durationInput = document.getElementById('flash-duration');
        const flashDuration = durationInput ? parseInt(durationInput.value) || 800 : 800;

        const hintContainer = document.getElementById('hint-text');
        const inputEl = this.answerInput;

        if (input === correctAnswer) {
            this.cardResolved = true; // Mark as resolved
            this.score += this.currentPoints;

            // Show full answer in hints
            this.currentHintState = card.answer;
            this.updateHintDisplay();

            // Flash Green on Card, Hints, and Input
            const cardEl = document.getElementById('current-card');
            cardEl.classList.add('success-flash');
            hintContainer.classList.add('flash-green');
            inputEl.classList.add('flash-green');

            this.logResult(card, 'correct');

            // Pause before next card
            setTimeout(() => {
                cardEl.classList.remove('success-flash');
                hintContainer.classList.remove('flash-green');
                inputEl.classList.remove('flash-green');
                this.nextCard();
            }, flashDuration);

        } else {
            // Flash Red on Hints and Input
            hintContainer.classList.add('flash-red');
            inputEl.classList.add('flash-red');

            setTimeout(() => {
                hintContainer.classList.remove('flash-red');
                inputEl.classList.remove('flash-red');
            }, 400);

            this.flashFeedback(false);
            this.score -= 2;
        }
        this.updateUI();
    }

    passCard() {
        if (this.cardResolved) return;

        this.cardResolved = true;
        const card = this.cards[this.currentCardIndex];
        this.score -= 1;
        this.logResult(card, 'passed');
        this.nextCard();
    }

    endGame() {
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        this.gameScreen.classList.add('hidden');
        this.endScreen.classList.remove('hidden');
        this.finalScoreEl.textContent = this.score;

        // Display Stats
        document.getElementById('free-letters-used').textContent = this.freeCluesUsed;
        document.getElementById('letters-bought').textContent = this.lettersBought;
        document.getElementById('helpers-used').textContent = this.helpersBought;

        // Stop flashing
        const cardEl = document.getElementById('current-card');
        if (cardEl) cardEl.classList.remove('warning', 'danger', 'success-flash');

        // If we ended on a card (Time Out), log it ONLY if not already resolved
        if (this.currentCardIndex < this.cards.length && !this.cardResolved) {
            const card = this.cards[this.currentCardIndex];
            this.logResult(card, 'out-of-time');
        }

        this.renderGameLog();
    }

    updateHintDisplay() {
        this.hintTextEl.innerHTML = '';
        const words = this.currentHintState.split(' ');

        words.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'hint-word';
            wordSpan.textContent = word.split('').join(' ');
            this.hintTextEl.appendChild(wordSpan);
        });
    }

    buyLetterHint() {
        if (this.currentPoints <= 1) return; // Minimum 1 point

        this.currentPoints--;
        this.pointsBadgeEl.textContent = `Pts: +${this.currentPoints}`;

        this.lettersBought++; // Track stat

        this.revealRandomLetter();
    }

    buyHelperHint() {
        const card = this.cards[this.currentCardIndex];
        if (!card.helpers || !this.helperTextEl.classList.contains('hidden')) return;

        if (this.currentPoints > 1) {
            this.currentPoints--;
            this.pointsBadgeEl.textContent = `Pts: +${this.currentPoints}`;
        }

        this.helpersBought++; // Track stat

        // Format helpers as list items
        const helpersList = card.helpers.split(',').map(h => `<span class="helper-item">${h.trim()}</span>`).join('');
        this.helperTextEl.innerHTML = helpersList;

        this.helperTextEl.classList.remove('hidden');
        this.buyHelperBtn.disabled = true;
        this.buyHelperBtn.style.opacity = 0.5;
    }

    useFreeClue() {
        if (this.freeCluesRemaining <= 0) return;

        this.freeCluesRemaining--;
        this.freeCluesUsed++; // Track stat
        this.revealRandomLetter();
        this.updateUI();
    }

    revealRandomLetter() {
        const card = this.cards[this.currentCardIndex];
        const answer = card.answer;

        // Find unrevealed indices
        const unrevealedIndices = [];
        for (let i = 0; i < answer.length; i++) {
            if (this.currentHintState[i] === '_' && answer[i] !== ' ') {
                unrevealedIndices.push(i);
            }
        }

        if (unrevealedIndices.length > 0) {
            const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            let chars = this.currentHintState.split('');
            chars[randomIndex] = answer[randomIndex];
            this.currentHintState = chars.join('');

            this.updateHintDisplay();
        }
    }



    passCard() {
        const card = this.cards[this.currentCardIndex];
        this.score -= 1; // Penalty
        this.logResult(card, 'passed');
        this.updateUI();
        this.nextCard();
    }

    logResult(card, result) {
        this.gameLog.push({
            question: card.question,
            answer: card.answer,
            result: result
        });
    }

    nextCard() {
        const cardEl = document.getElementById('current-card');
        cardEl.classList.add('slide-out');

        setTimeout(() => {
            this.currentCardIndex++;
            this.loadCard();
        }, 300); // Wait for half the animation
    }

    flashFeedback(isCorrect) {
        const overlay = document.getElementById('flash-overlay');
        // Only use overlay for error now, success is handled on card
        if (!isCorrect) {
            overlay.className = 'flash-overlay danger';
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        }
    }



    renderGameLog() {
        this.gameLogEl.innerHTML = '';
        this.gameLog.forEach(item => {
            const div = document.createElement('div');
            div.className = `log-item ${item.result}`;

            let resultText = item.result.toUpperCase();
            if (item.result === 'out-of-time') resultText = 'OUT OF TIME';

            div.innerHTML = `
                <span>${item.question}</span>
                <span>${item.answer}</span>
                <span>${resultText}</span>
            `;
            this.gameLogEl.appendChild(div);
        });
    }

    updateUI() {
        this.scoreEl.textContent = this.score;
        this.timerEl.textContent = this.timeLeft;
        this.cluesBadgeEl.textContent = `${this.freeCluesRemaining}`;
    }
    initKeyboard() {
        const rows = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫']
        ];

        this.keyboardContainer.innerHTML = '';

        rows.forEach(row => {
            const rowEl = document.createElement('div');
            rowEl.className = 'keyboard-row';

            row.forEach(key => {
                const keyEl = document.createElement('button');
                keyEl.className = 'key';
                keyEl.textContent = key;
                keyEl.dataset.key = key;

                if (key === 'ENTER') {
                    keyEl.classList.add('wide-key', 'enter-key');
                } else if (key === '⌫') {
                    keyEl.classList.add('wide-key', 'backspace-key');
                }

                keyEl.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent focus loss
                    this.handleVirtualKey(key);
                });

                rowEl.appendChild(keyEl);
            });

            this.keyboardContainer.appendChild(rowEl);
        });
    }

    handleVirtualKey(key) {
        if (!this.isGameActive) return;

        if (key === 'ENTER') {
            this.checkAnswer();
        } else if (key === '⌫') {
            this.input.value = this.input.value.slice(0, -1);
        } else {
            this.input.value += key;
        }
    }

    handlePhysicalKey(e) {
        if (!this.isGameActive) return;

        // Allow browser shortcuts (refresh, etc)
        if (e.metaKey || e.ctrlKey || e.altKey) return;

        if (e.key === 'Enter') {
            this.checkAnswer();
        } else if (e.key === 'Backspace') {
            this.input.value = this.input.value.slice(0, -1);
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            this.input.value += e.key.toLowerCase();
        }
    }
}

// Initialize game
new Game();
