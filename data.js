const stardewTasks = [
  // --- THE BEGINNING ---
  { id: "inherit_farm", parentId: null, label: "Inherit a farm" },

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
  { id: "quality_sprinkler", parentId: "iron_bar", label: "Craft Quality Sprinkler" },

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

  // --- FARMING & CRAFTING ---
  { id: "parsnip", parentId: "inherit_farm", label: "Grow Parsnips" },
  { id: "farming_lv1", parentId: "parsnip", label: "Reach Farming Level 1" },
  { id: "scarecrow", parentId: "farming_lv1", label: "Craft Scarecrow" },
  
  { id: "farming_lv4", parentId: "farming_lv1", label: "Reach Farming Level 4" },
  { id: "preserves_jar", parentId: "farming_lv4", label: "Craft Preserves Jar" },
  
  { id: "farming_lv8", parentId: "farming_lv4", label: "Reach Farming Level 8" },
  { id: "oil_maker", parentId: "farming_lv8", label: "Craft Oil Maker" },
  { id: "keg", parentId: "iron_bar", label: "Craft Keg" }
];
