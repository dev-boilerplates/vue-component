# Vue-Component

Creates a set of files from `~/CWD` that are the barebones of a new Vue component, where upon scripts styles and templates are all bound together, rather much like a `*.vue` file.

_usage_

```
~/vmc my-component
```

_outputs_

* `js/components/my-component.js`
* `stylus/components/my-component.styl`
* `jade/components/my-component.jade`

**todo?**

Create a directory for component script, to include `vuex` like mappings.

* `js/components/my-component/component.js`
* `js/components/my-component/styles.js`

That way it breaks out having x5 style computed properties in the core component file.

```
{
    name: "my-component",
    template,
    computed: {
        ...styles
    }
}
```

_and respectively, styles_

```
{
    hasError() {
        return this.state != "ready" ? "has-error" : ""
    },
    hasImages() {
		return this.collection.length > 0 ? "has-img" : ""
	}
}
```

