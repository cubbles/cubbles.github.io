# Runtime extension - RTE

The **RTE \(RunTime Extension\)** works within the clients webbrowser. Just integrate the RTE into a web page with 2 simple script tags and you are ready to use Cubbles components.

**The RTE/CRC** \(Client Runtime Container\)

* identifies the Cubbles Components used on the webpage,
* resolves the resources needed to instantiate the Cubbles Components,
* enable your browser to download the related resources \(html, js, css etc.\).

**Now the RTE/CIF** \(Component Interaction Framework\)

* waits for the resources to be available
* creates the component instances \(aka. "cubbles"\) and
* initialises each cubble with values provided by the developer.