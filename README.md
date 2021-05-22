# Netlify Testproject

On a local machine run

```
npm install
npm run netlify
```

Now open http://localhost:8888/.netlify/functions/test in a browser

Hosted is at https://festive-curran-b99121.netlify.app/.netlify/functions/test

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
Error: ENOENT: no such file or directory, open '/path/to/project/.netlify/functions-serve/test/src/test/schema.graphql'
```
