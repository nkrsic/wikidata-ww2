# wikidata-ww2

We start with a query about Reginald V. Jones \(wd:Q367200\), author of 
WW2 memoir, "Most Secret War".

```
SELECT ?connection ?item ?itemLabel 
WHERE {
  wd:Q367200 ?connection ?item.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
```