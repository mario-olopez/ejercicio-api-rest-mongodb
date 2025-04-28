-- PRODUCTS

db.products.insertOne({
    "title": "Tortilla - Marquina",
    "price": 1.80,
    "description": "La mejor tortilla de la zona en el Teatro Marquina",
})

-- PROVIDERS
db.providers.insertMany([
	{
		company_name: "La casa de la tecnología",
		CIF: "a56959133",
		address: "Avenida Pio XII, Madrid, 98",
		url_web: "https://www.lacasadelatecnologia.com"
	},
	{
		company_name: "La casa de los CRUDS",
		CIF: "b12345678",
		address: "Paseo de Recoletos, 15",
		url_web: "https://www.lacasadelatecnologia.com"
	},
	{
		company_name: "La casa de las casas",
		CIF: "c87654321",
		address: "Calle de la casa, 33",
		url_web: "https://www.casadecasas.com"
	}
])

db.providers.insertOne({
  company_name: "Casa de Mario",
  CIF: "D13579246",
  address: "Avenida del programador, 46",
  url_web: "https://www.casademario.com"
});

db.providers.insertOne({
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
})
