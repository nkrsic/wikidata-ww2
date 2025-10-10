# wikidata-ww2

We start with a query about Reginald V. Jones \(wd:Q367200\), author of 
WW2 memoir, "Most Secret War".

```
SELECT ?connection ?connectionLabel ?item ?itemLabel 
WHERE {
  wd:Q367200 ?connection ?item.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
}
```

## Collection Notes

### Uppsala University Alvin IDs

Some returned data has special IDs from the Alvin project from Uppsala University.

https://www.alvin-portal.org/alvin/home.jsf?faces-redirect=true&searchType=EXTENDED&dswid=-8265

The Alvin IDs returned in SPARQL query labels can be searched in the Alvin system. 

## Issues

Calls to Wikidata are intermittently failing

## Dereferencing English labels for connections

See `query-direct-claims.sparql` 

## The Atlas of Holy Places & Sacred Sites

Created the item in Wikidata

Q136221724

