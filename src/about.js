function About() {
        const container = document.querySelector("#content");
        const aboutHeader = document.createElement("div");
        const aboutheaderH1 = document.createElement("h1");
        const aboutHeaderP = document.createElement("p");
        const credits = document.createElement("div");
        const creditsH2 = document.createElement("h2");
        const creditList = document.createElement("ul");
        // Empties container before rendering
        if(container.innerHTML!==""){
            container.innerHTML = "";
        }
        // Clears styles that may have been on the page before.
        container.removeAttribute("style");

        // Styling
        container.style.display = "flex";
        container.style.flexDirection  = "column";
        container.style.alignItems = "center";
        container.style.justifyContent = "flex-start";
        container.style.height = "100%";

        aboutHeader.classList.add("about-header");
        credits.classList.add("credits");

        aboutheaderH1.textContent = "About This Website";
        aboutHeaderP.textContent = "A website based on the famous and very tasty fast-food chain Thunderbird, known for their tasty and mouthwatering sauces and juicy chicken. This website is based on their company website and has similarities to it.";
        aboutHeader.append(aboutheaderH1, aboutHeaderP);

        creditsH2.textContent = "Credits:";
        let creditObject = [
            { text: 'To the ', linkText: 'Thunderbird Chicken website', href: 'https://thunderbirdckn.co.uk/' },
            { text: 'To ', linkText: 'The Odin Project', href: 'https://www.theodinproject.com/' },
            { text: '', linkText: 'WFonts', href: 'https://www.wfonts.com/', suffix: ' for the fonts' },
            { text: '', linkText: 'Vecteezy', href: 'https://www.vecteezy.com/', suffix: ' for icons' }
          ];
          
        creditObject.forEach(item => {
            const li = document.createElement('li');
            li.append(item.text);
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.linkText;
            li.appendChild(a);
            if(item.suffix) li.append(item.suffix);
            creditList.appendChild(li);
        });

        credits.append(creditsH2, creditList);
        container.append(aboutHeader, credits);
    }

export default About;