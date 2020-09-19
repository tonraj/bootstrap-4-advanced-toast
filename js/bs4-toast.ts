class bs4Toast { 

    static nextPadding: number = 10;
    static active: number = 0;
    
    static error(title = '', content='', options: any = {}){

        if (options.hasOwnProperty('headerClasses')){
            options.headerClasses.push('bg-danger');
            options.headerClasses.push('text-white');
        }else{
            options['headerClasses']  = ['bg-danger', 'text-white' ];
        }

        this.show(title, content, options);
    }

    static warning(title = '', content='', options: any = {}){

        if (options.hasOwnProperty('headerClasses')){
            options.headerClasses.push('bg-warning');
            options.headerClasses.push('text-white');
        }else{
            options['headerClasses']  = ['bg-warning', 'text-white' ];
        }

        this.show(title, content, options);
    }

    static primary(title = '', content='', options: any = {}){

        if (options.hasOwnProperty('headerClasses')){
            options.headerClasses.push('bg-primary');
            options.headerClasses.push('text-white');
        }else{
            options['headerClasses']  = ['bg-primary', 'text-white' ];
        }

        this.show(title, content, options);
    }

    static show(title = '', content='', options: any = {}){
        
        var id = 'bs4Toast'+ this.active;

        var delayNumber = 3000;

        if (options.hasOwnProperty('delay')){
            delayNumber = options.delay;
        }
        
        var wrapper = document.createElement('div');
        wrapper.id = id.toString();
        wrapper.classList.add("bs4ToastWrapper");
        wrapper.classList.add("toast");
        var areal_live = document.createAttribute("aria-live");
        var role = document.createAttribute("role");
        var atomic = document.createAttribute("aria-atomic");  
        var statedelay = document.createAttribute("data-delay"); 
        
        role.value = 'alert';
        areal_live.value = 'assertive';
        atomic.value = 'true';
        statedelay.value = delayNumber.toString(); 

        wrapper.setAttributeNode(areal_live);
        wrapper.setAttributeNode(role);
        wrapper.setAttributeNode(atomic);
        wrapper.setAttributeNode(statedelay);

        var headerWrapper = document.createElement('div');
        headerWrapper.classList.add("toast-header");
        if (options.hasOwnProperty('headerClasses')){ 
        jQuery.each(options.headerClasses , (e, v)=>{
            headerWrapper.classList.add(v);
        })
        }
        var headerText = document.createElement('strong');
        headerText.classList.add("mr-auto");
        headerText.innerHTML = title;
        
        var closeButton = document.createElement('button');
        closeButton.classList.add("ml-2");
        closeButton.classList.add("mb-1");
        closeButton.classList.add("close");
        
        var dismissAttr = document.createAttribute("data-dismiss");
        var arialLab = document.createAttribute("aria-label");  

        dismissAttr.value = 'toast';
        arialLab.value = 'Close';

        closeButton.setAttributeNode(dismissAttr);
        closeButton.setAttributeNode(arialLab);
        closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
        wrapper.style.marginTop = this.nextPadding.toString() + 'px';

        var bodyWrapper = document.createElement('div');
        bodyWrapper.classList.add("toast-body");
        if (options.hasOwnProperty('bodyClasses')){ 
            jQuery.each(options.bodyClasses , (e, v)=>{
                bodyWrapper.classList.add(v);
            })
        }
        bodyWrapper.innerHTML = content;
        
        if (options.hasOwnProperty('icon')){
            if (options.icon.hasOwnProperty('type') == false){
                console.error('bs4Toast : Icon type is missing in Object.');
            }else{
                if (options.icon.type == 'image'){
                    var Imgwrapper = document.createElement('img');
                    var src = document.createAttribute("src");
                    Imgwrapper.classList.add("rounded");
                    Imgwrapper.classList.add("mr-2");
                    Imgwrapper.classList.add("bs4Toasticonimage");
                    src.value = options.icon.src;
                    Imgwrapper.setAttributeNode(src);
                    headerWrapper.appendChild(Imgwrapper);
                    //this.nextPadding += 40;
                }else if(options.icon.type=="fontawesome"){
                    var iwrapper = document.createElement('i');
                    iwrapper.classList.add("bs4Toasticon");
                    iwrapper.classList.add("fa");
                    iwrapper.classList.add(options.icon.class);
                    headerWrapper.appendChild(iwrapper);
                    //this.nextPadding += 40; 
                }
                else{
                    console.error('bs4Toast : Icon type is should be image or fontawesome. Please go through the Docs.');
                }
            }
        }

        headerWrapper.appendChild(headerText);
        headerWrapper.appendChild(closeButton);
        wrapper.appendChild(headerWrapper);

        var hr = document.createElement('hr');
        if (options.hasOwnProperty('buttons')){ 
            var p = document.createElement('span');
            p.style.display = 'block';
            p.style.marginTop = '10px';
            jQuery.each(options.buttons , (e, v)=>{
                var button = document.createElement('button');
                button.innerHTML = v.text;
                v.class.split(' ').forEach((e)=>{
                    button.classList.add(e);
                });
                button.onclick = v.callback;
                p.appendChild(button);
            });
            bodyWrapper.appendChild(p);
        }

        wrapper.appendChild(bodyWrapper);
        
        this.nextPadding += 100; 
        document.body.prepend(wrapper);
        $('#' + id).toast('show');
        $('#' + id).on('hidden.bs.toast',  () => {
            $('#' + id).remove();
            $('*.bs4ToastWrapper').each((e, y) => {
                var sel = $('#' + y.id);
                var marhing = parseInt(sel.css('margin-top').slice(0, -2).trim());
                var neMargin = marhing - 100;
                sel.css('margin-top', neMargin + 'px');
            });

            this.nextPadding -=100;    
        });
        this.active++;
        return false;
    }
}