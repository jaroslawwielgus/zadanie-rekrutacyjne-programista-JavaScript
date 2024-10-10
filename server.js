const express = require("express");

const app = express();
const port = 8080;

// Dummy data for demonstration
const customers = [
	{
		Id: 1,
		CompanyName: "Acme Corp",
		Address: "123 Elm St",
		City: "Springfield",
		PostalCode: "12345",
		Phone: "555-1234",
	},
	{
		Id: 2,
		CompanyName: "Globex Inc.",
		Address: "456 Oak St",
		City: "Shelbyville",
		PostalCode: "67890",
		Phone: "555-5678",
	},
];

// Endpoint for getting customers
app.get("/odata/Northwind.svc/Customers", (req, res) => {
	console.log("Customers endpoint accessed");
	res.json(customers);
});

// Implementacja endpointu $metadata
app.get("/odata/Northwind.svc/$metadata", (req, res) => {
	console.log("Metadata endpoint accessed"); // Dodaj logowanie
	const metadata = `
    <?xml version="1.0" encoding="utf-8"?>
    <edmx:Edmx Version="4.0" 
        xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx">
        <edmx:Runtime>
            <edmx:ConceptualModels>
                <Schema Namespace="Northwind" xmlns="http://schemas.microsoft.com/ado/2008/10/edm">
                    <EntityType Name="Customer">
                        <Key>
                            <PropertyRef Name="Id"/>
                        </Key>
                        <Property Name="Id" Type="Int32"/>
                        <Property Name="CompanyName" Type="String"/>
                        <Property Name="Address" Type="String"/>
                        <Property Name="City" Type="String"/>
                        <Property Name="PostalCode" Type="String"/>
                        <Property Name="Phone" Type="String"/>
                    </EntityType>
                </Schema>
            </edmx:ConceptualModels>
        </edmx:Runtime>
    </edmx:Edmx>
    `;
	res.set("Content-Type", "application/xml"); // Ustaw nagłówek Content-Type
	res.send(metadata);
});

// Endpoint główny
app.get("/", (req, res) => {
	console.log("Main endpoint accessed");
	res.send("Hello World");
});

// Start server
app.listen(port, () => {
	console.log(`Serwer uruchomiony na http://localhost:${port}`);
});
