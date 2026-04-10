// ============================================================
// Section 1: Question Answer Labels – French (FR)
// ============================================================
const questionAnswerLabels_fr = {
  data_q1: { 1: 'Aucun inventaire. Les équipes découvrent les données par hasard', 2: 'Connaissance partielle. Les sources clés sont identifiées mais l\'accès est lent', 3: 'Inventaire documenté. La plupart des sources sont cartographiées avec quelques lacunes d\'accès', 4: 'Catalogue exhaustif. Toutes les sources sont documentées avec des chemins d\'accès clairs', 5: 'Catalogue automatisé avec traçabilité en temps réel et accès instantané' },
  data_q2: { 1: 'Totalement cloisonné. Chaque outil possède ses propres données déconnectées', 2: 'Intégration manuelle partielle. Exports périodiques entre 1 à 2 systèmes', 3: 'Unification partielle. 2 à 3 systèmes centraux connectés mais des lacunes subsistent', 4: 'Profil client unifié. La plupart des points de contact sont connectés et maintenus', 5: 'CDP unifié en temps réel. Toutes les sources intégrées avec synchronisation automatisée' },
  data_q3: { 1: 'Aucun tableau de bord utilisé. Les décisions reposent sur l\'intuition', 2: 'Reporting occasionnel. Certains dirigeants consultent les données mensuellement', 3: 'Reporting régulier. Des tableaux de bord existent mais leur utilisation varie selon les équipes', 4: 'Culture orientée données. Les dirigeants utilisent activement les tableaux de bord pour leurs décisions', 5: 'Opérations pilotées par les données. Les données en temps réel guident les décisions quotidiennes à tous les niveaux' },
  data_q4: { 1: 'Aucune capacité prédictive. Reporting purement historique', 2: 'Analyse de tendances basique. Projections sur tableur', 3: 'Quelques prévisions. Modèles prédictifs limités dans 1 à 2 domaines', 4: 'Analytique prédictive active. Modèles déployés pour les décisions clés', 5: 'Modèles avancés de ML. Prédictions automatisées guidant des actions proactives' },
  data_q5: { 1: 'Aucune responsabilité. La qualité des données n\'est la responsabilité de personne', 2: 'Responsabilité informelle. Certaines équipes s\'en soucient mais sans standards', 3: 'Standards documentés. Règles de qualité basiques mais application incohérente', 4: 'Données gouvernées. Responsabilités claires, règles de qualité et audits réguliers', 5: 'Gouvernance automatisée. Surveillance continue de la qualité avec alertes proactives' },
  data_q6: { 1: 'Impossible de mesurer le ROI. Les dépenses sont incontrôlables', 2: 'Dernier clic uniquement. Attribution basique par canal', 3: 'Suivi multicanal. Quelques modèles d\'attribution en place', 4: 'Attribution multi-touch. Revenus reliés aux campagnes de manière fiable', 5: 'Attribution avancée. Tests d\'incrémentalité, MMM, optimisation en temps réel' },
  ai_q1: { 1: 'Aucun cas d\'usage IA identifié. Juste un intérêt général', 2: 'Idées vagues. « Nous devrions utiliser l\'IA » sans précisions', 3: 'Cas d\'usage documentés. 2 à 3 problèmes spécifiques identifiés', 4: 'Portefeuille priorisé. Cas d\'usage classés par ROI avec des responsables désignés', 5: 'Feuille de route IA stratégique. Cas d\'usage alignés sur les objectifs métier avec des indicateurs' },
  ai_q2: { 1: 'Aucune IA en production. Expérimentations uniquement ou rien', 2: 'Phase pilote. Un outil en test sans indicateurs clairs', 3: 'Un cas en production. Apportant une valeur mesurable', 4: 'Plusieurs IA en production. 2+ solutions avec un impact mesurable', 5: 'IA intégrée. Plusieurs systèmes IA intégrés dans les opérations avec un ROI clair' },
  ai_q3: { 1: 'Aucune politique IA. Outils utilisés sans directives', 2: 'Sensibilisation basique. Quelques règles verbales mais rien de documenté', 3: 'Politiques documentées. Des directives écrites existent mais l\'adoption varie', 4: 'Gouvernance appliquée. Politiques respectées avec des contrôles de conformité réguliers', 5: 'Gouvernance IA mature. Surveillance automatisée, contrôles de biais, audits réguliers' },
  ai_q4: { 1: 'Aucune compétence IA. Les équipes ignorent les applications pratiques', 2: 'Prompting basique. Quelques individus expérimentent', 3: 'Adoption croissante. 20 à 30 % utilisent l\'IA dans leurs flux de travail', 4: 'Utilisation généralisée. La plupart des équipes utilisent l\'IA efficacement avec des standards clairs', 5: 'Organisation maîtrisant l\'IA. Les équipes identifient et déploient des solutions IA de manière autonome' },
  ai_q5: { 1: 'Aucune automatisation. Toutes les tâches sont manuelles', 2: 'Automatisation mineure. 1 à 2 tâches simples automatisées', 3: 'Réduction partielle. 10 à 20 % des tâches répétitives automatisées', 4: 'Automatisation significative. Réduction de 25 à 40 % du travail manuel', 5: 'Hautement automatisé. Réduction de 50 %+ des tâches manuelles avec des flux intelligents' },
  ai_q6: { 1: 'Aucun critère d\'évaluation. Le choix des fournisseurs est ad hoc', 2: 'Comparaison basique. Fonctionnalités et prix uniquement', 3: 'Évaluation structurée. Intégration et sécurité prises en compte', 4: 'Évaluation rigoureuse. Sécurité, intégration et ROI validés avant l\'achat', 5: 'Approvisionnement stratégique. Outils IA évalués par rapport à la feuille de route architecturale et aux résultats métier' },
  experience_q1: { 1: 'Aucune cartographie des parcours. Les chemins clients sont inconnus', 2: 'Parcours supposés. Vision interne sans validation par les données', 3: 'Cartographie partielle. Parcours clés documentés avec quelques données', 4: 'Cartographies exhaustives. Tous les parcours clés cartographiés avec données d\'abandon', 5: 'Analytique des parcours en temps réel. Surveillance et optimisation continues' },
  experience_q2: { 1: 'Incohérent partout. Réponses différentes selon le canal', 2: 'Partiellement cohérent. 1 à 2 canaux alignés', 3: 'Globalement cohérent. Canaux principaux alignés mais des lacunes subsistent', 4: 'Expérience connectée. Ton, données et transferts cohérents entre les canaux', 5: 'Excellence omnicanale. Expérience fluide et contextuelle sur tous les points de contact' },
  experience_q3: { 1: 'Aucune personnalisation. Tout le monde reçoit la même expérience', 2: 'Segments basiques. Listes d\'audience basées sur la démographie', 3: 'Segments comportementaux. Ciblage partiel basé sur les actions', 4: 'Personnalisation dynamique. Le contenu s\'adapte en fonction du comportement en temps réel', 5: 'Personnalisation prédictive. Expériences anticipatrices pilotées par l\'IA à grande échelle' },
  experience_q4: { 1: 'Aucune collecte de feedback. La voix du client est absente', 2: 'Enquêtes occasionnelles. Feedback ad hoc sans processus défini', 3: 'Collecte régulière. Enquêtes NPS/CSAT avec reporting basique', 4: 'VoC systématique. Feedback collecté, analysé et exploité', 5: 'VoC en boucle fermée. Chaque insight déclenche une amélioration avec suivi des résultats' },
  experience_q5: { 1: 'Aucun test. Les décisions de conception reposent sur les opinions', 2: 'Tests rares. Tests A/B occasionnels sans rigueur', 3: 'Tests réguliers. Tests mensuels avec une approche basée sur des hypothèses', 4: 'Optimisation systématique. Tests continus générant des améliorations mesurables', 5: 'Expérimentation avancée. Tests multivariés, optimisation assistée par le ML' },
  experience_q6: { 1: 'Aucune segmentation. Tous les clients sont traités de la même manière', 2: 'Segments basiques. Regroupements généraux sans différenciation', 3: 'Segments par valeur. Clients à haute et basse valeur identifiés', 4: 'Stratégies différenciées. Expériences personnalisées par segment', 5: 'LTV prédictive. Stratégies de segmentation pilotées par l\'IA maximisant la valeur à vie' },
  governance_q1: { 1: 'Aucune responsabilité. Les initiatives dérivent sans redevabilité', 2: 'Responsabilité partagée. Des comités existent mais sans autorité individuelle', 3: 'Responsables désignés. La plupart des initiatives ont des référents assignés', 4: 'Responsables habilités. Individus autorisés à prendre des décisions et tenus responsables', 5: 'Redevabilité mature. Cadres RACI, journaux de décisions et suivi des résultats' },
  governance_q2: { 1: 'Aucune politique. La conformité est accidentelle', 2: 'Politiques obsolètes. Des documents existent mais ne sont pas suivis', 3: 'Politiques à jour. Documentées et partiellement adoptées', 4: 'Politiques appliquées. Régulièrement révisées, formées et auditées', 5: 'Gouvernance adaptative. Les politiques évoluent avec les réglementations, surveillance automatisée de la conformité' },
  governance_q3: { 1: 'Goulots d\'étranglement sévères. Les approbations prennent des semaines', 2: 'Lent mais fonctionnel. Approbations en jours avec des retards fréquents', 3: 'Vitesse raisonnable. La plupart des approbations sous 48 heures', 4: 'Rapide et encadré. Chemins d\'approbation clairs avec des SLA définis', 5: 'Gouvernance agile. Approbations échelonnées, flux automatisés, traitement le jour même pour la plupart des éléments' },
  governance_q4: { 1: 'Aucune visibilité. Nombre d\'outils et coûts inconnus', 2: 'Connaissance partielle. Certains outils suivis de manière informelle', 3: 'Inventaire basique. Outils répertoriés avec coûts et dates de renouvellement', 4: 'Portefeuille géré. Utilisation suivie, redondances identifiées, intégrations cartographiées', 5: 'Stack optimisé. Rationalisation continue, surveillance automatisée de l\'utilisation, ROI suivi' },
  governance_q5: { 1: 'Sécurité minimale. Aucune évaluation ni plan d\'incident', 2: 'Mesures basiques. Pare-feu et antivirus mais pas de programme formel', 3: 'Sécurité structurée. Évaluations annuelles, réponse aux incidents basique', 4: 'Sécurité mature. Tests d\'intrusion réguliers, personnel formé, procédures documentées', 5: 'Sécurité avancée. Surveillance continue, exercices red team, intégrée dans la culture' },
  governance_q6: { 1: 'Aucune gestion du changement. Les outils sont déployés puis oubliés', 2: 'Formation basique. Sessions ponctuelles avec un faible suivi', 3: 'Déploiement structuré. Plans de formation, ambassadeurs et suivi', 4: 'Adoption gérée. Indicateurs d\'adoption suivis, résistance traitée de manière proactive', 5: 'Intégration culturelle. La gestion du changement est intégrée à chaque initiative, amélioration continue' },
  performance_q1: { 1: 'Indicateurs de vanité uniquement. Impressions, abonnés, pages vues', 2: 'Quelques indicateurs de résultat. Suivi basique du chiffre d\'affaires en complément', 3: 'KPI connectés. Indicateurs liés aux résultats métier pour les domaines clés', 4: 'Orienté résultats. Chiffre d\'affaires, rentabilité et LTV pilotent tous les rapports', 5: 'KPI prédictifs. Indicateurs avancés et prévisions guidant les décisions stratégiques' },
  performance_q2: { 1: 'Aucun test. Pas de tests A/B ni d\'expérimentations', 2: 'Tests occasionnels. 1 à 2 par trimestre sans rigueur', 3: 'Tests mensuels. Programme structuré avec hypothèses', 4: 'Expérimentation continue. 4+ tests/mois guidant les décisions', 5: 'Culture du test systématique. Tests multivariés, incrémentalité et tests automatisés' },
  performance_q3: { 1: 'Aucune visibilité par canal. L\'allocation budgétaire relève de la conjecture', 2: 'Indicateurs basiques par canal. Reporting cloisonné par canal', 3: 'Comparaison cross-canal. Capacité à classer les canaux par efficacité', 4: 'Allocation pilotée par les données. Réallocations budgétaires basées sur les données de performance', 5: 'Optimisation en temps réel. Allocation budgétaire automatisée basée sur la performance en direct' },
  performance_q4: { 1: 'Tracking défaillant. Les données sont peu fiables ou manquantes', 2: 'Tracking basique. Analytics installé mais non audité', 3: 'Globalement précis. Audits réguliers, quelques problèmes de qualité des données', 4: 'Analytics de confiance. Tracking exhaustif, audits réguliers, confiance des équipes', 5: 'Mesure de référence. Traçabilité complète des données, validation automatisée, zéro problème de confiance' },
  performance_q5: { 1: 'Activités zombies. Le travail sous-performant se poursuit indéfiniment', 2: 'Revue occasionnelle. Certaines activités arrêtées de manière ad hoc', 3: 'Revues régulières. Évaluations de performance trimestrielles', 4: 'Processus structuré. Critères clairs pour les décisions d\'amélioration ou d\'arrêt', 5: 'Optimisation continue. Alertes automatisées et flux systématiques d\'arrêt ou d\'amélioration' },
  performance_q6: { 1: 'Aucun alignement. Les équipes ne peuvent pas relier leur travail aux objectifs métier', 2: 'Lien vague. Connaissance des objectifs mais sans ligne de mire claire', 3: 'Alignement partiel. Les équipes clés ont des cibles liées à la stratégie', 4: 'Alignement clair. Toutes les équipes ont des cibles mesurables connectées aux KPI', 5: 'Cascade complète. Objectifs individuels liés aux résultats métier avec suivi en temps réel' }
};

// ============================================================
// Section 1: Question Answer Labels – Italian (IT)
// ============================================================
const questionAnswerLabels_it = {
  data_q1: { 1: 'Nessun inventario. I team scoprono i dati per caso', 2: 'Conoscenza parziale. Le fonti principali sono note ma l\'accesso è lento', 3: 'Inventario documentato. La maggior parte delle fonti è mappata con alcune lacune di accesso', 4: 'Catalogo completo. Tutte le fonti documentate con percorsi di accesso chiari', 5: 'Catalogo automatizzato con lineage in tempo reale e accesso istantaneo' },
  data_q2: { 1: 'Completamente isolato. Ogni strumento ha i propri dati disconnessi', 2: 'Integrazione manuale parziale. Esportazioni periodiche tra 1-2 sistemi', 3: 'Unificazione parziale. 2-3 sistemi centrali connessi ma permangono lacune', 4: 'Profilo cliente unificato. La maggior parte dei touchpoint è connessa e manutenuta', 5: 'CDP unificata in tempo reale. Tutte le fonti integrate con sincronizzazione automatizzata' },
  data_q3: { 1: 'Nessun utilizzo di dashboard. Le decisioni sono basate sull\'istinto', 2: 'Reporting occasionale. Alcuni dirigenti consultano i dati mensilmente', 3: 'Reporting regolare. I dashboard esistono ma l\'utilizzo varia per team', 4: 'Cultura orientata ai dati. I dirigenti utilizzano attivamente i dashboard per le decisioni', 5: 'Operazioni guidate dai dati. I dati in tempo reale guidano le decisioni quotidiane a tutti i livelli' },
  data_q4: { 1: 'Nessuna capacità predittiva. Reporting puramente storico', 2: 'Analisi di tendenze di base. Proiezioni su foglio di calcolo', 3: 'Alcune previsioni. Modelli predittivi limitati in 1-2 aree', 4: 'Analisi predittiva attiva. Modelli implementati per le decisioni chiave', 5: 'Modelli avanzati di ML. Previsioni automatizzate che guidano azioni proattive' },
  data_q5: { 1: 'Nessuna titolarità. La qualità dei dati non è responsabilità di nessuno', 2: 'Titolarità informale. Alcuni team se ne occupano ma senza standard', 3: 'Standard documentati. Regole di qualità di base ma applicazione incoerente', 4: 'Dati governati. Titolarità chiara, regole di qualità e audit regolari', 5: 'Governance automatizzata. Monitoraggio continuo della qualità con avvisi proattivi' },
  data_q6: { 1: 'Impossibile misurare il ROI. Le spese sono incontrollabili', 2: 'Solo ultimo clic. Attribuzione di base per canale', 3: 'Tracciamento multicanale. Alcuni modelli di attribuzione implementati', 4: 'Attribuzione multi-touch. Ricavi collegati alle campagne in modo affidabile', 5: 'Attribuzione avanzata. Test di incrementalità, MMM, ottimizzazione in tempo reale' },
  ai_q1: { 1: 'Nessun caso d\'uso IA identificato. Solo interesse generico', 2: 'Idee vaghe. «Dovremmo usare l\'IA» senza specificità', 3: 'Casi d\'uso documentati. 2-3 problemi specifici identificati', 4: 'Portafoglio prioritizzato. Casi d\'uso classificati per ROI con responsabili designati', 5: 'Roadmap strategica IA. Casi d\'uso mappati sugli obiettivi di business con metriche' },
  ai_q2: { 1: 'Nessuna IA in produzione. Solo esperimenti o nulla', 2: 'Fase pilota. Uno strumento in test senza metriche chiare', 3: 'Un caso in produzione. Genera un valore misurabile', 4: 'Più soluzioni IA in produzione. 2+ soluzioni con impatto misurabile', 5: 'IA integrata. Più sistemi IA integrati nelle operazioni con ROI chiaro' },
  ai_q3: { 1: 'Nessuna politica IA. Strumenti utilizzati senza linee guida', 2: 'Consapevolezza di base. Alcune regole verbali ma nulla di documentato', 3: 'Politiche documentate. Linee guida scritte esistono ma l\'adozione varia', 4: 'Governance applicata. Politiche rispettate con controlli di conformità regolari', 5: 'Governance IA matura. Monitoraggio automatizzato, controlli di bias, audit regolari' },
  ai_q4: { 1: 'Nessuna competenza IA. I team non conoscono le applicazioni pratiche', 2: 'Prompting di base. Pochi individui sperimentano', 3: 'Adozione crescente. Il 20-30% utilizza l\'IA nei flussi di lavoro', 4: 'Utilizzo diffuso. La maggior parte dei team utilizza l\'IA efficacemente con standard chiari', 5: 'Organizzazione fluente in IA. I team identificano e implementano soluzioni IA in autonomia' },
  ai_q5: { 1: 'Nessuna automazione. Tutti i compiti sono manuali', 2: 'Automazione minore. 1-2 compiti semplici automatizzati', 3: 'Riduzione parziale. Il 10-20% dei compiti ripetitivi automatizzati', 4: 'Automazione significativa. Riduzione del 25-40% del lavoro manuale', 5: 'Altamente automatizzato. Riduzione del 50%+ dei compiti manuali con flussi intelligenti' },
  ai_q6: { 1: 'Nessun criterio di valutazione. La scelta dei fornitori è ad hoc', 2: 'Confronto di base. Solo funzionalità e prezzo', 3: 'Valutazione strutturata. Integrazione e sicurezza considerate', 4: 'Valutazione rigorosa. Sicurezza, integrazione e ROI validati prima dell\'acquisto', 5: 'Approvvigionamento strategico. Strumenti IA valutati rispetto alla roadmap architetturale e ai risultati di business' },
  experience_q1: { 1: 'Nessuna mappatura dei percorsi. I percorsi dei clienti sono sconosciuti', 2: 'Percorsi presunti. Visione interna senza validazione tramite dati', 3: 'Mappatura parziale. Percorsi chiave documentati con alcuni dati', 4: 'Mappe complete. Tutti i percorsi chiave mappati con dati di abbandono', 5: 'Analisi dei percorsi in tempo reale. Monitoraggio e ottimizzazione continui' },
  experience_q2: { 1: 'Incoerente ovunque. Risposte diverse per ogni canale', 2: 'Parzialmente coerente. 1-2 canali allineati', 3: 'Perlopiù coerente. Canali principali allineati ma permangono lacune', 4: 'Esperienza connessa. Tono, dati e passaggi coerenti tra i canali', 5: 'Eccellenza omnicanale. Esperienza fluida e contestuale su tutti i touchpoint' },
  experience_q3: { 1: 'Nessuna personalizzazione. Tutti ricevono la stessa esperienza', 2: 'Segmenti di base. Liste di pubblico basate sulla demografia', 3: 'Segmenti comportamentali. Targeting parziale basato sulle azioni', 4: 'Personalizzazione dinamica. I contenuti si adattano in base al comportamento in tempo reale', 5: 'Personalizzazione predittiva. Esperienze anticipatorie guidate dall\'IA su larga scala' },
  experience_q4: { 1: 'Nessuna raccolta di feedback. La voce del cliente è assente', 2: 'Sondaggi occasionali. Feedback ad hoc senza processo definito', 3: 'Raccolta regolare. Sondaggi NPS/CSAT con reporting di base', 4: 'VoC sistematica. Feedback raccolto, analizzato e utilizzato', 5: 'VoC a ciclo chiuso. Ogni insight genera un miglioramento con risultati tracciati' },
  experience_q5: { 1: 'Nessun test. Le decisioni di design si basano sulle opinioni', 2: 'Test rari. Test A/B occasionali senza rigore', 3: 'Test regolari. Test mensili con approccio basato su ipotesi', 4: 'Ottimizzazione sistematica. Test continui che generano miglioramenti misurabili', 5: 'Sperimentazione avanzata. Test multivariati, ottimizzazione assistita dal ML' },
  experience_q6: { 1: 'Nessuna segmentazione. Tutti i clienti sono trattati allo stesso modo', 2: 'Segmenti di base. Raggruppamenti generici senza differenziazione', 3: 'Segmenti per valore. Clienti ad alto e basso valore identificati', 4: 'Strategie differenziate. Esperienze personalizzate per segmento', 5: 'LTV predittivo. Strategie di segmentazione guidate dall\'IA che massimizzano il valore nel tempo' },
  governance_q1: { 1: 'Nessuna titolarità. Le iniziative procedono senza accountability', 2: 'Titolarità condivisa. Esistono comitati ma senza autorità individuale', 3: 'Responsabili designati. La maggior parte delle iniziative ha referenti assegnati', 4: 'Responsabili autorizzati. Individui autorizzati a prendere decisioni e ritenuti responsabili', 5: 'Accountability matura. Framework RACI, registri delle decisioni e monitoraggio dei risultati' },
  governance_q2: { 1: 'Nessuna politica. La conformità è accidentale', 2: 'Politiche obsolete. I documenti esistono ma non vengono seguiti', 3: 'Politiche aggiornate. Documentate e parzialmente adottate', 4: 'Politiche applicate. Regolarmente riviste, oggetto di formazione e auditate', 5: 'Governance adattiva. Le politiche evolvono con le normative, monitoraggio automatizzato della conformità' },
  governance_q3: { 1: 'Gravi colli di bottiglia. Le approvazioni richiedono settimane', 2: 'Lento ma funzionale. Approvazioni in giorni con frequenti ritardi', 3: 'Velocità ragionevole. La maggior parte delle approvazioni entro 48 ore', 4: 'Rapido e governato. Percorsi di approvazione chiari con SLA definiti', 5: 'Governance agile. Approvazioni a livelli, flussi automatizzati, elaborazione in giornata per la maggior parte degli elementi' },
  governance_q4: { 1: 'Nessuna visibilità. Numero di strumenti e costi sconosciuti', 2: 'Conoscenza parziale. Alcuni strumenti tracciati in modo informale', 3: 'Inventario di base. Strumenti elencati con costi e date di rinnovo', 4: 'Portafoglio gestito. Utilizzo tracciato, ridondanze identificate, integrazioni mappate', 5: 'Stack ottimizzato. Razionalizzazione continua, monitoraggio automatizzato dell\'utilizzo, ROI tracciato' },
  governance_q5: { 1: 'Sicurezza minima. Nessuna valutazione né piano di risposta agli incidenti', 2: 'Misure di base. Firewall e antivirus ma nessun programma formale', 3: 'Sicurezza strutturata. Valutazioni annuali, risposta agli incidenti di base', 4: 'Sicurezza matura. Penetration test regolari, personale formato, playbook documentati', 5: 'Sicurezza avanzata. Monitoraggio continuo, esercitazioni red team, integrata nella cultura' },
  governance_q6: { 1: 'Nessuna gestione del cambiamento. Gli strumenti vengono implementati e dimenticati', 2: 'Formazione di base. Sessioni una tantum con scarso follow-up', 3: 'Rollout strutturato. Piani di formazione, champion e follow-up', 4: 'Adozione gestita. Metriche di adozione tracciate, resistenza affrontata proattivamente', 5: 'Integrazione culturale. La gestione del cambiamento è integrata in ogni iniziativa, miglioramento continuo' },
  performance_q1: { 1: 'Solo metriche di vanità. Impression, follower, visualizzazioni di pagina', 2: 'Alcune metriche di risultato. Monitoraggio di base del fatturato a complemento', 3: 'KPI connessi. Metriche collegate ai risultati di business per le aree chiave', 4: 'Orientato ai risultati. Fatturato, profitto e LTV guidano tutti i report', 5: 'KPI predittivi. Indicatori anticipatori e previsioni guidano le decisioni strategiche' },
  performance_q2: { 1: 'Nessun test. Nessun test A/B né esperimento', 2: 'Test occasionali. 1-2 per trimestre senza rigore', 3: 'Test mensili. Programma strutturato con ipotesi', 4: 'Sperimentazione continua. 4+ test/mese che guidano le decisioni', 5: 'Cultura del test sistematico. Test multivariati, incrementalità e test automatizzati' },
  performance_q3: { 1: 'Nessuna visibilità per canale. L\'allocazione del budget è congettura', 2: 'Metriche di base per canale. Reporting isolato per canale', 3: 'Confronto cross-canale. Possibilità di classificare i canali per efficienza', 4: 'Allocazione guidata dai dati. Riallocazioni del budget basate sui dati di performance', 5: 'Ottimizzazione in tempo reale. Allocazione automatizzata del budget basata sulla performance live' },
  performance_q4: { 1: 'Tracking difettoso. I dati sono inaffidabili o mancanti', 2: 'Tracking di base. Analytics installato ma non auditato', 3: 'Perlopiù accurato. Audit regolari, alcuni problemi di qualità dei dati', 4: 'Analytics affidabile. Tracking completo, audit regolari, fiducia del team', 5: 'Misurazione di riferimento. Lineage completo dei dati, validazione automatizzata, zero problemi di fiducia' },
  performance_q5: { 1: 'Attività zombie. Il lavoro sottoperformante continua indefinitamente', 2: 'Revisione occasionale. Alcune attività interrotte in modo ad hoc', 3: 'Revisioni regolari. Valutazioni di performance trimestrali', 4: 'Processo strutturato. Criteri chiari per le decisioni di miglioramento o interruzione', 5: 'Ottimizzazione continua. Avvisi automatizzati e flussi sistematici di interruzione o miglioramento' },
  performance_q6: { 1: 'Nessun allineamento. I team non riescono a collegare il proprio lavoro agli obiettivi di business', 2: 'Collegamento vago. Consapevolezza degli obiettivi ma senza una linea di visibilità chiara', 3: 'Allineamento parziale. I team chiave hanno obiettivi legati alla strategia', 4: 'Allineamento chiaro. Tutti i team hanno obiettivi misurabili collegati ai KPI', 5: 'Cascata completa. Obiettivi individuali collegati ai risultati di business con tracciamento in tempo reale' }
};

// ============================================================
// Section 2: Insight Models – French (FR)
// ============================================================
const insightModels_fr = {
  data: {
    critical: 'La capacité en matière de données est essentiellement inexistante. Il n\'existe aucune vue unifiée des clients, aucun suivi fiable, et les décisions sont prises entièrement sur la base de l\'intuition ou de tableurs obsolètes. Ce n\'est pas une lacune — c\'est un socle manquant. <strong>Action immédiate :</strong> réalisez un inventaire d\'urgence des données, identifiez la source de données la plus critique et assignez-lui un responsable nommé avant toute autre initiative.',
    low: 'Votre organisation fonctionne avec d\'importants angles morts en matière de données. Des sources fragmentées, des définitions incohérentes et un manque de confiance dans l\'exactitude des données signifient que les décisions reposent sur des informations incomplètes ou peu fiables. Ce n\'est pas seulement un problème informatique — c\'est un enjeu stratégique. Sans données unifiées, la personnalisation échoue, l\'attribution relève de la conjecture et les initiatives IA stagnent avant même de démarrer. <strong>Action immédiate :</strong> auditez toutes les sources de données, assignez des responsables et mettez en place des règles basiques de qualité des données avant d\'investir dans un quelconque outil d\'analyse.',
    mid: 'Vos fondations en matière de données existent mais ne génèrent pas encore de valeur stratégique. Les données sont probablement accessibles dans certains domaines mais cloisonnées dans d\'autres, avec une qualité incohérente et des capacités prédictives limitées. Le risque à ce stade est la complaisance — un reporting basique peut créer une fausse impression de maturité data. <strong>Axe prioritaire :</strong> unifiez vos sources de données principales dans une vue client unique, établissez des standards de gouvernance et commencez à former les équipes à utiliser les données de manière proactive plutôt que réactive.',
    advancing: 'Les pratiques en matière de données sont systématisées et en phase de montée en charge. Des sources de données unifiées, des standards de qualité cohérents et un accès transversal permettent des décisions plus rapides. L\'accent se porte désormais sur l\'automatisation et l\'optimisation. <strong>Axe prioritaire :</strong> automatisez le monitoring de la qualité des données, étendez la couverture de la modélisation prédictive et mettez en œuvre l\'activation des données en temps réel pour passer d\'une analyse rétrospective à une intelligence proactive.',
    high: 'Vos capacités en matière de données sont matures et créent un véritable avantage concurrentiel. Des données unifiées, une qualité fiable et des analyses prédictives permettent des décisions plus rapides et meilleures dans toute l\'organisation. <strong>Prochain horizon :</strong> explorez l\'activation des données en temps réel, la modélisation avancée de l\'attribution et les insights alimentés par l\'IA pour passer d\'une prise de décision éclairée à une optimisation autonome.'
  },
  ai: {
    critical: 'L\'IA et l\'automatisation sont totalement absentes des opérations. Aucun cas d\'usage n\'est identifié, aucun outil n\'est adopté, et il n\'y a aucune sensibilisation aux applications pratiques de l\'IA. L\'organisation prend du retard sur ses concurrents qui automatisent déjà les tâches routinières. <strong>Action immédiate :</strong> organisez un atelier d\'une demi-journée pour identifier 3 tâches répétitives et chronophages qui pourraient être automatisées avec des outils disponibles sur le marché. Commencez par la plus simple.',
    low: 'L\'IA et l\'automatisation sont soit absentes, soit bloquées en phase pilote. Sans cas d\'usage clairs, sans gouvernance ni résultats mesurables, l\'IA risque de n\'être qu\'un poste budgétaire sans retour. Le schéma d\'échec le plus courant : les organisations achètent des outils IA avant de définir les problèmes à résoudre. <strong>Action immédiate :</strong> identifiez 2 à 3 tâches répétitives à fort impact qui pourraient être automatisées dès aujourd\'hui, et construisez à partir de victoires tangibles plutôt que de stratégies IA ambitieuses mais vagues.',
    mid: 'Votre organisation a progressé en matière d\'IA et d\'automatisation mais n\'a pas encore atteint une adoption systématique et à grande échelle. Des outils peuvent être utilisés de manière isolée, mais sans gouvernance d\'entreprise, sans formation ni intégration dans les flux de travail principaux, les bénéfices restent localisés. <strong>Axe prioritaire :</strong> formalisez votre cadre de gouvernance IA, investissez dans la montée en compétences pratique des équipes et connectez les résultats de l\'IA à des KPI métier mesurables.',
    advancing: 'L\'IA et l\'automatisation sont systématisées et génèrent une valeur constante au sein de plusieurs équipes. Les cadres de gouvernance sont en place et les équipes intègrent activement l\'IA dans leurs flux de travail. <strong>Axe prioritaire :</strong> déployez les applications IA réussies à l\'échelle de l\'organisation, introduisez une orchestration avancée entre les systèmes IA et commencez à développer des modèles personnalisés adaptés à votre contexte métier spécifique.',
    high: 'L\'IA et l\'automatisation sont intégrées dans vos opérations et génèrent une valeur mesurable. Vos équipes utilisent activement les outils IA, la gouvernance est en place et vous allez au-delà des gains d\'efficacité vers une différenciation stratégique. <strong>Prochain horizon :</strong> développement de modèles personnalisés, orchestration IA transversale et cas d\'usage avancés tels que la tarification dynamique, l\'intelligence client prédictive et la gestion autonome des campagnes.'
  },
  experience: {
    critical: 'L\'expérience client est totalement non gérée. Il n\'existe aucun parcours cartographié, aucun mécanisme de feedback et aucune compréhension de l\'endroit où et pourquoi les clients abandonnent. Chaque interaction client est incohérente et accidentelle. <strong>Action immédiate :</strong> observez 5 interactions clients réelles cette semaine, documentez chaque point de friction et corrigez le pire point de douleur sous 14 jours.',
    low: 'L\'expérience client est conçue autour des structures internes plutôt que des besoins clients. La fragmentation des parcours, l\'incohérence entre les canaux et l\'absence de boucles de feedback signifient que vous perdez des clients à des points de friction que vous ne pouvez pas voir. <strong>Action immédiate :</strong> cartographiez vos 3 principaux parcours clients avec des données réelles (pas des suppositions), identifiez les plus gros points d\'abandon et corrigez la friction la plus douloureuse sous 30 jours.',
    mid: 'Les fondations de l\'expérience client sont en place, mais la personnalisation est superficielle et l\'optimisation est sporadique. Vous avez probablement une certaine connaissance des parcours mais n\'avez pas systématisé la collecte de feedback, les tests ou la cohérence cross-canal. <strong>Axe prioritaire :</strong> mettez en place des programmes structurés de Voix du Client (VoC), lancez des tests A/B systématiques et assurez-vous que l\'expérience est cohérente quel que soit le canal utilisé par le client.',
    advancing: 'L\'expérience client est bien gérée avec des parcours cohérents, des boucles de feedback actives et une optimisation éclairée par les données. La personnalisation dépasse la segmentation basique pour aller vers le ciblage comportemental. <strong>Axe prioritaire :</strong> mettez en œuvre l\'orchestration des parcours en temps réel, déployez des moteurs de personnalisation prédictive et construisez une différenciation expérientielle que les concurrents ne peuvent pas facilement reproduire.',
    high: 'L\'expérience client est un véritable facteur de différenciation, avec des parcours bien cartographiés, une personnalisation comportementale et une optimisation continue pilotée par des données réelles. <strong>Prochain horizon :</strong> des expériences anticipatrices alimentées par l\'analytique prédictive, des moteurs de personnalisation avancés qui s\'adaptent en temps réel et un service proactif qui résout les problèmes avant que les clients ne les remarquent.'
  },
  governance: {
    critical: 'La gouvernance est effectivement absente. Personne ne porte les initiatives digitales, il n\'existe aucun processus documenté, la conformité est ad hoc et la redevabilité est indéfinie. L\'organisation fonctionne à l\'improvisation et aux initiatives individuelles. <strong>Action immédiate :</strong> nommez un responsable unique pour le digital, créez un RACI basique pour les 3 principales initiatives et planifiez un point de gouvernance hebdomadaire de 30 minutes.',
    low: 'Une responsabilité ambiguë, des processus incohérents et des politiques obsolètes ralentissent activement l\'exécution digitale. Sans redevabilité claire, les initiatives stagnent dans des goulots d\'approbation, les lacunes de conformité créent des risques et les équipes gaspillent de l\'énergie à naviguer dans la confusion interne plutôt qu\'à produire des résultats. <strong>Action immédiate :</strong> assignez un responsable nommé pour chaque initiative digitale active, auditez votre parc d\'outils et vos contrats fournisseurs et établissez un cadre de gouvernance minimum viable.',
    mid: 'Les structures de gouvernance existent mais ne permettent pas encore d\'aller vite. Les rôles sont peut-être définis mais les droits de décision flous, les politiques existent peut-être mais ne sont pas suivies de manière cohérente, et les processus opérationnels fonctionnent mais nécessitent trop d\'étapes manuelles. <strong>Axe prioritaire :</strong> rationalisez les flux d\'approbation, automatisez les tâches opérationnelles récurrentes et investissez dans la gestion du changement pour garantir que les nouveaux processus sont réellement adoptés.',
    advancing: 'La gouvernance est systématisée avec une responsabilité claire, des flux de travail documentés et des pratiques de conformité cohérentes. L\'accent passe de l\'établissement du contrôle à la facilitation de l\'agilité dans un cadre défini. <strong>Axe prioritaire :</strong> introduisez des cadres de prise de décision décentralisée, automatisez le suivi de la conformité et construisez une gouvernance adaptative qui évolue avec les ambitions digitales de l\'organisation.',
    high: 'Votre modèle de gouvernance est robuste, bien adopté et permet plutôt qu\'il ne restreint l\'agilité. Une responsabilité claire, des flux de travail efficaces et des pratiques de conformité matures fournissent une base stable pour des initiatives digitales ambitieuses. <strong>Prochain horizon :</strong> prise de décision décentralisée dans un cadre défini, analytique avancée des risques et optimisation continue de la gouvernance basée sur les données opérationnelles.'
  },
  performance: {
    critical: 'La mesure de la performance est essentiellement inexistante. Il n\'y a pas de KPI définis, pas de suivi analytique fiable et aucune discipline de test. Les dépenses marketing et digitales sont totalement incontrôlables. <strong>Action immédiate :</strong> installez correctement un suivi analytique basique, définissez 3 KPI connectés au chiffre d\'affaires et engagez-vous dans une revue hebdomadaire des indicateurs dès maintenant.',
    low: 'La mesure de la performance est soit absente, soit incohérente, soit focalisée sur des indicateurs de vanité déconnectés des résultats métier. Sans KPI fiables, sans tests structurés ni attribution claire, le budget marketing est alloué à l\'intuition et les investissements digitaux manquent de redevabilité. <strong>Action immédiate :</strong> définissez 5 à 7 KPI essentiels liés au chiffre d\'affaires, corrigez votre suivi analytique et établissez une cadence de revue mensuelle de la performance.',
    mid: 'Le suivi de la performance existe mais n\'est pas encore systématique ni stratégique. Vous avez probablement quelques indicateurs en place mais les tests sont sporadiques, l\'attribution est basique et l\'optimisation se fait de manière réactive plutôt que proactive. <strong>Axe prioritaire :</strong> mettez en place un programme de tests structuré (2+ tests par mois), développez l\'attribution multicanal et créez des alertes de performance automatisées qui déclenchent des actions.',
    advancing: 'La mesure de la performance est systématisée avec des KPI fiables, une cadence de tests régulière et une allocation budgétaire pilotée par les données. Le réflexe d\'optimisation se développe. <strong>Axe prioritaire :</strong> passez aux tests d\'incrémentalité, construisez des modèles de performance prédictifs et créez des flux d\'optimisation automatisés qui répondent aux signaux de performance sans intervention manuelle.',
    high: 'La performance et l\'optimisation sont profondément ancrées dans votre culture, avec des tests rigoureux, une attribution avancée et une allocation budgétaire pilotée par les données. Les équipes comprennent leur contribution aux KPI métier et optimisent en continu. <strong>Prochain horizon :</strong> tests d\'incrémentalité, modélisation du mix marketing et analytique prédictive de la performance qui anticipe les résultats et recommande des actions automatiquement.'
  }
};

// ============================================================
// Section 2: Insight Models – Italian (IT)
// ============================================================
const insightModels_it = {
  data: {
    critical: 'La capacità in ambito dati è essenzialmente inesistente. Non esiste una visione unificata dei clienti, nessun tracciamento affidabile e le decisioni vengono prese interamente sull\'istinto o su fogli di calcolo obsoleti. Non si tratta di una lacuna — è un\'assenza di fondamenta. <strong>Azione immediata:</strong> effettuate un inventario d\'emergenza dei dati, identificate la singola fonte di dati più critica e assegnate un responsabile nominato prima di qualsiasi altra iniziativa.',
    low: 'La vostra organizzazione opera con significativi punti ciechi in ambito dati. Fonti frammentate, definizioni incoerenti e mancanza di fiducia nell\'accuratezza dei dati significano che le decisioni vengono prese su informazioni incomplete o inaffidabili. Non è solo un problema IT — è una questione strategica. Senza dati unificati, la personalizzazione fallisce, l\'attribuzione è congettura e le iniziative IA si bloccano prima ancora di partire. <strong>Azione immediata:</strong> effettuate un audit di tutte le fonti dati, assegnate la titolarità e implementate regole di base sulla qualità dei dati prima di investire in qualsiasi strumento di analytics.',
    mid: 'Le fondamenta dei dati esistono ma non generano ancora valore strategico. I dati sono probabilmente accessibili in alcune aree ma isolati in altre, con qualità incoerente e capacità predittiva limitata. Il rischio in questa fase è la compiacenza — un reporting di base può creare una falsa percezione di maturità dei dati. <strong>Area di intervento:</strong> unificate le vostre fonti dati principali in un\'unica vista cliente, stabilite standard di governance e iniziate a formare i team per utilizzare i dati in modo proattivo anziché reattivo.',
    advancing: 'Le pratiche in ambito dati sono sistematizzate e in fase di scalabilità. Fonti dati unificate, standard di qualità coerenti e accesso interfunzionale consentono decisioni più rapide. L\'attenzione si sposta ora sull\'automazione e l\'ottimizzazione. <strong>Area di intervento:</strong> automatizzate il monitoraggio della qualità dei dati, ampliate la copertura della modellazione predittiva e implementate l\'attivazione dei dati in tempo reale per passare dall\'analisi retrospettiva all\'intelligence proattiva.',
    high: 'Le vostre capacità in ambito dati sono mature e stanno creando un genuino vantaggio competitivo. Dati unificati, qualità affidabile e analytics predittivi consentono decisioni più rapide e migliori in tutta l\'organizzazione. <strong>Prossima frontiera:</strong> esplorate l\'attivazione dei dati in tempo reale, la modellazione avanzata dell\'attribuzione e gli insight alimentati dall\'IA per passare da un processo decisionale informato a un\'ottimizzazione autonoma.'
  },
  ai: {
    critical: 'IA e automazione sono completamente assenti dalle operazioni. Non sono stati identificati casi d\'uso, non sono stati adottati strumenti e non vi è consapevolezza delle applicazioni pratiche dell\'IA. L\'organizzazione sta restando indietro rispetto ai concorrenti che stanno già automatizzando le attività di routine. <strong>Azione immediata:</strong> organizzate un workshop di mezza giornata per identificare 3 attività ripetitive e dispendiose in termini di tempo che potrebbero essere automatizzate con strumenti disponibili sul mercato. Iniziate con la più semplice.',
    low: 'IA e automazione sono assenti o bloccate in fase pilota. Senza casi d\'uso chiari, governance o risultati misurabili, l\'IA rischia di essere una voce di costo senza ritorno. Lo schema di fallimento più comune: le organizzazioni acquistano strumenti IA prima di definire i problemi da risolvere. <strong>Azione immediata:</strong> identificate 2-3 attività ripetitive ad alto impatto che potrebbero essere automatizzate oggi stesso, e costruite a partire da vittorie tangibili anziché da strategie IA ambiziose ma vaghe.',
    mid: 'La vostra organizzazione ha fatto progressi con l\'IA e l\'automazione ma non ha ancora raggiunto un\'adozione sistematica e su larga scala. Gli strumenti possono essere utilizzati in modo isolato, ma senza governance aziendale, formazione o integrazione nei flussi di lavoro principali, i benefici restano localizzati. <strong>Area di intervento:</strong> formalizzate il vostro framework di governance IA, investite nell\'abilitazione pratica dei team e collegate gli output dell\'IA a KPI di business misurabili.',
    advancing: 'IA e automazione sono sistematizzate e generano valore costante in più team. I framework di governance sono implementati e i team integrano attivamente l\'IA nei propri flussi di lavoro. <strong>Area di intervento:</strong> scalate le applicazioni IA di successo in tutta l\'organizzazione, introducete un\'orchestrazione avanzata tra i sistemi IA e iniziate a sviluppare modelli personalizzati adattati al vostro specifico contesto di business.',
    high: 'IA e automazione sono integrate nelle vostre operazioni e generano valore misurabile. I vostri team utilizzano attivamente gli strumenti IA, la governance è implementata e state andando oltre i guadagni di efficienza verso una differenziazione strategica. <strong>Prossima frontiera:</strong> sviluppo di modelli personalizzati, orchestrazione IA interfunzionale e casi d\'uso avanzati come il pricing dinamico, l\'intelligence predittiva sui clienti e la gestione autonoma delle campagne.'
  },
  experience: {
    critical: 'L\'esperienza cliente è completamente non gestita. Non esistono percorsi mappati, nessun meccanismo di feedback e nessuna comprensione di dove e perché i clienti abbandonano. Ogni interazione con il cliente è incoerente e casuale. <strong>Azione immediata:</strong> osservate 5 interazioni reali con i clienti questa settimana, documentate ogni punto di frizione e risolvete il peggior punto dolente entro 14 giorni.',
    low: 'L\'esperienza cliente è progettata attorno alle strutture interne anziché alle esigenze dei clienti. La frammentazione dei percorsi, l\'incoerenza tra i canali e la mancanza di cicli di feedback significano che state perdendo clienti in punti di frizione che non potete vedere. <strong>Azione immediata:</strong> mappate i vostri 3 principali percorsi cliente con dati reali (non supposizioni), identificate i maggiori punti di abbandono e risolvete la frizione più critica entro 30 giorni.',
    mid: 'Le fondamenta dell\'esperienza cliente sono presenti, ma la personalizzazione è superficiale e l\'ottimizzazione è sporadica. Avete probabilmente una certa consapevolezza dei percorsi ma non avete sistematizzato la raccolta di feedback, i test o la coerenza cross-canale. <strong>Area di intervento:</strong> implementate programmi strutturati di Voice of Customer (VoC), lanciate test A/B sistematici e assicuratevi che l\'esperienza sia coerente indipendentemente dal canale utilizzato dal cliente.',
    advancing: 'L\'esperienza cliente è ben gestita con percorsi coerenti, cicli di feedback attivi e ottimizzazione basata sui dati. La personalizzazione sta andando oltre la segmentazione di base verso il targeting comportamentale. <strong>Area di intervento:</strong> implementate l\'orchestrazione dei percorsi in tempo reale, implementate motori di personalizzazione predittiva e costruite una differenziazione esperienziale che i concorrenti non possono facilmente replicare.',
    high: 'L\'esperienza cliente è un genuino fattore di differenziazione, con percorsi ben mappati, personalizzazione comportamentale e ottimizzazione continua guidata da dati reali. <strong>Prossima frontiera:</strong> esperienze anticipatorie alimentate dall\'analytics predittivo, motori di personalizzazione avanzati che si adattano in tempo reale e un servizio proattivo che risolve i problemi prima che i clienti li notino.'
  },
  governance: {
    critical: 'La governance è effettivamente assente. Nessuno è titolare delle iniziative digitali, non esistono processi documentati, la conformità è ad hoc e l\'accountability è indefinita. L\'organizzazione funziona sull\'improvvisazione e sulle iniziative individuali. <strong>Azione immediata:</strong> nominate un unico responsabile per il digitale, create un RACI di base per le 3 principali iniziative e programmate uno standup di governance settimanale di 30 minuti.',
    low: 'Titolarità ambigua, processi incoerenti e politiche obsolete stanno attivamente rallentando l\'esecuzione digitale. Senza una chiara accountability, le iniziative si bloccano in colli di bottiglia di approvazione, le lacune di conformità creano rischi e i team sprecano energia navigando nella confusione interna anziché produrre risultati. <strong>Azione immediata:</strong> assegnate un responsabile nominato per ogni iniziativa digitale attiva, effettuate un audit del vostro parco strumenti e dei contratti con i fornitori e stabilite un framework di governance minimo funzionante.',
    mid: 'Le strutture di governance esistono ma non consentono ancora la velocità. I ruoli possono essere definiti ma i diritti decisionali poco chiari, le politiche possono esistere ma non essere seguite in modo coerente, e i processi operativi funzionano ma richiedono troppi passaggi manuali. <strong>Area di intervento:</strong> semplificate i flussi di approvazione, automatizzate le attività operative ricorrenti e investite nella gestione del cambiamento per garantire che i nuovi processi vengano effettivamente adottati.',
    advancing: 'La governance è sistematizzata con titolarità chiara, flussi di lavoro documentati e pratiche di conformità coerenti. L\'attenzione si sposta dallo stabilire il controllo all\'abilitare l\'agilità entro limiti definiti. <strong>Area di intervento:</strong> introducete framework decisionali decentralizzati, automatizzate il monitoraggio della conformità e costruite una governance adattiva che scala con le ambizioni digitali dell\'organizzazione.',
    high: 'Il vostro modello di governance è robusto, ben adottato e abilita anziché limitare l\'agilità. Titolarità chiara, flussi di lavoro efficienti e pratiche di conformità mature forniscono una base stabile per iniziative digitali ambiziose. <strong>Prossima frontiera:</strong> processo decisionale decentralizzato entro limiti definiti, analytics avanzati del rischio e ottimizzazione continua della governance basata sui dati operativi.'
  },
  performance: {
    critical: 'La misurazione delle performance è essenzialmente inesistente. Non ci sono KPI definiti, nessun tracciamento analytics affidabile e nessuna disciplina di test. La spesa marketing e digitale è completamente incontrollata. <strong>Azione immediata:</strong> installate correttamente un tracciamento analytics di base, definite 3 KPI collegati al fatturato e impegnatevi in una revisione settimanale delle metriche da subito.',
    low: 'La misurazione delle performance è assente, incoerente o focalizzata su metriche di vanità scollegate dai risultati di business. Senza KPI affidabili, test strutturati o attribuzione chiara, il budget marketing viene allocato sull\'istinto e gli investimenti digitali mancano di accountability. <strong>Azione immediata:</strong> definite 5-7 KPI essenziali legati al fatturato, correggete il vostro tracciamento analytics e stabilite una cadenza mensile di revisione delle performance.',
    mid: 'Il tracciamento delle performance esiste ma non è ancora sistematico né strategico. Avete probabilmente alcune metriche implementate ma i test sono sporadici, l\'attribuzione è di base e l\'ottimizzazione avviene in modo reattivo anziché proattivo. <strong>Area di intervento:</strong> implementate un programma di test strutturato (2+ test al mese), sviluppate l\'attribuzione multicanale e create avvisi di performance automatizzati che inneschino azioni.',
    advancing: 'La misurazione delle performance è sistematizzata con KPI affidabili, una cadenza di test regolare e un\'allocazione del budget guidata dai dati. La capacità di ottimizzazione si sta sviluppando. <strong>Area di intervento:</strong> passate ai test di incrementalità, costruite modelli di performance predittivi e create flussi di ottimizzazione automatizzati che rispondano ai segnali di performance senza intervento manuale.',
    high: 'Performance e ottimizzazione sono profondamente radicate nella vostra cultura, con test rigorosi, attribuzione avanzata e allocazione del budget guidata dai dati. I team comprendono il proprio contributo ai KPI di business e ottimizzano continuamente. <strong>Prossima frontiera:</strong> test di incrementalità, modellazione del marketing mix e analytics predittivi delle performance che prevedono i risultati e raccomandano azioni automaticamente.'
  }
};

// ============================================================
// Section 3: Roadmap Texts – French (FR)
// ============================================================
const roadmapTexts_fr = {
  data: {
    quick: 'Réalisez un audit des sources de données dans les services marketing, commercial et opérationnel. Cartographiez chaque outil, base de données et tableur. Identifiez les 5 principales lacunes en matière de données provoquant des angles morts dans la prise de décision, et assignez un responsable clair pour chaque source.',
    next: 'Mettez en place une couche de données unifiée (CDP ou entrepôt de données) connectant au moins 3 systèmes principaux. Définissez des règles de qualité des données, des conventions de nommage et des politiques d\'accès. Établissez une cadence mensuelle de revue de la santé des données.',
    later: 'Déployez des analyses prédictives et des tableaux de bord en temps réel couvrant la valeur vie client, le risque d\'attrition et l\'attribution des campagnes. Introduisez l\'analytique en libre-service pour que les utilisateurs métier puissent interroger les données sans dépendance IT.'
  },
  ai: {
    quick: 'Auditez les processus manuels et répétitifs actuels dans le marketing, les opérations et le support. Identifiez les 3 meilleurs candidats à l\'automatisation en fonction du temps économisé × fréquence × taux d\'erreur. Lancez un pilote d\'automatisation sous 30 jours.',
    next: 'Déployez des flux de travail assistés par l\'IA dans au moins 2 départements (par ex. génération de contenu par IA, scoring automatisé des leads, chatbots intelligents). Établissez un cadre de gouvernance IA couvrant la confidentialité des données, la surveillance des biais et la supervision humaine.',
    later: 'Déployez l\'IA sur toute la chaîne de valeur avec l\'intelligence client prédictive, la tarification dynamique et l\'optimisation autonome des campagnes. Développez la culture IA interne pour que les équipes puissent identifier et mettre en œuvre des opportunités IA de manière autonome.'
  },
  experience: {
    quick: 'Cartographiez de bout en bout les 3 principaux parcours clients (acquisition, onboarding, support). Identifiez les 5 plus grands points de friction grâce aux données d\'abandon analytiques et aux retours clients directs. Corrigez immédiatement les gains rapides les plus impactants.',
    next: 'Mettez en place un programme continu de Voix du Client capturant les feedbacks aux moments de vérité clés. Lancez des tests A/B sur les pages à plus fort trafic et les entonnoirs de conversion. Créez un tableau de bord CX suivant le NPS, le CSAT, le CES et les taux de complétion des tâches.',
    later: 'Déployez la personnalisation comportementale sur le web, l\'e-mail et les expériences produit. Construisez un moteur d\'orchestration de contenu qui adapte les messages en fonction du segment client, de l\'étape du cycle de vie et du comportement en temps réel.'
  },
  governance: {
    quick: 'Établissez un comité de pilotage digital transversal avec des droits de décision clairs, une cadence de réunion et une responsabilité sur les initiatives clés. Auditez les flux de travail existants pour identifier les 5 principaux goulots d\'étranglement et retards d\'approbation.',
    next: 'Documentez et standardisez les procédures opérationnelles pour les processus digitaux critiques (lancements de campagnes, traitement des données, gestion des fournisseurs). Mettez en place des contrôles d\'accès basés sur les rôles et des listes de vérification de conformité pour les obligations RGPD/vie privée.',
    later: 'Déployez l\'automatisation des flux de travail pour les processus opérationnels récurrents. Construisez une matrice de compétences digitales cartographiant les compétences requises par rapport aux capacités actuelles de l\'équipe. Intégrez la surveillance de la cybersécurité et les protocoles de réponse aux incidents dans les opérations quotidiennes.'
  },
  performance: {
    quick: 'Auditez votre configuration analytique actuelle : vérifiez que le tracking est précis, identifiez les lacunes dans la couverture de mesure et corrigez tout tag défaillant ou événement mal configuré. Définissez 5 à 7 KPI essentiels qui génèrent réellement des résultats métier, pas des indicateurs de vanité.',
    next: 'Lancez un programme de tests structuré avec au moins 2 tests A/B par mois sur les pages ou campagnes à fort impact. Mettez en place une modélisation basique de l\'attribution pour connecter les dépenses marketing aux résultats en chiffre d\'affaires sur l\'ensemble des canaux.',
    later: 'Construisez un cadre de mesure avancé avec l\'attribution multi-touch, les tests d\'incrémentalité et la modélisation du mix marketing. Créez des alertes de performance automatisées et des flux d\'optimisation qui déclenchent des actions lorsque les KPI s\'écartent des cibles.'
  }
};

// ============================================================
// Section 3: Roadmap Texts – Italian (IT)
// ============================================================
const roadmapTexts_it = {
  data: {
    quick: 'Effettuate un audit delle fonti dati nei reparti marketing, vendite e operations. Mappate ogni strumento, database e foglio di calcolo. Identificate le 5 principali lacune nei dati che causano punti ciechi nel processo decisionale e assegnate una titolarità chiara per ciascuna fonte.',
    next: 'Implementate un livello dati unificato (CDP o data warehouse) che connetta almeno 3 sistemi principali. Definite regole di qualità dei dati, convenzioni di nomenclatura e politiche di accesso. Stabilite una cadenza mensile di revisione della salute dei dati.',
    later: 'Implementate analytics predittivi e dashboard in tempo reale che coprano il valore del ciclo di vita del cliente, il rischio di churn e l\'attribuzione delle campagne. Introducete l\'analytics self-service affinché gli utenti di business possano interrogare i dati senza dipendenza dall\'IT.'
  },
  ai: {
    quick: 'Effettuate un audit dei processi manuali e ripetitivi attuali nel marketing, nelle operations e nel supporto. Identificate i 3 migliori candidati per l\'automazione in base al tempo risparmiato × frequenza × tasso di errore. Lanciate un\'automazione pilota entro 30 giorni.',
    next: 'Implementate flussi di lavoro assistiti dall\'IA in almeno 2 dipartimenti (ad es. generazione di contenuti tramite IA, lead scoring automatizzato, chatbot intelligenti). Stabilite un framework di governance IA che copra la privacy dei dati, il monitoraggio dei bias e la supervisione umana.',
    later: 'Scalate l\'IA lungo tutta la catena del valore con intelligence predittiva sui clienti, pricing dinamico e ottimizzazione autonoma delle campagne. Sviluppate l\'alfabetizzazione IA interna affinché i team possano identificare e implementare opportunità IA in autonomia.'
  },
  experience: {
    quick: 'Mappate end-to-end i 3 principali percorsi cliente (acquisizione, onboarding, supporto). Identificate i 5 maggiori punti di frizione tramite i dati di abbandono degli analytics e il feedback diretto dei clienti. Risolvete immediatamente le vittorie rapide più impattanti.',
    next: 'Implementate un programma continuo di Voice of Customer che catturi il feedback nei momenti di verità chiave. Lanciate test A/B sulle pagine a più alto traffico e sui funnel di conversione. Create una dashboard CX che tracci NPS, CSAT, CES e tassi di completamento delle attività.',
    later: 'Implementate la personalizzazione comportamentale su web, e-mail ed esperienze di prodotto. Costruite un motore di orchestrazione dei contenuti che adatti i messaggi in base al segmento cliente, alla fase del ciclo di vita e al comportamento in tempo reale.'
  },
  governance: {
    quick: 'Istituite un comitato di steering digitale interfunzionale con diritti decisionali chiari, cadenza delle riunioni e accountability per le iniziative chiave. Effettuate un audit dei flussi di lavoro esistenti per identificare i 5 principali colli di bottiglia e ritardi di approvazione.',
    next: 'Documentate e standardizzate le procedure operative per i processi digitali critici (lancio campagne, gestione dati, gestione fornitori). Implementate controlli di accesso basati sui ruoli e checklist di conformità per gli obblighi GDPR/privacy.',
    later: 'Implementate l\'automazione dei flussi di lavoro per i processi operativi ricorrenti. Costruite una matrice delle competenze digitali che mappi le competenze necessarie rispetto alla capacità attuale del team. Integrate il monitoraggio della cybersicurezza e i protocolli di risposta agli incidenti nelle operazioni quotidiane.'
  },
  performance: {
    quick: 'Effettuate un audit della vostra configurazione analytics attuale: verificate che il tracking sia accurato, identificate le lacune nella copertura di misurazione e correggete eventuali tag non funzionanti o eventi configurati in modo errato. Definite 5-7 KPI essenziali che generino effettivamente risultati di business, non metriche di vanità.',
    next: 'Lanciate un programma di test strutturato con almeno 2 test A/B al mese sulle pagine o campagne ad alto impatto. Implementate una modellazione di base dell\'attribuzione per collegare la spesa marketing ai risultati di fatturato su tutti i canali.',
    later: 'Costruite un framework di misurazione avanzato con attribuzione multi-touch, test di incrementalità e modellazione del marketing mix. Create avvisi di performance automatizzati e flussi di ottimizzazione che inneschino azioni quando i KPI deviano dagli obiettivi.'
  }
};

// ============================================================
// Section 4: Pattern Labels & Descriptions – French (FR)
// ============================================================
const patternLabels_fr = {
  allLow: 'Tout Faible',
  allMid: 'Tout Modéré',
  allHigh: 'Tout Élevé',
  uniform: 'Scores Uniformes',
  polarized: 'Polarisé',
  dataAiGap: 'Écart Données-IA',
  governanceBottleneck: 'Goulot de Gouvernance',
  executionGap: 'Écart d\'Exécution',
  experienceDisconnect: 'Expérience Déconnectée',
  oneOutlierHigh: 'Force Remarquable',
  oneOutlierLow: 'Faiblesse Isolée',
  aiExperienceGap: 'Écart IA-Expérience',
  performanceAiGap: 'IA Sans Mesure',
  dataGovernanceGap: 'Données Non Gouvernées',
  foundationFirst: 'Fondations d\'Abord',
  innovationFirst: 'Innovation d\'Abord',
  measurementLast: 'Mesure en Dernier',
  mixed: 'Profil Mixte'
};

const patternDescs_fr = {
  allLow: 'Toutes les dimensions évaluées sont inférieures à 2.0. Un investissement fondamental est nécessaire dans tous les domaines.',
  allMid: 'Toutes les dimensions se situent dans la fourchette 2.0–3.5. Risque de stagnation sans accélération ciblée.',
  allHigh: 'Toutes les dimensions dépassent 3.5. Concentrez-vous sur l\'optimisation, l\'innovation et le maintien de votre avance.',
  uniform: 'Les scores sont à moins de 0.8 les uns des autres. Équilibré mais potentiellement sans force distinctive.',
  polarized: 'Écart de 2.0+ entre la dimension la plus forte et la plus faible. Effet de plafond probable.',
  dataAiGap: 'La maturité des données est trop faible pour soutenir les ambitions actuelles en matière d\'IA.',
  governanceBottleneck: 'La gouvernance est la dimension la plus faible et contraint les autres dimensions.',
  executionGap: 'La mesure de la performance est la plus faible. Impossible de prouver la valeur des investissements.',
  experienceDisconnect: 'Bonne conception CX mais aucune fondation de données pour personnaliser ou en démontrer la valeur.',
  oneOutlierHigh: '[dynamique] significativement au-dessus de la moyenne. Excellence isolée.',
  oneOutlierLow: '[dynamique] significativement en dessous de la moyenne. Goulot d\'étranglement critique.',
  aiExperienceGap: 'L\'IA progresse mais l\'expérience client n\'a pas mûri pour en tirer parti.',
  performanceAiGap: 'Les investissements IA manquent de mesure de la performance pour valider l\'impact.',
  dataGovernanceGap: 'Infrastructure de données solide sans contrôles de gouvernance proportionnés.',
  foundationFirst: 'Base solide en données et gouvernance. Prêt à construire l\'innovation dessus.',
  innovationFirst: 'L\'innovation dépasse les fondations. Crée un risque de fragilité.',
  measurementLast: 'La performance est la dimension la plus faible. Schéma courant limitant la preuve de valeur.',
  mixed: 'Aucun schéma dominant unique. Une combinaison de forces et de lacunes à travers les dimensions.'
};

// ============================================================
// Section 4: Pattern Labels & Descriptions – Italian (IT)
// ============================================================
const patternLabels_it = {
  allLow: 'Tutto Basso',
  allMid: 'Tutto Moderato',
  allHigh: 'Tutto Elevato',
  uniform: 'Punteggi Uniformi',
  polarized: 'Polarizzato',
  dataAiGap: 'Divario Dati-IA',
  governanceBottleneck: 'Collo di Bottiglia Governance',
  executionGap: 'Divario di Esecuzione',
  experienceDisconnect: 'Esperienza Disconnessa',
  oneOutlierHigh: 'Punto di Forza Distintivo',
  oneOutlierLow: 'Debolezza Isolata',
  aiExperienceGap: 'Divario IA-Esperienza',
  performanceAiGap: 'IA Senza Misurazione',
  dataGovernanceGap: 'Dati Non Governati',
  foundationFirst: 'Prima le Fondamenta',
  innovationFirst: 'Prima l\'Innovazione',
  measurementLast: 'Misurazione per Ultima',
  mixed: 'Profilo Misto'
};

const patternDescs_it = {
  allLow: 'Tutte le dimensioni valutate sono inferiori a 2.0. È necessario un investimento fondamentale a tutti i livelli.',
  allMid: 'Tutte le dimensioni si collocano nell\'intervallo 2.0–3.5. Rischio di stagnazione senza un\'accelerazione mirata.',
  allHigh: 'Tutte le dimensioni superano 3.5. Concentratevi sull\'ottimizzazione, l\'innovazione e il mantenimento del vantaggio.',
  uniform: 'I punteggi sono entro 0.8 l\'uno dall\'altro. Equilibrato ma potenzialmente privo di un punto di forza distintivo.',
  polarized: 'Divario di 2.0+ tra la dimensione più forte e quella più debole. Probabile effetto soffitto.',
  dataAiGap: 'La maturità dei dati è troppo bassa per supportare le attuali ambizioni in ambito IA.',
  governanceBottleneck: 'La governance è la dimensione più debole e vincola le altre dimensioni.',
  executionGap: 'La misurazione delle performance è la più debole. Non è possibile dimostrare il valore degli investimenti.',
  experienceDisconnect: 'Buon design della CX ma nessuna base di dati per personalizzare o dimostrarne il valore.',
  oneOutlierHigh: '[dinamico] significativamente sopra la media. Eccellenza isolata.',
  oneOutlierLow: '[dinamico] significativamente sotto la media. Collo di bottiglia critico.',
  aiExperienceGap: 'L\'IA avanza ma l\'esperienza cliente non è maturata per sfruttarla.',
  performanceAiGap: 'Gli investimenti in IA mancano della misurazione delle performance per validare l\'impatto.',
  dataGovernanceGap: 'Infrastruttura dati solida senza controlli di governance proporzionati.',
  foundationFirst: 'Solida base di dati e governance. Pronti a costruire l\'innovazione su di essa.',
  innovationFirst: 'L\'innovazione supera le fondamenta. Crea un rischio di fragilità.',
  measurementLast: 'Le performance sono la dimensione più debole. Schema comune che limita la dimostrazione del valore.',
  mixed: 'Nessuno schema dominante singolo. Una combinazione di punti di forza e lacune tra le dimensioni.'
};

// ============================================================
// Section 5: Cross-Dimension Insights – French (FR)
// ============================================================
const crossDimInsights_fr = {
  'Data Foundation Limits AI Potential': 'Les capacités IA dépassent l\'infrastructure de données nécessaire pour les soutenir. Les modèles IA ne valent que ce que valent les données qu\'ils consomment. Sans données fiables et unifiées, les résultats de l\'IA seront incohérents et peu fiables. Priorisez la qualité et l\'intégration des données avant de développer davantage l\'IA.',
  'Governance Gap Creates Scaling Risk': 'Des capacités avancées en données ou en IA existent sans gouvernance adéquate pour les gérer en toute sécurité. Cela crée des risques de conformité, des pratiques incohérentes et un potentiel mésusage des données. L\'établissement de garde-fous de gouvernance est urgent avant que ces capacités ne montent davantage en puissance.',
  'Strong Experiences, Weak Proof': 'Les capacités en matière d\'expérience client semblent solides, mais sans mesure robuste de la performance, il n\'existe aucune preuve de leur impact. L\'investissement en CX sera difficile à défendre ou à optimiser sans le relier à des résultats métier mesurables.',
  'Data Rich, Insight Poor': 'Une infrastructure de données mature existe mais la mesure de la performance n\'a pas suivi le rythme. Les données sont collectées mais pas systématiquement utilisées pour optimiser les résultats. Connecter les capacités data à un programme structuré de tests et de mesure libérerait une valeur significative.',
  'AI Adoption Outpacing Governance': 'Les outils IA sont adoptés plus rapidement que les politiques et mécanismes de supervision nécessaires pour les gérer. Cela crée des risques en matière de confidentialité des données, de biais et de responsabilité. La formalisation de la gouvernance IA est une priorité avant d\'étendre davantage l\'utilisation de l\'IA.',
  'Systemic Underinvestment Across All Dimensions': 'Chaque dimension affiche une maturité constamment faible, indiquant un sous-investissement digital systémique plutôt que des lacunes isolées. Un programme fondamental large est nécessaire, en commençant par les bases des données et les fondamentaux de la gouvernance avant d\'aborder des capacités de niveau supérieur.',
  'Plateau Risk. Stuck in the Middle': 'Toutes les dimensions se développent à peu près au même niveau modéré. Si cela témoigne d\'un investissement équilibré, cela signale aussi un risque de stagnation — où tout est « assez bien » mais rien ne devient un véritable facteur de différenciation. Sélectionnez une ou deux dimensions pour un investissement accéléré afin de franchir le cap.',
  'Critical Maturity Imbalance': 'Il existe un écart significatif entre les dimensions les plus fortes et les plus faibles. Ce déséquilibre crée un effet de plafond où les capacités avancées dans un domaine ne peuvent pas délivrer leur pleine valeur en raison de lacunes fondamentales dans un autre. Combler l\'écart entre les extrêmes devrait être la priorité stratégique numéro un.',
  'Experience Without Evidence': 'Les scores d\'expérience client suggèrent une bonne conception des parcours, mais une maturité data critiquement faible signifie que ces expériences ne sont pas éclairées par le comportement réel des clients. Une bonne UX sans personnalisation pilotée par les données est une conjecture coûteuse.',
  'AI Rich, Experience Poor': 'Les capacités IA progressent, mais l\'expérience client n\'a pas suivi le rythme. La personnalisation alimentée par l\'IA, l\'orchestration des parcours et l\'engagement prédictif restent inexploités car la couche d\'expérience n\'est pas suffisamment mature pour tirer parti des résultats de l\'IA.',
  'AI Without Measurement': 'Des investissements en IA et en automatisation sont réalisés sans l\'infrastructure de mesure de la performance nécessaire pour évaluer leur impact. Sans KPI robustes et cadres de test, il est impossible de déterminer si les initiatives IA génèrent une réelle valeur métier.',
  'Data Capability Without Governance': 'Une infrastructure de données solide existe sans contrôles de gouvernance proportionnés. Cela crée des risques de dégradation de la qualité des données, de violations de conformité et de pratiques data incohérentes entre les équipes. La gouvernance doit rattraper son retard pour protéger et pérenniser les investissements data.',
  'Strong Foundations, Untapped Potential': 'Les fondations en données et en gouvernance sont solides, mais les capacités d\'innovation (IA, Expérience) n\'ont pas encore été construites dessus. C\'est en réalité une bonne position — l\'organisation peut maintenant déployer des capacités avancées avec la certitude que la base les supportera.',
  'Innovation Without Foundation': 'Les capacités IA et d\'expérience dépassent l\'infrastructure de données et de gouvernance nécessaire pour les soutenir. Si cela témoigne d\'ambition, cela crée de la fragilité. Les capacités avancées construites sur des fondations faibles tendent à produire des résultats incohérents et à créer des risques de conformité.'
};

// ============================================================
// Section 5: Cross-Dimension Insights – Italian (IT)
// ============================================================
const crossDimInsights_it = {
  'Data Foundation Limits AI Potential': 'Le capacità IA stanno superando l\'infrastruttura dati necessaria per supportarle. I modelli IA valgono solo quanto i dati che consumano. Senza dati affidabili e unificati, gli output dell\'IA saranno incoerenti e inaffidabili. Prioritizzate la qualità e l\'integrazione dei dati prima di scalare ulteriormente l\'IA.',
  'Governance Gap Creates Scaling Risk': 'Esistono capacità avanzate nei dati o nell\'IA senza una governance adeguata per gestirle in sicurezza. Ciò crea rischi di conformità, pratiche incoerenti e potenziale uso improprio dei dati. Stabilire barriere di governance è urgente prima che queste capacità scalino ulteriormente.',
  'Strong Experiences, Weak Proof': 'Le capacità di esperienza cliente appaiono solide, ma senza una misurazione robusta delle performance, non vi è prova del loro impatto. Gli investimenti in CX saranno difficili da difendere o ottimizzare senza collegarli a risultati di business misurabili.',
  'Data Rich, Insight Poor': 'Esiste un\'infrastruttura dati matura ma la misurazione delle performance non ha tenuto il passo. I dati vengono raccolti ma non utilizzati sistematicamente per ottimizzare i risultati. Collegare le capacità data a un programma strutturato di test e misurazione sbloccherebbe un valore significativo.',
  'AI Adoption Outpacing Governance': 'Gli strumenti IA vengono adottati più rapidamente delle politiche e dei meccanismi di supervisione necessari per gestirli. Ciò crea rischi in materia di privacy dei dati, bias e accountability. La formalizzazione della governance IA è una priorità prima di espandere ulteriormente l\'uso dell\'IA.',
  'Systemic Underinvestment Across All Dimensions': 'Ogni dimensione mostra una maturità costantemente bassa, indicando un sottoinvestimento digitale sistemico piuttosto che lacune isolate. È necessario un ampio programma fondamentale, partendo dalle basi dei dati e dai fondamenti della governance prima di affrontare capacità di livello superiore.',
  'Plateau Risk. Stuck in the Middle': 'Tutte le dimensioni si stanno sviluppando approssimativamente allo stesso livello moderato. Se questo dimostra un investimento equilibrato, segnala anche un rischio di stagnazione — dove tutto è «abbastanza buono» ma nulla diventa un genuino fattore di differenziazione. Selezionate una o due dimensioni per un investimento accelerato per superare il plateau.',
  'Critical Maturity Imbalance': 'Esiste un divario significativo tra le dimensioni più forti e quelle più deboli. Questo squilibrio crea un effetto soffitto in cui le capacità avanzate in un\'area non possono generare pieno valore a causa di lacune fondamentali in un\'altra. Colmare il divario tra gli estremi dovrebbe essere la massima priorità strategica.',
  'Experience Without Evidence': 'I punteggi dell\'esperienza cliente suggeriscono un buon design dei percorsi, ma una maturità data criticamente bassa significa che queste esperienze non sono informate dal comportamento reale dei clienti. Un\'ottima UX senza personalizzazione guidata dai dati è congettura costosa.',
  'AI Rich, Experience Poor': 'Le capacità IA stanno avanzando, ma l\'esperienza cliente non ha tenuto il passo. La personalizzazione alimentata dall\'IA, l\'orchestrazione dei percorsi e l\'engagement predittivo restano inutilizzati perché il livello dell\'esperienza non è sufficientemente maturo per sfruttare efficacemente gli output dell\'IA.',
  'AI Without Measurement': 'Vengono effettuati investimenti in IA e automazione senza l\'infrastruttura di misurazione delle performance necessaria per valutarne l\'impatto. Senza KPI robusti e framework di test, non c\'è modo di determinare se le iniziative IA stiano generando un reale valore di business.',
  'Data Capability Without Governance': 'Esiste una solida infrastruttura dati senza controlli di governance proporzionati. Ciò crea rischi di degradazione della qualità dei dati, violazioni di conformità e pratiche data incoerenti tra i team. La governance deve recuperare il ritardo per proteggere e sostenere gli investimenti nei dati.',
  'Strong Foundations, Untapped Potential': 'Le fondamenta di dati e governance sono solide, ma le capacità di innovazione (IA, Esperienza) non sono ancora state costruite su di esse. Questa è in realtà una buona posizione — l\'organizzazione può ora implementare capacità avanzate con la certezza che la base le supporterà.',
  'Innovation Without Foundation': 'Le capacità di IA ed esperienza stanno superando l\'infrastruttura di dati e governance necessaria per sostenerle. Se questo dimostra ambizione, crea anche fragilità. Le capacità avanzate costruite su fondamenta deboli tendono a produrre risultati incoerenti e a creare rischi di conformità.'
};

// ============================================================
// Section 6: Narrative Texts – French (FR)
// ============================================================
const narrativeTexts_fr = {
  allLow: '<strong>{company}</strong> se situe au stade le plus précoce de la maturité digitale, avec toutes les dimensions évaluées en dessous de 2.0. Cela indique un déficit systémique des fondations digitales plutôt que des faiblesses isolées. La priorité immédiate est la stabilisation — établir des pratiques data basiques, une responsabilité claire et des KPI mesurables avant de poursuivre des capacités avancées.',
  allHigh: '<strong>{company}</strong> démontre une maturité digitale avancée dans toutes les dimensions — un accomplissement rare. Avec des scores constamment élevés, l\'organisation a dépassé les préoccupations fondamentales. L\'accent est désormais mis sur l\'optimisation continue, le leadership en innovation et le maintien de l\'écart concurrentiel.',
  polarized: '<strong>{company}</strong> présente un déséquilibre de maturité significatif. Alors que <strong>{strongDim}</strong> ({strongScore}/5) démontre une véritable force, <strong>{weakDim}</strong> ({weakScore}/5) représente une contrainte critique. Cette polarisation crée un effet de plafond — les capacités les plus fortes ne peuvent pas délivrer leur pleine valeur tant que les plus faibles ne sont pas traitées.',
  uniformMid: '<strong>{company}</strong> a réalisé des progrès modérés et équilibrés dans toutes les dimensions. Si cette cohérence témoigne d\'un investissement discipliné, elle signale également un risque de stagnation. Tout se développe, mais rien ne se distingue encore comme un véritable facteur de différenciation. Franchir ce cap nécessite de sélectionner une ou deux dimensions pour un investissement accéléré.',
  oneOutlierLow: '<strong>{company}</strong> a un goulot d\'étranglement clair au niveau de <strong>{weakDim}</strong> ({weakScore}/5), qui est significativement en dessous des autres dimensions. Cette seule dimension contraint probablement la valeur des capacités plus fortes ailleurs. Un investissement ciblé ici aurait l\'impact systémique le plus élevé.',
  default: '<strong>{company}</strong> obtient un score de <strong>{overall} / 5</strong> au global, avec un profil de maturité qui présente à la fois des forces et des axes d\'amélioration. <strong>{strongDim}</strong> est en tête à {strongScore}/5, tandis que <strong>{weakDim}</strong> à {weakScore}/5 représente l\'opportunité la plus immédiate.',
  dataAiGap: 'Un écart notable existe entre l\'ambition IA et la préparation des données. Avancer en IA sans une solide fondation de données produit des résultats fragiles et peu fiables. Le renforcement de la qualité et de l\'intégration des données doit précéder tout investissement supplémentaire en IA.',
  governanceBottleneck: 'La gouvernance agit comme un goulot d\'étranglement — plus faible que les autres capacités et limitant la capacité de l\'organisation à faire évoluer ses initiatives digitales de manière sûre et cohérente. L\'établissement d\'une responsabilité claire et de processus rationalisés libérera de la valeur dans toutes les autres dimensions.',
  executionGap: 'La mesure de la performance est le maillon faible, ce qui signifie que l\'organisation ne peut pas prouver la valeur de ses autres investissements digitaux. Sans KPI robustes et discipline de test, les décisions budgétaires restent subjectives et les opportunités d\'optimisation sont manquées.'
};

// ============================================================
// Section 6: Narrative Texts – Italian (IT)
// ============================================================
const narrativeTexts_it = {
  allLow: '<strong>{company}</strong> si trova nella fase più iniziale della maturità digitale, con tutte le dimensioni valutate al di sotto di 2.0. Ciò indica un deficit sistemico nelle fondamenta digitali piuttosto che debolezze isolate. La priorità immediata è la stabilizzazione — stabilire pratiche dati di base, una titolarità chiara e KPI misurabili prima di perseguire capacità avanzate.',
  allHigh: '<strong>{company}</strong> dimostra una maturità digitale avanzata in tutte le dimensioni — un risultato raro. Con punteggi costantemente elevati, l\'organizzazione ha superato le preoccupazioni fondamentali. L\'attenzione ora è sull\'ottimizzazione continua, sulla leadership nell\'innovazione e sul mantenimento del vantaggio competitivo.',
  polarized: '<strong>{company}</strong> mostra un significativo squilibrio di maturità. Mentre <strong>{strongDim}</strong> ({strongScore}/5) dimostra una genuina forza, <strong>{weakDim}</strong> ({weakScore}/5) rappresenta un vincolo critico. Questa polarizzazione crea un effetto soffitto — le capacità più forti non possono generare pieno valore finché le più deboli non vengono affrontate.',
  uniformMid: '<strong>{company}</strong> ha raggiunto progressi moderati e bilanciati in tutte le dimensioni. Se questa coerenza testimonia un investimento disciplinato, segnala anche un rischio di stagnazione. Tutto si sta sviluppando, ma nulla si distingue ancora come un genuino fattore di differenziazione. Superare questo plateau richiede di selezionare una o due dimensioni per un investimento accelerato.',
  oneOutlierLow: '<strong>{company}</strong> ha un chiaro collo di bottiglia in <strong>{weakDim}</strong> ({weakScore}/5), che è significativamente al di sotto delle altre dimensioni. Questa singola dimensione sta probabilmente limitando il valore delle capacità più forti altrove. Un investimento mirato in quest\'area avrebbe il più alto impatto sistemico.',
  default: '<strong>{company}</strong> ottiene un punteggio di <strong>{overall} / 5</strong> complessivo, con un profilo di maturità che presenta sia punti di forza che aree di miglioramento. <strong>{strongDim}</strong> è in testa con {strongScore}/5, mentre <strong>{weakDim}</strong> a {weakScore}/5 rappresenta l\'opportunità più immediata.',
  dataAiGap: 'Esiste un divario significativo tra l\'ambizione IA e la prontezza dei dati. Avanzare nell\'IA senza una solida base di dati produce risultati fragili e inaffidabili. Il rafforzamento della qualità e dell\'integrazione dei dati deve precedere qualsiasi ulteriore investimento in IA.',
  governanceBottleneck: 'La governance agisce da collo di bottiglia — più debole rispetto alle altre capacità e limitante la capacità dell\'organizzazione di scalare le iniziative digitali in modo sicuro e coerente. Stabilire una titolarità chiara e processi snelli libererà valore in tutte le altre dimensioni.',
  executionGap: 'La misurazione delle performance è l\'anello più debole, il che significa che l\'organizzazione non può dimostrare il valore dei suoi altri investimenti digitali. Senza KPI robusti e disciplina di test, le decisioni di budget restano soggettive e le opportunità di ottimizzazione vengono perse.'
};

// ============================================================
// Section 7: ROI Impact Estimates – French (FR)
// ============================================================
const roiImpactEstimates_fr = {
  data: {
    '1→2': 'Réduit le temps de recherche de données des analystes de 20 à 30 %. Permet un reporting basique fiable.',
    '2→3': 'Améliore la précision de l\'attribution des campagnes de 25 à 40 %. Réduit les incidents de qualité des données de 50 %.',
    '3→4': 'Permet l\'analytique prédictive, réduisant la prise de décision réactive de 30 à 50 %. Déverrouille la segmentation client.',
    '4→5': 'L\'activation des données en temps réel génère une amélioration de 15 à 25 % du ROI des campagnes et de la LTV client.'
  },
  ai: {
    '1→2': 'Identifie 3 à 5 candidats à l\'automatisation économisant 10 à 20 heures/semaine de travail manuel.',
    '2→3': 'Les automatisations déployées réduisent les coûts opérationnels de 15 à 25 % dans les flux ciblés.',
    '3→4': 'Les décisions pilotées par l\'IA améliorent le time-to-market de 30 à 40 % et la précision de la personnalisation.',
    '4→5': 'L\'optimisation autonome génère une amélioration de 20 à 35 % de l\'efficacité marketing et de l\'intelligence client.'
  },
  experience: {
    '1→2': 'Identifie les principaux points de friction responsables de 20 à 40 % des abandons clients.',
    '2→3': 'La cohérence cross-canal réduit les scores d\'effort client de 25 à 35 %.',
    '3→4': 'La personnalisation comportementale augmente les taux de conversion de 15 à 30 % et la satisfaction client.',
    '4→5': 'La personnalisation prédictive génère une amélioration de 20 à 40 % de la valeur vie client.'
  },
  governance: {
    '1→2': 'Assigne une responsabilité claire réduisant les retards d\'initiatives de 30 à 50 %.',
    '2→3': 'Les approbations rationalisées réduisent le time-to-market de 25 à 40 % pour les initiatives digitales.',
    '3→4': 'Le suivi automatisé de la conformité réduit les incidents de risque de 40 à 60 %.',
    '4→5': 'La gouvernance adaptative permet une montée en puissance 2 à 3× plus rapide des capacités digitales.'
  },
  performance: {
    '1→2': 'Établit des analytics fiables éliminant les sources de données contradictoires.',
    '2→3': 'Un programme de tests structuré améliore les taux de conversion de 10 à 20 % en 6 mois.',
    '3→4': 'L\'attribution multi-touch améliore l\'efficacité de l\'allocation budgétaire de 20 à 35 %.',
    '4→5': 'Les modèles de performance prédictifs permettent une optimisation proactive, améliorant le ROI de 25 à 40 %.'
  }
};

// ============================================================
// Section 7: ROI Impact Estimates – Italian (IT)
// ============================================================
const roiImpactEstimates_it = {
  data: {
    '1→2': 'Riduce il tempo di ricerca dati degli analisti del 20-30%. Consente un reporting di base affidabile.',
    '2→3': 'Migliora l\'accuratezza dell\'attribuzione delle campagne del 25-40%. Riduce gli incidenti di qualità dei dati del 50%.',
    '3→4': 'Abilita l\'analytics predittivo, riducendo le decisioni reattive del 30-50%. Sblocca la segmentazione clienti.',
    '4→5': 'L\'attivazione dei dati in tempo reale genera un miglioramento del 15-25% nel ROI delle campagne e nel LTV dei clienti.'
  },
  ai: {
    '1→2': 'Identifica 3-5 candidati all\'automazione che fanno risparmiare 10-20 ore/settimana di lavoro manuale.',
    '2→3': 'Le automazioni implementate riducono i costi operativi del 15-25% nei flussi interessati.',
    '3→4': 'Le decisioni guidate dall\'IA migliorano il time-to-market del 30-40% e l\'accuratezza della personalizzazione.',
    '4→5': 'L\'ottimizzazione autonoma genera un miglioramento del 20-35% nell\'efficienza del marketing e nell\'intelligence sui clienti.'
  },
  experience: {
    '1→2': 'Identifica i principali punti di frizione responsabili del 20-40% degli abbandoni dei clienti.',
    '2→3': 'La coerenza cross-canale riduce i punteggi di sforzo dei clienti del 25-35%.',
    '3→4': 'La personalizzazione comportamentale aumenta i tassi di conversione del 15-30% e la soddisfazione dei clienti.',
    '4→5': 'La personalizzazione predittiva genera un miglioramento del 20-40% nel valore del ciclo di vita del cliente.'
  },
  governance: {
    '1→2': 'Assegna una titolarità chiara riducendo i ritardi delle iniziative del 30-50%.',
    '2→3': 'Le approvazioni semplificate riducono il time-to-market del 25-40% per le iniziative digitali.',
    '3→4': 'Il monitoraggio automatizzato della conformità riduce gli incidenti di rischio del 40-60%.',
    '4→5': 'La governance adattiva consente una scalabilità 2-3× più rapida delle capacità digitali.'
  },
  performance: {
    '1→2': 'Stabilisce analytics affidabili eliminando le fonti di dati contraddittorie.',
    '2→3': 'Un programma di test strutturato migliora i tassi di conversione del 10-20% entro 6 mesi.',
    '3→4': 'L\'attribuzione multi-touch migliora l\'efficienza dell\'allocazione del budget del 20-35%.',
    '4→5': 'I modelli di performance predittivi consentono un\'ottimizzazione proattiva, migliorando il ROI del 25-40%.'
  }
};

// ============================================================
// Section 8: Industry Context – French (FR)
// ============================================================
const industryContext_fr = {
  retail: { name: 'Commerce de détail et e-commerce', priority: 'experience', context: 'Dans le commerce de détail, l\'expérience client et la personnalisation pilotée par les données sont les principaux facteurs de différenciation concurrentielle. Les organisations en retard sur la CX et les capacités data perdent rapidement des parts de marché face aux concurrents nés du digital.' },
  finance: { name: 'Services financiers', priority: 'governance', context: 'Les services financiers font face à des exigences réglementaires strictes rendant la gouvernance et la maturité des données particulièrement critiques. Les lacunes de conformité créent un risque existentiel, tandis que l\'IA offre des gains d\'efficacité significatifs en souscription, détection de fraude et service client.' },
  healthcare: { name: 'Santé', priority: 'data', context: 'Les organisations de santé gèrent des données sensibles à grande échelle. La gouvernance des données et l\'interopérabilité sont fondamentales, tandis que les applications IA en diagnostic et engagement des patients deviennent rapidement un standard de soins.' },
  manufacturing: { name: 'Industrie manufacturière', priority: 'ai', context: 'L\'industrie manufacturière est transformée par la maintenance prédictive alimentée par l\'IA, l\'optimisation de la chaîne d\'approvisionnement et le contrôle qualité. Les organisations en retard sur l\'automatisation font face à des coûts opérationnels croissants et des défis de qualité.' },
  technology: { name: 'Technologie et SaaS', priority: 'performance', context: 'Les entreprises technologiques sont censées être leaders en maturité digitale. La mesure de la performance et le développement produit piloté par les données sont des prérequis, tandis que l\'intégration IA et l\'expérience client définissent les leaders du marché.' },
  professional: { name: 'Services professionnels', priority: 'ai', context: 'Les cabinets de services professionnels voient l\'IA transformer le travail de la connaissance à une vitesse sans précédent. Les cabinets qui adoptent la prestation augmentée par l\'IA, les insights pilotés par les données et les expériences clients digitales capteront une part de marché disproportionnée.' },
  media: { name: 'Médias et divertissement', priority: 'experience', context: 'Les entreprises axées sur le contenu dépendent de la compréhension du comportement de l\'audience et de la diffusion d\'expériences personnalisées. Les données et l\'IA sont essentielles pour la recommandation de contenu, la monétisation de l\'audience et l\'engagement cross-plateforme.' },
  public: { name: 'Secteur public', priority: 'governance', context: 'Les organisations du secteur public font face à des défis uniques en matière de gouvernance, de conformité et de gestion du changement. Les améliorations de la maturité digitale impactent directement la qualité du service aux citoyens et l\'efficacité opérationnelle.' },
  hospitality: { name: 'Hôtellerie et tourisme', priority: 'experience', context: 'L\'hôtellerie prospère grâce à l\'excellence de l\'expérience client. La personnalisation pilotée par les données, la tarification dynamique et les expériences de réservation omnicanales fluides deviennent des exigences concurrentielles essentielles.' },
  energy: { name: 'Énergie et services publics', priority: 'data', context: 'Les organisations du secteur de l\'énergie et des services publics gèrent des données opérationnelles complexes à grande échelle. L\'IoT, l\'analytique prédictive et la gestion de réseau pilotée par l\'IA transforment le secteur, rendant la maturité des données fondamentale.' },
  other: { name: 'Autre', priority: null, context: '' }
};

// ============================================================
// Section 8: Industry Context – Italian (IT)
// ============================================================
const industryContext_it = {
  retail: { name: 'Retail ed e-commerce', priority: 'experience', context: 'Nel retail, l\'esperienza cliente e la personalizzazione guidata dai dati sono i principali fattori di differenziazione competitiva. Le organizzazioni in ritardo su CX e capacità dati perdono rapidamente quote di mercato a favore dei concorrenti nativi digitali.' },
  finance: { name: 'Servizi finanziari', priority: 'governance', context: 'I servizi finanziari affrontano requisiti normativi stringenti che rendono la governance e la maturità dei dati particolarmente critiche. Le lacune di conformità creano rischi esistenziali, mentre l\'IA offre significativi guadagni di efficienza nella sottoscrizione, nel rilevamento delle frodi e nel servizio clienti.' },
  healthcare: { name: 'Sanità', priority: 'data', context: 'Le organizzazioni sanitarie gestiscono dati sensibili su larga scala. La governance dei dati e l\'interoperabilità sono fondamentali, mentre le applicazioni IA nella diagnostica e nel coinvolgimento dei pazienti stanno rapidamente diventando standard di cura.' },
  manufacturing: { name: 'Industria manifatturiera', priority: 'ai', context: 'L\'industria manifatturiera viene trasformata dalla manutenzione predittiva alimentata dall\'IA, dall\'ottimizzazione della supply chain e dal controllo qualità. Le organizzazioni in ritardo sull\'automazione affrontano costi operativi crescenti e sfide di qualità.' },
  technology: { name: 'Tecnologia e SaaS', priority: 'performance', context: 'Le aziende tecnologiche devono essere leader nella maturità digitale. La misurazione delle performance e lo sviluppo prodotto guidato dai dati sono prerequisiti, mentre l\'integrazione dell\'IA e l\'esperienza cliente definiscono i leader di mercato.' },
  professional: { name: 'Servizi professionali', priority: 'ai', context: 'Le società di servizi professionali vedono l\'IA trasformare il lavoro intellettuale a una velocità senza precedenti. Le società che adottano l\'erogazione potenziata dall\'IA, gli insight basati sui dati e le esperienze digitali per i clienti conquisteranno una quota di mercato sproporzionata.' },
  media: { name: 'Media e intrattenimento', priority: 'experience', context: 'Le aziende orientate ai contenuti dipendono dalla comprensione del comportamento del pubblico e dalla fornitura di esperienze personalizzate. Dati e IA sono essenziali per la raccomandazione di contenuti, la monetizzazione del pubblico e il coinvolgimento cross-piattaforma.' },
  public: { name: 'Settore pubblico', priority: 'governance', context: 'Le organizzazioni del settore pubblico affrontano sfide uniche in materia di governance, conformità e gestione del cambiamento. I miglioramenti della maturità digitale impattano direttamente la qualità del servizio ai cittadini e l\'efficienza operativa.' },
  hospitality: { name: 'Ospitalità e turismo', priority: 'experience', context: 'L\'ospitalità prospera sull\'eccellenza dell\'esperienza cliente. La personalizzazione guidata dai dati, il pricing dinamico e le esperienze di prenotazione omnicanale fluide stanno diventando requisiti competitivi essenziali.' },
  energy: { name: 'Energia e utilities', priority: 'data', context: 'Le organizzazioni del settore energia e utilities gestiscono dati operativi complessi su larga scala. IoT, analytics predittivi e gestione della rete guidata dall\'IA stanno trasformando il settore, rendendo la maturità dei dati fondamentale.' },
  other: { name: 'Altro', priority: null, context: '' }
};

// ============================================================
// Section 9: Company Size Context – French (FR)
// ============================================================
const companySizeContext_fr = {
  micro: { name: '1–10', context: 'À cette taille, concentrez-vous sur les capacités fondamentales et les gains rapides. Les cadres de gouvernance complexes sont moins pertinents. Priorisez les bases des données et l\'automatisation simple.' },
  small: { name: '11–50', context: 'Les petites équipes bénéficient le plus de la standardisation des processus clés et de l\'adoption d\'outils IA pratiques. La gouvernance doit être légère mais claire.' },
  medium: { name: '51–200', context: 'À cette échelle, la coordination inter-équipes devient critique. Les structures de gouvernance, les standards de données et la discipline de mesure sont essentiels pour éviter les difficultés de croissance.' },
  large: { name: '201–1 000', context: 'Les grandes organisations ont besoin d\'une gouvernance robuste, d\'une infrastructure de données unifiée et d\'une adoption systématique de l\'IA pour éviter les silos et la duplication des efforts entre les équipes.' },
  enterprise: { name: '1 001–5 000', context: 'Les organisations de taille entreprise font face à la complexité de la gestion du changement et de l\'unification des données. La maturité de la gouvernance et l\'intégration transversale sont généralement les principaux goulots d\'étranglement.' },
  corporate: { name: '5 000+', context: 'Les organisations de grande envergure nécessitent une gouvernance de niveau entreprise, une architecture de données avancée et une gestion du changement sophistiquée. L\'IA et l\'automatisation à grande échelle sont des nécessités concurrentielles.' }
};

// ============================================================
// Section 9: Company Size Context – Italian (IT)
// ============================================================
const companySizeContext_it = {
  micro: { name: '1–10', context: 'A questa dimensione, concentratevi sulle capacità fondamentali e sulle vittorie rapide. I framework di governance complessi sono meno rilevanti. Prioritizzate le basi dei dati e l\'automazione semplice.' },
  small: { name: '11–50', context: 'I piccoli team traggono il massimo beneficio dalla standardizzazione dei processi chiave e dall\'adozione di strumenti IA pratici. La governance deve essere leggera ma chiara.' },
  medium: { name: '51–200', context: 'A questa scala, il coordinamento tra team diventa critico. Le strutture di governance, gli standard dei dati e la disciplina di misurazione sono essenziali per evitare i problemi di crescita.' },
  large: { name: '201–1.000', context: 'Le grandi organizzazioni necessitano di una governance robusta, un\'infrastruttura dati unificata e un\'adozione sistematica dell\'IA per evitare silos e duplicazione degli sforzi tra i team.' },
  enterprise: { name: '1.001–5.000', context: 'Le organizzazioni enterprise affrontano la complessità della gestione del cambiamento e dell\'unificazione dei dati. La maturità della governance e l\'integrazione interfunzionale sono tipicamente i principali colli di bottiglia.' },
  corporate: { name: '5.000+', context: 'Le organizzazioni di scala corporate richiedono una governance enterprise-grade, un\'architettura dati avanzata e una gestione del cambiamento sofisticata. IA e automazione su larga scala sono necessità competitive.' }
};

// ============================================================
// Section 10: Composite Indices – French (FR)
// ============================================================
const compositeIndices_fr = {
  digitalFoundation: { label: 'Indice de Fondation Digitale', desc: 'Solidité de l\'infrastructure de données et des cadres de gouvernance' },
  innovationReadiness: { label: 'Indice de Préparation à l\'Innovation', desc: 'Capacité à déployer l\'IA et à offrir des expériences différenciées' },
  operationalExcellence: { label: 'Indice d\'Excellence Opérationnelle', desc: 'Maturité des processus, discipline de mesure et rigueur opérationnelle' },
  customerValue: { label: 'Indice de Valeur Client', desc: 'Capacité à comprendre, servir et fidéliser les clients efficacement' }
};

// ============================================================
// Section 10: Composite Indices – Italian (IT)
// ============================================================
const compositeIndices_it = {
  digitalFoundation: { label: 'Indice di Fondazione Digitale', desc: 'Solidità dell\'infrastruttura dati e dei framework di governance' },
  innovationReadiness: { label: 'Indice di Prontezza all\'Innovazione', desc: 'Capacità di implementare l\'IA e offrire esperienze differenziate' },
  operationalExcellence: { label: 'Indice di Eccellenza Operativa', desc: 'Maturità dei processi, disciplina di misurazione e rigore operativo' },
  customerValue: { label: 'Indice di Valore per il Cliente', desc: 'Capacità di comprendere, servire e fidelizzare i clienti in modo efficace' }
};

// ============================================================
// Section 11: Adjacent Gap Texts – French (FR) and Italian (IT)
// ============================================================
const adjacentGapText_fr = '{downstream} ({downScore}) dépasse sa fondation {upstream} ({upScore}) de {gap} points. Cela crée de la fragilité. Les capacités de {downstreamLower} sont construites sur une base {upstreamLower} insuffisante.';

const adjacentGapText_it = '{downstream} ({downScore}) supera la sua fondazione {upstream} ({upScore}) di {gap} punti. Ciò crea fragilità. Le capacità di {downstreamLower} sono costruite su una base {upstreamLower} insufficiente.';

// ============================================================
// Section 12: Heatmap Hint
// ============================================================
const heatmapHint_en = 'Click any scored cell to jump directly to that question in the assessment above.';
const heatmapHint_fr = 'Cliquez sur n\'importe quelle cellule notée pour accéder directement à cette question dans l\'évaluation ci-dessus.';
const heatmapHint_it = 'Fate clic su qualsiasi cella con punteggio per passare direttamente a quella domanda nella valutazione sopra.';
