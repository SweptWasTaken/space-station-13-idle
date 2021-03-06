export default {
	botanist: {
		name: "Botanist",
		icon: require("@/assets/art/combat/enemies/botanist.png"),
		stats: {
			maxHealth: 210,
			attackSpeed: 1.6,
			precision: 41,
			power: 61,
			evasion: 67,
			damageType: "burn",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'potato',
						count:2,
						weight: 1
					}, {
						id: 'tomato',
						count:2,
						weight: 1
					}, {
						id: 'flowerSun',
						count:2,
						weight: 1
					}, {
						id: 'mushroom',
						count:2,
						weight: 1
					}, {
						id: 'pepper',
						count:2,
						weight: 1
					}, {
						id: 'potatoBattery',
						weight: 1
					}, {
						id: 'tomatoBlue',
						weight: 1
					}, {
						id: 'flowerMoon',
						weight: 1
					}, {
						id: 'mushroomRed',
						weight: 1
					}, {
						id: 'peppercold',
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitBotany"
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
	pete: {
		name: "Pete",
		icon: require("@/assets/art/combat/enemies/pete.png"),
		stats: {
			maxHealth: 190,
			attackSpeed: 1.7,
			precision: 49,
			power: 49,
			evasion: 44,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foodMeatA',
						weight: 1
					}
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: "foodMeatA",
						weight: 98
					},
					{
						id: "companionGoat",
						weight: 2
					},
				]
			}
		]
	},
	cannibal: {
		name: "Soylent Green Chef",
		icon: require("@/assets/art/combat/enemies/badchef.png"),
		stats: {
			maxHealth: 200,
			attackSpeed: 2.4,
			precision: 41,
			power: 63,
			evasion: 42,
			damageType: "brute",
			burnProtection: 20
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'foot',
						weight: 4
					}, {
						id: 'foodMeatH',
						weight: 4
					}, {
						id: 'foodMeatA',
						weight: 4
					}, {
						id: 'foodMeatZ',
						weight: 4
					},
					{
						id: 'ticket2',
						count: [1, 2],
						weight: 1
					}
				]
			},
			{
				chance: .02,
				item: "jumpsuitCooking"
			},
			{
				chance: 1,
				item: "foodMeatH"
			}
		]
	},
}