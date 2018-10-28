        let color = "purple";
        let number = 10;
        let word = "cool";
        $('.item-north').css('background-color','purple');
        if(number>100) {
            $('.item-east').text(`whoah, that's a big number`);
        } else {
            $('.item-east').text(`just a regular number`)
        }
        if(word === 'cool') {
            $('.item-west').text(`Power of DOM`);
        } else {
            $('.item-west').text('.item-south');
        }





        $('.item-east').text(`just a regular number`)

        
