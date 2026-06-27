const stardewTasks = [
  // --- THE BEGINNING ---
  { id: "inherit_farm", parentId: null, label: "Inherit a farm" },
  { id: "starter_tools", parentId: "inherit_farm", label: "Obtain Starter Tools" },

  // --- CORE TOOLS & MINING ---
  { id: "pickaxe", parentId: "inherit_farm", label: "Get Pickaxe" },
  { id: "mines_entry", parentId: "pickaxe", label: "Enter the Mines" },
  
  { id: "copper_ore", parentId: "mines_entry", label: "Mine Copper Ore" },
  { id: "furnace", parentId: "copper_ore", label: "Build Furnace" },
  { id: "copper_bar", parentId: "furnace", label: "Smelt Copper Bar" },
  
  { id: "copper_axe", parentId: "copper_bar", label: "Upgrade to Copper Axe" },
  { id: "large_stumps", parentId: "copper_axe", label: "Chop Large Stumps (Hardwood)" },
  
  { id: "copper_pickaxe", parentId: "copper_bar", label: "Upgrade to Copper Pickaxe" },
  { id: "mines_20", parentId: "copper_pickaxe", label: "Reach Mines Level 20" },
  { id: "ghost_fish", parentId: "mines_20", label: "Catch Ghostfish" },

  { id: "mines_40", parentId: "mines_20", label: "Reach Mines Level 40" },
  { id: "iron_ore", parentId: "mines_40", label: "Mine Iron Ore" },
  { id: "iron_bar", parentId: "iron_ore", label: "Smelt Iron Bar" },
  
  { id: "iron_axe", parentId: "iron_bar", label: "Upgrade to Steel Axe" },
  { id: "secret_woods", parentId: "iron_axe", label: "Chop Large Logs (Secret Woods)" },
  { id: "woodskip", parentId: "secret_woods", label: "Catch Woodskip" },
  { id: "hardwood", parentId: "secret_woods", label: "Chop Hardwood" },

  { id: "iron_pickaxe", parentId: "iron_bar", label: "Upgrade to Steel Pickaxe" },
  { id: "dwarf_access", parentId: "iron_pickaxe", label: "Break Boulder to Dwarf (Mines)" },

  { id: "mines_80", parentId: "mines_40", label: "Reach Mines Level 80" },
  { id: "gold_ore", parentId: "mines_80", label: "Mine Gold Ore" },
  { id: "gold_bar", parentId: "gold_ore", label: "Smelt Gold Bar" },
  
  { id: "gold_axe", parentId: "gold_bar", label: "Upgrade to Gold Axe" },
  { id: "gold_pickaxe", parentId: "gold_bar", label: "Upgrade to Gold Pickaxe" },
  { id: "meteorites", parentId: "gold_pickaxe", label: "Break Meteorites" },

  { id: "mines_120", parentId: "mines_80", label: "Reach Mines Level 120" },
  { id: "skull_key", parentId: "mines_120", label: "Obtain Skull Key" },
  { id: "junimo_kart", parentId: "skull_key", label: "Unlock Junimo Kart Arcade Game" },
  { id: "skull_cavern", parentId: "skull_key", label: "Unlock Skull Cavern in Calico Desert" },

  // --- SHOP & PERSONAL UPGRADES ---
  { id: "backpack_24", parentId: "inherit_farm", label: "Large Pack (24 slots)" },
  { id: "backpack_36", parentId: "backpack_24", label: "Deluxe Pack (36 slots)" },

  // --- HOUSE UPGRADES ---
  { id: "house_upgrade_1", parentId: "inherit_farm", label: "Upgrade Farmhouse (Kitchen)" },
  { id: "house_upgrade_2", parentId: "house_upgrade_1", label: "Upgrade Farmhouse (Nursery)" },
  { id: "cellar_upgrade", parentId: "house_upgrade_2", label: "Add Cellar (Casks)" },

  // --- MUSEUM & SEWERS ---
  { id: "museum_5", parentId: "inherit_farm", label: "Donate 5 Items (Seeds)" },
  { id: "museum_10", parentId: "museum_5", label: "Donate 10 Items (Seeds)" },
  { id: "museum_15", parentId: "museum_10", label: "Donate 15 Items (Starfruit)" },
  { id: "museum_20", parentId: "museum_15", label: "Donate 20 Items (Painting)" },
  { id: "museum_25", parentId: "museum_20", label: "Donate 25 Items (Painting)" },
  { id: "museum_30", parentId: "museum_25", label: "Donate 30 Items (Furniture)" },
  { id: "museum_35", parentId: "museum_30", label: "Donate 35 Items (Statue)" },
  { id: "museum_40", parentId: "museum_35", label: "Donate 40 Items (Tanuki Rarecrow)" },
  { id: "museum_50", parentId: "museum_40", label: "Donate 50 Items (Bear Statue)" },
  { id: "museum_60", parentId: "museum_50", label: "Donate 60 Items (Rusty Key)" },
  { id: "rusty_key", parentId: "museum_60", label: "Obtain Rusty Key" },
  { id: "sewers", parentId: "rusty_key", label: "Enter the Sewers" },
  { id: "mutant_bug_lair", parentId: "sewers", label: "Enter Mutant Bug Lair" },
  
  { id: "museum_70", parentId: "museum_60", label: "Donate 70 Items (Espresso)" },
  { id: "museum_80", parentId: "museum_70", label: "Donate 80 Items (Totems)" },
  { id: "museum_90", parentId: "museum_80", label: "Donate 90 Items (Rock Candy)" },
  { id: "museum_95", parentId: "museum_90", label: "Donate 95 Items (Stardrop)" },

  { id: "dwarf_scrolls", parentId: "mines_entry", label: "Collect All 4 Dwarf Scrolls" },
  { id: "dwarvish_guide", parentId: "dwarf_scrolls", label: "Get Dwarvish Translation Guide" },
  { id: "talk_to_dwarf", parentId: "dwarvish_guide", label: "Talk to the Dwarf" },

  // --- ARTIFACTS & SPECIAL CROPS ---
  { id: "ancient_seed_artifact", parentId: "inherit_farm", label: "Find Ancient Seed Artifact" },
  { id: "ancient_seed_recipe", parentId: "ancient_seed_artifact", label: "Get Ancient Seed Crafting Recipe" },
  { id: "ancient_fruit", parentId: "ancient_seed_recipe", label: "Grow Ancient Fruit" },

  // --- COMMUNITY CENTER ---
  { id: "cc_unlock", parentId: "inherit_farm", label: "Unlock Community Center" },
  { id: "wizard_potion", parentId: "cc_unlock", label: "Meet Wizard / Drink Potion" },
  
  { id: "crafts_room", parentId: "wizard_potion", label: "Complete Crafts Room" },
  { id: "quarry", parentId: "crafts_room", label: "Unlock the Quarry" },
  
  { id: "boiler_room", parentId: "wizard_potion", label: "Complete Boiler Room" },
  { id: "minecarts", parentId: "boiler_room", label: "Repair Minecarts" },

  { id: "pantry", parentId: "wizard_potion", label: "Complete Pantry" },
  { id: "greenhouse", parentId: "pantry", label: "Repair Greenhouse" },

  { id: "fish_tank", parentId: "wizard_potion", label: "Complete Fish Tank" },
  { id: "panning", parentId: "fish_tank", label: "Unlock Copper Pan" },
  { id: "iridium_pan", parentId: "panning", label: "Upgrade to Iridium Pan" },

  { id: "vault", parentId: "wizard_potion", label: "Complete Vault" },
  { id: "bus_repair", parentId: "vault", label: "Repair the Bus / Desert" },
  { id: "sandfish", parentId: "bus_repair", label: "Catch Sandfish" },
  
  { id: "iridium_ore", parentId: "skull_cavern", label: "Mine Iridium Ore" },
  { id: "iridium_bar", parentId: "iridium_ore", label: "Smelt Iridium Bar" },
  { id: "iridium_axe", parentId: "iridium_bar", label: "Upgrade to Iridium Axe" },
  { id: "iridium_pickaxe", parentId: "iridium_bar", label: "Upgrade to Iridium Pickaxe" },

  { id: "prismatic_shard", parentId: "skull_cavern", label: "Find a Prismatic Shard" },
  { id: "galaxy_sword", parentId: "prismatic_shard", label: "Obtain Galaxy Sword (Desert Ritual)" },

  { id: "bulletin_board", parentId: "wizard_potion", label: "Complete Bulletin Board" },
  
  { id: "cc_complete", parentId: "bulletin_board", label: "Complete Community Center" },
  { id: "movie_theater", parentId: "cc_complete", label: "Unlock Movie Theater" },

  // --- GINGER ISLAND ---
  { id: "willy_invite", parentId: "cc_complete", label: "Receive Willy's Invite" },
  { id: "boat_repair", parentId: "willy_invite", label: "Repair Willy's Boat" },
  { id: "ginger_island", parentId: "boat_repair", label: "Visit Ginger Island" },
  { id: "volcano_dungeon", parentId: "ginger_island", label: "Reach Volcano Summit" },
  { id: "volcano_forge", parentId: "volcano_dungeon", label: "Unlock Volcano Forge" },
  { id: "infinity_blade", parentId: "volcano_forge", label: "Forge Infinity Blade" },

  { id: "island_north", parentId: "ginger_island", label: "Unlock Island North (Volcano)" },
  { id: "island_west", parentId: "ginger_island", label: "Unlock Island West (Farm)" },
  { id: "island_house", parentId: "island_west", label: "Repair Island Farmhouse" },
  { id: "island_mailbox", parentId: "island_house", label: "Add Island Mailbox" },
  { id: "island_obelisk", parentId: "island_house", label: "Build Farm Obelisk" },
  
  { id: "island_resort", parentId: "ginger_island", label: "Unlock Island Resort" },
  { id: "qi_walnut_room", parentId: "ginger_island", label: "Enter Mr. Qi's Walnut Room (100 Walnuts)" },
  { id: "perfection", parentId: "qi_walnut_room", label: "Achieve True Perfection" },

  // --- FARM BUILDINGS & PROGRESSION ---
  { id: "silo", parentId: "copper_bar", label: "Build Silo" },
  { id: "coop", parentId: "inherit_farm", label: "Build Coop" },
  { id: "big_coop", parentId: "coop", label: "Upgrade to Big Coop" },
  { id: "deluxe_coop", parentId: "big_coop", label: "Upgrade to Deluxe Coop" },
  
  { id: "barn", parentId: "inherit_farm", label: "Build Barn" },
  { id: "big_barn", parentId: "barn", label: "Upgrade to Big Barn" },
  { id: "deluxe_barn", parentId: "big_barn", label: "Upgrade to Deluxe Barn" },

  { id: "stable", parentId: "hardwood", label: "Build Stable" },
  { id: "horse", parentId: "stable", label: "Get Horse" },

  // --- WIZARD QUESTS & BUILDINGS ---
  { id: "dark_talisman", parentId: "mutant_bug_lair", label: "Obtain Dark Talisman" },
  { id: "goblin_problem", parentId: "dark_talisman", label: "Recover Wizard's Ink" },
  { id: "obelisks", parentId: "goblin_problem", label: "Unlock Wizard Buildings" },
  { id: "junimo_huts", parentId: "obelisks", label: "Build Junimo Huts" },
  { id: "gold_clock", parentId: "obelisks", label: "Build Gold Clock" },

  // --- SECRET NOTES ---
  { id: "winter_mystery", parentId: "inherit_farm", label: "Trigger Winter Mystery Quest" },
  { id: "magnifying_glass", parentId: "winter_mystery", label: "Obtain Magnifying Glass" },
  { id: "secret_notes", parentId: "magnifying_glass", label: "Find & Read Secret Notes" },

  // --- FORAGING PROGRESSION ---
  { id: "foraging_lv1", parentId: "inherit_farm", label: "Reach Foraging Level 1" },
  { id: "foraging_lv2", parentId: "foraging_lv1", label: "Reach Foraging Level 2" },
  { id: "charcoal_kiln", parentId: "foraging_lv2", label: "Craft Charcoal Kiln" },
  { id: "foraging_lv3", parentId: "foraging_lv2", label: "Reach Foraging Level 3" },
  { id: "tapper", parentId: "foraging_lv3", label: "Craft Tapper" },
  { id: "foraging_lv4", parentId: "foraging_lv3", label: "Reach Foraging Level 4" },
  { id: "mushroom_log", parentId: "foraging_lv4", label: "Craft Mushroom Log" },
  { id: "foraging_lv6", parentId: "foraging_lv4", label: "Reach Foraging Level 6" },
  { id: "lightning_rod", parentId: "foraging_lv6", label: "Craft Lightning Rod" },
  { id: "foraging_lv7", parentId: "foraging_lv6", label: "Reach Foraging Level 7" },
  { id: "tree_fertilizer", parentId: "foraging_lv7", label: "Craft Tree Fertilizer" },
  { id: "foraging_lv8", parentId: "foraging_lv7", label: "Reach Foraging Level 8" },
  { id: "tent_kit", parentId: "foraging_lv8", label: "Craft Tent Kit" },
  { id: "foraging_lv9", parentId: "foraging_lv8", label: "Reach Foraging Level 9" },
  { id: "cookout_kit", parentId: "foraging_lv9", label: "Craft Cookout Kit" },

  // --- MINING PROGRESSION ---
  { id: "mining_lv1", parentId: "mines_entry", label: "Reach Mining Level 1" },
  { id: "cherry_bomb", parentId: "mining_lv1", label: "Craft Cherry Bomb" },
  { id: "mining_lv2", parentId: "mining_lv1", label: "Reach Mining Level 2" },
  { id: "staircase", parentId: "mining_lv2", label: "Craft Staircase" },
  { id: "mining_lv6", parentId: "mining_lv2", label: "Reach Mining Level 6" },
  { id: "bomb", parentId: "mining_lv6", label: "Craft Bomb" },
  { id: "mining_lv8", parentId: "mining_lv6", label: "Reach Mining Level 8" },
  { id: "mega_bomb", parentId: "mining_lv8", label: "Craft Mega Bomb" },
  { id: "mining_lv9", parentId: "mining_lv8", label: "Reach Mining Level 9" },
  { id: "crystalarium", parentId: "mining_lv9", label: "Craft Crystalarium" },

  // --- FISHING PROGRESSION ---
  { id: "fishing_lv1", parentId: "inherit_farm", label: "Reach Fishing Level 1" },
  { id: "fishing_lv2", parentId: "fishing_lv1", label: "Reach Fishing Level 2" },
  { id: "bait", parentId: "fishing_lv2", label: "Craft Bait" },
  { id: "wild_bait", parentId: "fishing_lv2", label: "Obtain Wild Bait (Linus 4-Heart Event)" },
  { id: "fishing_lv3", parentId: "fishing_lv2", label: "Reach Fishing Level 3" },
  { id: "crab_pot", parentId: "fishing_lv3", label: "Craft Crab Pot" },
  { id: "fishing_lv4", parentId: "fishing_lv3", label: "Reach Fishing Level 4" },
  { id: "recycling_machine", parentId: "fishing_lv4", label: "Craft Recycling Machine" },
  { id: "fishing_lv6", parentId: "fishing_lv4", label: "Reach Fishing Level 6" },
  { id: "bait_maker", parentId: "fishing_lv6", label: "Craft Bait Maker" },
  { id: "targeted_bait", parentId: "fishing_lv6", label: "Craft Targeted Bait" },
  { id: "spinner", parentId: "fishing_lv6", label: "Craft Spinner" },
  { id: "trap_bobber", parentId: "fishing_lv6", label: "Craft Trap Bobber" },
  { id: "lead_bobber", parentId: "fishing_lv6", label: "Craft Lead Bobber" },
  { id: "sonar_bobber", parentId: "fishing_lv6", label: "Craft Sonar Bobber" },
  { id: "fishing_lv7", parentId: "fishing_lv6", label: "Reach Fishing Level 7" },
  { id: "cork_bobber", parentId: "fishing_lv7", label: "Craft Cork Bobber" },
  { id: "treasure_hunter", parentId: "fishing_lv7", label: "Craft Treasure Hunter" },
  { id: "fishing_lv8", parentId: "fishing_lv7", label: "Reach Fishing Level 8" },
  { id: "worm_bin", parentId: "fishing_lv8", label: "Craft Worm Bin" },
  { id: "deluxe_worm_bin", parentId: "worm_bin", label: "Craft Deluxe Worm Bin" },
  { id: "dressed_spinner", parentId: "fishing_lv8", label: "Craft Dressed Spinner" },
  { id: "barbed_hook", parentId: "fishing_lv8", label: "Craft Barbed Hook" },
  { id: "fishing_lv9", parentId: "fishing_lv8", label: "Reach Fishing Level 9" },
  { id: "magnet", parentId: "fishing_lv9", label: "Craft Magnet" },

  // --- COMBAT PROGRESSION ---
  { id: "combat_lv1", parentId: "mines_entry", label: "Reach Combat Level 1" },
  { id: "combat_lv6", parentId: "combat_lv1", label: "Reach Combat Level 6" },
  { id: "slime_egg_press", parentId: "combat_lv6", label: "Craft Slime Egg-Press" },
  { id: "combat_lv8", parentId: "combat_lv6", label: "Reach Combat Level 8" },
  { id: "slime_incubator", parentId: "combat_lv8", label: "Craft Slime Incubator" },

  // --- FARMING & ARTISAN PROGRESSION ---
  { id: "parsnip", parentId: "inherit_farm", label: "Grow Parsnips" },
  { id: "farming_lv1", parentId: "parsnip", label: "Reach Farming Level 1" },
  { id: "scarecrow", parentId: "farming_lv1", label: "Craft Scarecrow" },
  { id: "basic_fertilizer", parentId: "farming_lv1", label: "Craft Basic Fertilizer" },
  
  { id: "farming_lv2", parentId: "farming_lv1", label: "Reach Farming Level 2" },
  { id: "mayonnaise_machine", parentId: "farming_lv2", label: "Craft Mayonnaise Machine" },
  { id: "sprinkler", parentId: "farming_lv2", label: "Craft Sprinkler" },
  { id: "stone_fence", parentId: "farming_lv2", label: "Craft Stone Fence" },

  { id: "farming_lv3", parentId: "farming_lv2", label: "Reach Farming Level 3" },
  { id: "bee_house", parentId: "farming_lv3", label: "Craft Bee House" },
  { id: "speed_gro", parentId: "farming_lv3", label: "Craft Speed-Gro" },

  { id: "farming_lv4", parentId: "farming_lv3", label: "Reach Farming Level 4" },
  { id: "preserves_jar", parentId: "farming_lv4", label: "Craft Preserves Jar" },
  { id: "basic_retaining_soil", parentId: "farming_lv4", label: "Craft Basic Retaining Soil" },

  { id: "farming_lv6", parentId: "farming_lv4", label: "Reach Farming Level 6" },
  { id: "cheese_press", parentId: "farming_lv6", label: "Craft Cheese Press" },
  { id: "quality_sprinkler", parentId: "farming_lv6", label: "Craft Quality Sprinkler" },
  { id: "iron_fence", parentId: "farming_lv6", label: "Craft Iron Fence" },

  { id: "farming_lv7", parentId: "farming_lv6", label: "Reach Farming Level 7" },
  { id: "loom", parentId: "farming_lv7", label: "Craft Loom" },
  { id: "quality_retaining_soil", parentId: "farming_lv7", label: "Craft Quality Retaining Soil" },

  { id: "farming_lv8", parentId: "farming_lv7", label: "Reach Farming Level 8" },
  { id: "oil_maker", parentId: "farming_lv8", label: "Craft Oil Maker" },
  { id: "keg", parentId: "farming_lv8", label: "Craft Keg" },
  { id: "deluxe_speed_gro", parentId: "farming_lv8", label: "Craft Deluxe Speed-Gro" },
  { id: "hardwood_fence", parentId: "farming_lv8", label: "Craft Hardwood Fence" },

  { id: "farming_lv9", parentId: "farming_lv8", label: "Reach Farming Level 9" },
  { id: "seed_maker", parentId: "farming_lv9", label: "Craft Seed Maker" },
  { id: "quality_fertilizer", parentId: "farming_lv9", label: "Craft Quality Fertilizer" },
  { id: "iridium_sprinkler", parentId: "farming_lv9", label: "Craft Iridium Sprinkler" },

  // --- SPECIAL ORDERS ---
  { id: "special_orders", parentId: "cc_unlock", label: "Unlock Special Orders Board" },
  
  { id: "clint_special_order", parentId: "special_orders", label: "Complete Clint's Special Order (Cave Patrol)" },
  { id: "geode_crusher", parentId: "clint_special_order", label: "Craft Geode Crusher" },
  
  { id: "robin_special_order", parentId: "special_orders", label: "Complete Robin's Special Order (Resource Clumping)" },
  { id: "stone_chest", parentId: "robin_special_order", label: "Craft Stone Chest" },
  
  { id: "caroline_special_order", parentId: "special_orders", label: "Complete Caroline's Special Order (Island Ingredients)" },
  { id: "solar_panel", parentId: "caroline_special_order", label: "Craft Solar Panel" },
  
  { id: "evelyn_special_order", parentId: "special_orders", label: "Complete Evelyn's Special Order (Gifts for George)" },
  { id: "coffee_maker", parentId: "evelyn_special_order", label: "Obtain Coffee Maker" },
  
  { id: "pierre_special_order", parentId: "special_orders", label: "Complete Pierre's Special Order (Prime Produce)" },
  { id: "mini_shipping_bin", parentId: "pierre_special_order", label: "Craft Mini-Shipping Bin" },
  
  { id: "willy_special_order", parentId: "special_orders", label: "Complete Willy's Special Order (Tropical Fish)" },
  { id: "quality_bobber", parentId: "willy_special_order", label: "Craft Quality Bobber" },
  
  { id: "demetrius_special_order", parentId: "special_orders", label: "Complete Demetrius' Special Order (Biome Research)" },
  { id: "farm_computer", parentId: "demetrius_special_order", label: "Craft Farm Computer" },
  
  { id: "gunther_special_order", parentId: "special_orders", label: "Complete Gunther's Special Order (Fragments of the Past)" },
  { id: "bone_mill", parentId: "gunther_special_order", label: "Craft Bone Mill" },

  // --- CARPENTRY & TOWN SHOP SERVICES ---
  { id: "robin_shop", parentId: "inherit_farm", label: "Visit Robin's Carpentry Shop" },
  { id: "workbench", parentId: "robin_shop", label: "Craft Workbench" },
  { id: "telephone", parentId: "robin_shop", label: "Craft Telephone" },
  { id: "wood_chipper", parentId: "robin_shop", label: "Craft Wood Chipper" },
  { id: "mini_fridge", parentId: "robin_shop", label: "Craft Mini-Fridge" },
  { id: "big_chest", parentId: "robin_shop", label: "Craft Big Chest" },

  { id: "pierre_shop", parentId: "inherit_farm", label: "Visit Pierre's General Store" },
  { id: "dehydrator", parentId: "pierre_shop", label: "Craft Dehydrator" },

  { id: "willy_shop", parentId: "inherit_farm", label: "Visit Willy's Fish Shop" },
  { id: "fish_smoker", parentId: "willy_shop", label: "Craft Fish Smoker" },

  { id: "clint_shop", parentId: "inherit_farm", label: "Visit Clint's Blacksmith Shop" },
  { id: "heavy_furnace", parentId: "clint_shop", label: "Craft Heavy Furnace" },

  { id: "dwarf_shop", parentId: "talk_to_dwarf", label: "Unlock Dwarf's Shop" },
  { id: "big_stone_chest", parentId: "dwarf_shop", label: "Craft Big Stone Chest" },

  // --- MR. QI'S WALNUT ROOM SHOP ---
  { id: "heavy_tapper", parentId: "qi_walnut_room", label: "Craft Heavy Tapper" },
  { id: "deluxe_fertilizer", parentId: "qi_walnut_room", label: "Craft Deluxe Fertilizer" },
  { id: "hyper_speed_gro", parentId: "qi_walnut_room", label: "Craft Hyper Speed-Gro" },
  { id: "magic_bait", parentId: "qi_walnut_room", label: "Craft Magic Bait" },
  { id: "junimo_chest", parentId: "qi_walnut_room", label: "Craft Junimo Chest" },
  { id: "deconstructor", parentId: "qi_walnut_room", label: "Craft Deconstructor" },
  { id: "hopper", parentId: "qi_walnut_room", label: "Craft Hopper" },

  // --- THE MASTERY CAVE ---
  { id: "mastery_cave", parentId: "inherit_farm", label: "Unlock the Mastery Cave" },
  
  { id: "farming_mastery", parentId: "mastery_cave", label: "Claim Farming Mastery" },
  { id: "statue_of_blessings", parentId: "farming_mastery", label: "Craft Statue Of Blessings" },
  
  { id: "fishing_mastery", parentId: "mastery_cave", label: "Claim Fishing Mastery" },
  { id: "challenge_bait", parentId: "fishing_mastery", label: "Craft Challenge Bait" },
  
  { id: "combat_mastery", parentId: "mastery_cave", label: "Claim Combat Mastery" },
  { id: "anvil", parentId: "combat_mastery", label: "Craft Anvil" },
  
  { id: "mining_mastery", parentId: "mastery_cave", label: "Claim Mining Mastery" },
  { id: "statue_of_the_dwarf_king", parentId: "mining_mastery", label: "Craft Statue Of The Dwarf King" },

  // --- ADDITIONAL CRAFTABLES & MISCELLANEOUS ---
  { id: "cask", parentId: "cellar_upgrade", label: "Craft Cask" },
  { id: "gate", parentId: "inherit_farm", label: "Craft Gate" },
  { id: "wood_fence", parentId: "inherit_farm", label: "Craft Wood Fence" },
  { id: "chest", parentId: "inherit_farm", label: "Craft Chest" },
  { id: "wood_sign", parentId: "inherit_farm", label: "Craft Wood Sign" },
  { id: "stone_sign", parentId: "inherit_farm", label: "Craft Stone Sign" },
  { id: "text_sign", parentId: "robin_shop", label: "Craft Text Sign" },
  { id: "dark_sign", parentId: "sewers", label: "Craft Dark Sign" },
  { id: "curiosity_lure", parentId: "skull_cavern", label: "Obtain Curiosity Lure (Skull Cavern Drop)" },
  { id: "garden_pot", parentId: "greenhouse", label: "Obtain Garden Pot (Evelyn Quest)" },
  { id: "rarecrows", parentId: "inherit_farm", label: "Collect All 8 Rarecrows" },
  { id: "deluxe_scarecrow", parentId: "rarecrows", label: "Craft Deluxe Scarecrow" },
  { id: "mini_jukebox", parentId: "inherit_farm", label: "Obtain Mini-Jukebox (Gus 5-Heart Event)" },
  { id: "sewing_machine", parentId: "inherit_farm", label: "Obtain Sewing Machine (Emily Quest)" },
  { id: "fairy_dust", parentId: "ginger_island", label: "Craft Fairy Dust (Birdie Quest)" },
  { id: "ostrich_incubator", parentId: "ginger_island", label: "Craft Ostrich Incubator (Professor Snail)" },
  { id: "mini_forge", parentId: "volcano_forge", label: "Craft Mini-Forge" },
  { id: "deluxe_retaining_soil", parentId: "ginger_island", label: "Craft Deluxe Retaining Soil (Island Trader)" },

  // --- COOKING ---
  { id: "cook_fried_egg", parentId: "house_upgrade_1", label: "Cook Fried Egg" },
  { id: "cook_omelet", parentId: "house_upgrade_1", label: "Cook Omelet (QoS 28 Spring, Year 1 Saloon)" },
  { id: "cook_salad", parentId: "house_upgrade_1", label: "Cook Salad (Emily 3+ Hearts)" },
  { id: "cook_cheese_cauliflower", parentId: "house_upgrade_1", label: "Cook Cheese Cauliflower (Pam 3+ Hearts)" },
  { id: "cook_baked_fish", parentId: "house_upgrade_1", label: "Cook Baked Fish (QoS 7 Summer, Year 1)" },
  { id: "cook_parsnip_soup", parentId: "house_upgrade_1", label: "Cook Parsnip Soup (Caroline 3+ Hearts)" },
  { id: "cook_vegetable_medley", parentId: "house_upgrade_1", label: "Cook Vegetable Medley (Caroline 7+ Hearts)" },
  { id: "cook_complete_breakfast", parentId: "house_upgrade_1", label: "Cook Complete Breakfast (QoS 21 Spring, Year 2)" },
  { id: "cook_fried_calamari", parentId: "house_upgrade_1", label: "Cook Fried Calamari (Jodi 3+ Hearts)" },
  { id: "cook_strange_bun", parentId: "house_upgrade_1", label: "Cook Strange Bun (Shane 7+ Hearts)" },
  { id: "cook_lucky_lunch", parentId: "house_upgrade_1", label: "Cook Lucky Lunch (QoS 28 Spring, Year 2)" },
  { id: "cook_fried_mushroom", parentId: "house_upgrade_1", label: "Cook Fried Mushroom (Demetrius 3+ Hearts)" },
  { id: "cook_pizza", parentId: "house_upgrade_1", label: "Cook Pizza (QoS 7 Spring, Year 2 Saloon)" },
  { id: "cook_bean_hotpot", parentId: "house_upgrade_1", label: "Cook Bean Hotpot (Clint 7+ Hearts)" },
  { id: "cook_glazed_yams", parentId: "house_upgrade_1", label: "Cook Glazed Yams (QoS 21 Fall, Year 1)" },
  { id: "cook_carp_surprise", parentId: "house_upgrade_1", label: "Cook Carp Surprise (QoS 7 Summer, Year 2)" },
  { id: "cook_hashbrowns", parentId: "house_upgrade_1", label: "Cook Hashbrowns (QoS 14 Spring, Year 2 Saloon)" },
  { id: "cook_pancakes", parentId: "house_upgrade_1", label: "Cook Pancakes (QoS 14 Summer, Year 1 Saloon)" },
  { id: "cook_salmon_dinner", parentId: "house_upgrade_1", label: "Cook Salmon Dinner (Gus 3+ Hearts)" },
  { id: "cook_fish_taco", parentId: "house_upgrade_1", label: "Cook Fish Taco (Linus 7+ Hearts)" },
  { id: "cook_crispy_bass", parentId: "house_upgrade_1", label: "Cook Crispy Bass (Kent 3+ Hearts)" },
  { id: "cook_pepper_poppers", parentId: "house_upgrade_1", label: "Cook Pepper Poppers (Shane 3+ Hearts)" },
  { id: "cook_bread", parentId: "house_upgrade_1", label: "Cook Bread (QoS 28 Summer, Year 1 Saloon)" },
  { id: "cook_tom_kha_soup", parentId: "house_upgrade_1", label: "Cook Tom Kha Soup (Sandy 7+ Hearts)" },
  { id: "cook_trout_soup", parentId: "house_upgrade_1", label: "Cook Trout Soup (QoS 14 Fall, Year 1)" },
  { id: "cook_chocolate_cake", parentId: "house_upgrade_1", label: "Cook Chocolate Cake (QoS 14 Winter, Year 1)" },
  { id: "cook_pink_cake", parentId: "house_upgrade_1", label: "Cook Pink Cake (QoS 21 Summer, Year 2)" },
  { id: "cook_rhubarb_pie", parentId: "house_upgrade_1", label: "Cook Rhubarb Pie (Marnie 7+ Hearts)" },
  { id: "cook_cookie", parentId: "house_upgrade_1", label: "Cook Cookie (Evelyn 4-Heart Event)" },
  { id: "cook_spaghetti", parentId: "house_upgrade_1", label: "Cook Spaghetti (Lewis 3+ Hearts)" },
  { id: "cook_fried_eel", parentId: "house_upgrade_1", label: "Cook Fried Eel (George 3+ Hearts)" },
  { id: "cook_spicy_eel", parentId: "house_upgrade_1", label: "Cook Spicy Eel (George 7+ Hearts)" },
  { id: "cook_sashimi", parentId: "house_upgrade_1", label: "Cook Sashimi (Linus 3+ Hearts)" },
  { id: "cook_maki_roll", parentId: "house_upgrade_1", label: "Cook Maki Roll (QoS 21 Summer, Year 1 Saloon)" },
  { id: "cook_tortilla", parentId: "house_upgrade_1", label: "Cook Tortilla (QoS 7 Fall, Year 1 Saloon)" },
  { id: "cook_red_plate", parentId: "house_upgrade_1", label: "Cook Red Plate (Emily 7+ Hearts)" },
  { id: "cook_eggplant_parmesan", parentId: "house_upgrade_1", label: "Cook Eggplant Parmesan (Lewis 7+ Hearts)" },
  { id: "cook_rice_pudding", parentId: "house_upgrade_1", label: "Cook Rice Pudding (Evelyn 7+ Hearts)" },
  { id: "cook_ice_cream", parentId: "house_upgrade_1", label: "Cook Ice Cream (Jodi 7+ Hearts)" },
  { id: "cook_blueberry_tart", parentId: "house_upgrade_1", label: "Cook Blueberry Tart (Pierre 3+ Hearts)" },
  { id: "cook_autumn_s_bounty", parentId: "house_upgrade_1", label: "Cook Autumn's Bounty (Demetrius 7+ Hearts)" },
  { id: "cook_pumpkin_soup", parentId: "house_upgrade_1", label: "Cook Pumpkin Soup (Robin 7+ Hearts)" },
  { id: "cook_super_meal", parentId: "house_upgrade_1", label: "Cook Super Meal (Kent 7+ Hearts)" },
  { id: "cook_cranberry_sauce", parentId: "house_upgrade_1", label: "Cook Cranberry Sauce (Gus 7+ Hearts)" },
  { id: "cook_stuffing", parentId: "house_upgrade_1", label: "Cook Stuffing (Pam 7+ Hearts)" },
  { id: "cook_farmer_s_lunch", parentId: "house_upgrade_1", label: "Cook Farmer's Lunch (Farming Level 3)" },
  { id: "cook_survival_burger", parentId: "house_upgrade_1", label: "Cook Survival Burger (Foraging Level 8)" },
  { id: "cook_dish_o__the_sea", parentId: "house_upgrade_1", label: "Cook Dish O' The Sea (Fishing Level 3)" },
  { id: "cook_miner_s_treat", parentId: "house_upgrade_1", label: "Cook Miner's Treat (Mining Level 3)" },
  { id: "cook_roots_platter", parentId: "house_upgrade_1", label: "Cook Roots Platter (Combat Level 3)" },
  { id: "cook_triple_shot_espresso", parentId: "house_upgrade_1", label: "Cook Triple Shot Espresso (Saloon 5000g)" },
  { id: "cook_seafoam_pudding", parentId: "house_upgrade_1", label: "Cook Seafoam Pudding (Fishing Level 9)" },
  { id: "cook_algae_soup", parentId: "house_upgrade_1", label: "Cook Algae Soup (Clint 3+ Hearts)" },
  { id: "cook_pale_broth", parentId: "house_upgrade_1", label: "Cook Pale Broth (Marnie 3+ Hearts)" },
  { id: "cook_plum_pudding", parentId: "house_upgrade_1", label: "Cook Plum Pudding (QoS 7 Winter, Year 1)" },
  { id: "cook_artichoke_dip", parentId: "house_upgrade_1", label: "Cook Artichoke Dip (QoS 28 Fall, Year 1)" },
  { id: "cook_stir_fry", parentId: "house_upgrade_1", label: "Cook Stir Fry (QoS 7 Spring, Year 1)" },
  { id: "cook_roasted_hazelnuts", parentId: "house_upgrade_1", label: "Cook Roasted Hazelnuts (QoS 28 Summer, Year 2)" },
  { id: "cook_pumpkin_pie", parentId: "house_upgrade_1", label: "Cook Pumpkin Pie (QoS 21 Winter, Year 1)" },
  { id: "cook_radish_salad", parentId: "house_upgrade_1", label: "Cook Radish Salad (QoS 21 Spring, Year 1)" },
  { id: "cook_fruit_salad", parentId: "house_upgrade_1", label: "Cook Fruit Salad (QoS 7 Fall, Year 2)" },
  { id: "cook_blackberry_cobbler", parentId: "house_upgrade_1", label: "Cook Blackberry Cobbler (QoS 14 Fall, Year 2)" },
  { id: "cook_cranberry_candy", parentId: "house_upgrade_1", label: "Cook Cranberry Candy (QoS 28 Winter, Year 1)" },
  { id: "cook_bruschetta", parentId: "house_upgrade_1", label: "Cook Bruschetta (QoS 21 Winter, Year 2)" },
  { id: "cook_coleslaw", parentId: "house_upgrade_1", label: "Cook Coleslaw (QoS 14 Spring, Year 1)" },
  { id: "cook_fiddlehead_risotto", parentId: "house_upgrade_1", label: "Cook Fiddlehead Risotto (QoS 28 Fall, Year 2)" },
  { id: "cook_poppyseed_muffin", parentId: "house_upgrade_1", label: "Cook Poppyseed Muffin (QoS 7 Winter, Year 2)" },
  { id: "cook_chowder", parentId: "house_upgrade_1", label: "Cook Chowder (Willy 3+ Hearts)" },
  { id: "cook_fish_stew", parentId: "house_upgrade_1", label: "Cook Fish Stew (Willy 7+ Hearts)" },
  { id: "cook_escargot", parentId: "house_upgrade_1", label: "Cook Escargot (Willy 5+ Hearts)" },
  { id: "cook_lobster_bisque", parentId: "house_upgrade_1", label: "Cook Lobster Bisque (QoS 14 Winter, Year 2 / Willy 9+ Hearts)" },
  { id: "cook_maple_bar", parentId: "house_upgrade_1", label: "Cook Maple Bar (QoS 14 Summer, Year 2)" },
  { id: "cook_crab_cakes", parentId: "house_upgrade_1", label: "Cook Crab Cakes (QoS 21 Fall, Year 2)" },
  { id: "cook_shrimp_cocktail", parentId: "house_upgrade_1", label: "Cook Shrimp Cocktail (QoS 28 Winter, Year 2)" },
  { id: "cook_ginger_ale", parentId: "house_upgrade_1", label: "Cook Ginger Ale (Dwarf Shop Volcano 1000g)" },
  { id: "cook_banana_pudding", parentId: "house_upgrade_1", label: "Cook Banana Pudding (Island Trader 30 Bone Frags)" },
  { id: "cook_mango_sticky_rice", parentId: "house_upgrade_1", label: "Cook Mango Sticky Rice (Leo 7+ Hearts)" },
  { id: "cook_poi", parentId: "house_upgrade_1", label: "Cook Poi (Leo 3+ Hearts)" },
  { id: "cook_tropical_curry", parentId: "house_upgrade_1", label: "Cook Tropical Curry (Island Resort 2000g)" },
  { id: "cook_squid_ink_ravioli", parentId: "house_upgrade_1", label: "Cook Squid Ink Ravioli (Combat Level 9)" },
  { id: "cook_moss_soup", parentId: "house_upgrade_1", label: "Cook Moss Soup (Foraging Level 3)" },
];
