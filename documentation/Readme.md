
# Data Protection Passports Technical Documentation

The technical documentation is found in the dpp.html document.

## Generating reference documentation

Reference documentation can be generated from the current
code-base. Pre-generated reference docs are committed to this
repository for convenience.

1. set the following env variables:

- DPP_WEB_ROOT
- DPP_NATIVE_ROOT

2. run makefile:

```
$> make reference
```

You can run ```make clean && make reference``` to generate fresh
reference docs.