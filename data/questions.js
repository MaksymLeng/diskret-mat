window.QUESTIONS = [
  {
    "id": "A24-1",
    "source": "A-24",
    "type": "multi",
    "multi": true,
    "text": "Ktoré z nasledujúcich tvrdení platia pre celé čísla?",
    "options": [
      "ak a ≡ b (mod 2), tak aj b ≡ a (mod 1)",
      "ak a ≡ b (mod 4), tak aj b ≡ a (mod 2)",
      "ak a delí b aj b delí a, tak a = b"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Kongruencia modulo 4 dáva aj modulo 2; modulo 1 platí vždy. Delenie oboma smermi v celých číslach dáva a = ±b, nie nutne a = b."
  },
  {
    "id": "A24-2",
    "source": "A-24",
    "type": "multi",
    "multi": true,
    "text": "Ktorá z vlastností neplatí v distributívnom zväze (L, ∨, ∧)?",
    "options": [
      "A — komutatívnosť ∧: ∀x,y ∈ L: x ∧ y = y ∧ x",
      "B — zlá distributivita: ∀x,y,z ∈ L: x ∧ (y ∨ z) = (x ∧ y) ∨ z",
      "C — absorpcia: ∀x,y ∈ L: x ∨ (y ∧ x) = x",
      "D — zlé miešanie ∧ a ∨: ∀x,y ∈ L: x ∧ y = y ∨ x"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Správne sú B a D. A platí: ∧ je komutatívne. C platí: absorpcia x ∨ (y ∧ x)=x. B je zle, správne má byť (x ∧ y) ∨ (x ∧ z). D je zle, lebo ∧ a ∨ nie sú to isté."
  },
  {
    "id": "A24-3",
    "source": "A-24",
    "type": "multi",
    "multi": true,
    "text": "Nech G = (V,H), |V| = n, je súvislý graf a nech Ḡ je jeho komplement. Potom:",
    "options": [
      "G ∩ Ḡ = V",
      "G ∩ Ḡ = ∅",
      "G ∪ Ḡ = Kₙ",
      "G ∪ Ḡ = G"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "G a jeho komplement majú rovnakú množinu vrcholov V a disjunktné hrany; spolu dávajú kompletný graf Kₙ."
  },
  {
    "id": "A24-4",
    "source": "A-24",
    "type": "multi",
    "multi": true,
    "text": "Graf G = (V,H), H ≠ ∅, má chromatické číslo 2 práve vtedy, keď:",
    "options": [
      "obsahuje kružnicu nepárnej dĺžky",
      "neobsahuje kružnicu nepárnej dĺžky",
      "obsahuje kružnicu párnej dĺžky",
      "neobsahuje kružnicu"
    ],
    "answer": [
      1
    ],
    "explain": "Graf má χ(G)=2 práve vtedy, keď je bipartitný a má aspoň jednu hranu; bipartitný ⇔ neobsahuje nepárnu kružnicu."
  },
  {
    "id": "B24-1",
    "source": "B-24",
    "type": "multi",
    "multi": true,
    "text": "Zloženie dvoch injektívnych zobrazení:",
    "options": [
      "je injektívne",
      "nie je injektívne",
      "môže, ale aj nemusí byť injektívne"
    ],
    "answer": [
      0
    ],
    "explain": "Kompozícia dvoch injektívnych zobrazení je znovu injektívna."
  },
  {
    "id": "B24-2",
    "source": "B-24",
    "type": "multi",
    "multi": true,
    "text": "Formuly výrokovej logiky α, β sú sémanticky ekvivalentné práve vtedy, ak formula α ⇔ β:",
    "options": [
      "je kontradikcia",
      "je tautológia",
      "je splniteľná formula",
      "je kontradikcia alebo splniteľná formula, ktorá nie je tautológia"
    ],
    "answer": [
      1
    ],
    "explain": "Sémantická ekvivalencia znamená, že α a β majú rovnakú pravdivostnú hodnotu pri každom ohodnotení, teda α ⇔ β je tautológia."
  },
  {
    "id": "B24-3",
    "source": "B-24",
    "type": "multi",
    "multi": true,
    "text": "V komplementárnom zväze ku každému prvku:",
    "options": [
      "existuje práve jeden komplementárny prvok",
      "existuje aspoň jeden komplementárny prvok",
      "môže a nemusí existovať komplementárny prvok"
    ],
    "answer": [
      1
    ],
    "explain": "Komplementárny zväz vyžaduje existenciu aspoň jedného komplementu ku každému prvku; nemusí byť jednoznačný."
  },
  {
    "id": "B24-4",
    "source": "B-24",
    "type": "multi",
    "multi": true,
    "text": "Ak digraf G obsahuje prameň, tak:",
    "options": [
      "neobsahuje cyklus",
      "obsahuje určite aj ústie",
      "obsahuje vrchol s vnútorným stupňom väčším, ako je jeho vonkajší stupeň",
      "nie je súvislý"
    ],
    "answer": [
      2
    ],
    "explain": "Prameň má vnútorný stupeň 0 a kladný vonkajší stupeň; keďže súčet vnútorných a vonkajších stupňov v digrafe je rovnaký, niekde musí byť vnútorný stupeň väčší ako vonkajší."
  },
  {
    "id": "C24-1",
    "source": "C-24",
    "type": "multi",
    "multi": true,
    "text": "Nech (A, R) je čiastočne usporiadaná množina a nech M ⊆ A, M ≠ ∅. Potom supremum množiny M:",
    "options": [
      "nie je prvkom M",
      "musí byť prvkom M",
      "môže a nemusí byť prvkom M"
    ],
    "answer": [
      2
    ],
    "explain": "Supremum môže patriť do M, ale nemusí. Ak patrí, je to najväčší prvok M."
  },
  {
    "id": "C24-2",
    "source": "C-24",
    "type": "multi",
    "multi": true,
    "text": "Boolovská funkcia n premenných priraďuje:",
    "options": [
      "n-ticiam núl a jednotiek n-tice núl a jednotiek",
      "každej n-tici núl a jednotiek hodnotu 0 alebo 1",
      "niektorej n-tici núl a jednotiek hodnotu 0 alebo 1"
    ],
    "answer": [
      1
    ],
    "explain": "Boolovská funkcia je zobrazenie {0,1}ⁿ → {0,1}."
  },
  {
    "id": "C24-3",
    "source": "C-24",
    "type": "multi",
    "multi": true,
    "text": "Ak je graf G = (V,H) súvislý, tak nutne platí, že:",
    "options": [
      "každý jeho podgraf je súvislý",
      "obsahuje most alebo artikuláciu",
      "existuje jeho planárny podgraf",
      "jeho komplement Ḡ je vždy súvislý"
    ],
    "answer": [
      2
    ],
    "explain": "Každý súvislý graf má napríklad kostru, ktorá je stromom, teda planárnym podgrafom."
  },
  {
    "id": "C24-4",
    "source": "C-24",
    "type": "multi",
    "multi": true,
    "text": "Eulerovský graf G = (V,H):",
    "options": [
      "neobsahuje artikuláciu",
      "neobsahuje most",
      "je vždy planárny",
      "má chromatické číslo aspoň 3"
    ],
    "answer": [
      1
    ],
    "explain": "Súvislý eulerovský graf neobsahuje most, lebo každá hrana leží na uzavretom ťahu/cykle."
  },
  {
    "id": "D24-1",
    "source": "D-24",
    "type": "multi",
    "multi": false,
    "text": "Nech A je neprázdna množina a nech R je binárna relácia na A. Potom (A;R) je čiastočne usporiadaná množina, ak pre R na A platí idempotentnosť, komutatívnosť, asociatívnosť a absorpcia.",
    "options": [
      "Áno",
      "Nie"
    ],
    "answer": [
      1
    ],
    "explain": "Idempotentnosť, komutatívnosť, asociatívnosť a absorpcia sú vlastnosti operácií zväzu, nie vlastnosti binárnej relácie čiastočného usporiadania."
  },
  {
    "id": "D24-2",
    "source": "D-24",
    "type": "multi",
    "multi": true,
    "text": "V nedistributívnom zväze:",
    "options": [
      "sú každé dva prvky navzájom porovnateľné",
      "existuje práve jedna dvojica neporovnateľných prvkov",
      "existujú aspoň dve dvojice neporovnateľných prvkov"
    ],
    "answer": [
      2
    ],
    "explain": "Lineárny zväz je distributívny. Pri jednej neporovnateľnej dvojici vzniká ešte distributívny prípad; nedistributívnosť vyžaduje zložitejšiu štruktúru."
  },
  {
    "id": "D24-3",
    "source": "D-24",
    "type": "multi",
    "multi": true,
    "text": "Ak dva grafy majú rovnaký počet vrcholov, rovnaký počet hrán a rovnaké stupne vrcholov, tak:",
    "options": [
      "určite sú izomorfné",
      "môžu, ale aj nemusia byť izomorfné",
      "určite nie sú izomorfné"
    ],
    "answer": [
      1
    ],
    "explain": "Rovnaký počet vrcholov, hrán a rovnaká postupnosť stupňov je nutná, ale nie postačujúca podmienka izomorfizmu."
  },
  {
    "id": "D24-4",
    "source": "D-24",
    "type": "multi",
    "multi": true,
    "text": "Ak digraf G neobsahuje prameň ani ústie, tak:",
    "options": [
      "je acyklický",
      "obsahuje aspoň jeden cyklus",
      "určite je súvislý"
    ],
    "answer": [
      1
    ],
    "explain": "V konečnom digrafe, kde každý vrchol má vstup aj výstup, pri sledovaní hrán musíme naraziť na už navštívený vrchol, teda vznikne orientovaný cyklus."
  },
  {
    "id": "DM-T-01-a",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "Strom môže mať ľubovoľný počet stredov.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Strom má jeden alebo dva stredy."
  },
  {
    "id": "DM-T-01-b",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "V ČUM (A, ≤) môže existovať viac ako jeden najväčší prvok.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Najväčší prvok, ak existuje, je jednoznačný."
  },
  {
    "id": "DM-T-01-c",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "Podformulou formuly α nazývame formulu výrokovej logiky, ktorá sa vyskytuje v aspoň jednej vytvárajúcej postupnosti formuly α.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Toto je štandardná definícia cez vytvárajúcu postupnosť formuly."
  },
  {
    "id": "DM-T-01-d",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "V každom diagrame neplanárneho grafu sa hrany pretínajú.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Keby existoval diagram bez pretínania, graf by bol planárny."
  },
  {
    "id": "DM-T-01-e",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "V acyklickom digrafe existuje práve jeden prameň.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "V acyklickom digrafe existuje aspoň jeden prameň, nie nutne práve jeden."
  },
  {
    "id": "DM-T-01-f",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "Existuje práve 2^(2^n) rôznych boolovských funkcií s n premennými.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Je 2^n vstupov a pre každý sa volí hodnota 0/1."
  },
  {
    "id": "DM-T-01-g",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "Ak graf je hamiltonovský, tak každý vrchol má stupeň aspoň dva.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Hamiltonovská kružnica prechádza každým vrcholom a používa v ňom dve incidentné hrany."
  },
  {
    "id": "DM-T-01-h",
    "source": "DM-T-01",
    "type": "tf",
    "multi": false,
    "text": "Ak v komplementárnom zväze má každý prvok práve jeden komplement, tak zväz je distributívny.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Jednoznačnosť komplementu sama o sebe všeobecne nezaručuje distributívnosť."
  },
  {
    "id": "DM-T-02-a",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Existuje graf, v ktorom je každý vrchol jeho stredom.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Napríklad kompletný graf alebo cyklus má všetky vrcholy s rovnakou excentricitou."
  },
  {
    "id": "DM-T-02-b",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "V ČUM (A, ≤) nemôže existovať viac ako jeden najmenší prvok.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Najmenší prvok je jednoznačný, ak existuje."
  },
  {
    "id": "DM-T-02-c",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Podformulou formuly α nazývame formulu výrokovej logiky, ktorá sa vyskytuje vo všetkých vytvárajúcich postupnostiach formuly α.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Skutočná podformula sa objaví pri vytváraní danej formuly."
  },
  {
    "id": "DM-T-02-d",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Existuje diagram planárneho grafu, v ktorom sa hrany nepretínajú.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "To je priamo vlastnosť planárneho grafu."
  },
  {
    "id": "DM-T-02-e",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Ak digraf obsahuje ústie, tak je acyklický.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Digraf môže mať ústie a zároveň cyklus v inej časti."
  },
  {
    "id": "DM-T-02-f",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Existuje práve 2^n rôznych boolovských funkcií s n premennými.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Správny počet je 2^(2^n)."
  },
  {
    "id": "DM-T-02-g",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Ak je graf G súvislý, tak existuje jeho podgraf, ktorý je planárny.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Napríklad kostra súvislého grafu je strom a strom je planárny."
  },
  {
    "id": "DM-T-02-h",
    "source": "DM-T-02",
    "type": "tf",
    "multi": false,
    "text": "Zväz je distributívny práve vtedy, ak obsahuje podzväz izomorfný so zväzom M₅ alebo N₅.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Distributívny je práve vtedy, keď také zakázané podzväzy neobsahuje."
  },
  {
    "id": "DM-T-03-a",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "V strome T = (V,H), |V| ≥ 3, platí, že aspoň 2 vrcholy majú rôzne excentricity.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "V netriviálnom strome majú stredy menšiu excentricitu než listy."
  },
  {
    "id": "DM-T-03-b",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Ak binárna relácia R na množine M nie je symetrická, tak je antisymetrická.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Nesymetrickosť neznamená antisymetrickosť."
  },
  {
    "id": "DM-T-03-c",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Podformulou formuly α nazývame formulu výrokovej logiky, ktorá má menší počet výrokových premenných.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Podformula sa neurčuje podľa počtu premenných."
  },
  {
    "id": "DM-T-03-d",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Ak súvislý graf neobsahuje kružnicu, tak má práve jednu kostru.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Súvislý graf bez kružnice je strom, jeho jediná kostra je on sám."
  },
  {
    "id": "DM-T-03-e",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Ak digraf obsahuje prameň, tak je acyklický.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Cyklus môže byť v inej časti digrafu."
  },
  {
    "id": "DM-T-03-f",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Existuje práve n² rôznych boolovských funkcií s n premennými.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Správny počet je 2^(2^n)."
  },
  {
    "id": "DM-T-03-g",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Ak je graf G súvislý, tak aj jeho komplement Gᶜ je súvislý graf.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Napríklad komplement kompletného grafu je nesúvislý."
  },
  {
    "id": "DM-T-03-h",
    "source": "DM-T-03",
    "type": "tf",
    "multi": false,
    "text": "Boolovský zväz môže obsahovať podzväz izomorfný so zväzom N₅.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Boolovský zväz je distributívny, preto neobsahuje N₅ ako zakázaný podzväz."
  },
  {
    "id": "DM-T-04-a",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "Ak súčet stupňov ľubovoľnej dvojice vrcholov grafu G je aspoň n − 1, tak graf G je súvislý.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "V nesúvislom grafe by vrcholy z dvoch komponentov mali súčet stupňov najviac n−2."
  },
  {
    "id": "DM-T-04-b",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "Lineárne usporiadaná ČUM (A, ≤), |A| ≥ 2 je vždy distributívny zväz.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Reťazec má meet/join ako min/max a je distributívny."
  },
  {
    "id": "DM-T-04-c",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "Pre ľubovoľné formuly výrokovej logiky α a β je α ∧ ¬α ∧ β tautológia.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "α ∧ ¬α je kontradikcia."
  },
  {
    "id": "DM-T-04-d",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "Kompletný bipartitný graf K₃,₄ je planárny.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "K_{m,n} je planárny len ak min(m,n) ≤ 2."
  },
  {
    "id": "DM-T-04-e",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "V každom digrafe existuje aspoň jedna koreňová kostra.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Koreňová kostra vyžaduje špeciálnu dosiahnuteľnosť, nie každý digraf ju má."
  },
  {
    "id": "DM-T-04-f",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "Boolovská funkcia n premenných priraďuje každej n-tici núl a jednotiek hodnotu 0 alebo 1.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Je to zobrazenie {0,1}ⁿ → {0,1}."
  },
  {
    "id": "DM-T-04-g",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "Graf G = (V,H), H ≠ ∅, má chromatické číslo 2 práve vtedy, ak neobsahuje kružnicu nepárnej dĺžky.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Neexistencia nepárnej kružnice znamená bipartitnosť; pri H ≠ ∅ je χ(G)=2."
  },
  {
    "id": "DM-T-04-h",
    "source": "DM-T-04",
    "type": "tf",
    "multi": false,
    "text": "V boolovskom zväze má každý prvok práve jeden komplement.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "V boolovskom zväze je komplement jednoznačný."
  },
  {
    "id": "DM-T-05-a",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "Existuje práve jeden 7-vrcholový 3-pravidelný graf.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Súčet stupňov by bol 7·3=21, čo je nemožné, lebo musí byť párny."
  },
  {
    "id": "DM-T-05-b",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "V každej ČUM (A, ≤), |A| ≥ 2 existujú aspoň 2 rôzne maximálne prvky.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Reťazec má iba jeden maximálny prvok."
  },
  {
    "id": "DM-T-05-c",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "Ak pre formuly α a β platí, že α ⊨ β, potom α ⇔ β je tautológia.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Vyplývanie α ⊨ β neznamená ekvivalenciu; treba aj β ⊨ α."
  },
  {
    "id": "DM-T-05-d",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "Kompletný bipartitný graf K₅,₈ má práve 40 hrán.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Pre K_{m,n} platí |H| = m·n = 5·8 = 40."
  },
  {
    "id": "DM-T-05-e",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "V digrafe G existuje orientovaná kostra práve vtedy, ak G je súvislý.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Pri tomto type otázok sa súvislosť digrafu berie cez podkladový graf; potom existuje orientovaná kostra."
  },
  {
    "id": "DM-T-05-f",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "Ku každej boolovskej funkcii n premenných, ktorá nie je kontradikcia, existuje formula v konjunktívnom normálnom tvare, ktorá ju realizuje.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "Každá boolovská funkcia sa dá vyjadriť normálnym tvarom."
  },
  {
    "id": "DM-T-05-g",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "Graf G = (V,H), H ≠ ∅, má chromatické číslo 2 práve vtedy, ak je stromom.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      1
    ],
    "explain": "Aj párna kružnica má chromatické číslo 2, ale nie je strom."
  },
  {
    "id": "DM-T-05-h",
    "source": "DM-T-05",
    "type": "tf",
    "multi": false,
    "text": "Každý zväz má maximálny aj minimálny prvok.",
    "options": [
      "Pravda",
      "Nepravda"
    ],
    "answer": [
      0
    ],
    "explain": "V kontexte týchto testov sa pracuje s konečnými/ohraničenými zväzmi, kde existuje horný aj dolný krajný prvok."
  },
  {
    "id": "P-1-9",
    "source": "Praktická časť 1",
    "type": "multi",
    "multi": true,
    "text": "Pre maticu incidencie A grafu G = (V,H) platí:",
    "options": [
      "Matica A je symetrická podľa hlavnej diagonály.",
      "Matica A má v každom stĺpci rovnaký počet jednotiek.",
      "Počet jednotiek v riadku matice A je rovný stupňu odpovedajúceho vrchola.",
      "Všetky jednotky v matici A sú nad hlavnou diagonálou."
    ],
    "answer": [
      1,
      2
    ],
    "explain": "V matici incidencie má každý stĺpec pri obyčajnej hrane dve jednotky a súčet v riadku dáva stupeň vrchola."
  },
  {
    "id": "P-1-10",
    "source": "Praktická časť 1",
    "type": "multi",
    "multi": true,
    "text": "Zakrúžkujte pravdivé tvrdenie(a):",
    "options": [
      "Ak medzi každou dvojicou vrcholov grafu G existuje práve jedna cesta, tak graf G je stromom.",
      "Počet rôznych koreňových kostier v každom n-vrcholovom digrafe je nanajvýš n − 1.",
      "Ak digraf G obsahuje prameň, tak nie je silne súvislý.",
      "Ak je na vstupe Floydovho algoritmu hranovo ohodnotený súvislý digraf G = (V,H), tak na výstupe je dištančná matica D, ktorá je symetrická."
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Jednoznačná cesta medzi každou dvojicou vrcholov charakterizuje strom. Prameň bráni silnej súvislosti."
  },
  {
    "id": "P-2-9",
    "source": "Praktická časť 2",
    "type": "multi",
    "multi": true,
    "text": "Ak zväz (L, ∨, ∧) je distributívny, tak pre všetky x,y,z ∈ L platí:",
    "options": [
      "x ∨ (y ∧ z) = (x ∨ y) ∧ (x ∨ z)",
      "x ∨ (y ∧ z) = (x ∧ y) ∨ (x ∧ z)",
      "x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z)",
      "x ∧ (y ∨ z) = (x ∨ y) ∧ (x ∨ z)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Správne sú A a C. V distributívnom zväze platia obidve distributívne identity: join cez meet a meet cez join. B a D sú zámeny operácií a všeobecne neplatia."
  },
  {
    "id": "P-2-10",
    "source": "Praktická časť 2",
    "type": "multi",
    "multi": true,
    "text": "Zakrúžkujte pravdivé tvrdenie(a):",
    "options": [
      "V matici susednosti grafu G = (V,H) je počet jednotiek rovný dvojnásobku počtu hrán grafu G.",
      "Ak dva grafy sú izomorfné, tak ich matice susednosti sa zhodujú.",
      "V hamiltonovskom grafe je každá hrana vždy obsiahnutá v nejakej kružnici.",
      "Ford-Fulkersonov algoritmus na nájdenie maximálneho toku v sieti vždy skončí po n iteráciách, kde n je počet vrcholov siete."
    ],
    "answer": [
      0,
      2
    ],
    "explain": "V neorientovanom grafe sa každá hrana v matici susednosti počíta dvakrát. V hamiltonovskom grafe každá hrana leží na nejakej kružnici."
  },
  {
    "id": "P-3-9",
    "source": "Praktická časť 3",
    "type": "multi",
    "multi": true,
    "text": "Ak G = (V,H) je súvislý planárny graf, kde |V| = n, |H| = m a r je počet oblastí grafu G, tak platí:",
    "options": [
      "|H| ≤ 3|V| − 6",
      "|H| ≤ 2|V| − 4",
      "|H| ≥ 3|V| − 6",
      "|H| − |V| + 2 = r"
    ],
    "answer": [
      0,
      3
    ],
    "explain": "Pre jednoduchý súvislý planárny graf platí m ≤ 3n−6 a z Eulerovej vety r = m−n+2."
  },
  {
    "id": "P-3-10",
    "source": "Praktická časť 3",
    "type": "multi",
    "multi": true,
    "text": "Zakrúžkujte pravdivé tvrdenie(a):",
    "options": [
      "Nech T = (V,H) je strom. Potom platí: |V| = |H| − 1.",
      "Ak je graf G súvislý, tak každý jeho podgraf je súvislý.",
      "Súvislý eulerovský graf G neobsahuje most.",
      "Veľkosť maximálneho s–t toku je vždy rovná kapacite minimálneho s–t rezu v sieti G."
    ],
    "answer": [
      2,
      3
    ],
    "explain": "V strome je |H| = |V|−1, nie opačne. Eulerovský súvislý graf nemá most. Max-flow min-cut veta dáva d)."
  }
];

const $ = (id)=>document.getElementById(id);
