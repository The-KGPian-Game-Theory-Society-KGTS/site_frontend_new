export interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  externalLink: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Game Theory in Traffic Network",
    excerpt: "Game theory in traffic networks highlights a delicate balance: when individual drivers optimize their routes, the system may suffer, but coordinated strategies can improve overall efficiency.",
    author: "The KGPian Game Theory Society",
    date: "Dec 20, 2024",
    image: "/blogs/GameTheoryInTrafficNetwork.webp",
    externalLink: "https://medium.com/@kgtsiitkgp/game-theory-in-traffic-network-73faa1703fe2"
    },
    {
      id: 2,
      title: "Game Theory in Taxation",
      excerpt: "Examining how game theory models the strategic interaction between taxpayers and tax authorities, revealing how factors like inspection costs and penalties shape tax compliance and evasion.",
      author: "KGPian Game Theory Society",
      date: "Dec 12, 2024",
      image: "/blogs/GameTheoryInTaxation.webp",
      externalLink: "https://medium.com/@kgtsiitkgp/game-theory-in-taxation-eab50bc3fae7"
    },
    {
      id: 3,
      title: "Behavioral Game Theory: When Humans Don't Play Rationally",
      excerpt: "Explores how real-world strategic decisions often diverge from traditional game theory predictions, highlighting the roles of emotions, fairness, social norms, and bounded rationality in shaping outcomes-from the Prisoner's Dilemma and the Ultimatum Game to historic events like the Cuban Missile Crisis and political coups.",
      author: "KGPian Game Theory Society",
      date: "Oct 11, 2024",
      image: "/blogs/BehavioralGameTheory.webp",
      externalLink: "https://medium.com/@kgtsiitkgp/behavioral-game-theory-071b3a78b67e"
    },
    {
      id: 4,
      title: "Expanding Beyond Nash Equilibrium",
      excerpt: "Exploring extensions like Correlated Equilibrium through traffic coordination examples and multiplayer scenarios, demonstrating how external signals enable better strategic outcomes.",
      author: "KGPian Game Theory Society",
      date: "Sep 8, 2024",
      image: "/blogs/ExpandingBeyondNashEquilibrium.webp",
      externalLink: "https://medium.com/@kgtsiitkgp/expanding-beyond-nash-equilibrium-fc1f2c08a695"
    },
    {
      id: 5,
      title: "Ethical Considerations in Game Theory and Strategic Decision-Making",
      excerpt: "Analyzing moral obligations through wallet experiments and environmental case studies, while examining business ethics in corporate governance and nuclear conflict scenarios.",
      author: "KGPian Game Theory Society",
      date: "Aug 23, 2024", 
      image: "/blogs/EthicalConsiderations.webp",
      externalLink: "https://medium.com/@kgtsiitkgp/ethical-considerations-in-game-theory-and-strategic-decision-making-0d434a76a66e"
    },
    {
      id: 6,
      title: "Game Theory in Sports: Analyzing Competitive Strategies",
      excerpt: "Examining mixed-strategy equilibria in penalty kicks, tactical coordination in team sports, and business applications through historic sponsorship rivalries like the Pelé Pact.",
      author: "KGPian Game Theory Society",
      date: "Jul 13, 2024",
      image: "/blogs/GameTheoryInSports.webp",
      externalLink: "https://medium.com/@kgtsiitkgp/game-theory-in-sports-analyzing-competitive-strategies-and-player-interactions-a2966d50acc3"
    },
    {
      id: 7,
      title: "The Delusional Fairness of Voting Systems",
      excerpt: "Analyzing how different electoral methods produce divergent outcomes despite identical voter preferences, revealing inherent flaws in democratic decision-making through examples like plurality, Borda count, and strategic elimination systems.",
      author: "KGPian Game Theory Society",
      date: "Jun 3, 2024",
      image: "/blogs/DelusionalFairnessInVotingSystems.webp",
      externalLink: "https://medium.com/@kgtsiitkgp/the-delusional-fairness-of-voting-system-a8abead16cb1"
    } 
]
 