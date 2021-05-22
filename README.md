# Netlify Testproject

```
npm install
npm run netlify
```

Now open http://localhost:8888/.netlify/functions/test in a browser

Expected behavior:

A GraphQL playground window appears where I can execute a GraphQL query

```
query Test {
    test {
        id
        name
    }
}
```

and get back JSON data

```
{
    test: {
        id: "t3g48vt83498",
        name: "Hello",
    }
}
```

Actual behavior:

```
I get an error message:
Error: ENOENT: no such file or directory, open '/Users/devatrox/Projekte/netlify-test/.netlify/functions-serve/test/src/test/schema.graphql'
```
