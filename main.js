import * as fs from "node:fs"


const endpointUrl = "https://query.wikidata.org/sparql";
const sparqlQuery = `
SELECT ?connection ?connectionLabel ?item ?itemLabel 
WHERE {
  wd:Q367200 ?connection ?item.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
}`;

async function fetchSparqlQuery(query) {
    const headers = {
        "Accept": "application/sparql-results+json",
        "User-Agent": "MyNodeApp/1.0",
    };

    const endpoint = endpointUrl + "?query=" + encodeURIComponent(sparqlQuery);

    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Query returned ${data.results.bindings.length} results`);

        fs.writeFileSync("data.json", JSON.stringify(data, null, 2))

        // console.log("----------")
        // data.results.bindings.forEach(o => {
        //     console.log(`${o.item.value} -- ${JSON.stringify(o.itemLabel.value, null, 2)}`)
        // });

        return data;
    } catch (error) {
        console.error("Error fetching SPARQL query:", error);
    }
}

fetchSparqlQuery(sparqlQuery);
