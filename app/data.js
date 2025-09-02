import Section from './model.js'

const sections = [
    new Section(`👤 Fiche d'identité`, `            
<section>
    <div class="identity">
        <p><strong>Nom :</strong> Kevin Coelho</p>
        <p><strong>Adresse :</strong> Jouy-le-Moutier (95280)</p>
        <p><strong>Email :</strong> coelhokev@ymail.com</p>
        <p><strong>Téléphone :</strong> 06 03 23 38 61</p>
        <p><strong>Date de naissance :</strong> 11/08/1990</p>
        <p><strong>Permis :</strong> Oui</p>
        <p><strong>Véhicule :</strong> Personnel</p>
    </div>
</section>
`,
        `✨ Je n'ai aucun lien de parenté avec le célèbre écrivain qui porte mon nom.`
    ),
    new Section(`🔎 À propos`, `
        <section>
    <div class="about">
        <p>Après 10 années dans le secteur de l'hôtellerie-restauration, une riche expérience acquise sur 5 postes au sein de 4 services distincts, l'envie d'un nouveau challenge et d'un changement complet d'environnement de travail m'amènent aujourd'hui à entamer une reconversion dans le monde du développement informatique.</p>
    </div>
</section>`,
        `✨ Passionné par les nouvelles technologies et l'informatique depuis mon plus jeune âge, j'ai toujours eu à cœur de comprendre le fonctionnement des outils numériques qui nous entourent.`
    ),
    new Section(`🎓 Diplômes et Formations`, `        
<section>
    <div class="diploma">
        <p><strong>Formation Développeur Web & Accessibilité - Titre Pro RNCP niveau V (bac+2) (en cours)</strong></p>
        <p>D’octobre 2024 à octobre 2025, Ecole O’Clock</p>
    </div>
    <div class="diploma">
        <p><strong>Master Management des Services en Hôtellerie Internationale</strong></p>
        <p>De 2012 à 2014, Université de Cergy-Pontoise, IUFM Gennevilliers</p>
    </div>
    <div class="diploma">
        <p><strong>Licence 3 Economie & Gestion, mention Gestion</strong></p>
        <p>De 2011 à 2012, Université de Cergy-Pontoise, Cergy-Pontoise</p>
    </div>
    <div class="diploma">
        <p><strong>DUT TC (Techniques de Commercialisation)</strong></p>
        <p>De 2008 à 2010, IUT de Saint-Denis, Université Paris XIII, 93200 Saint-Denis</p>
    </div>
    <div class="diploma">
        <p><strong>Baccalauréat ES (Economique et Sociale)</strong></p>
        <p>De 2007 à 2008, Lycée Louis Jouvet, Taverny</p>
    </div>
</section>
`,
        `✨ J'ai eu la chance de prendre part à un voyage de 2 semaines à New York dans le cadre de mon Master, un souvenir inoubliable.`
    ),
    new Section(`💼 Expériences professionnelles`, `
<section>
    <div class="job">
        <h2>Directeur d'établissement</h2>
        <p><strong>Période :</strong> De septembre 2021 à mai 2023</p>
        <p><strong>Lieu :</strong> Hôtel Best Western Plus 61 Paris Nation, Paris 75012</p>
        <ul>
            <li>Management équipe fixe 12 personnes + extras</li>
            <li>Prise de décision stratégique</li>
            <li>Mise en place de procédures opérationnelles</li>
            <li>Préparation budget annuel</li>
            <li>Relation clients + fournisseurs</li>
            <li>Développement du CA et optimisation des indicateurs financiers</li>
        </ul>
    </div>

    <div class="job">
        <h2>Directeur Adjoint</h2>
        <p><strong>Période :</strong> De janvier 2020 à septembre 2021</p>
        <p><strong>Lieu :</strong> Hôtel Best Western Plus Paris Vélizy, Vélizy-Villacoublay</p>
        <ul>
            <li>Encadrement chefs de départements</li>
            <li>Supervision recrutements</li>
            <li>Gestion crise sanitaire COVID-19 & mise en place protocole sanitaire</li>
        </ul>
    </div>

    <div class="job">
        <h2>Responsable Hébergement</h2>
        <p><strong>Période :</strong> De novembre 2018 à décembre 2019</p>
        <p><strong>Lieu :</strong> Hôtel Best Western Plus Paris Vélizy, Vélizy-Villacoublay</p>
        <ul>
            <li>Supervision des services Front Office et Housekeeping</li>
            <li>Développement de compétences Management et RH</li>
            <li>Préparation d'audit qualité</li>
            <li>Remplacement directeur d'établissement durant ses absences</li>
        </ul>
    </div>

    <div class="job">
        <h2>Attaché de Direction</h2>
        <p><strong>Période :</strong> De mars 2016 à octobre 2018</p>
        <p><strong>Lieu :</strong> Hôtel Best Western Plus Paris Vélizy, Vélizy-Villacoublay</p>
        <ul>
            <li>Cost control, économat, achats et gestion des stocks</li>
            <li>Référent HACCP</li>
            <li>Comptabilité fournisseur</li>
            <li>Missions RH</li>
            <li>Rôle de coordinateur inter-services</li>
        </ul>
    </div>

    <div class="job">
        <h2>Agent de Réservation</h2>
        <p><strong>Période :</strong> De juillet 2015 à février 2016</p>
        <p><strong>Lieu :</strong> Hôtel Best Western Plus Paris Vélizy, Vélizy-Villacoublay</p>
        <ul>
            <li>Gestion complète des demandes de groupes loisirs</li>
            <li>Prises de réservations individuelles et contrôle journalier des arrivées</li>
            <li>Analyses tarifaires et stratégie Yield Management</li>
        </ul>
    </div>

    <div class="job">
        <h2>Gouvernant d'étages en contrat d'apprentissage</h2>
        <p><strong>Période :</strong> D'octobre 2012 à octobre 2014</p>
        <p><strong>Lieu :</strong> Hôtel Castille Paris</p>
        <ul>
            <li>Encadrement des équipes Housekeeping</li>
            <li>Responsable ouverture & fermeture</li>
            <li>Conception des plannings</li>
            <li>Gestion des stocks</li>
        </ul>
    </div>
</section>`,
        `✨ En février 2018, je suis resté bloqué 4 jours dans l'hôtel où je travaillais lors d'une tempête de neige historique qui a paralysé toute l'Île-de-France. Hôtel complet, accueil en urgence de personnes qui ont dû abandonner leurs véhicules en pleine nuit, gestion des stocks alimentaires et de linge dans un contexte où plus aucun fournisseur ne pouvait nous atteindre, coordination des équipes en sous-effectif absolu... Une expérience professionnelle et humaine hors du commun ! Ah oui, il fallait bien entendu que ça arrive pendant les vacances au ski de mon directeur... 😉`
    ),
    new Section(`🌍 Langues`, `
<section>
    <ul class="languages">
        <li><strong>Anglais :</strong> Lu, parlé, écrit</li>
        <li><strong>Portugais :</strong> Lu, parlé</li>
        <li><strong>Allemand :</strong> Bases scolaires</li>
    </ul>
</section>`,
        '✨ Brian is in the kitchen'
    ),
    new Section(`⚽ Centres d'intérêt`, `
<section>
  <ul class="interests">
    <li>
      Informatique
      <button class="toggle">+</button>
      <div class="details hidden">Au lycée, j'ai monté seul et de toute pièce mon 1er PC en suivant des tutos sur YouTube. Beaucoup de stress, mais une satisfaction puissance 10 à l'arrivée !</div>
    </li>
    <li>
      Technologies de l'audiovisuel
      <button class="toggle">+</button>
      <div class="details hidden">Un Home-Cinema 5.1 ou rien !!</div>
    </li>
    <li>
      Cinéma
      <button class="toggle">+</button>
      <div class="details hidden">Grand fan de Tarantino et Christopher Nolan... je ne compte plus les soirées Kill Bill ou Interstellar <3.</div>
    </li>
    <li>
      Sport
      <button class="toggle">+</button>
      <div class="details hidden">10 ans de foot en club et un service dévastateur au ping-pong !</div>
    </li>
    <li>
      Cuisine
      <button class="toggle">+</button>
      <div class="details hidden">Pour moi ou pour les autres, j'adore prendre le temps de préparer une belle assiette.</div>
    </li>
    <li>
      Travaux manuels
      <button class="toggle">+</button>
      <div class="details hidden">En 2018, j'ai acheté une maison dont je n'ai gardé que les 4 murs exterieurs et le toit. Plus qu'un hobby, le bricolage est dans mon cas une necessité !</div>
    </li>
  </ul>
</section>
`,
        `✨ Depuis quelques années, ma pratique du sport à largement diminué. C'est quelquechose que j'ai à coeur de changer !`
    )
]

export default sections;