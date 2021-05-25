import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        // Need the super constructor to override the parent class
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Lorem Ipsum</h1>
        <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
        <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
        
        
        <hr>
        
        <div id="Content">
        <div id="bannerL"><div id="div-gpt-ad-1474537762122-2">
        <script type="text/javascript">googletag.cmd.push(function() { googletag.display("div-gpt-ad-1474537762122-2"); });</script>
        </div></div>
        <div id="bannerR"><div id="div-gpt-ad-1474537762122-3">
        <script type="text/javascript">googletag.cmd.push(function() { googletag.display("div-gpt-ad-1474537762122-3"); });</script>
        </div></div>
        <div class="boxed"><!-- 
        
        
        If you want to use Lorem Ipsum within another program please contact us for details
        on our API rather than parse the HTML below, we have XML and JSON available.
        
        
         --><div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id lectus magna. In eu lacinia ex, eget interdum sem. Nam dapibus elementum odio, quis ultrices justo pellentesque id. Nam dictum nec augue at consequat. Nam vitae pulvinar ex. Integer malesuada leo vestibulum justo porttitor, vitae varius nunc condimentum. Duis vitae ipsum eget lacus semper tristique nec in felis.
        </p>
        <p>
        Vivamus maximus turpis orci, eu efficitur metus imperdiet eget. Nunc sit amet quam sed sapien scelerisque pharetra a at nisi. Nam varius vel est quis facilisis. Duis accumsan egestas eros id eleifend. Suspendisse mollis venenatis enim ac bibendum. Cras vestibulum mauris scelerisque lacinia pellentesque. In hac habitasse platea dictumst. Pellentesque semper, lacus id laoreet mollis, enim nisl gravida tortor, et pretium odio ligula a ante. In hac habitasse platea dictumst. Suspendisse convallis eleifend est, sollicitudin consequat orci fringilla in. Donec id euismod velit, vitae maximus diam.
        </p>
        <p>
        Sed nisi sapien, dapibus in tortor id, cursus fringilla lorem. Nulla facilisi. Duis a lacinia diam, vel pharetra augue. Vivamus ex ligula, sollicitudin sit amet porta eu, porttitor sed metus. Donec eu massa sollicitudin, molestie leo in, egestas massa. Phasellus eleifend tellus leo, sit amet congue risus ultricies et. Sed finibus metus vestibulum mauris placerat, sed congue nisl hendrerit. Vivamus a gravida dolor, quis ultricies augue. Etiam lobortis tellus ornare orci iaculis feugiat. Proin finibus ante eu quam bibendum, vitae commodo orci egestas. Fusce rutrum imperdiet malesuada.
        </p>
        <p>
        Pellentesque in venenatis arcu. Proin pharetra diam vestibulum, vehicula sapien nec, mattis elit. Aenean fermentum dolor tellus, a tristique massa volutpat eget. Praesent posuere convallis tortor, a vulputate nisi posuere quis. Curabitur quis sollicitudin leo. Vivamus pretium elit id metus tempus consequat. Nunc non tincidunt elit. Proin quis nibh et ex tempor feugiat id ut mauris. Aenean porta est est. Aliquam ut hendrerit nulla. Aenean accumsan eget nunc et molestie.
        </p>
        <p>
        Proin gravida hendrerit nulla et ultricies. Praesent malesuada quis augue ut auctor. Duis tempus condimentum ornare. Curabitur tincidunt risus quam, in varius lorem faucibus quis. Nunc sollicitudin ante nibh, vitae sagittis nunc aliquam quis. Duis et consequat dui. Suspendisse vel nisi ultricies, sollicitudin nulla in, consectetur felis. Etiam elementum sapien urna, ut sagittis metus laoreet vulputate. Vivamus risus dolor, ultrices et augue non, tempus dapibus neque. Fusce sollicitudin velit nec ex interdum, vel rhoncus erat sagittis.
        </p></div>
        <p>
            <a href="/games" data-link>View Recent Posts.</a>
        </p>
        `;
    }
}