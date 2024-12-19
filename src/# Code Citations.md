# Code Citations

## License: unknown
https://github.com/codeawy/reactjs-basics-online-course-project-2/tree/6f2d4b255d7d4a5fc8c522c35c0963529d760c7f/src/App.tsx

```
: ChangeEvent<HTMLInputElement>) => {
  const { value, name } = event.target;

  setProduct({
    ...product,
    [name]: value,
  });

  setErrors({
    ...errors,
    [name]: "",
  });
```

