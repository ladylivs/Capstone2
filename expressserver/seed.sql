DROP TABLE IF EXISTS users;

CREATE TABLE users (
	username varchar(20) NOT NULL UNIQUE
		CONSTRAINT username_characters CHECK (username !~ '\W')
    	CONSTRAINT username_too_long CHECK (length(username) < 21)
   	 	CONSTRAINT username_too_short CHECK(length(username) > 5),
	email text NOT NULL UNIQUE
		CONSTRAINT email_valid CHECK (email ~~ '\w+@\w+\.\w+')
    	CONSTRAINT email_length CHECK (length(email) < 320),
	password varchar(20),
	signup_date date,
	PRIMARY KEY (username)
);

INSERT INTO users (username, email, password, signup_date)
VALUES
('rainbowswamp', 'kermitthefrog@muppets.com', 'rainbow123', 'September 24, 2020'),
('BeautifulMOI', 'misspiggy@muppets.com', 'misspiggyisthebest', 'April 4, 2020'),
('weirdo', 'gonzo@muppets.com', 'Carmilla<3', 'July 16, 2021'),
('gotthatRIZZ-o', 'rizzotherat@muppets.com', '1274rizz', 'April 24, 2023'), 
('comedianbear', 'fozzie@muppets.com', 'KNOCKknock', 'April 14, 2021'),
('mysteriesSOLVED', 'dip@gf.net', 'xX$#@13DER', 'August 31, 2019'),
('UNICORNPRINCESS', 'mabelSCHMABEL@gf.net', 'UnicornXOXO31', 'August 31, 2019'),
('heyZEUS', 'jar@gf.net', 'soosisloose?', 'July 13, 2018'),
('MYSTERYSHACK', 'trustme@gf.net', 'password', 'June 15, 2018'),
('pacificanw', 'pacificia@gf.net', 'imPERFECTobvs', 'January 1, 2021');

DROP TABLE IF EXISTS users_page;

-- username needs to cascade

CREATE TABLE users_page (
	username varchar(12) NOT NULL,
	blogtitle text,
	about text,
	PRIMARY KEY (username, blogtitle)
);

INSERT INTO users_page (username, blogtitle, about)
VALUES 
('rainbowswamp', 'The Swamp', 'Hey-ho! I am Kermit the Frog, and while usually I am corralling a cast of crazy characters onto a stage for a variety show or classic re-imagined, here I want to talk about my home -- the swamp.'),
('BeautifulMOI', 'C''EST MOI, oh-so FABULOUS', 'YES it is MOI, the fabulous MISS PIGGY! Subscribe, please and thank you, KISSES'),
('weirdo', 'WHATEVER', 'a place to put all my ideas too WEIRD for show business'),
('comedianbear', 'TRAVELIN COMEDIAN BEAR', 'Hiya hiya hiya, it''s a PLEASURE TO BE HERE!!!!!!!! Follow for LAUGHTERS and SIGHTS as I travel to tell WONDERFUL FUNNY JOKES'),
('mysteriesSOLVED', 'JOURNAL 4', 'I vow to solve all the unsolved mysteries in Gravity Falls'),
('UNICORNPRINCESS', 'MABEL''S THOUGHTS, DREAMS, WISHES, MAGIC, and UNICORNS', 'hahahahahahaha i am here to torment my brother BUT ALSO I saw some boy band fans and I am IN to talk about those CUTIES'),
('MYSTERYSHACK', 'COME TO THE MYSTERY SHACK', 'WE GOT ALL THE WEIRD STUFF, COME HERE AND SPEND YOUR MONEY');


-- permissions on front end can only be PRIVATE or PUBLIC
CREATE TABLE blog_posts (
	title text,
	post_id integer NOT NULL AUTO_INCREMENT, 
	username varchar(20),
	post_date date,
	edit_date date,
	body text,
	permissions text,
	PRIMARY KEY (post_id)
)

INSERT INTO blog_posts (title, username, post_date, body, permissions)
VALUES 
('Swamp Anatomy and Formation', 'rainbowswamp', 'October 21, 2020', 'Swamps are wetlands that are saturated with water for most, if not all, of the year. They can vary greatly in size, from small isolated patches to vast expanses stretching across hundreds of square miles. Swamps form in areas where water collects, often due to poor drainage, creating the perfect conditions for the accumulation of organic material.', 'public'),
('Biodiversity Hotspots', 'rainbowswamp', 'November 15, 2020', 'Contrary to their foreboding appearance, swamps are rich in biodiversity. These ecosystems support a wide variety of plants, animals, and microorganisms. The slow-moving or stagnant water provides a haven for amphibians, reptiles, and numerous bird species. Aquatic plants such as water lilies, cattails, and duckweed thrive in the nutrient-rich waters, while submerged vegetation offers vital hiding places for fish and other aquatic creatures.', 'public'),
('Crucial Ecological Functions', 'rainbowswamp', 'December 10, 2020', 'Swamps are ecological powerhouses with a range of vital functions:

    Flood Control: Swamps act as natural sponges, absorbing excess water during heavy rains and minimizing the risk of flooding in surrounding areas.
    Water Purification: The dense vegetation and microorganisms present in swamps help filter and purify water, improving its quality.
    Carbon Storage: Swamps are effective carbon sinks, storing large amounts of carbon dioxide from the atmosphere and contributing to climate regulation.
    Habitat Provision: These wetlands offer nesting sites, shelter, and food for a diverse array of species, playing a pivotal role in their life cycles.', 'public'),
('Threats and Conservation', 'rainbowswamp', 'January 13, 2021', 'Despite their significance, swamps face numerous threats. Urbanization, agriculture, and drainage projects often lead to the destruction of these fragile ecosystems. Pollution from runoff and industrial waste can degrade water quality and harm the organisms that call swamps home. Conservation efforts involve preserving existing swamps, restoring damaged ones, and raising awareness about the importance of these unique habitats.', 'public'),
('Cultural Significance and Inspiration', 'rainbowswamp', 'February 23, 2021', 'hroughout history, swamps have captured human imagination. From literature and folklore to art and film, they have been portrayed as mysterious and enchanting places. In different cultures, swamps hold cultural and spiritual significance, often symbolizing the intersection of life and death, growth and decay.', 'public'),
('Defining Cryptids: Beyond the Shadows of Belief', 'mysteriesSOLVED', 'January 13, 2023', 'Cryptids are creatures whose existence is often suggested through anecdotal accounts, folklore, or blurry photographs, but lacks substantial scientific evidence. These elusive beings can range from sea monsters to ape-like creatures and everything in between. The allure of cryptids lies in their potential to challenge our understanding of the natural world.', 'public'),
('Cultural Roots and Legends', 'mysteriesSOLVED', 'February 14, 2023', 'Cryptids are deeply intertwined with the cultural fabric of societies around the globe. These mythical creatures often emerge from ancient legends and folktales, serving as cautionary tales, symbols of the unknown, or representations of natural forces. From the Yeti of the Himalayas to the Mothman of West Virginia, each cryptid carries a unique story shaped by the beliefs and experiences of the people who tell them.', 'public'),
('Iconic Cryptids: From Nessie to Bigfoot', 'mysteriesSOLVED', 'March 15, 2023', 'Some cryptids have gained iconic status due to their pervasive presence in popular culture:

    Loch Ness Monster (Nessie): A prehistoric-like creature said to inhabit Scotland''s Loch Ness. Sightings and blurry photographs have fueled the legend for decades.
    Bigfoot (Sasquatch): A towering, ape-like creature reported in forests across North America. Cryptid enthusiasts continue to search for evidence of its existence.
    Chupacabra: A creature from Latin American folklore known for attacking livestock and draining their blood. Descriptions vary, adding to its mysterious nature.', 'public'),
('Cryptozoology: Bridging Science and Myth', 'mysteriesSOLVED', 'April 16, 2023', 'Cryptozoology, the study of hidden animals, occupies a unique space between science and folklore. While skeptics argue that many cryptids are unlikely to exist, cryptozoologists strive to investigate reports and evidence with an open mind. Their work often involves exploring remote regions, analyzing eyewitness accounts, and utilizing technology to shed light on these mysteries.', 'public'),
('The Intriguing Hunt for Evidence', 'mysteriesSOLVED', 'May 17, 2023', 'The quest to prove the existence of cryptids has led to expeditions, research projects, and countless hours of investigation. Advances in technology, such as trail cameras and DNA analysis, have been utilized to capture potential evidence. However, the line between credible evidence and hoaxes can often be blurred, making the hunt for definitive proof a challenging endeavor. Cryptids represent the boundless human fascination with the unknown. Whether born from ancient legends or modern-day anecdotes, these creatures spark our curiosity and remind us that there are corners of our world still waiting to be explored. As science, folklore, and technology continue to intersect, the mysteries of cryptids persist, inviting us to ponder the boundaries of reality and imagination in our quest to uncover the truth behind these enigmatic beings.', 'public'),
('UNICORNS', 'UNICORNPRINCESS', 'January 13, 2021', 'Unicorns, with their mystical charm and enduring popularity, have captivated human imagination for centuries. These elegant, single-horned creatures are symbols of purity, magic, and the extraordinary. In this blog post, we''ll journey into the realm of unicorns, exploring their origins, cultural significance, and the various ways they''ve left their mark on literature, art, and modern culture.', 'public'),
('Myth and Legend: Tracing the Unicorn''s Roots', 'UNICORNPRINCESS', 'February 14, 2023', 'Unicorns are mythical creatures that have appeared in diverse cultures throughout history. While their exact origins are shrouded in mystery, early references can be found in ancient texts from China, Greece, and Persia. These references often describe unicorns as symbols of grace, power, and rarity, elevating them to a special place in human lore.', 'public'),
('The Iconic Unicorn Image', 'UNICORNPRINCESS', 'March 15, 2023', 'body', 'public'),
('title', 'UNICORNPRINCESS', 'April 16, 2023', 'Unicorns are commonly depicted as horse-like creatures with a single spiraled horn extending from their foreheads. Their coats are often depicted in various vibrant hues, and their eyes are said to hold an otherworldly wisdom. This distinctive appearance has been embraced across cultures and artistic traditions, contributing to the enduring fascination with these majestic beings.', 'public'),
('The Enduring Magic of Unicorns', 'UNICORNPRINCESS', 'May 17, 2023', 'The timeless allure of unicorns stems from their ability to transport us to a world where the mundane and the extraordinary coexist. As symbols of beauty, purity, and the extraordinary, unicorns serve as a reminder of our innate desire for magic and the unknown. Their enduring presence in cultural narratives and modern imagery is a testament to their ability to captivate our imaginations across generations. Unicorns are not mere creatures of myth; they represent a shared human fascination with the mystical and the extraordinary. From ancient legends to contemporary culture, unicorns have galloped through the corridors of time, leaving behind a trail of magic and wonder. As long as humans continue to seek enchantment and inspiration, the unicorn''s timeless appeal will persist, reminding us that the realm of imagination knows no bounds.', 'public'),
('Afraid of the dark', 'UNICORNPRINCESS', 'May 18, 2023', 'The fear of the dark can be traced back to our evolutionary history. In ancient times, darkness concealed potential dangers such as predators and other threats. The lack of visibility amplified our vulnerability and heightened our survival instincts. This innate fear was an adaptive response that helped our ancestors navigate treacherous environments. As children, our imagination often runs wild, fueled by the mysterious and unseen world of darkness. What lies beyond our sight becomes a canvas for our fears to paint vivid scenarios. The unknown transforms into a realm of monsters, ghosts, and imagined threats. This imaginative aspect of fear further compounds our unease.', 'private'),
('A Bite of History: The Birth of a Culinary Legend', 'gotthatRIZZ-o', 'May 24, 2023', 'In the bustling streets of the Big Apple, an iconic culinary treasure awaits: the New York pizza. Renowned for its large, foldable slices, thin crust, and mouthwatering toppings, this beloved dish has become a symbol of New York City''s vibrant food culture. Join us on a delectable journey as we uncover the rich history, unique characteristics, and unwavering charm of New York pizza. The history of New York pizza traces back to the late 19th century when Italian immigrants brought their pizza-making skills to the streets of New York City. These early pizzerias served traditional Neapolitan-style pies, but over time, they evolved to meet the demands of the city''s diverse and fast-paced population.', 'public'),
('The New York Slice: A Work of Culinary Art', 'gotthatRIZZ-o', 'May 25, 2023', 'What sets New York pizza apart is its unmistakable style:

    Thin and Foldable: The thin, pliable crust is a hallmark of New York pizza. This feature makes it easy to fold a slice in half, allowing for a convenient and delicious on-the-go experience.
    Generous Size: New York slices are known for their generous proportions, often requiring both hands to hold. A single slice can be a satisfying meal in itself.
    Toppings Galore: From classic cheese and pepperoni to gourmet combinations, New York pizza offers a wide range of mouthwatering toppings to cater to every palate.', 'public'),
('Pizza by the Slice: A Social Tradition', 'gotthatRIZZ-o', 'May 26, 2023', 'The practice of selling pizza by the slice originated in New York City and has become a social institution. Pizzerias across the city offer slices ready for purchase, allowing locals and tourists alike to experience the city''s culinary heritage in a quick and accessible manner.', 'public'),
('The Pizzerias: A Slice of Culture', 'gotthatRIZZ-o', 'May 27, 2023', 'New York is home to countless pizzerias, each with its unique history and personality. Legendary establishments like Lombardi''s, considered America''s first pizzeria, and Di Fara Pizza, famous for its meticulous craftsmanship, have become pilgrimage sites for pizza enthusiasts.', 'public'),
('The Pizza Debate: Fold or Fork?', 'gotthatRIZZ-o', 'May 28, 2023', 'Ask any New Yorker about the "proper" way to eat a slice of pizza, and you might spark a friendly debate. While many prefer the fold-and-eat technique, others opt for a more refined fork-and-knife approach. Whichever method you choose, the essence of the New York pizza experience remains unchanged.', 'public'),
('A Global Influence: Beyond the City Limits', 'gotthatRIZZ-o', 'May 29, 2023', 'The allure of New York pizza has transcended its hometown and influenced pizza styles around the world. From pizzerias in Italy embracing the New York slice concept to international cities crafting their own interpretations, the impact of this iconic dish knows no bounds. New York pizza is more than just a culinary delight; it''s a cultural touchstone that reflects the vibrant spirit of a city known for its diversity and innovation. With its perfect balance of flavors, textures, and traditions, New York pizza continues to delight taste buds and bring people together. So, whether you''re a local or a visitor, taking that first bite into a New York slice is an experience that encapsulates the heart and soul of a city that never sleeps.', 'public'),
('too many siblings', 'gotthatRIZZ-o', 'August 12, 2023', 'I got too many siblings. This is ridicuklous.', 'private'),
('Fashion et MOI', 'BeautifulMOI', 'January 12, 2023', 'Fashion is more than just clothing; it''s a canvas for self-expression, creativity, and pushing the boundaries of convention. Outrageous outfits, characterized by bold colors, daring designs, and unconventional pairings, challenge the norms and create a visual spectacle that ignites conversations and captures attention. In this blog post, we''ll delve into the world of outrageous outfits, celebrating the audacious individuals who fearlessly embrace fashion as an art form.', 'public'),
('Defying Norms: The Power of Outrageous Fashion', 'BeautifulMOI', 'February 12, 2023', 'Outrageous outfits are a rebellious declaration that fashion is not confined to rules or societal expectations. These ensembles break free from the mundane and mundane and venture into the realm of the extraordinary, reminding us that style is a platform for personal storytelling and innovation.', 'public'),
('Color Explosions: Beyond the Ordinary Palette', 'BeautifulMOI', 'April 12, 2023', 'body', 'public'),
('title', 'BeautifulMOI', 'June 12, 2023', 'Vivid and electrifying, outrageous outfits are often defined by their use of color. Neon hues, clashing color combinations, and unexpected contrasts are the hallmarks of a wardrobe that refuses to be muted. These outfits radiate energy and demand attention in a world often dominated by neutrals.', 'public'),
('Rule-Breaking Silhouettes: Sculpting the Imagination', 'BeautifulMOI', 'July 12, 2023', 'body', 'public'),
('title', 'BeautifulMOI', 'August 12, 2023', 'Outrageous fashion isn''t bound by conventional silhouettes. Designers and individuals alike experiment with proportions, shapes, and cuts that challenge the notion of what clothing should look like. Asymmetric hemlines, exaggerated shoulders, and unconventional drapery are just a few examples of the daring sculptural elements that make outrageous outfits stand out.', 'public'),
('Mixed Media Magic: Art Meets Apparel', 'BeautifulMOI', 'January 15, 2023', 'The line between fashion and art blurs when outrageous outfits incorporate mixed media. From using unconventional materials like plastics, metals, and even everyday objects to creating wearable sculptures, these outfits redefine the boundaries of creativity and transform the human body into a walking masterpiece.', 'public'),
('Celebrity Influence: Red Carpets and Beyond', 'BeautifulMOI', 'January 27, 2023', 'Celebrities and influencers are no strangers to pushing fashion boundaries. Red carpet events serve as showcases for the most daring and memorable ensembles, and social media platforms provide a global stage for individual style statements that captivate audiences worldwide. Outrageous outfits aren''t limited to special occasions or runways. Some individuals incorporate bold fashion choices into their everyday lives, turning streets into fashion runways and inspiring others to step out of their comfort zones.', 'public'),
('A Leap of Faith: High-Flying Aerial Acrobatics', 'weirdo', 'June 10, 2023', 'Aerial acrobatics are among the most jaw-dropping acts in the circus world. Performers gracefully soar through the air, executing intricate twists, spins, and flips while suspended on silks, trapezes, and hoops. The combination of strength, balance, and artistry creates a spectacle that leaves audiences breathless.', 'public'),
('Taming the Beast: Lion and Tiger Tamers', 'weirdo', 'June 20, 2023', 'Lion and tiger tamers exhibit incredible courage as they face these majestic predators in the circus ring. The dangerous act involves commanding these powerful creatures to perform tricks, showcasing the trainer''s skill in building a bond of trust with animals that command respect.', 'public'),
('Walking on the Edge: Tightrope Walking', 'weirdo', 'June 30, 2023', 'Tightrope walkers tread a thin line between danger and artistry, quite literally. Balancing on a narrow rope suspended high above the ground, these performers demonstrate exceptional focus and precision as they take steps that defy gravity. The suspense of watching each step adds to the act''s heart-pounding appeal.', 'public'),
('Human Cannonballs: The Ultimate Launch', 'weirdo', 'July 10, 2023', 'The human cannonball act is an epitome of daredevilry. Performers are launched from a cannon, hurtling through the air to be caught by a net or landing pad at a distant location. The mix of anticipation and spectacle makes it an unforgettable act that exemplifies the thrill of the circus.', 'public'),
('Juggling Fire and Danger: Fire Performers', 'weirdo', 'July 20, 2023', 'Fire performers skillfully manipulate flaming objects, creating mesmerizing displays of light, heat, and danger. The art of fire juggling, breathing, and dancing requires precision and expertise to ensure safety while wowing the crowd with a fiery spectacle.', 'public'),
('Motorcycle Madness: Globe of Death', 'weirdo', 'July 20, 2023', 'The "Globe of Death" act involves multiple motorcyclists riding at high speeds inside a steel mesh sphere, defying collisions and demonstrating unmatched control. The intensity of this act, coupled with the risk of a high-speed crash, makes it an adrenaline-pumping showstopper.', 'public'),
('Balancing on the Edge: Chair Stacking', 'weirdo', 'July 30, 2023', 'Chair stacking, also known as the "chair balance act," showcases the performer''s ability to create gravity-defying structures using simple chairs. With a mix of physics and precision, these acts build towering arrangements that teeter on the edge of collapse, leaving the audience on the edge of their seats.', 'public');


CREATE TABLE comments (
	post_id integer,
	comment_id integer,
	username varchar(20),
	comment text,
	PRIMARY KEY (comment_id)
);


CREATE TABLE tags (
	tag text,
	first_use date,
	PRIMARY KEY (tag)
)

CREATE TABLE tags_blog (
	post_id integer PRIMARY KEY,
	tag text
)

CREATE TABLE relationships (
	blogger varchar(20),
	follower varchar(20),
	PRIMARY KEY (blogger, follower)
)