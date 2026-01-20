const zoneResultat = document.querySelector(".resultat")
let resultat = document.createElement("p")
resultat.innerText = ``
resultat.classList.add("fadeIn")


//choix de la méthode (en ligne par défaut)
let methodeChoisie = "Ligne"
let listeBtnRadio = document.querySelectorAll(".choixMethode input")
for (let i = 0; i < listeBtnRadio.length; i++) {
    listeBtnRadio[i].addEventListener("change", (event) => {
        if (event.target.value === "1") {
            methodeChoisie = "Ligne"
        } else {
            methodeChoisie = "Vertical"
        }
    })
}

//déclenchement du calcul et affichage du résultat au clic sur le bouton 'calculer'
const submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", () => {
    if (methodeChoisie === "Ligne") {
        resultat.innerHTML = `<strong>Chemin de vie <em>${methodeEnLigne(divisionDeLaDate())}</em></strong><br>${affichageResultat(methodeEnLigne(divisionDeLaDate()))}`
        submitBtn.classList.add("ligne")
    } else {
        resultat.innerHTML = `<strong>Chemin de vie <em>${methodeVerticale(divisionDeLaDate())}</em></strong><br>${affichageResultat(methodeVerticale(divisionDeLaDate()))}`
        submitBtn.classList.add("vertical")
    }
    if (submitBtn.classList.contains("ligne") && submitBtn.classList.contains("vertical") && methodeEnLigne(divisionDeLaDate()) === methodeVerticale(divisionDeLaDate()) && zoneResultat.classList.contains("info")) {
        let messageMemeResultat = document.createElement("a")
        messageMemeResultat.setAttribute("href", "ensavoirplus.html#infoMemeResultat")
        messageMemeResultat.setAttribute("class", "has-tooltip info-icon")
        messageMemeResultat.setAttribute("data-tooltip", "Pourquoi ai-je obtenu deux fois le même résultat ?")
        messageMemeResultat.innerText = "🛈"
        zoneResultat.appendChild(messageMemeResultat)
        zoneResultat.classList.remove("info")
    }
    zoneResultat.appendChild(resultat)
})

function divisionDeLaDate() {
    let date = document.getElementById("date").value
    if (date) {
        const [year, month, day] = date.split('-').map(Number)
        return [year, month, day]
    }
}

function methodeEnLigne(date) {
    const year = date[0]
    const month = date[1]
    const day = date[2]
    const dizaineDay = Math.floor(day / 10)
    const uniteDay = day - dizaineDay * 10
    const dizaineMonth = Math.floor(month / 10)
    const uniteMonth = month - dizaineMonth * 10
    const millierYear = Math.floor(year / 1000)
    const centaineYear = Math.floor((year - millierYear * 1000) / 100)
    const dizaineYear = Math.floor((year - millierYear * 1000 - centaineYear * 100) / 10)
    const uniteYear = year - millierYear * 1000 - centaineYear * 100 - dizaineYear * 10
    let total = dizaineDay + uniteDay + dizaineMonth + uniteMonth + millierYear + centaineYear + dizaineYear + uniteYear
    while (total != 33 && total != 22 && total != 11 && total > 9) {
        const dizaineTotal = Math.floor(total / 10)
        const uniteTotal = total - dizaineTotal * 10
        total = dizaineTotal + uniteTotal
    }
    return total
}

function methodeVerticale(date) {
    const year = date[0]
    const month = date[1]
    const day = date[2]
    const dizaineDay = Math.floor(day / 10)
    const uniteDay = day - dizaineDay * 10
    const dizaineMonth = Math.floor(month / 10)
    const uniteMonth = month - dizaineMonth * 10
    const millierYear = Math.floor(year / 1000)
    const centaineYear = Math.floor((year - millierYear * 1000) / 100)
    const dizaineYear = Math.floor((year - millierYear * 1000 - centaineYear * 100) / 10)
    const uniteYear = year - millierYear * 1000 - centaineYear * 100 - dizaineYear * 10
    let totalDay = 0
    let totalMonth = 0
    if (day === 11 || day === 22) {
        totalDay = day
    } else if (day === 19 || day === 28) {
        totalDay = 1
    } else {
        totalDay = dizaineDay + uniteDay
    }
    if (month === 11) {
        totalMonth = month
    } else {
        totalMonth = dizaineMonth + uniteMonth
    }
    let totalYear = millierYear + centaineYear + dizaineYear + uniteYear
    while (totalYear != 33 && totalYear != 22 && totalYear != 11 && totalYear > 9) {
        const dizaineTotalYear = Math.floor(totalYear / 10)
        const uniteTotalYear = totalYear - dizaineTotalYear * 10
        totalYear = dizaineTotalYear + uniteTotalYear
    }
    let total = totalDay + totalMonth + totalYear
    while (total != 33 && total != 22 && total != 11 && total > 9) {
        const dizaineTotal = Math.floor(total / 10)
        const uniteTotal = total - dizaineTotal * 10
        total = dizaineTotal + uniteTotal

    }
    return (total)
}

function affichageResultat(resultat) {
    if (resultat === 1) {
        texte = "Le chiffre 1 symbolise l'origine, l'unité et le principe créateur. Il représente l'élan initial, la volonté d'exister et la capacité à se définir par soi-même. C'est une énergie d'affirmation, d'indépendance et de leadership, souvent associée à l'action et à l'initiative. Le 1 invite à tracer sa propre voie et à assumer pleinement son individualité. Lorsqu'il est mal équilibré, il peut engendrer de l'ego, de l'autoritarisme ou un sentiment d'isolement."
    }
    else if (resultat === 2) {
        texte = "Le chiffre 2 incarne la dualité, la relation et la complémentarité. Il symbolise l'écoute, la coopération et la recherche d'harmonie entre les opposés. C'est une énergie sensible, intuitive et réceptive, tournée vers l'autre et les liens affectifs. Le 2 favorise les partenariats, la diplomatie et la compréhension mutuelle. En déséquilibre, il peut conduire à l'indécision, à la dépendance émotionnelle ou à l'effacement de soi."
    }
    else if (resultat === 3) {
        texte = "Le chiffre 3 est associé à l'expression, à la créativité et à la communication. Il représente la joie de vivre, l'imagination et le besoin de partager. C'est une énergie expansive, sociale et inspirante, souvent liée à l'art, à la parole et à l'émotion. Le 3 encourage l'optimisme et la spontanéité dans l'expression personnelle. Mal canalisé, il peut se traduire par de la dispersion, un manque de profondeur ou une difficulté à se structurer."
    }
    else if (resultat === 4) {
        texte = "Le chiffre 4 symbolise la structure, la stabilité et les fondations solides. Il représente le travail, la rigueur et le sens de l'effort nécessaire à toute construction durable. C'est une énergie pragmatique, fiable et méthodique, tournée vers le concret et la sécurité. Le 4 invite à bâtir avec patience et persévérance. À l'excès, il peut générer rigidité, routine ou résistance au changement."
    }
    else if (resultat === 5) {
        texte = "Le chiffre 5 incarne la liberté, le mouvement et la transformation. Il symbolise le changement, l'expérience et l'adaptabilité face à l'imprévu. C'est une énergie dynamique, curieuse et audacieuse, attirée par la nouveauté et la diversité. Le 5 pousse à explorer, à évoluer et à sortir des cadres établis. En déséquilibre, il peut mener à l'instabilité, à l'impulsivité ou à une difficulté à s'engager."
    }
    else if (resultat === 6) {
        texte = "Le chiffre 6 représente l'harmonie, l'amour et la responsabilité. Il est lié à la famille, au foyer et au besoin de protection. C'est une énergie bienveillante, tournée vers le soin, l'équilibre et le sens du devoir. Le 6 cherche à créer un environnement stable et rassurant, fondé sur l'affection et la solidarité. Mal équilibré, il peut conduire au sacrifice excessif, à la culpabilité ou au contrôle affectif."
    }
    else if (resultat === 7) {
        texte = "Le chiffre 7 symbolise l'introspection, la connaissance et la quête de vérité. Il représente la réflexion profonde, l'analyse et la spiritualité. C'est une énergie intérieure, discrète et contemplative, orientée vers la compréhension du sens caché des choses. Le 7 invite à se détacher du superficiel pour accéder à une sagesse plus profonde. À l'excès, il peut engendrer isolement, froideur émotionnelle ou scepticisme excessif."
    }
    else if (resultat === 8) {
        texte = "Le chiffre 8 incarne le pouvoir, l'autorité et la maîtrise du monde matériel. Il symbolise la réussite, l'ambition et la capacité à gérer les responsabilités. C'est une énergie de concrétisation, de contrôle et d'équilibre entre le spirituel et le matériel. Le 8 invite à utiliser le pouvoir avec justesse et discernement. En déséquilibre, il peut devenir dominateur, rigide ou obsédé par le succès."
    }
    else if (resultat === 9) {
        texte = "Le chiffre 9 représente l'accomplissement, la sagesse et la fin d'un cycle. Il symbolise l'altruisme, la compassion et la transmission. C'est une énergie tournée vers l'humanité, le don de soi et la compréhension globale. Le 9 invite au détachement et à l'élévation intérieure. Mal intégré, il peut mener à la mélancolie, au désenchantement ou à une difficulté à lâcher prise."
    }
    else if (resultat === 11) {
        texte = "Le 11 est un maître nombre lié à l'intuition, à l'inspiration et à la conscience supérieure. Il amplifie la sensibilité et ouvre l'accès à des perceptions subtiles. C'est une énergie visionnaire, souvent associée à l'éveil spirituel et à la guidance. Sans ancrage, elle peut provoquer nervosité, anxiété ou instabilité intérieure."
    }
    else if (resultat === 22) {
        texte = "Le 22 symbolise la réalisation concrète de grandes visions. Il allie intuition élevée et sens pratique. C'est une énergie de construction à long terme, tournée vers des projets d'envergure et d'utilité collective. Le 22 invite à matérialiser des idéaux dans la réalité. Mal vécu, il peut générer une pression intérieure intense ou un sentiment de blocage."
    }
    else if (resultat === 33) {
        texte = "Le 33 représente l'amour universel, la compassion et le service désintéressé. Il est lié à la transmission, à l'enseignement et à l'élévation des autres. C'est une énergie de guidance, de soin et de dévouement profond. En déséquilibre, elle peut mener à l'oubli de soi et à l'épuisement émotionnel."
    }
    else {
        texte = 'il y a une erreur'
    }
    return (texte)
}