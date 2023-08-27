class Shape {
    constructor (properties) {
        this.svgStart = "<svg width='200' height='200'>";
        this.svgEnd = "</svg>";
        this.properties = properties;
    } 
}
class Square extends Shape {
    super(properties);

}


<svg width="200" height="200">

    <rect width="100%" height="100%" fill="red" />

    <circle cx="150" cy="100" r="80" fill="green" />
    {/* triangle */}
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
