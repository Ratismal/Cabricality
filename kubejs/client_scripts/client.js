onEvent("rei.remove.categories", event => {
	event.yeet("minecraft:plugins/tag")
	event.yeet("minecraft:plugins/stripping")
	event.yeet("minecraft:plugins/beacon_base")
	event.yeet("minecraft:plugins/beacon_payment")
	event.yeet("minecraft:plugins/pathing")
	event.yeet("minecraft:plugins/waxing")
	event.yeet("minecraft:plugins/wax_scraping")
	event.yeet("minecraft:plugins/oxidizing")
	event.yeet("minecraft:plugins/oxidation_scraping")
	event.yeet("roughlyenoughitems:plugins/information")
	event.yeet("farmersdelight:decomposition")
	event.yeet("ae2:throwing_in_water")
	event.yeet("ae2:condenser")
	event.yeet("ae2:inscriber")
	event.yeet("create:automatic_shapeless")
	event.yeet("create:automatic_shaped")
	event.yeet("create:automatic_packing")
	event.yeet("create:automatic_brewing")
	event.yeet("create:block_cutting")
	event.yeet("create:mystery_conversation")
})

onEvent("rei.add.items", event => {
	event.add("create:crushed_lead_ore")
	event.add("create:crushed_nickel_ore")
	event.add("create:crushed_tin_ore")
})
onEvent("rei.hide.items", event => {
  event.hide("indrev:raw_silver_block")
	event.hide("indrev:raw_silver")
	event.hide("indrev:silver_ore")
	event.hide("indrev:deepslate_silver_ore")
	event.hide("indrev:silver_purified_ore")
	event.hide("indrev:raw_tungsten_block")
	event.hide("indrev:tungsten_ore")
	event.hide("indrev:deepslate_tungsten_ore")
	event.hide("indrev:tungsten_purified_ore")
	event.hide("indrev:tungsten_ingot")
	event.hide("indrev:tungsten_plate")
	event.hide("indrev:tungsten_block")
	event.hide("indrev:tungsten_nugget")
	event.hide("indrev:tungsten_dust")
	event.hide("indrev:raw_tungsten")
	event.hide("indrev:copper_plate")
	event.hide("indrev:iron_plate")
	event.hide("indrev:gold_plate")
	event.hide("indrev:enriched_nikolite_dust")
	event.hide("indrev:nikolite_dust")
	event.hide("indrev:enriched_nikolite_ingot")
	event.hide("indrev:nikolite_ingot")
	event.hide("indrev:deepslate_nikolite_ore")
	event.hide("indrev:nikolite_ore")

	event.hide("agape_space:copper_plate")
	event.hide("agape_space:iron_plate")
	event.hide("agape_space:gold_plate")
	event.hide("agape_space:aluminum_plate")

	event.hide("create:propeller")
	event.hide("create:copper_ladder")

	event.hide("tconstruct:molten_tungsten_bucket")

	event.hide("createplus:crushed_tungsten_ore")
	event.hide("createplus:crushed_antimony_ore")
	event.hide("createplus:crushed_titanium_ore")
	event.hide("createplus:crushed_iridium_ore")
})
