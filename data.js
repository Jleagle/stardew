const stardewTasks = [
  // Mines & Mining
  { id: "pickaxe", parentId: null, label: "Get Pickaxe" },
  { id: "mines_entry", parentId: "pickaxe", label: "Enter the Mines" },
  { id: "copper_ore", parentId: "mines_entry", label: "Mine Copper Ore" },
  { id: "furnace", parentId: "copper_ore", label: "Build Furnace" },
  { id: "copper_bar", parentId: "furnace", label: "Smelt Copper Bar" },
  { id: "copper_axe", parentId: "copper_bar", label: "Upgrade to Copper Axe" },
  
  { id: "mines_40", parentId: "mines_entry", label: "Reach Mines Level 40" },
  { id: "iron_ore", parentId: "mines_40", label: "Mine Iron Ore" },
  { id: "iron_bar", parentId: "iron_ore", label: "Smelt Iron Bar" },
  { id: "iron_axe", parentId: "iron_bar", label: "Upgrade to Iron Axe" },
  
  { id: "mines_80", parentId: "mines_40", label: "Reach Mines Level 80" },
  { id: "gold_ore", parentId: "mines_80", label: "Mine Gold Ore" },
  { id: "gold_bar", parentId: "gold_ore", label: "Smelt Gold Bar" },
  { id: "gold_axe", parentId: "gold_bar", label: "Upgrade to Gold Axe" },

  // Foraging & Woods
  { id: "secret_woods", parentId: "iron_axe", label: "Enter Secret Woods" },
  { id: "hardwood", parentId: "secret_woods", label: "Chop Hardwood Stumps" },
  
  // Farming & Crafting
  { id: "wood", parentId: "pickaxe", label: "Chop Trees" },
  { id: "stone", parentId: "pickaxe", label: "Break Rocks" },
  { id: "mayo_machine", parentId: "copper_bar", label: "Build Mayo Machine" },
  { id: "stable", parentId: "iron_bar", label: "Build Stable" },
  { id: "horse", parentId: "stable", label: "Get Horse" },
  
  // Greenhouse & Farming
  { id: "parsnip", parentId: null, label: "Grow Parsnips" },
  { id: "crops_spring", parentId: "parsnip", label: "Grow Spring Crops" },
  { id: "crops_summer", parentId: "crops_spring", label: "Grow Summer Crops" },
  { id: "crops_fall", parentId: "crops_summer", label: "Grow Fall Crops" },
  { id: "greenhouse", parentId: "crops_fall", label: "Repair Greenhouse" },
  { id: "ancient_fruit", parentId: "greenhouse", label: "Grow Ancient Fruit" },
  { id: "keg", parentId: "iron_bar", label: "Craft Keg" },
  { id: "ancient_wine", parentId: "ancient_fruit", label: "Make Ancient Fruit Wine" }
];
