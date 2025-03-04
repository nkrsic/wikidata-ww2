const endpointUrl = "https://query.wikidata.org/sparql";
const sparqlQuery = `
SELECT ?connection ?item ?itemLabel 
WHERE {
  wd:Q367200 ?connection ?item.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
}`;

async function fetchSparqlQuery(query) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/sparql-results+json",
        "User-Agent": "Mozilla/5.0 (compatible; MySPARQLClient/1.0; +https://example.com)"
    };

    const body = new URLSearchParams();
    body.append("query", query);

    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers,
            body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);


        console.log("----------")
        data.results.bindings.forEach(o => {
            console.log(`${o.item.value} -- ${JSON.stringify(o.itemLabel.value, null, 2)}`)
        });


        return data;
    } catch (error) {
        console.error("Error fetching SPARQL query:", error);
    }
}

fetchSparqlQuery(sparqlQuery);
