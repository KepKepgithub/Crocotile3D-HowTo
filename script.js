const selected = document.querySelector('.selected');
const option_wrap = document.querySelector('.option_wrap');
const option = document.querySelectorAll('.option');
const glossary = document.querySelector('.glossary');
const overview = document.querySelector('#overview');

selected.addEventListener('click',()=>{
    option_wrap.style.height = "auto";
})

option.forEach((language)=>{
    language.addEventListener('click',()=>{
        option_wrap.style.height = "0";
        selected.innerHTML = language.innerHTML

        /*
        // clean template for adding languages

            if(language.innerHTML === "Your Language Here"){
            // Glossary
            // Overview
            glossary.children[0].innerHTML= '';
            // Getting Started
            glossary.children[1].innerHTML= '';
            // Commands
            glossary.children[2].innerHTML= '';
            // Configuration
            glossary.children[3].innerHTML= '';
            // Tilesets
            glossary.children[4].innerHTML= '';
            // Painting
            glossary.children[5].innerHTML= '';
            // Transforms
            glossary.children[6].innerHTML= '';
            // Objects
            glossary.children[7].innerHTML= '';
            // // Layers
            glossary.children[8].innerHTML= '';
            // Exporting
            glossary.children[9].innerHTML= '';
            // Active Selection Mode
            glossary.children[10].innerHTML= '';
        }

        */
        if(language.innerHTML === "EN"){
            // Glossary
            // Overview
            glossary.children[0].innerHTML= 'Overview';
            // Getting Started
            glossary.children[1].innerHTML= 'Getting Started';
            // Commands
            glossary.children[2].innerHTML= 'Commands';
            // Configuration
            glossary.children[3].innerHTML= 'Configuration';
            // Tilesets
            glossary.children[4].innerHTML= 'Tilesets';
            // Painting
            glossary.children[5].innerHTML= 'Painting';
            // Transforms
            glossary.children[6].innerHTML= 'Transforms';
            // Objects
            glossary.children[7].innerHTML= 'Objects';
            // // Layers
            glossary.children[8].innerHTML= 'Layers';
            // Exporting
            glossary.children[9].innerHTML= 'Exporting';
            // Active Selection Mode
            glossary.children[10].innerHTML= 'Active Selection Mode';

            // Overview Section
            overview.innerHTML = `<h1>Overview</h1>
                                <p>Crocotile 3D is a tile-based modeling editor.
                                You can import tilesets and select tiles from the
                                image to place into the 3d scene to construct
                                environments, objects, characters or anything
                                else you can imagine. Controls in the editor allow 
                                you to fine-tune and edit these tiles, allowing any shape or
                                form to be made. This document outlines all methods of interacting
                                with the software with instructions on how to use it. </p>`
        }
        if(language.innerHTML === "LV"){
            // Overview
            glossary.children[0].innerHTML= 'Pārskats';
            // Getting Started
            glossary.children[1].innerHTML= 'Darba sākšana';
            // Commands
            glossary.children[2].innerHTML= 'Kommandas';
            // Configuration
            glossary.children[3].innerHTML= 'Configurācija';
            // Tilesets
            glossary.children[4].innerHTML= 'Tileseti';
            // Painting
            glossary.children[5].innerHTML= 'Krāsošana';
            // Transforms
            glossary.children[6].innerHTML= 'Transformēšana';
            // Objects
            glossary.children[7].innerHTML= 'Objekti';
            // // Layers
            glossary.children[8].innerHTML= 'Slāņi';
            // Exporting
            glossary.children[9].innerHTML= 'Eksportē';
            // Active Selection Mode
            glossary.children[10].innerHTML= 'Aktīvās izvēles režīms';

            // Overview Section
            overview.innerHTML = `<h1>Pārskats</h1>
                                <p>Crocotile 3D ir uz flīzēm balstīts modelēšanas redaktors.
                                Varat importēt flīžu kopas un atlasīt attēlus, kas jāievieto 3D attēlā, 
                                lai izveidotu vidi, objektus, rakstzīmes vai jebko citu, ko varat iedomāties.
                                Kontrolierīces redaktors ļauj precīzi noregulēt un rediģēt šīs flīzes, ļaujot
                                veikt jebkādu formu. Šajā dokumentā ir aprakstītas visas programmatūras
                                mijiedarbības metodes, kā arī norādījumi par tās lietošanu.
                                </p>`
        }
    })
})


