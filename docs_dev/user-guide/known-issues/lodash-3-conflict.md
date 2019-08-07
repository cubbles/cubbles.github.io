# Avoiding conflicts with Lodash 3

When you combine artifacts developed with [RTE](../rte/) version < 3.1.0 and artifacts developed with RTE version >= 3.1.0, there will be a conflict between the Lodash versions used by each RTE (i.e., Lodash 3 and Lodash 4). To avoid having unexpected errors, you should exclude Lodash 3 using the cubx.CRCInit global object:

```html
<script src="../../cubx.core.rte@4.0.0-SNAPSHOT/webcomponents/webcomponents.bundle.js"></script>

<script>
    window.cubx = {
        CRCInit: {
            rootDependencyExcludes: [
                {
                    webpackageId: 'lodash-3.10.1@2.0.0',
                    artifactId: 'lodash'
                }
            ]  
        }
    };
</script>

<script src="../../cubx.core.rte@4.0.0-SNAPSHOT/crc-loader/crc-loader.bundle.js"></script>
```
