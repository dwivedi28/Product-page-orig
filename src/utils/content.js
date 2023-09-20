// Section1
import ShootingStarImage from "../assets/images/section1/main-bg-0-0.png";
import MainBG from "../assets/images/section1/main-bg-0_1.webp";
import TreesImage from "../assets/images/section1/main-bg-1_1.webp";
import CliffImage from "../assets/images/section1/main-bg-2_1.webp";
import HorseImage from "../assets/images/section1/main-bg-3.png";

// Section3
import EthImg from "../assets/images/section3/eth.webp";
import BscImg from "../assets/images/section3/bsc.webp";
import PolygonImg from "../assets/images/section3/polygon.webp";
import OptimismImg from "../assets/images/section3/optimism.webp";
import GnosisImg from "../assets/images/section3/gnosis.webp";
import AvalancheImg from "../assets/images/section3/avalanche.webp";
import ArbitrumImg from "../assets/images/section3/arbitrum.webp";
import FantomImg from "../assets/images/section3/fantom.webp";
import KlaytnImg from "../assets/images/section3/klaytn.webp";
import AuroraImg from "../assets/images/section3/aurora.webp";

// Section4
import NewsImg from "../assets/images/section4/news-image.webp";
import Phone1Img from "../assets/images/section4/wallet-buy.webp";
import Phone2Img from "../assets/images/section4/wallet-stake.webp";
import Phone3Img from "../assets/images/section4/wallet-store.webp";
import Phone4Img from "../assets/images/section4/wallet-swap.webp";
import Phone5Img from "../assets/images/section4/wallet-transfer.webp";

// Section5
import BannerBgImage from "../assets/images/section5/news-block-background.webp";
import BannerBgImageMobile from "../assets/images/section5/news-block-background-mobile.webp";

// Section6
import Sec6Image1 from "../assets/images/section6/aggregation-protocol.webp";
import Sec6Image2 from "../assets/images/section6/limit-order-protocol.webp";
import Sec6Image3 from "../assets/images/section6/liquidity-protocol.webp";
import Sec6Image4 from "../assets/images/section6/earn_1.webp";
import Sec6Image5 from "../assets/images/section6/rabbithole.webp";

// Section7
import Sec7Image1 from "../assets/images/section7/ai.png";
import Sec7Image2 from "../assets/images/section7/grant-program.webp";

// Section8
import ShieldImage from "../assets/images/section8/shield.webp";

// Section9
import Sec9Image1 from "../assets/images/section9/dao.webp";
import Sec9Image2 from "../assets/images/section9/token.webp";

// Section10
import DiscordImage from "../assets/images/section10/discord.webp";
import RedditImage from "../assets/images/section10/reddit.webp";
import TelegramImage from "../assets/images/section10/telegram.webp";
import TwitterImage from "../assets/images/section10/twitter.webp";

// Section11
import Near from "../assets/images/section11/near.svg";
import Metamask from "../assets/images/section11/metamask.svg";
import Trustwallet from "../assets/images/section11/trustwallet.svg";
import Opium from "../assets/images/section11/opium.svg";
import Zerion from "../assets/images/section11/zerion.svg";
import Revolut from "../assets/images/section11/revolut.svg";
import Pantera from "../assets/images/section11/pantera.svg";
import Binancelab from "../assets/images/section11/binance-lab.svg";
import Dragonflycapital from "../assets/images/section11/dragonfly-capital.svg";
import Galaxydigital from "../assets/images/section11/galaxy-digital.svg";
import Paraficapital from "../assets/images/section11/parafi-capital.svg";
import Gemini from "../assets/images/section11/gemini.svg";
import Mew from "../assets/images/section11/mew.svg";
import Atoken from "../assets/images/section11/atoken.svg";
import Dappradar from "../assets/images/section11/dappradar.svg";
import Graph from "../assets/images/section11/graph.svg";
import Staker from "../assets/images/section11/staker.svg";
import Bitpay from "../assets/images/section11/bitPay.svg";

// Footer
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

// Navbar
import Logo from "../assets/images/sarthi-logo.png";


export const section1Content = {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title: "Unlock the Success",
  subtitle: "With Our SARTHI",
};

export const section2Content = {
  items: [
    { counter: 345, after: "+" ,subtitle: "Total Projects" },
    { counter: 50, before: "", after: "+", subtitle: "Companies" },
    { counter: 15.2, after: "k+", subtitle: "Users", decimals: true },
    { counter: 28.7, after: "M+", subtitle: "Total Credits", decimals: true },
  ],
};

export const section3Content = {
  title: "Optimize your trades across hundreds of DEXes on multiple networks",
  ITEMS: [
    { logo: EthImg, name: "Ethereum" },
    { logo: BscImg, name: "BNB Chain" },
    { logo: PolygonImg, name: "Polygon" },
    { logo: OptimismImg, name: "Optimism" },
    { logo: GnosisImg, name: "Gnosis" },
    { logo: AvalancheImg, name: "Avalanche" },
    { logo: ArbitrumImg, name: "Arbitrum" },
    { logo: FantomImg, name: "Fantom" },
    { logo: KlaytnImg, name: "Klaytn" },
    { logo: AuroraImg, name: "Aurora" },
  ],
};

export const section4Content = {
  top: {
    title: "AI Powered FeedBack",
    subtitle:
      "AI offers insights into how projects  are perceived and provides constructive feedback",
    image: NewsImg,
  },
  bottom: {
    title: "Sarthi's Coins and Badges",
    TABS: [
      {
        name: "Coins",
        image: Phone1Img,
        subtitle:
          "Users can earn coins and badges based on their  performance and activity within the platform",
      },
      {
        name: "Privacy",
        image: Phone3Img,
        subtitle:
          "Your credits is protected with the most sophisticated security measures.",
      },
      {
        name: "Transfer",
        image: Phone5Img,
        subtitle: "You can transfer coins in multiple blockchain networks.",
      },
      
    ],
  },
};

export const section5Content = {
  BannerBgImage,
  BannerBgImageMobile,
  title: "Sarthi's Goal",
  subtitle:
    "Sarthi serves as a platform for individuals to share their  projects, showcase their skills directly to startups and  multinational corporations (MNCs), and potentially get  hired by them",
};

export const section6Content = {
  title: "Sarthi Key Traits",
  ITEMS: [
    {
      title: "Sarthi Explore",
      subtitle:
        "Users can explore and deep-dive to the latest technologies by reviewing others projects.",
      image: Sec6Image1,
    },
    {
      title: "Sarthi Trending",
      subtitle:
        "The most innovative and flexible way of learning is the greed to be on top.",
      image: Sec6Image2,
    },
    {
      title: "Sarthi Connectivity",
      subtitle:
        "Sarthi connects Skilled User to the Top MNC's and their experienced Employee's.",
      image: Sec6Image3,
    },
    {
      title: "Sarthi Earn",
      subtitle:
        "You can earn Coins and Batches through Sarthi by posting your Projects.",
      image: Sec6Image4,
    },
    {
      title: "Sarthi RabbitHole",
      subtitle: "A feature that prevents users to clone their account and grasp other's seat.",
      image: Sec6Image5,
    },
  ],
};

export const section7Content = {
  title: "Grow with our Ecosystem",
  subtitle: "Upload Projects and Grow with us",
  ITEMS: [
    {
      title: "Sarthi AI powered ChatBot and Feedback system",
      subtitle:
        "A cutting-edge feature which enhances users project and gives live feedback through which user uplifts it again.",
      image: Sec7Image1,
    },
    {
      title: "Sarthi Leader Contest",
      subtitle:
        "This annual contest improves user skills and awards prizes to the winners on the scoreboard. Old winners will be added to the champions group, and new winners will be chosen the following time.",
      image: Sec7Image2,
    },
  ],
};

export const section8Content = {
  title: "Your Data Protection Shield",
  subtitle:
    "Sarthi uses sophisticated security measures to protect users' data through advanced technologies",
  caption:
    "Food & Shelter is the most viewed project in Sarthi. See a list of the most smart projects submissions here.",
  ShieldImage,
};

export const section9Content = {
  title: "Sarthi Special's",
  ITEMS: [
    {
      title: "Sarthi AI Feedback Mechanism",
      subtitle:
        "A quick feedback mechanism which helps developer to enhance their project.",
      image: Sec9Image1,
    },
    {
      title: "Sarthi Badge",
      subtitle:
        "A badge that facilitates developers to attract and get a good exposure top MNC's.",
      image: Sec9Image2,
    },
  ],
};

export const section10Content = {
  SOCIALS: [
    { name: "Telegram", image: TelegramImage },
    { name: "Discord", image: DiscordImage },
    { name: "Reddit", image: RedditImage },
    { name: "Twitter", image: TwitterImage },
  ],
};

export const Section11Content = {
  title: "Top MNC's",
  ITEMS: [
    {
      link: "https://near.org/",
      image: Near,
    },
    {
      link: "https://metamask.io/",
      image: Metamask,
    },
    {
      link: "https://trustwallet.com/",
      image: Trustwallet,
    },
    {
      link: "https://opium.network/",
      image: Opium,
    },
    {
      link: "https://zerion.io/",
      image: Zerion,
    },
    {
      link: "https://www.revolut.com/",
      image: Revolut,
    },
    {
      link: "https://panteracapital.com/",
      image: Pantera,
    },
    {
      link: "https://labs.binance.com/",
      image: Binancelab,
    },
    {
      link: "https://www.dcp.capital/",
      image: Dragonflycapital,
    },
    {
      link: "https://www.galaxydigital.io/",
      image: Galaxydigital,
    },
    {
      link: "https://www.parafi.capital/",
      image: Paraficapital,
    },
    {
      link: "https://www.gemini.com/frontier-fund",
      image: Gemini,
    },
    {
      link: "https://www.myetherwallet.com/",
      image: Mew,
    },
    {
      link: "https://www.atoken.com/",
      image: Atoken,
    },
    {
      link: "https://dappradar.com/",
      image: Dappradar,
    },
    {
      link: "https://thegraph.com/",
      image: Graph,
    },
    {
      link: "https://staker.app/",
      image: Staker,
    },
    {
      link: "https://bitpay.com/",
      image: Bitpay,
    },
  ],
};

export const footerContent = {
  protocols: {
    title: "Projects",
    links: [
      { title: "Documentation" },
      { title: "GitHub" },
      { title: "Audit" },
      { title: "Download" },
    ],
  },
  governance: {
    title: "Facilities",
    links: [
      { title: "ChatBot" },
      { title: "AI Feedback" },
      { title: "Coins and Badges" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Help center" },
      { title: "Press room" },
      { title: "Bug report", subtitle: "by Hacker one" },
      { title: "Contacts" },
    ],
  },
  // developers: {
    // title: "Projects",
    // links: [
    //   { title: "Documentation" },
    //   { title: "GitHub" },
    //   { title: "Audit" },
    //   { title: "Download" },
    // ],
  // },
  subscribe: {
    title: "Explore your Sarthi now",
    subtitle: "Get Enchancement of your skills too.",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: TwitterIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ],
  copyright: {
    left: "© 2023 1inch, All Rights Reserved.",
    center: "ENS: 1inch.eth",
    right: "BUIDL @ETHNewYork 2019",
  },
};

export const navbarContent = {
  Logo,
};
