import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare
} from "react-icons/fa"
import { nanoid } from "nanoid"

const sublinks = [
  {
    pageId: nanoid(),
    page: "product",
    links: [
      {
        id: nanoid(),
        label: "Community",
        icon: <Fa500Px />,
        url: "/product/community"
      },
      {
        id: nanoid(),
        label: "Content",
        icon: <FaAccusoft />,
        url: "/product/content"
      },
      {
        id: nanoid(),
        label: "Roles",
        icon: <FaAdversal />,
        url: "/product/roles"
      }
    ]
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "Developers",
        icon: <FaAvianex />,
        url: "/solutions/developers"
      },
      {
        id: nanoid(),
        label: "Content Managers",
        icon: <FaBitcoin />,
        url: "/solutions/content-managers"
      },
      {
        id: nanoid(),
        label: "Business Teams",
        icon: <FaBtc />,
        url: "/solutions/business teams"
      },
      {
        id: nanoid(),
        label: "eCommerce",
        icon: <FaCodiepie />,
        url: "/solutions/eCommerce"
      }
    ]
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "Starters",
        icon: <FaDocker />,
        url: "/resources/starters"
      },
      {
        id: nanoid(),
        label: "Showcase",
        icon: <FaGithubSquare />,
        url: "/resources/showcase"
      }
    ]
  }
]

export default sublinks
